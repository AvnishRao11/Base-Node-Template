const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const apiRouter = require('./routes');

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', apiRouter);

module.exports = app;

