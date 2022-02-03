var http = require('http');
var root = require('./root')
var about = require('./about');
var contact = require('./contact')

var server = http.createServer(function(req, res) {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><h1>Welcome to my Node.js Application</h1></body></html>') + root;
        res.end();

    } else if (req.url == "/about") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><h1>This is the About Page</h1></body></html>') + about;
        res.end();

    } else if (req.url == "/contact") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><h1>This is the Contact Page</h1></body></html>') + contact;
        res.end();

    } else if (req.url == "/gallery") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><h1>This is the Gallery Page</h1></body></html>');
        res.end();

    } else
        res.end('Invalid Request!')
});

server.listen(5200);
console.log('NodeJS web server at port 5200 is running...')

/* Baytan Shem Ardelee Pioleen M.
   WD 201
   2/2/22
   Lab Act 1 
*/