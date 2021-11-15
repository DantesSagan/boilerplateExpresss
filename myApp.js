// Use the .env File
require('dotenv').config();
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

// Serve Static Assets
app.use('/public', express.static(__dirname + '/public'));

// Implement a Root-Level Request Logger MiddlewarePassed
app.use((req, res, next) => {
  // var request = req.method + ' ' + req.path + ' - ' + req.ip;
  // console.log('GET /json - ::ffff:127.0.0.1', request);
  let get = ('GET', req.method);
  let json = ('/json', req.path);
  let ip = ('::ffff:127.0.0.1', req.ip);
  console.log(get + ' ' + json + ' - ' + ip);
  next();
});

// Serve an HTML FilePassed
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});
// Serve JSON on a Specific RoutePassed and Use the .env File
app.get('/json', (req, res) => {
  var response = { message: 'Hello json' };
  if (process.env.MESSAGE_STYLE === 'uppercase')
    response.message = response.message.toUpperCase();

  res.json(response);
  console.log(response);
});

// Chain Middleware to Create a Time ServerPassed
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

// Get Route Parameter Input from the ClientPassed
app.get('/:word/echo', (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word,
  });
  console.log(word);
});

app.get('/name', (req, res) => {
  const { first: firstname, last: lastname } = req.query;

  res.json({
    name: `${firstname} ${lastname}`,
  });
});

app.use('/name', bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json(), (req, res, next) => {
  req.body();
  // let get = ('GET', req.method);
  // let json = ('/path/subpath', req.path);
  // let ip = ('HTTP/1.0', req.ip);
  // console.log(get + ' ' + json + ' - ' + ip);
  // next();
});
module.exports = app;
