// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic

var resultsData = require("../app/data/friends");


module.exports = function(app) {
    //shows the template data inside results
app.get("/api/results", function(req, res) {
    //res.json("hello");
    res.json(resultsData);
});


app.post("/api/results", function(req, res){
    var newResults = req.body; 

    newResults.routeName = newResults.name.replace(/\s+/g, "").toLowerCase(); 

    console.log(newResults);

    resultsData.push(newResults);
    res.json(resultsData);
})
};

