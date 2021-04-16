const terminal = require("readline-sync")

function somar(numero1, numero2, numero3){
    return numero1 + numero2 + numero3;
}

function exe6(){
    console.log(">>> Somador de três números <<<")
    console.log("Digite um número:")
    let valor1 = parseInt(terminal.prompt())
    console.log("Digite outro número:")
    let valor2 = parseInt(terminal.prompt())
    console.log("Digite mais um número:")
    let valor3 = parseInt(terminal.prompt())
    let resultado = somar(valor1, valor2, valor3)
    console.log("O valor somado entre eles é: ",resultado)
}
exe6()