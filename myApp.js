var express = require('express');
var app = express();
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/views/index.html');
// });

app.get('/json', (req, res) => {
  var response = 'Hello json'.toUpperCase();
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    response = 'Hello json'.toUpperCase();
  } else {
    response = 'HELLO JSON';
  }
  res.json({
    message: response,
  });
  console.log(response);
});
// app.use('/public', express.static(__dirname + '/public'));

module.exports = app;
