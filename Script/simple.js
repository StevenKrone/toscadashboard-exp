

var theUrl = 'http://usalntosdbp01/Rest/ToscaCommander/ToscaStagingDB/object/39e3256a-55af-759e-757b-71ad570f0bb6/testcaselogswithtestcases';



function httpGet(theUrl)
{

    //Synchronous
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.setRequestHeader('Accept','text/json');
    xmlHttp.setRequestHeader('Authorization','Basic QWRtaW46QWRtaW4=');
    xmlHttp.send(null);

///////////////////////////////////////////////////////////////////
//Asynchronous

    // var xmlHttp = new XMLHttpRequest();
    // xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    // xmlHttp.setRequestHeader('Accept','text/json');
    // xmlHttp.setRequestHeader('Authorization','Basic QWRtaW46QWRtaW4=');
    // xmlHttp.send( null );
    // return xmlHttp.responseText;

}


console.log(httpGet(theUrl));