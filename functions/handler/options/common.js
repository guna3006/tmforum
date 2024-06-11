const Ajv = require("ajv");
const fs = require("fs");
const path = require("path");

module.exports.common = (req, res) => {
  const optionsType = req.originalUrl.split("?")[0].split("/")[3];
  const variableCheck = (req.originalUrl.split("?")[0].split("/")[4] || "").replace(
    /^\w/,
    (c) => c.toUpperCase()
  );


  const OptionsTypeEnum = {
    API_OPTION: "api",
    SCHEMA_OPTION: "schema",
    SWAGGER_OPTION: "swagger",
    VALIDATION_OPTION: "validate",
  };

  const getFileData = (filePath) => {
    return JSON.parse(fs.readFileSync(path.join(__dirname, filePath)));
  };

  let db;
  if (optionsType === OptionsTypeEnum.API_OPTION) {
    db = getFileData("../../../data/custom/apis/tmforumAPI.json");
  } else if (optionsType === OptionsTypeEnum.SCHEMA_OPTION) {
    db = getFileData("../../../data/custom/schema/tmforumSchema.json");
  } else if (optionsType === OptionsTypeEnum.SWAGGER_OPTION) {
    db = getFileData("../../../data/custom/swagger/tmforumSwagger.json");
  } else if (optionsType === OptionsTypeEnum.VALIDATION_OPTION) {
    db = getFileData("../../../data/custom/schema/tmforumSchema.json");
  }

  if (optionsType !== "validate" && variableCheck.toLowerCase() === "all") {
    const allAPIs = Object.keys(db);
    return res.json(allAPIs);
  } else if (optionsType !== "validate" && variableCheck) {
    const foundItem = db[variableCheck];
    return res.json(...foundItem);
  } else if (optionsType === "validate" && variableCheck) {
    const ajv = new Ajv({ allErrors: true });
    const reqBody = req.body;
    const schema = db[variableCheck];
  


    if (schema) {
      const validate = ajv.compile(...schema);
      const isValid = validate(reqBody);

      if (!isValid) {
        return res.status(404).json({ error: `${validate.errors}` });
      } else {
        return res.status(202).json({ message: `Validation successful` });
      }
    } else {
      return res.status(404).json({ error: `Invalid ${variableCheck}` });
    }
  } else {
    return res.status(404).json({ error: `Invalid ${variableCheck}` });
  }
};
