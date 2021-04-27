// Importar modulos

var express = require("express");
var fetch = require("node-fetch");

// app
var app = express();

// Rota
app.get("/", function(req, res){

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(retorno => retorno.json())
    .then(retorno => console.table(retorno))

    res.end();

})

// Servidor
app.listen(8080);