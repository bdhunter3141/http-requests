var getHTML = require("../http-functions.js");

var printUppercase = function(html) {
  var uppercase = html.toUpperCase();
  console.log(uppercase);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

getHTML(requestOptions, printUppercase);