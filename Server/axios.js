const axios = require("axios");
const url =
  "http://usalntosdbp01/Rest/ToscaCommander/ToscaStagingDB/object/39e34a80-7b62-0c76-b111-eb7830121572";
axios
  .get(url)
  .then(response => {
    console.log(
      `City: ${response.data.results[0].formatted_address} -`,
      `Latitude: ${response.data.results[0].geometry.location.lat} -`,
      `Longitude: ${response.data.results[0].geometry.location.lng}`
    );
  })
  .catch(error => {
    console.log(error);
  });