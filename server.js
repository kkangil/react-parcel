const express = require("express");
const path = require("path");
const logger = require('morgan');
const bundler = require('./config/parcel')

require('dotenv').config();

const app = express();

app.use(logger('common'))

const production = process.env.NODE_ENV === 'production'
if (production) {
  app.use(bundler.middleware())
}

app.use(express.static(path.join(__dirname, "build")));

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`app runnin on port ${port}`);
});