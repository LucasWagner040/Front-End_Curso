const terminal = require("readline-sync")

function exe3(){
    console.log("Digite o nome do seu time de futebol preferifo:")
    let time = terminal.prompt();
    console.log("Seu time se futebol favorito é: ", time)
}

exe3()