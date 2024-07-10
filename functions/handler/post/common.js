const fs = require("fs");
const path = require("path");
module.exports.writing = (req, res) => {
  const { faker } = require("@faker-js/faker");
  const protocol = req.protocol;
  const hostname = req.hostname;
  const port = req.get("host").split(":")[1];
  const tmfApi = req.originalUrl.split("?")[0].split("/")[1];
  const version = req.originalUrl.split("?")[0].split("/")[2];
  const apiName = req.originalUrl.split("?")[0].split("/")[3];
  const outputFilePath = path.join(
    __dirname,
    `../../../data/custom/db/${apiName}.json`
  );

  const reqBody = req.body;
  
  const apiType = apiName.charAt(0).toUpperCase() + apiName.slice(1);
  if (version === "v4") {
    reqBody.id = faker.string.uuid();
    reqBody.type = apiType;
  } else if (version === "v5") {
    reqBody.id = `gunasegarran-id-12345`;
//    if (reqBody.state) {
//      return res.status(400).json({
//        error: `"State":${reqBody.state} object must not be provided in the POST request`,
//      });
//    }
    reqBody["@type"] = apiType;
  }
  reqBody.href = `${protocol}://gunasegarran.me:${port}/${tmfApi}/${version}/${apiName}/${reqBody.id}`;

  const newData = { [apiName]: [reqBody] };

  try {
    if (fs.existsSync(outputFilePath)) {
      const existingData = JSON.parse(fs.readFileSync(outputFilePath));
      existingData[apiName].push(reqBody);
      fs.writeFileSync(outputFilePath, JSON.stringify(existingData));
      console.log('Data has been successfully updated in:', outputFilePath);
    } else {
      fs.writeFileSync(outputFilePath, JSON.stringify(newData));
      console.log('Data has been successfully written to:', outputFilePath);
    }
    return res.status(201).json(reqBody);
  } catch (error) {
    console.error('Error writing/updating data to file:', error.message);
    return res.status(404).json({ "error": error });
  }
};
