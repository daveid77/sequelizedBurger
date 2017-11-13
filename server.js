// GITHUB REPO: https://github.com/dbmarshall/burger.git 
// HEROKU APP: https://burger-davidm.herokuapp.com/
// HEROKU GIT: https://git.heroku.com/burger-davidm.git 

// Initial Dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// Express Server
var app = express();
var PORT = process.env.PORT || 6060;

// Make available static files in /public/ directory
app.use(express.static('./public'));

// Parsing 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routing
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

// app.get('/', function (req, res) {
//   res.send('Got a GET request')
// })

// Server Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


