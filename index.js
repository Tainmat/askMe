const express = require('express');
const app = express();
const port = 8080;

/* Atribuindo EJS como View Engine */
app.set('view engine', 'ejs');

app.get('/:nome/:lang', (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var showMessage = false;
    res.render('index.ejs', {
        nome: nome,
        lang: lang,
        message: showMessage,
        company: 'MTCorp',
    });
});

app.listen(port, () => {
    console.log(`[APP IS RUN]: http://localhost:${port}/`);
});
