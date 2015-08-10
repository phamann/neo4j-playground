"use strict";

var db = require('../utils/db');
var model = require('seraph-model');
var Concept = require('./concept');

var Article = model(db, 'article');

Article.schema = {
    uuid: {
        type: String,
        required: true,
        match: new RegExp('^([a-f0-9]+)-([a-f0-9]+)-([a-f0-9]+)-([a-f0-9]+)-([a-f0-9]+)')
    }
}
Article.setUniqueKey('uuid', true);
Article.compose(Concept, 'concepts', 'related_to', { many: true });

module.exports = Article;
