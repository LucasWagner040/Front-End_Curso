// Modulos
var express = require("express")
var exphbs = require("express-handlebars")
var fetch = require("node-fetch")

// Aplicação
var app = express();

// Manipular fomulario
app.use(express.urlencoded());
app.use(express.json());

// Tamplete
app.engine("handlebars", exphbs())
app.set("view engine", "handlebars")

// Rotas
app.get("/", function(req, res){

    fetch("http://localhost:3000/pessoas", {method:"GET"})
    .then(dados => dados.json())
    .then(dados => res.render("principal", {vetor:dados}))

})

app.post("/cadastrar", function(req, res){
     var pessoa = req.body;

     fetch("http://localhost:3000/pessoas", {
         method:"POST",
         body: JSON.stringify(pessoa),
         headers: { "Content-Type": "application/json" }
     })
     .then(retornar => res.redirect("/"))
})

app.listen(8080)