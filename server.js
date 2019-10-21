var express = require('express');

var PORT = process.env.PORT || 8090;

var app = express();

app.use(express.urlencoded({extended: true }));
app.use(express.json());

require("./app/routes/apiRoutes.js")(app);
require("./app/routes/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App in listening on PORT " + PORT);
});
