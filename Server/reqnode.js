var request = require("request");

var options_gettestcaselogs = { method: 'GET',
    url: 'http://usalntosdbp01/Rest/ToscaCommander/ToscaStagingDB/object/39e3256a-55af-759e-757b-71ad570f0bb6/testcaselogswithtestcases',
    headers: 
    { 'Postman-Token': '19b5e81a-ac05-3ac4-104d-9da217401f5a',
        'Cache-Control': 'no-cache',
        Authorization: 'Basic QWRtaW46QWRtaW4=',
        Accept: 'application/json' } };


var objectID = '39e34a80-7b62-0c76-b111-eb7830121572';

var options_object = { method: 'GET',
    url: 'http://usalntosdbp01/Rest/ToscaCommander/ToscaStagingDB/object/'+objectID,
    headers: 
    { 'Postman-Token': '19b5e81a-ac05-3ac4-104d-9da217401f5a',
        'Cache-Control': 'no-cache',
        Authorization: 'Basic QWRtaW46QWRtaW4=',
        Accept: 'application/json' } };


function extractID_testcaselogs(body){
        var obj = JSON.parse(body);    
        for( i in obj){
            for(j in obj[i]){
                console.log(obj[i][j].UniqueId);
            }
        }
    };
    


request(options_object, function (error, response, body) {
  if (error) throw new Error(error);

  var obj = JSON.parse(body); 
  console.log(obj);
  
  console.log('');

   //extractID_testcaselogs(body);
 
  
});



