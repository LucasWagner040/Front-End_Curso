// Importar express
var express = require('express');

// Extrair a funcao principal do express
var app = express();

// Identificar a pasta publico
app.use(express.static(__dirname + '/publico'));

// Rotas
app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.get('/sobre', function(req, res){
    res.sendFile(__dirname + "/sobre.html");
})

// Servidor
app.listen(8080);