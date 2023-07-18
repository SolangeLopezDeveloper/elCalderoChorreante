require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors')
const indexRouter = require('./routes/index');
const productRouter = require('./routes/product')
const connectDB = require('./config/db')

const app = express();

connectDB();

app

.use(logger('dev'))
.use(express.json())
.use(express.urlencoded({ extended: false }))
.use(cors())
.use('/', indexRouter)
.use('/', productRouter)

.use(function(req, res, next) {
  next(createError(404))
})

.use(function(err, req, res, next) {
 
  res.status(err.status || 500).json({
    status: err.status || 500,
    message : err.message
  });

});

module.exports = app;
