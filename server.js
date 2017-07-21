// *------ Require express, method-override, and body-parser -----*
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var app = express();
// *----- This let's server to listen to the local-host 3000 -----*
var PORT = process.env.PORT || 3000;

// Loads the the function as middleware, resulting of the app.use()

app.use(express.static(__dirname + "/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);
app.listen(PORT, function() {

  console.log("Listening on port:%s", PORT);
});