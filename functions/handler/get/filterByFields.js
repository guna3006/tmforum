function filterByFields(req, res, apiName, version) {
  const getID = req.originalUrl.split("?")[0].split("/")[2];
  const requestedFields = req.query.fields;

  let defaultFields;
  if (version === "v5") {
    defaultFields = ["id", "href", "@type"];
  } else if (version === "v4") {
    defaultFields = ["id", "href"];
  }

  apiName = Array.isArray(apiName) ? apiName : [apiName];

  if (!requestedFields && !req.url.includes("?fields=")) {
    return res.status(400).json({ error: "Both parameter object and value are required in the query" });
  }

  if (!apiName || apiName.length === 0) {
    return res.status(404).json({ error: `${getID} cannot be found in ${apiName}` });
  }

  const fieldsMap = requestedFields ? { [requestedFields]: [...defaultFields, requestedFields] } : { all: defaultFields };

  const filter = apiName.map((item) => {
    const filteredItem = {};
    const fields = fieldsMap[requestedFields] || fieldsMap.all;

    fields.forEach((field) => {
      if (item.hasOwnProperty(field)) {
        filteredItem[field] = item[field];
      }
    });

    return filteredItem;
  });

  if (filter.length > 0) {
    const result = getID ? filter[0] : filter;
    return res.json(result);
  } else {
    return res.status(204).json({ message: "No query object can be found" });
  }
}

module.exports = filterByFields;
