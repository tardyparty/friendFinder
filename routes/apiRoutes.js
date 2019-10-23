var friendsData = require('../data/friends.js');

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
console.log("Logic is running...")
        // sum of user scores
        var userScore = 0;

        // lowest current difference and the object for it
        var currentMatchScore = 0;
        var bestMatch;


        // sum of all user scores
        for (var i = 0; i < req.body.scores.length; i++) {
            userScore += parseInt(req.body.scores[i]);
        }

        console.log("userScore = " + userScore);

        // for every potential match...
        for (var i = 0; i < friendsData.length; i++) {

            // total score for the current user
            var currentPotentialMatchScore = 0;

            // current lowest difference of each potential match and the current user
            var bestMatchDifference = 100;
            var bestMatch;
            
            // for every score within the current potential match's scores...
            for (var z = 0; z < friendsData[i].scores.length; z++) {

                // add up all of the potential matches scores
                currentPotentialMatchScore += parseInt(friendsData[i].scores[z]);
            }

            console.log("currentPotentialMatchScore = " + currentPotentialMatchScore);

            // if the currentPotentialMatchScore is higher, subtract the user score from it to return a positive difference
            if (userScore <= currentPotentialMatchScore) {
                var currentDifference = currentPotentialMatchScore - userScore;
                console.log("currentDifference = " + currentDifference);

                // if the difference is lower than the currents best match score, make it the new best match
                if (currentDifference < bestMatchDifference) {
                    bestMatchDifference = currentDifference;
                    bestMatch = friendsData[i];
                }
            }

            // user score was the bigger number so subract currentPotentialMatchScore from it to return positive difference
            else {
                currentDifference = userScore - currentPotentialMatchScore;

                // if the difference is lower than the current best match difference, make it the new best match
                if (currentDifference < bestMatchDifference) {
                    bestMatchDifference = currentDifference;
                    bestMatch = friendsData[i];
                }
            }
        }

        console.log("bestMatch = " + bestMatch);

        // send the best match back as a json object
        res.json(bestMatch);

        // i think the actual logic goes in here?
        friendsData.push(req.body);
    });
}

