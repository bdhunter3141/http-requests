var getHTML = require("../http-functions.js");

var printReverse = function(html) {
  var reverse = html.split("").reverse().join("");
  console.log(reverse);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

getHTML(requestOptions, printReverse);