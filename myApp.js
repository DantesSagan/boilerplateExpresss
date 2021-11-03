console.log(require('dotenv').config());
var express = require('express');
var app = express();
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/views/index.html');
// });
var response = 'Hello json'.toUpperCase();
if (process.env.MESSAGE_STYLE === 'uppercase') {
  response = 'Hello json'.toUpperCase();
} else {
  response = 'HELLO JSON';
}
app.get('/json', (req, res) => {
  res.json({
    message: response,
  });
});
// app.use('/public', express.static(__dirname + '/public'));

console.log('Hello World');

module.exports = app;
