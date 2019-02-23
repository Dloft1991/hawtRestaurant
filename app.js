var express = require("express");

var app = express();
var PORT = 3000;




// Server routes
app.get("/", function(req, res) {
    res.send("Welcome to the Star Wars Page!");
  });
  
  app.get("/yoda", function(req, res) {
    res.json(yoda);
  });
  
  app.get("/darthmaul", function(req, res) {
    res.json(darthmaul);
  });


  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  



// lsof -ti:3000 | xargs kill