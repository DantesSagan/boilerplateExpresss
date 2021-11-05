require('dotenv').config();
const mySecret = process.env['MESSAGE_STYLE'];
var express = require('express');
var app = express();
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/public', express.static(__dirname + '/public'));

app.use((req, res, next) => {
  var request = req.method + ' ' + req.path + ' - ' + req.ip;
  console.log('GET /json - ::ffff:127.0.0.1', request);
  // console.log('GET ', req.method);
  // console.log('/json - ', req.path);
  // console.log('::ffff:127.0.0.1', req.ip);
  next();
});

app.get('/json', (req, res) => {
  var response = { message: 'Hello json' };
  if (process.env.MESSAGE_STYLE === 'uppercase')
    response.message = response.message.toUpperCase();

  res.json(response);
  console.log(response);
});

module.exports = app;
