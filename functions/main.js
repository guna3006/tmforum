module.exports.main = (app, db) => {
  const setHeader = require("./common/setHeader.js");
  const setSuspiciousHeader = require("./common/suspiciousHeader.js");
  const postHandlerCommon = require("./handler/post/common.js");
  const getHandlerCommon = require("./handler/get/common.js");
  const patchHandlerCommon = require("./handler/patch/common.js");
  const deleteHandlerCommon = require("./handler/delete/common.js");
  const putHandlerCommon = require("./handler/put/common.js");
  const optionsHandlerCommon = require("./handler/options/common.js");

  app.use((req, res) => {
    const tmfApi = req.originalUrl.split("?")[0].split("/")[1];
    const version = req.originalUrl.split("?")[0].split("/")[2];
    const apiName = req.originalUrl.split("?")[0].split("/")[3];

    const checkIndex = tmfApi === "index.html";


    if (!tmfApi || !apiName || !version) {
      setHeader.header(req, res);
      res.status(403).json({
        error: "Forbidden",
        message: "Kindly follow the tmf-api testing request format!",
        example: [
          "https://localhost:8000/tmf-api/v4/apiName",
          "http://localhost:9000/tmf-api/v4/apiName",
        ],
      });
    } else {
      setHeader.header(req, res);

      switch (req.method) {
        case "HEAD":
          const expectedHeaders = ['Accept', 'Content-Type', 'Authorization'];
          const headers = req.rawHeaders;
          const unknownHeaders = headers.filter(
            (header, index) =>
              index % 2 === 0 && !expectedHeaders.includes(header)
          );
          if (unknownHeaders.length > 0) {
            setSuspiciousHeader.suspiciousHeader(req, res);
            res.status(206).end();
          } else {
            res.status(204).end();
          }
          break;

        case "POST":
          postHandlerCommon.writing(req, res);
          break;

        case "GET":
          getHandlerCommon.common(req, res, db);
          break;

        case "DELETE":
          deleteHandlerCommon.common(req, res, db);
          break;

        case "PATCH":
          patchHandlerCommon.common(req, res, db);
          break;

        case "PUT":
          putHandlerCommon.common(req, res, db);
          break;

        case "OPTIONS":
          optionsHandlerCommon.common(req, res);
          break;
      }
    }
  });
}
