function filterByQueryParam(req, res, apiName,version, db) {
  const getID = req.originalUrl.split("?")[0].split("/")[2];
  const queryParamObject = Object.keys(req.query)[0];
  
  
  let queryParamValue = req.query[queryParamObject];
if (queryParamValue.startsWith('"') && queryParamValue.endsWith('"')) {
  queryParamValue = queryParamValue.slice(1, -1);
}else{
  queryParamValue = queryParamValue?.includes('%20') ? queryParamValue.replace(/%20/g, ' ') : queryParamValue || '';
}

let defaultFields;
if (version === "v5") {
  defaultFields = ["id", "href", "@type"];
} else if (version === "v4") {
  defaultFields = ["id", "href"];
} else if ( queryParamValue === "agreedByParty"){
  defaultFields = ["id", "href", "@type", "agreedByParty"];
}



console.log(queryParamObject);
console.log(queryParamValue);

if (queryParamValue === queryParamObject){
  let requestedFields = queryParamValue;
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
}else{
  
  if (queryParamValue === "true") {
    queryParamValue = true;
  } else if (queryParamValue === "false") {
    queryParamValue = false;
  }

  if (!queryParamObject || queryParamValue === undefined) {
    return res.status(400).json({ error: "Both parameter object and value are required in the query" });
  }
  const filteredData = db.filter((entry) => entry[queryParamObject] === queryParamValue);
  if (filteredData.length > 0) {
    return res.status(200).json(filteredData);
  }
  if (!db || !Array.isArray(db)) {
    return res.status(500).json({ error: "Invalid database structure" });
  } else {
    return res.status(204).json({ message: "No query object can be found" });
  }
  

  
}

   
}

module.exports = filterByQueryParam;
