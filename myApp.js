var express = require('express');
var app = express();
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/views/index.html');
// });
app.get('/json', (req, res) => {
  res.json({
    message: 'Hello json',
  });
});
app.use('/public', express.static(__dirname + '/public'));

console.log('Hello World');

module.exports = app;
