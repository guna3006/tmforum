module.exports.common = (req, res, db) => {
    const apiName = req.originalUrl.split("?")[0].split("/")[3];
    const getID = req.originalUrl.split("?")[0].split("/")[4];
    const findApiName = getID
      ? db[apiName] && Array.isArray(db[apiName])
        ? db[apiName].find((entry) => entry.id === getID)
        : null
      : db[apiName];
  
    const updatedData = req.body;

    
    if (findApiName) {
        const isContentSame = Object.keys(updatedData).some(key => findApiName[key] === updatedData[key]);
        if (isContentSame) {
            return res.status(204).send();
          }
          let updatedEntry;
        if (!findApiName.type){
            updatedEntry = {
                ...findApiName,
                type: updatedData.type || findApiName.type,
                href: updatedData.href || findApiName.href,
                id: updatedData.id || findApiName.id,
                ...updatedData
              };
        }else{
            updatedEntry = {
                ...findApiName,
                '@type': updatedData['@type'] || findApiName['@type'],
                href: updatedData.href || findApiName.href,
                id: updatedData.id || findApiName.id,
                ...updatedData
              };
        }


  
      const index = db[apiName].indexOf(findApiName);
      db[apiName][index] = updatedEntry;
  
      return res.status(201).json(updatedEntry);
    } else {
      return res.status(404).json({ error: `${getID} can't be found in ${findApiName}` });
    }
  };
  