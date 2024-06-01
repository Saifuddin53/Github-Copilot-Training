// Create web server 
// Create a route for comments
// Create a route for comments/new
// Create a route for comments/:commentId
// Create a route for comments/:commentId/edit
// Create a route for comments/:commentId/delete

// Require the express module
var express = require('express');

// Create a new web server
var app = express();

// Set up a route for comments
app.get('/comments', function(request, response) {
  response.send('This is the comments page');
});

// Set up a route for comments/new
app.get('/comments/new', function(request, response) {
  response.send('This is the new comments page');
});

// Set up a route for comments/:commentId
app.get('/comments/:commentId', function(request, response) {
  response.send('This is the page for comment ' + request.params.commentId);
});

// Set up a route for comments/:commentId/edit
app.get('/comments/:commentId/edit', function(request, response) {
  response.send('This is the edit page for comment ' + request.params.commentId);
});

// Set up a route for comments/:commentId/delete
app.get('/comments/:commentId/delete', function(request, response) {
  response.send('This is the delete page for comment ' + request.params.commentId);
});

// Start the web server on port 3000
app.listen(3000, function() {
  console.log('Web server is listening on port 3000');
});