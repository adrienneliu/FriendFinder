// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic

var resultsData = require("../app/data/friends");


module.exports = function (app) {
    //shows the template data inside results
    app.get("/api/results", function (req, res) {
        //res.json("hello");
        res.json(resultsData);
    });


    app.post("/api/results", function (req, res) {
        var newResults = req.body;
        //console.log(newResults);

        //getting the scores from user input 
        var userScore = newResults.scores;
        //console.log(userScore);

        var resultDisplay = "";
        var maxDiff = 10;


        //iterate through resultsdata for comparing
        for (var i = 0; i < resultsData.length; i++) {
            var scoreDiff = 0;

            //compares user's scores with resultsdata
            for (var j = 0; j < userScore.length; j++) {
                scoreDiff = Math.abs(parseInt(resultsData[i].scores[j]) - parseInt(userScore[j]));
                // console.log("test: " + diff);
            }
            if (scoreDiff < maxDiff) {

                //give the new number to the difference
                maxDiff = scoreDiff;
                resultDisplay = resultsData[i].name;
                resultImage = resultsData[i].url;
                resultMessage = resultsData[i].message;
                // console.log("display")
                // console.log(resultDisplay);
                // console.log(resultImage);
            }

        }
        resultsData.push(newResults);
        // console.log("final")
        // console.log(resultDisplay)

//taking key and passing values to be used in survey.html
        res.json({ matchResult: resultDisplay, matchPhoto: resultImage, matchMessage: resultMessage });

    });
};

