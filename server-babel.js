"use strict";

var express = require('express');

var app = express();

var authRouter = require('./auth'); // "./" lleva a la misma carpeta que server


var homeHandler = function homeHandler(request, response) {
  response.send('Hello World');
}; //esto fue una función (handler)


app.all('/', homeHandler);
app.use('/auth', authRouter);
app.listen(9000);
