var http = require('http');



var parseString = require('xml2js').parseString;
var xml = '<?xml version="1.0" encoding="UTF-8" ?><business><company>Code Blog</company><owner>Nic Raboy</owner><employee><firstname>Nic</firstname><lastname>Raboy</lastname></employee><employee><firstname>Maria</firstname><lastname>Campos</lastname></employee></business>';



http.get('http://usalntosdbp01/Rest/ToscaCommander/ToscaStagingDB/object/39e3256a-55af-759e-757b-71ad570f0bb6/testcaselogswithtestcases', (resp) => {
    let data = '';
    resp.setHeader(200, {'Accept': 'text/json'});
   
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });
   
    // The whole response has been received. Print out the result.
    resp.on('end', () => {

        parseString(data, function (err, result) {
            console.log(JSON.stringify(result));
            //console.log(result);
        });
      
      //console.log(JSON.parse(data));
    });
   
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
  
  
// function getTestPersonaLoginCredentials(callback) {

//     return http.get({
//         host: 'usalntosdbp01',
//         path: '/Rest/ToscaCommander/ToscaStagingDB/object/39e3256a-55af-759e-757b-71ad570f0bb6/testcaselogswithtestcases'
//     }, function(response) {
//         // Continuously update stream with data
//         var body = '';
//         response.on('data', function(d) {
//             body += d;
//         });
//         response.on('end', function() {

//             // Data reception is done, do whatever with it!
//             var parsed = JSON.parse(body);
//             callback({
//                 email: parsed.email,
//                 password: parsed.pass
//             });
//         });
//     });

//     console.log(callback.body);
// }

//const https = require('https');
 
// https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
//   let data = '';
 
//   // A chunk of data has been recieved.
//   resp.on('data', (chunk) => {
//     data += chunk;
//   });
 
//   // The whole response has been received. Print out the result.
//   resp.on('end', () => {
//     console.log(JSON.parse(data).explanation);
//   });
 
// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });
