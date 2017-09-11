var getHTML = require("../http-functions")

var printLowercase = function(html) {
  var lowercase = html.toLowerCase();
  console.log(lowercase);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

getHTML(requestOptions, printLowercase);