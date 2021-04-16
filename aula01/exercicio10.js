const terminal = require("readline-sync")

function exe5(){
    console.log("Digite o ano em que você nasceu:")
    let anoDeNascimento = terminal.prompt();
    console.log("Você nasceu em: ", anoDeNascimento)
}

exe5()