var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  });
  return Burger;
};


// CREATE TABLE burgers
// (
//   id int NOT NULL AUTO_INCREMENT,
//   burger_name varchar(255) NOT NULL,
//   devoured BOOLEAN DEFAULT false,
//   createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
//   PRIMARY KEY (id)
// );