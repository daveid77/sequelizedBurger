// Dependencies
// =============================================================

// Requiring our Burger model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get('/', function(req, res) {
    db.Burger.findAll(
      {
        order: [['burger_name', 'ASC']]
      }
      ).then(function(dbBurger) {
      // res.json(dbBurger);
      var hbsObject = {
        burger: dbBurger
      };
      res.render('index', hbsObject);
    });
  });

  // POST route for saving a new burger
  app.post('/api/burgers', function(req, res) {
    console.log(req.body);
    db.Burger.create({
      burger_name: req.body.name,
      devoured: false
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  app.put('/api/burgers/:id', function(req, res) {
    console.log(req.params.id);
    db.Burger.update({
      devoured: true,
      }, {
      where: {
        id: req.params.id
      }
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

};
