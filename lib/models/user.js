"use strict";

var db = require('../utils/db');
var model = require('seraph-model');
var Concept = require('./concept');
var Article = require('./article');
var Preference = require('./preference');

var User = model(db, 'user');

User.schema = {
    uuid: {
        type: String,
        required: true,
        match: new RegExp('^([a-f0-9]+)-([a-f0-9]+)-([a-f0-9]+)-([a-f0-9]+)-([a-f0-9]+)')
    }
}
User.setUniqueKey('uuid', true);

//Concept relationships
User.compose(Concept, 'following', 'followed', { many: true });
User.compose(Concept, 'concepts', 'viewed', { many: true });
User.compose(Concept, 'searches', 'searched', { many: true });

//Article relationships
User.compose(Article, 'savedArticles', 'saved', { many: true });
User.compose(Article, 'readArticles', 'read', { many: true });
User.compose(Article, 'sharedArticles', 'shared', { many: true });

//Preference relationships
User.compose(Preference, 'preferences', 'has', { many:  true });

module.exports = User;
