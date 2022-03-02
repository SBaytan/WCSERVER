var express = require('express');
var app = express();

app.use(express.static('public'))
app.get("/index.html", function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});

app.get("/process_get", function(req, res) {
    response = {
        fname: req.query.fname,
        lname: req.query.lname,
        course: req.query.course,
        age: req.query.age,
        comments: req.query.comments
    };
    console.log(response);
    res.end(JSON.stringify(response))
});

var server = app.listen(5550, function() {
    var host = server.address().address
    var port = server.address().port

    console.log('Server running at http://%s:%s', host, port);
});