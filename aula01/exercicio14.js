const terminal = require("readline-sync")

function calculador(numero1){
    return numero1 * 365;
}

function exercicio09(){
    console.log("(>> Quantos dias de vida você Tem <<)")
    console.log("Digite sua idade:")
    let idade = parseInt(terminal.prompt())
    let resultado = calculador(idade)
    console.log("------------------")
    console.log(`Você tem ${idade} anos \nE você tem ${resultado} dias de vida.`)
}
exercicio09()