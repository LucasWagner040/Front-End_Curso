// Inportar express
var express = require("express");

// Inportar o body-parser
// var bodyParser = require("body-parser");

// app
var app = express();

// configurar body-parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// var vetor = [{'nome':'Lucas'}]

// Rotas
app.get('/', function(req, res){
    res.sendFile(__dirname + '/formulario.html')
})

app.post("/receber", function(req, res){
    res.write("O nome informado foi " + req.body.nome)
    res.end();
})

// Servidor
app.listen(8080)