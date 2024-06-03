module.exports.common = (req, res, db) => {
  const apiName = req.originalUrl.split("/")[3];
  const getID = req.originalUrl.split("/")[4];

  if (!getID || getID === undefined) {
    return res.status(400).json({ error: "ID parameter is required for deletion" });
  }

  const entryIndex = db[apiName].findIndex((entry) => entry.id === getID);

  if (entryIndex !== -1) {
    db[apiName].splice(entryIndex, 1);
    return res.status(204).json({ message: "Entry deleted successfully" });
  } else {
    return res.status(404).json({ error: "Entry not found for the given ID" });
  }
};
