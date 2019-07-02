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

    //newResults.routeName = newResults.name.replace(/\s+/g, "").toLowerCase(); 
    console.log(newResults);

    //getting the scores from user input 
    var userScore = newResults.scores; 
    //console.log(userScore);

    //iterate through resultsdata for comparing
    for (var i=0; i<resultsData.length; i++) {
        var diff = 0; 

        //compares user's scores with resultsdata
        for (var j=0; j<userScore.length; j++) {
            diff = Math.abs(parseInt(resultsData[i].scores[j]) - parseInt(userScore[j]));
            console.log("test: " + diff);
        }
    }
    resultsData.push(newResults);
})
};

