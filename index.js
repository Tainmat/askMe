const express = require('express');
const app = express();
const port = 8080;

/* Atribuindo EJS como View Engine */
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/ask', (req, res) => {
  res.render('ask.ejs')
})

app.listen(port, () => {
    console.log(`[APP IS RUN]: http://localhost:${port}/`);
});
