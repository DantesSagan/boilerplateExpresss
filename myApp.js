require('dotenv').config();
const mySecret = process.env['MESSAGE_STYLE'];
var express = require('express');
var app = express();

app.use('/public', express.static(__dirname + '/public'));

app.use((req, res, next) => {
  // var request = req.method + ' ' + req.path + ' - ' + req.ip;
  // console.log('GET /json - ::ffff:127.0.0.1', request);
  let get = ('GET', req.method);
  let json = ('/json', req.path);
  let ip = ('::ffff:127.0.0.1', req.ip);
  console.log(get + ' ' + json + ' - ' + ip);
  next();
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
  var response = { message: 'Hello json' };
  if (process.env.MESSAGE_STYLE === 'uppercase')
    response.message = response.message.toUpperCase();

  res.json(response);
  console.log(response);
});

app.get(
  '/now',
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({ time: req.time });
  }
);

app.get('/hello1/:hello1/helloJson1/:helloJson1', (req, res) => {
  hello1 = req.params.hello1;
  helloJson1 = req.params.helloJson1;
  let params = { hello1: 'hello1', helloJson1: 'helloJson1' };
  res.json(params);
});
module.exports = app;
