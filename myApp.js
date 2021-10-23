import express from 'express';
var app = express();
function HelloExpress(req, res) {
  req.get('Hello Express');
}
console.log(HelloExpress());
console.log('Hello World');

export default app;
