const express = require("express");
const app = express();
const http = require("http");
const request = require("request");
var Promise = require('promise');


var object_route_response;

app.param("id", function(req,res, next, id){
    //UniqueID for Tosca API
    objectID = id;

    //Create Header to direct request to Tosca API
    var config_options_object = { method: "GET",        url: "http://usalntosdbp01/Rest/ToscaCommander/ToscaStagingDB/object/"+objectID,
        headers: { "Postman-Token": "19b5e81a-ac05-3ac4-104d-9da217401f5a",                "Cache-Control": "no-cache",                Authorization: "Basic QWRtaW46QWRtaW4=",                Accept: "application/json" } };

    //Request
    request(config_options_object, function (error, response, body) {
                if (error){ 
                    throw new Error(error)
                }; 
                var obj = JSON.parse(body); 
                console.log(obj);  
                // console.log(""); 
                object_route_response = body;
                    //extractID_testcaselogs(body);
        });




    next();
  });


app.param("id_x", function(req,res, next, id){
    //UniqueID for Tosca API
    objectID = id;

    //Create Header to direct request to Tosca API
    var config_options_object = { method: "GET",        url: "http://usalntosdbp01/Rest/ToscaCommander/ToscaStagingDB/object/"+objectID +"/testcaselogswithtestcases",
        headers: { "Postman-Token": "19b5e81a-ac05-3ac4-104d-9da217401f5a",                "Cache-Control": "no-cache",                Authorization: "Basic QWRtaW46QWRtaW4=",                Accept: "application/json" } };

    //Request
    request(config_options_object, 
        function (error, response, body) {
                if (error){ 
                    throw new Error(error); 
                }
                var obj = JSON.parse(body); 
                console.log(obj);  
                console.log(""); 
                object_route_response = body;
                    //extractID_testcaselogs(body);
        });

    next();
});


app.param("id_o", function(req,res, next, id){
    //UniqueID for Tosca API
    objectID = id;

    //Create Header to direct request to Tosca API
    var config_options_object = { method: "GET",        url: "http://usalntosdbp01/Rest/ToscaCommander/ToscaStagingDB/object/"+objectID +"/association/Items",
        headers: { "Postman-Token": "19b5e81a-ac05-3ac4-104d-9da217401f5a",                "Cache-Control": "no-cache",                Authorization: "Basic QWRtaW46QWRtaW4=",                Accept: "application/json" } };

    //Request
    request(config_options_object, 
        function (error, response, body) {
                if (error){ 
                    throw new Error(error); 
                }
                //console.log(response);
                var obj = JSON.parse(body); 
                console.log(obj);  
                console.log(""); 
                object_route_response = body;
                    //extractID_testcaselogs(body);
        });

    next();
});


app.use("/api/object/:id", function(req, res, id){
    console.log("Hit obj.get id!");
    res.header("Access-Control-Allow-Origin", "*")
        .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
        .send(object_route_response)
})



app.use("/api/execlist/:id_x/", function(req, res, id){
    console.log("Hit exec.get id!" );
    res.header("Access-Control-Allow-Origin", "*")
        .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
        .send(object_route_response)

})

app.use("/api/objectitems/:id_o", function(req, res, id){
    console.log("Hit items.get id!");
    res.header("Access-Control-Allow-Origin", "*")
        .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
        .send(object_route_response)
})



const port = process.env.PORT || "3000";
app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));
