"use strict";

var app = require('./lib/server');
var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log('Listening on port ' + port);
});
