const Sequelize = require("sequelize");
const connection = require("./database.js");

const Question = connection.define("TB_QUES", {
  NM_TITL: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  DS_QUES: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

Question.sync({ force: false }).then(() => {});

module.exports = Question;
