console.log(require('dotenv').config({ path: __dirname + '/.env' }));
var express = require('express');
var app = express();
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/views/index.html');
// });
var response = 'Hello json'.toUpperCase();
if (process.env.MESSAGE_STYLE === 'uppercase') {
  response = 'Hello json'.toUpperCase();
} else {
  response = 'Hello json';
}
app.get('/json', (req, res) => {
  res.json({
    message: response,
  });
});
// app.use('/public', express.static(__dirname + '/public'));

console.log('Hello World');

module.exports = app;
