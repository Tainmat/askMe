const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;

/* Atribuindo EJS como View Engine */
app.set("view engine", "ejs");
app.use(express.static("public"));

/* Body Parser */
app.use(bodyParser.urlencoded({ extend: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/ask", (req, res) => {
  res.render("ask.ejs");
});

app.post("/saveask", (req, res) => {
  var tittle = req.body.titulo;
  var description = req.body.descricao;
  res.send(`[Tittle]: ${tittle} | [Description]: ${description}`);
});

app.listen(port, () => {
  console.log(`[APP IS RUN]: http://localhost:${port}/`);
});
