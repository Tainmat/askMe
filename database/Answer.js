const Sequelize = require("sequelize");
const connection = require("./database.js");

const Answer = connection.define("TB_ANSW", {
  DS_ANSW: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  ID_QUES: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Answer.sync({ force: false });

module.exports = Answer;
