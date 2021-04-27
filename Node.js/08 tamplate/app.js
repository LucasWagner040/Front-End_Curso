var express = require('express');
var exphbs  = require('express-handlebars');
var fetch = require("node-fetch")

var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {

    let usuarios = [
        {"nome":"Amanda", "idade":38},
        {"nome":"Paulo", "idade":17}
    ]

    res.render('inicio', {gostandoDeNode:true, vetor:usuarios});
});

app.get('/sobre', function (req, res) {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(dados => dados.json())
    .then(dados => res.render('sobre', {vetor:dados}))
});

app.get('/contato', function (req, res) {
    res.render('contato');
});

app.listen(8080);