// Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.

//package dependencies
var express = require("express"); 
var path = require("path"); 
var bodyParser = require("body-parser");

//setting up Express
var app = express();
var PORT = process.env.PORT || 8080; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// routes to data in other folders
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


//check if server is listening connected
app.listen(PORT, function() {
    console.log("Listening on PORT http://localhost:" + PORT);
});