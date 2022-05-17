const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database.js");
const QuestionModel = require("./database/Question.js");
const port = 8080;

/* Database */
connection
  .authenticate()
  .then(() => {
    console.log("[SUSSESSFULL]");
  })
  .catch(() => {
    console.log(msgErro);
  });

/* Atribuindo EJS como View Engine */
app.set("view engine", "ejs");
app.use(express.static("public"));

/* Body Parser */
app.use(bodyParser.urlencoded({ extend: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  QuestionModel.findAll({ raw: true, order: [["createdAt", "DESC"]] }).then(
    (questions) => {
      res.render("index.ejs", {
        questions: questions,
      });
    }
  );
});

app.get("/ask", (req, res) => {
  res.render("ask.ejs");
});

app.post("/saveask", (req, res) => {
  var title = req.body.titulo;
  var description = req.body.descricao;
  // res.send(`[Tittle]: ${tittle} | [Description]: ${description}`);

  QuestionModel.create({
    /* INSERT */ NM_TITL: title,
    DS_QUES: description,
  }).then(() => {
    res.redirect("/");
  });
});

app.get("/asks/:id", (req, res) => {
  var idAsk = req.params.id;

  QuestionModel.findOne({
    where: { id: idAsk },
  }).then((question) => {
    if (question != undefined) {
      res.render("asks", {
        questionId: question,
      });
    } else {
      res.redirect("/");
    }
  });
});

app.listen(port, () => {
  console.log(`[APP IS RUN]: http://localhost:${port}/`);
});
