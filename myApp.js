var dotenv = require('dotenv').config();
var express = require('express');
var app = express();
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/views/index.html');
// });
app.get('/json', (req, res) => {
  if ((process.env.MESSAGE_STYLE = 'uppercase')) {
    response = 'Hello json'.toUpperCase();
  } else {
    response = 'Hello json';
  }
  res.json({
    message: 'Hello json',
  });
});
// app.use('/public', express.static(__dirname + '/public'));

console.log('Hello World');

module.exports = app;
