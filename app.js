const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require('./routes')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('./database/db').connect();
app.use(routes)
require('./mainScript').scheduleMessage()

module.exports = app;
