"use strict";

var db = require('../utils/db');
var model = require('seraph-model');

var Concept = model(db, 'concept');

Concept.schema = {
    uuid: {
        type: String,
        required: true,
        match: new RegExp('^(brandId|peopleId|sectionsId|organisationsId|regionsId|topicsId|authorsId|subjectsId|specialReportsId|icbId):(.*)')
    }
}
Concept.setUniqueKey('uuid', true);

module.exports = Concept;
