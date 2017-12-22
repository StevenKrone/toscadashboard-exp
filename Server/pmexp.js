var http = require("http");

var options = {
  "method": "GET",
  "hostname": [
    "usalntosdbp01"
  ],
  "path": [
    "Rest",
    "ToscaCommander",
    "ToscaStagingDB",
    "object",
    "39e3256a-55af-759e-757b-71ad570f0bb6",
    "testcaselogswithtestcases"
  ],
  "headers": {
    "Accept": "application/json",
    "Authorization": "Basic QWRtaW46QWRtaW4=",
    "Cache-Control": "no-cache",
    "Postman-Token": "fa4736b6-4a2e-b988-2049-f22b03368352"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();