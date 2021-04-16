const terminal = require("readline-sync")

function calculo(numero1, numero2){
    return numero1 / numero2;
}

function exercicio10(){
    console.log("(>> Calculo que apresente a média de km/l gasto na viagem <<)")
    console.log("Digite quantos quilomentros você percoreu:")
    let quilometros = parseFloat(terminal.prompt())
    console.log("Digite quantos litros de gasolina você gastou:")
    let gasolina = parseInt(terminal.prompt())
    let resultado = calculo(quilometros, gasolina)
    console.log("A média de quilometros percorridos por quilometro foi ",resultado)
}
exercicio10()