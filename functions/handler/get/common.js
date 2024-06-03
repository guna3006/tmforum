module.exports.common = (req, res, db) => {
  const filterByFields = require("./filterByFields.js");
  const filterByQueryParam = require("./filterByQueryParam.js");
  const version = req.originalUrl.split("?")[0].split("/")[2];
  const apiName = req.originalUrl.split("?")[0].split("/")[3];
  const getID = req.originalUrl.split("?")[0].split("/")[4];
  const checkParam = req.originalUrl.split("?")[1];

  const findApiName = getID
    ? db[apiName] && Array.isArray(db[apiName])
      ? db[apiName].find((entry) => entry.id === getID)
      : null
    : db[apiName];

  if (checkParam?.includes("fields")) {
    filterByFields(req, res, findApiName, version);
  } else if (checkParam?.includes("limit")) {
    return res.json(findApiName);
  } else if (
    checkParam &&
    !checkParam.includes("fields") &&
    !checkParam.includes("limit")
  ) {
    filterByQueryParam(req, res, findApiName, version, findApiName);
  } else if ((getID && findApiName) || (!getID && findApiName)) {
    return res.json(findApiName);
  } else if (getID && findApiName === "null") {
    return res.status(404).json({ error: `${getID} cant be found in ${apiName}` });
  } else if (apiName === "api" && getID === "list") {
    const apiNames = Object.keys(db);
    return res.json(apiNames);
  } else {
    return res.status(404).json({ error: `${getID} cant be found in ${apiName}` });
  }
};
