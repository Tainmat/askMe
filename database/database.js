const Sequelize = require("sequelize");

const connection = new Sequelize("askquestion", "root", "T@ina2022#*", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
