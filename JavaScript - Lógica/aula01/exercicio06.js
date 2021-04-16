const terminal = require("readline-sync")

function exe1(){
    console.log("Digite o nome da sua cidade:")
    let cidade = terminal.prompt();
    console.log("Sua cidade é ", cidade)
}

exe1()