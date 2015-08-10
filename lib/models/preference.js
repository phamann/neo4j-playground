"use strict";

var db = require('../utils/db');
var model = require('seraph-model');

var Preference = model(db, 'preference');

Preference.schema = {
    name: {
        type: String,
        required: true
    }
}

module.exports = Preference;
