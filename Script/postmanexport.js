var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "http://usalntosdbp01/Rest/ToscaCommander/ToscaStagingDB/object/39e3256a-55af-759e-757b-71ad570f0bb6/testcaselogswithtestcases");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Basic QWRtaW46QWRtaW4=");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "872519d4-ccb7-705f-bce5-c984da98b155");

xhr.send(data);

console.log(data);