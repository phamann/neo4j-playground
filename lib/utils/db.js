"use strict";
var seraph = require('seraph');

function getDB() {
    if (process.env.NODE_ENV === "development") {
        return seraph({
            server : 'http://localhost:7474',
            user: 'neo4j',
            pass: process.env.NEO4J_PASSWORD
        });
    } else {
        console.warn('No production DB configured.');
    }
}

module.exports = getDB();
