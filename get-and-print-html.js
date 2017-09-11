function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  var https = require("https");
  var result = "";
  https.get(requestOptions, function(response) {
    response.setEncoding("utf8");
    response.on("data", function(data) {
      result += data;
      // console.log(data);
    });
    response.on("end", function() {
      console.log(result);
    });
  });
}

getAndPrintHTML();