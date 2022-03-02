//Name: Baytan Shem Ardelee Pioleen M.
//App Name: First App
//Description: Checking if Express runs
const { response } = require("Express");
var express = require("Express");

var app = express();

app.get("/", function(request, response) {
    response.send("Hello World!");
});

app.listen(5500, function() {
    console.log('Server running at http://localhost:5500')
});