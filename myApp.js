console.log(require('dotenv').config({ path: __dirname + '/.env' }));
const mySecret = process.env['MESSAGE_STYLE'];
var express = require('express');
var app = express();
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/views/index.html');
// });

app.get('/json', (req, res) => {
  var response =
    process.env.MESSAGE_STYLE === 'uppercase'
      ? (response = 'Hello json'.toUpperCase())
      : (response = 'HELLO JSON');

  res.json({
    message: mySecret,
  });
  console.log(mySecret);
});
// app.use('/public', express.static(__dirname + '/public'));

module.exports = app;
