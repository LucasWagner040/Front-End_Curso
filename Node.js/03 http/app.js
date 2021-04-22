// Modulo HTTP
var http = require("http");

// Configuraro modulo http
http.createServer(function(req, res){
    res.write("Hello World aprendendo");
    res.end();
}).listen(8080)