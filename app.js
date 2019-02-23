var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
  {
    date: "",
    name: "DDD",
    phone: "786888888",
    Email: "ddd@gmail.com",
    uniqueId: "78666"
  },
];

// Server routes
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/make-reservation", function (req, res) {
  res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/view-reservation", function (req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/api/reservations", function (req, res) {
  res.json(reservations);
});


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});


// Takes reservation information & posts it JSON/Server.
app.post("/api/reservations", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var customer = req.body;

  console.log(customer);

  // We then add the json the user sent to the character array
  reservations.push(customer);

  // We then display the JSON to the users
  res.json(customer);
});

// lsof -ti:3000 | xargs kill