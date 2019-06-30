// Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.

var express = require("express"); 
var path = require("path"); 
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080; 

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// Add middleware for parsing incoming request bodies
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));



// require("/.routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("Listening on PORT http://localhost:" + PORT);
});