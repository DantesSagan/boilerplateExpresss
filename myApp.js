require('dotenv').config();
const mySecret = process.env['MESSAGE_STYLE'];
var express = require('express');
var app = express();
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', (req, res) => {
  var response = { message: 'Hello json' };
  if (process.env.MESSAGE_STYLE === 'uppercase')
    response.message = response.message.toUpperCase();

  res.json(response);
  console.log(response);
});

app.use(function middleware(req, res, next) {
  var request = req.method('GET') + ' ' + req.path('/json');
  +' - ' + req.ip('::ffff:127.0.0.1');
  console.log(request);
  next();
});

module.exports = app;
