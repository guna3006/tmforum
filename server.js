const jsonServer = require("json-server");
const { createServer } = require('http');
const { createServer: createHttpsServer } = require('https');
const path = require("path");
const fs = require("fs");
const _ = require("lodash");
const tmf = require("./functions/main.js");


console.log("Author: Gunsegarran");
console.log("Application: TMForum Encyclopedia");

const routesFilePath = path.join(__dirname, './data/custom/routes/routes.json');
let rewriter;
if (fs.existsSync(routesFilePath)) {
  const routes = fs.readFileSync(routesFilePath);
  rewriter = jsonServer.rewriter(JSON.parse(routes));
}



let db = JSON.parse(fs.readFileSync(path.join(__dirname, './data/custom/db/db.json')));

const customDbDirectory = path.join(__dirname, './data/custom/db');
function mergeCustomDbFiles() {
  const customDbFiles = fs.readdirSync(customDbDirectory);

  customDbFiles.forEach(customDbFileName => {
    const customDbPath = path.join(customDbDirectory, customDbFileName);

    if (fs.existsSync(customDbPath)) {
      const customDb = JSON.parse(fs.readFileSync(customDbPath));
      _.mergeWith(db, customDb, (obj, src) => {
        if (_.isArray(obj)) {
          return obj.concat(src);
        } else if (_.isObject(obj) && _.isObject(src)) {
          return _.mergeWith({}, obj, src, (a, b) => (_.isArray(a) ? a.concat(b) : undefined));
        }
      });
    }
  });
}

mergeCustomDbFiles();

function checkFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch (error) {
    console.error(`Error getting file size for ${filePath}: ${error.message}`);
    return null;
  }
}

fs.watch(customDbDirectory, (eventType, filename) => {
  if (filename) {
    const filePath = `${customDbDirectory}/${filename}`;
    
    const currentSize = checkFileSize(filePath);

    if (currentSize !== null) {
      console.log(`File ${filename} changed. Updating the db.`);
      mergeCustomDbFiles();
    }
  }
});


const router = jsonServer.router(db);

const app = jsonServer.create();
let middlewaresOptions = {};
if (fs.existsSync()) {
  middlewaresOptions.static = path.join(__dirname, './node_modules/json-server/public')
}
const middlewares = jsonServer.defaults(middlewaresOptions);

app.use(jsonServer.bodyParser);

const tempDB = db;
tmf.main(app,tempDB);


app.use(rewriter);
app.use(middlewares);
app.use(router);

const sslConfig = {
  key: fs.readFileSync(path.join(__dirname, './data/custom/certs/server-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, './data/custom/certs/server-cert.pem'))
};


const startServer = (server, port, protocol) => {
  server.listen(port, () => {
    console.log(`Listening on port ${port} as ${protocol.toUpperCase()}`);
    console.log(`@visit: ${protocol.toLowerCase()}://localhost:${port}/*`);
  });
};

const httpsPort = 8000;
const httpPort = 9000;


const httpServer = createServer(app);
startServer(httpServer, httpPort, 'http');

const httpsServer = createHttpsServer(sslConfig, app);
startServer(httpsServer, httpsPort, 'https');