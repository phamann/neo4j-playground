"use strict";
var resource = require('seraph-resource');
var express = require('express');
var app = express();

var db = require('./utils/db');

var User = require('./models/user');
var Concept = require('./models/concept');
var Article = require('./models/article');
var Preference = require('./models/preference');

var options = {
    relRoutes: true
};

app.use(resource(Concept, options));
app.use(resource(Preference, options));
app.use(resource(Article, options));
app.use(resource(User, options));

module.exports = app;
