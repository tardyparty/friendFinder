var express = require('express');
var path = require('path');

var PORT = process.env.PORT || 8090;

var app = express();

app.use(express.urlencoded({extended: true }));
app.use(express.json());

require("./routing/apiRoutes.js");
require("./routing/htmlRoutes.js");

app.listenerCount(PORT, function() {
    console.log("App in listening on PORT " + PORT);
})
