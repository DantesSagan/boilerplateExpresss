var express = require('express');
var app = express();
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});
app.use('/', (req, res) => {
  express.static(__dirname + '/public/style.css');
});
console.log('Hello World');

module.exports = app;
  