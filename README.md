# friendFinder

## About
A simple Friend Finder app using Express, Path and Node. Users answer 10 questions in a survey and are then shown the person who best matches there own answers.

The sum of all the users scores are compared to each other returning the potential friend that has the lowest difference from the current user.

Once the user submits data, it is posted to /api/friends where the apiRoutes file takes the data and sends back the bestMatch to be displayed in a modal.
