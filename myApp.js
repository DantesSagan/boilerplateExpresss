import express from 'express';
var app = express();
app.get('/', (req, res) => {
  res.send('Hello Express');
});
console.log('Hello World');

export default app;
