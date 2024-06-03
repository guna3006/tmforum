module.exports.common = (req, res, db) => {
  const apiName = req.originalUrl.split("?")[0].split("/")[3];
  const getID = req.originalUrl.split("?")[0].split("/")[4];
  const findApiName = getID
    ? db[apiName] && Array.isArray(db[apiName])
      ? db[apiName].find((entry) => entry.id === getID)
      : null
    : db[apiName];

  if (!findApiName) {
    return res.status(404).json({ error: `${getID} can't be found in ${apiName}` });
  }

  const updatedData = req.body;

  const isContentSame = Object.keys(updatedData).every(
    (key) => findApiName[key] === updatedData[key]
  );

  if (isContentSame) {
    return res.status(204).send();
  }

  const updatedEntry = { ...findApiName, ...updatedData };
  const index = db[apiName].indexOf(findApiName);

  if (index !== -1) {
    db[apiName][index] = updatedEntry;
    return res.status(200).json(updatedEntry);
  } else {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
