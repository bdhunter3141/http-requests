function getAndPrintHTML (options) {
  var https = require("https");
  var result = "";
  https.get(requestOptions, function(response) {
    response.setEncoding("utf8");
    response.on("data", function(data) {
      result += data;
    });
    response.on("end", function() {
      console.log(result);
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);