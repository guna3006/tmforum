# <center>TM Forum Open API</center>
The TM Forum Open API mocker is crafted to enhance your testing and development journey by seamlessly simulating interactions. This tool boosts efficiency and precision in your projects, elevating your overall experience.

## Getting Started:

### 1. **Prerequisite**
- [![Fleet Badge](https://shields.io/badge/Fleet--Preview-lightgrey?logo=jetbrains&logoColor=purple)](https://www.jetbrains.com/fleet/)/  [![VSCode Badge](https://shields.io/badge/VSCode-lightgrey?logo=visualstudiocode&logoColor=blue)](https://code.visualstudio.com)
- [![Docker Badge](https://shields.io/badge/Docker--Dekstop-lightgrey?logo=docker&logoColor=blue)](https://www.docker.com/products/docker-desktop/)
- [![HTTPie Badge](https://shields.io/badge/HTTPie-lightgrey?logo=postman&logoColor=black)](https://httpie.io) / [![Postman Badge](https://shields.io/badge/Postman-lightgrey?logo=postman&logoColor=black)](https://www.postman.com)

### 2. **Usage:**

- Execute the [![Docker Badge](https://shields.io/badge/docker--compose-lightgrey?logo=yaml&logoColor=black&labelColor=yellow)](docker-compose.yml) with:

  -if ![Windows Badge](https://img.shields.io/badge/-0078D6?logo=windows&logoColor=white) use [![Batch Badge](https://shields.io/badge/RUNME.sh-lightgrey?logo=gnu-bash&logoColor=black&labelColor=blue)](RUNME.bat)

  -if ![MacOSX Badge](https://img.shields.io/badge/-000000?&logo=apple&logoColor=white) or ![Linux Badge](https://img.shields.io/badge/-FCC624?&logo=linux&logoColor=black) use [![Shell Badge](https://shields.io/badge/RUNME.sh-lightgrey?logo=gnu-bash&logoColor=black&labelColor=darkgreen)](RUNME.sh)

### 3. **Customised Function**

- [![JS Badge](https://shields.io/badge/server.js-lightgrey?logo=javascript&logoColor=green)](/server.js)

  - It imports required ![JS Badge](https://img.shields.io/badge/npm-CB3837?&logo=npm&logoColor=white):
    - `json-server`
    - `http`
    - `https`
    - `path`
    - `fs`
    - `_` as `(lodash)`
  - It import custom functions from ![JS Badge](https://shields.io/badge/main.js-lightgrey?logo=javascript&logoColor=green).
  - It configures routes using a rewriter if a routes file exists.
  - It loads initial database data from a ![JS Badge](https://img.shields.io/badge/json-green?style=for-the-badge&logo=json&logoColor=white) file.
  - It merges additional database files from a custom directory.
  - It sets up a watch on the custom database directory to dynamically update the database when files change.
  - It creates a [![JS Badge](https://img.shields.io/badge/JSON--SERVER-green?&logoColor=white)](https://github.com/typicode/json-server) `router` and sets up `middleware` for static file serving and request parsing.
  - It integrates custom functionality from ![JS Badge](https://shields.io/badge/main.js-lightgrey?logo=javascript&logoColor=green) into the server using the tmf.main function.
  - It starts `HTTP` and `HTTPS` servers, listening on ports `9000` and `8000` respectively.
  - It logs server startup information including protocol and `port` numbers.

- [![JS Badge](https://shields.io/badge/main.js-lightgrey?logo=javascript&logoColor=green)](/functions/main.js) - function is designed to handle incoming `HTTP` requests within <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACqElEQVR4nO2Xz2sTQRTHt2D1Iijaf8FLkSTNZmcS25D+yM5sku68iOSgFwUhNz3Wkwm0FBuVHCzqQaGQVElprQh68yD0UBE8F+zFm4p67sGQkUm7ye52Nz+KUgLzgccyO2/fe9/MzyiKRCKRSCQSieRYQRR2kMFyiqIMKYMIpsCbRth7ZaAFUODKIIKlgGMGyxE4IJiAs5iwEqbsl3iKttKBxIvESLJCt4xapqEtRbfUh+pIvznUZO5MpxHoqSZVzQ9jks0jyn7YgyHKfmMCdwzDOOUovJg4kVyh5fS6+Wf2dZYLm3yu80BBrYcWtGqumDvpmYOy25jAT3sO7Gr3XROiJiAKXxxBXbbfz5jwn67QOWPN3LMKb9lmlmulGA/cDfNgQd0bW0BzVjG95MA2AX3VhAiruzo+arp5XTwd7wmri+DGmtk4VPyBkZdpHiiE90UU1UZLgCsHJrAtcmAC254CPGrCFG541uR0zF61HedDou0OHn865Vm8ZeOPEk0BYjQsAf3mwB38NQLXHP7dtjB3f7Q8wclq2ldAZgN45F6UCz+/GN1yYPeIlOPTuDzxVTzt/Yiwd0cSECnFmoX6iUhWjP8qAFHYxQSuHCk4un+pOc/jjztPpfiTKU8BYgr0M4U0p3/3Arv1h4oRa5FyWpv1FWDUzFY8r0WJDLjpt1F4LPpPmMJkRwGIwBuvfvHeLiC8qC0HC+G6EIEfjHsWn1o363rVWG7nYKyfrRr7+RN4G9EvXzz8Z4Ka4DtE7X15x2qPFkdPj82jzUAh3JhZoe0F/Aq4Xk19IM/IOXeM9sEE33s5LFU1PxwlcMt90InvtZnseeVfEJrHF9BS7HNmg3F9NbWrV3Tnr+NB8+ogrgYEvllXiZ78e7zeSCQSiUQikUgkEokyKPwFLJDIAQJCjt0AAAAASUVORK5CYII="> application. Let's break down the functionality of this module:

  - [![JS Badge](https://shields.io/badge/setHeader.js-lightgrey?logo=javascript&logoColor=green)](functions/common/setHeader.js) - module for setting HTTP headers.
  - [![JS Badge](https://shields.io/badge/suspiciousHeader.js-lightgrey?logo=javascript&logoColor=green)](functions/common/suspiciousHeader.js) - module for handling suspicious HTTP headers.

  1. ![JS Badge](https://img.shields.io/badge/GET-blue?&logoColor=white)

     - [![JS Badge](https://shields.io/badge/common.js-lightgrey?logo=javascript&logoColor=green)](functions/handler/get/common.js)

       - It extracts some information from the request object (`req`) to determine the version, API name, and ID.
       - It checks if the query parameter includes `fields`, `limit`, or neither.
       - If `fields` are included, it filters the response by specific fields using a helper function filterByFields.
       - If `limit` is included, it returns the response as is.
       - If neither `fields` nor `limit` is present, it filters the response by query parameters using another helper function filterByQueryParam.
       - It handles cases where the ID is present or absent and returns appropriate responses.
       - If the ID is not found, it returns a `404` error.
       - If the API name is `api` and ID is `list`, it returns a list of API names from the database.
       - If none of the conditions are met, it returns a `404` error.

       [![JS Badge](https://shields.io/badge/filterByQueryParam.js-lightgrey?logo=javascript&logoColor=green)](functions/handler/get/filterByQueryParam.js)

       - It extracts the first query parameter and its value from the request object (`req.query`).
       - It handles URL-encoded spaces by replacing `"%20"` with actual spaces.
       - It converts string values of `true` and `false` to boolean values.
       - It checks if both the query parameter object and its value are present, returning a `400` error if not.
       - It filters the database (`db`) based on the query parameter object and value.
       - If filtered data is found, it returns a `200` status code with the filtered data.
       - If the database is invalid or not an array, it returns a `500` error.
       - If no data matches the query, it returns a `204` status code indicating no content.

       [![JS Badge](https://shields.io/badge/filterByFields.js-lightgrey?logo=javascript&logoColor=green)](functions/handler/get/filterByFields.js)

       - It extracts the API version and requested fields from the request object (`req`).
       - It sets default fields based on the API version.
       - It ensures that the `apiName` parameter is an array.
       - It checks if requested fields are provided in the query, returning a `400` error if not.
       - It handles cases where `apiName` is empty or not provided, returning a `404` error.
       - It constructs a map of fields to be filtered based on requested fields or default fields.
       - It iterates over each item in the `apiName` array and filters the fields based on the constructed map.
       - If filtered data is found, it returns the result; otherwise, it returns a `204` status code indicating no content.

  2. ![JS Badge](https://img.shields.io/badge/POST-darkgreen?&logoColor=white)

     - [![JS Badge](https://shields.io/badge/common.js-lightgrey?logo=javascript&logoColor=green)](functions/handler/post/common.js)
       - It imports the fs module for file system operations.
       - It extracts various information from the request object (`req`), such as `protocol`, `hostname`, `port`, `version`, and `apiName`.
       - It constructs the output file path based on the API name.
         It modifies the request body (`reqBody`) by adding a unique `ID` generated by the `Faker` library and constructing an API endpoint (`href`).
       - It handles differences in API versions (`v4` and `v5`) by modifying the request body accordingly.
       - It prepares the new data object (`newData`) to be written to the file.
       - It checks if the output file exists, reads its content if so, appends the new data to it, and writes it back to the file. If the file doesn't exist, it writes the new data directly.
       - It logs the success of data writing or updating.
       - It returns a `201` status code along with the modified request body if successful.
         If any error occurs during file operations, it logs the error and returns a `404` status code along with the error message.

  3. ![JS Badge](https://img.shields.io/badge/PUT-darkorange?&logoColor=white)
     - [![JS Badge](https://shields.io/badge/common.js-lightgrey?logo=javascript&logoColor=green)](functions/handler/put/common.js)
       - It extracts the API name and ID from the request URL.
       - It searches for the entry in the database corresponding to the provided API name and ID.
       - It retrieves the updated data from the request body.
       - If the entry is found in the database:
         - It checks if the updated data differs from the existing data.
         - If the content is the same, it returns a `204` status indicating no content has been modified.
         - It constructs the updated entry by merging the existing entry with the updated data, prioritizing specific fields based on the presence of certain keys.
         - It replaces the existing entry with the updated one in the database.
         - It returns a `201` status along with the updated entry.
       - If the entry is not found in the database, it returns a `404 `status along with an error message indicating that the provided ID couldn't be found.
  4. ![JS Badge](https://img.shields.io/badge/DELETE-red?&logoColor=white)

     - [![JS Badge](https://shields.io/badge/common.js-lightgrey?logo=javascript&logoColor=green)](functions/handler/delete/common.js)
       - It extracts the API name and ID from the request URL.
       - It checks if the ID parameter is present and not undefined. If not, it returns a 400 error indicating that the ID parameter is required for deletion.
       - It finds the index of the entry with the provided ID in the database.
       - If the entry is found:
         - It removes the entry from the database using splice.
         - It returns a `204` status along with a success message indicating that the entry has been deleted.
       - If the entry is not found in the database:
         - It returns a `404` error indicating that no entry was found for the given ID.

  5. ![JS Badge](https://img.shields.io/badge/PATCH-orange?&logoColor=white)

     - [![JS Badge](https://shields.io/badge/common.js-lightgrey?logo=javascript&logoColor=green)](functions/handler/patch/common.js)
       - It extracts the API name and ID from the request URL.
       - It searches for the entry in the database corresponding to the provided API name and ID.
       - If the entry is not found, it returns a `404` error along with a message indicating that the provided ID couldn't be found in the specified API.
       - It retrieves the updated data from the request body.
       - It checks if the updated data is the same as the existing data for each key. If so, it returns a `204` status indicating no content has been modified.
         It constructs the updated entry by merging the existing entry with the updated data.
       - It finds the index of the existing entry in the database.
       - If the entry is found:
         - It updates the entry in the database with the new data.
         - It returns a `200` status along with the updated entry.
       - If the entry is not found in the database, it returns a `500` error indicating an internal server error.

  6. ![JS Badge](https://img.shields.io/badge/OPTIONS-grey?&logoColor=white)

     - [![JS Badge](https://shields.io/badge/common.js-lightgrey?logo=javascript&logoColor=green)](functions/handler/options/common.js)
       - It imports necessary modules `Ajv` (JSON schema validator), `fs` (file system), `path`, and `chokidar` (file watcher).
       - It extracts the options type and variable to check from the request URL.
       - It defines an enum `OptionsTypeEnum` to represent different types of options.
       - It defines a function `getFileData` to read and parse JSON data from files.
       - It reads different JSON files based on the options type and assigns the data to the variable `db`.
       - If the options type is not `validate` and the variable to check is `all`, it returns all APIs available.
       - If the options type is not `validate` and a specific variable to check is provided, it returns the data corresponding to that variable.
       - If the options type is `validate` and a specific variable to check is provided, it validates the request body against the schema retrieved from the database.
         - If the validation fails, it returns a 404 error along with the validation errors.
         - If the validation succeeds, it returns a 202 status indicating successful validation.
       - If the options type is `validate` but no specific variable to check is provided, or if the variable to check is not found, it returns a 404 error indicating an invalid variable.

### 4. <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEDUlEQVR4nO2ZW08TQRTHTYwxfgJ2tgUNjUHFesdrZHfFKmBroYgiGBFRfJJYUApKgV2LMWqitEVDYrzE7+CDxkQeJEbxzcuLEbzFRBM1+gBq4jFnyjbb0tt2d2kbfDhpZ2Z75vz2zP/MdmcOAMzNZZuT6QDgPwDMgiV0/PjAfFO+0Mmw3LM8hvvFEA4SWR7DvSsqqrDG8kUIN4LXEMI/HRoammc4AAZPWO5hsqCjzWQSxFj+lNcQwt/QCpEUwJQvdKkNPlEGoq8lGiGSAuCykSdjzUK32+1eoOWOxQImhL+ZLkRSAOWa1xp8PABGA0TyDCgmkfvuwt35QZDEAEhvAyCBGlP6q/TUa4ZICyAIPlFt4LEA/H9FzRBpAfhBfKcHQAAkzRBpAaQbPBpbIIT9XfrRoxlixgFWlztSLseElH7KOoDWe62q9hTINgAZYk2FI2I5xbOrcG531gGoE7o4GQSfM4cBJPCDNHEN+m05CxCgJr7OcQAJZhdAcXGVhRDuQcI6beLB1loXMclO937ar6ZUMnGNh017q8H3/rR6gGTBK+3CVy+dAHdWfQLnIgwhVAOk8tfR+Axw1HC/UA2QaDc0WgOBOFrQDWCdwwklTid1evGbF7jmWsgv3AamAgHW2ndD94uOcBCe0XZYuX0XmBYKsNJmh87R9vDY5n3VsL66Ci5P9tG20q+hAEqn5W37p6W8tHEPHUOQ6McFbHe/DAEyU30uX2NEe0YBrEIl/e4ePgGXJ3rh8J1j0PPKQ8e2HqyhY/iofPG7N/zIzB2qiQiQmHjwPGnPDIAyA3h3sWL0fwiVPYvVRvvPf+mmbfzEtmWFbVqAy0srMwOAGuCPhjQg9+PapgArogA+xwZYrgjeMABC+BHCco9xg8M+FCU6bbp9DA5ePwpXfvWB+KaTXl+wuIyOoRawXdHRQEHxk2qkKaQRZsp/57OTwJp5gwFY7nnE5lLnok4XFpVNE7GcARRrLBF7o0QcAIkK2VCApUsdxQzhHjGk9OeWehf0fwyt81MjbbRM4h2kGqhzhTWAhnd31Q47mBcJsGqnnbblsRKnE0qqQmUTSymW0Y211cZrICc2srwUHiXUGGF5EFpq6RsIZXYsU0JPZLLeDHuYU2PK5eU4cyCl38iaUgVgtboKCeHvZzoDmxSaUgWQSAszvfYDs/IfGSR4vW5k8AO/+yL2DO0ZUBxwmM2CFyGMDL7uSlMYAF9DagZIdsS0ZEM5iGNddAIU27ItFbpVrPrBZu0AU4d8w4kmarh6hE5w6FaLbsFvqKmCgT+idgDlMSthudHoDU7PDLAFAl02DYPN04LXBBBt6Rwt6WBjugEMwtm+mQYIgq9XNwA85EMIP4jjRgfuB3Ecg8c5dQPIJvsHS+rmxnXecrYAAAAASUVORK5CYII=">

- [![JSON Badge](https://img.shields.io/badge/tmforumAPI.json-green?logo=json&logoColor=white?)](data/custom/apis/tmforumAPI.json) <span style="color: red;">***Please refrain from making any changes to this file.***</span>
    - TMForum Open-API Sample API Collection Repository

- [![JSON Badge](https://img.shields.io/badge/db.json-green?logo=json&logoColor=white?)](data/custom/db/db.json) <span style="color: red;">***Adjustments to the JSON file should adhere to the schema provided in the following example.***</span>
  - If make `POST`, `PUT`, `PATCH` or `DELETE` requests, changes will be automatically and safely saved using `lowdb`.
  - Request body should be object enclosed, just like the `GET` output.
  - example :
    ```
    {
        "id": "db1d2ae3-5496-4040-8be9-6e3d4012ba0a",
        "href": "http://localhost:9000/tmf-api/v4/getAPI/db1d2ae3-5496-4040-8be9-6e3d4012ba0a"
    }
    ```
  - ID values are not mutable. Any id value in the body of your `PUT` or `PATCH` request will be ignored. Only a value set in a ![JSON Badge](https://img.shields.io/badge/json-green?style=for-the-badge&logo=json&logoColor=white) request will be respected, but only if not already taken.
  - A`POST`, `PUT` or `PATCH` request should include a Content-Type: application/json header to use the ![JSON Badge](https://img.shields.io/badge/json-green?style=for-the-badge&logo=json&logoColor=white) in the request body. Otherwise it will return a `2XX` status code, but without changes being made to the data.
- [![JSON Badge](https://img.shields.io/badge/routes.json-green?logo=json&logoColor=white?)](data/custom/routes/routes.json) <span style="color: red;">***Adjustments to the JSON file should adhere to the schema provided in the following example.***</span>
  - Help organize resources within [![JS Badge](https://img.shields.io/badge/JSON--SERVER-green?&logoColor=white)](https://github.com/typicode/json-server).
  - Facilitate the creation of a `RESTful API` structure.
  - Allow for endpoint customization to match application needs.
  - Enable filtering, sorting, and manipulation of data.
  - Integrate middleware for additional functionality.
  - Aid in implementing security measures like authentication and authorization.
  - Versioned to manage API changes.
  - example :
    ```
    {
    "/tmf-api/v4/*":"/$1",
    "/tmf-api/v5/*":"/$1"
    } 
    ```
- [![JSON Badge](https://img.shields.io/badge/tmforumSchema.json-green?logo=json&logoColor=white?)](data/custom/schema/tmforumSchema.json) <span style="color: red;">***Please refrain from making any changes to this file.***</span>
    - TMForum Open-API Schema Repository

- [![JSON Badge](https://img.shields.io/badge/tmforumSwagger.json-green?logo=json&logoColor=white?)](data/custom/swagger/tmforumSwagger.json) <span style="color: red;">***Please refrain from making any changes to this file.***</span>
    - TMForum Open-API Swagger Repository


## License:

TMForumFusion Maverick is licensed under MIT. See the License Badge for details.

## Support

This is a self-developed project. There is no official tmforum support for this project.

