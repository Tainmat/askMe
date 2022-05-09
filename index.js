const express = require('express');
const app = express();
const port = 8080;

/* Atribuindo EJS como View Engine */
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/:nome/:lang', (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var showMessage = false;

    var products = [
        { name: 'Doritos', price: 3.14 },
        { name: 'Coca-Cola', price: 5.0 },
        { name: 'Trakinas', price: 2.00}
    ];

    res.render('index.ejs', {
        nome: nome,
        lang: lang,
        message: showMessage,
        company: 'MTCorp',
        products: products,
    });
});

app.listen(port, () => {
    console.log(`[APP IS RUN]: http://localhost:${port}/`);
});
