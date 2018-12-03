const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-max", "root", "", {
  dialect: "mysql",
  host: "localhost",
  operatorsAliases: false
});

module.exports = sequelize;
