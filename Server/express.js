const express = require('express')
const app = express()
const http = require('http')
const request = require("request");

var objectID = '39e34a80-7b62-0c76-b111-eb7830121572';

var options_object = { method: 'GET', url: 'http://usalntosdbp01/Rest/ToscaCommander/ToscaStagingDB/object/'+objectID,
headers: { 'Postman-Token': '19b5e81a-ac05-3ac4-104d-9da217401f5a',    'Cache-Control': 'no-cache',    Authorization: 'Basic QWRtaW46QWRtaW4=',    Accept: 'application/json' } };

var options_gettestcaselogs = { method: 'GET', url: 'http://usalntosdbp01/Rest/ToscaCommander/ToscaStagingDB/object/39e3256a-55af-759e-757b-71ad570f0bb6/testcaselogswithtestcases',
headers:{ 'Postman-Token': '19b5e81a-ac05-3ac4-104d-9da217401f5a',    'Cache-Control': 'no-cache',    Authorization: 'Basic QWRtaW46QWRtaW4=',    Accept: 'application/json' } };




    var object_response;
    var execution_response;
    
request(options_object, function (error, response, body) {
    if (error) throw new Error(error); 
    var obj = JSON.parse(body); 
    console.log(obj);  
    console.log(''); 
    object_response = body;
     //extractID_testcaselogs(body);
  });

  request(options_gettestcaselogs, function (error, response, body) {
    if (error) throw new Error(error); 
    var obj = JSON.parse(body); 
    console.log(obj);  
    console.log(''); 
    execution_response = body;
     //extractID_testcaselogs(body);
  });


// app.use('/api/object', (req, res) => 
//     res.header("Access-Control-Allow-Origin", "*")
//         .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
//         .send(object_response)
// )

app.use('/api/executionlistwithtests', (req, res) => res.header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept").send(execution_response))

var object_route_response;

app.param('id', function(req,res, next, id){
    //do something with id
    //store id or other info in req object
    //call next when done
    //console.log('Hit app.param id!');

    objectID = id;

    var config_options_object = { method: 'GET',        url: 'http://usalntosdbp01/Rest/ToscaCommander/ToscaStagingDB/object/'+objectID,
        headers: { 'Postman-Token': '19b5e81a-ac05-3ac4-104d-9da217401f5a',                'Cache-Control': 'no-cache',                Authorization: 'Basic QWRtaW46QWRtaW4=',                Accept: 'application/json' } };

    request(config_options_object, 
        function (error, response, body) {
                if (error) throw new Error(error); 
                var obj = JSON.parse(body); 
                console.log(obj);  
                console.log(''); 
                object_route_response = body;
                    //extractID_testcaselogs(body);
        });




    next();
  });


app.use('/api/object/:id', function(req, res, id){
    console.log('Hit app.get id!');
    res.header("Access-Control-Allow-Origin", "*")
        .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
        .send(object_route_response)

})


// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });



const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));

//app.listen(3000, () => console.log('Example app listening on port 3000!'))