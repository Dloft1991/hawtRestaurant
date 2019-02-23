var express = require("express");

var app = express();
var PORT = 3000;


var reservations = [
  {
    name: "DDD",
    phone: "786888888",
    Email: "ddd@gmail.com",
    uniqueID: "78666"
  }
];

// Server routes
app.get("/api/reservation", function (req, res) {
  res.send("Welcome to Hawt Restaurant!");
  res.json(reservations);
});


app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/make-reservation", function (req, res) {
  res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/view-reservation", function (req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});


// Takes reservation information & posts it JSON/Server.
app.post("/api/reservation", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newreservation = req.body;

  console.log(newreservation);

  // We then add the json the user sent to the character array
  reservations.push(newreservation);

  // We then display the JSON to the users
  res.json(newreservation);
});










// lsof -ti:3000 | xargs kill