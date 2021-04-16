const terminal = require("readline-sync")

function soma(numero1){
    return numero1 + 30;
}

function exercicio08(){
    console.log(">>> Digite Sua Idade: <<<")
    let idade = parseInt(terminal.prompt())
    let trintaanosdepois = soma(idade);
    console.log(">>> Espectativa <<<")
    console.log(`Você tem ${idade} anos.\nE Terá ${trintaanosdepois}anos daqui 30 anos! `)
}
exercicio08()