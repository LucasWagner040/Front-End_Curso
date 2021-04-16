const terminal = require("readline-sync")

function isMaiorOuIgual(valor1,valor2){
    return valor1 >= valor2;
}

function isMaior(valor1,valor2){
    return valor1 > valor2;
}

function isMenorOuIgual(valor1,valor2){
    return valor1 <= valor2;
}

function isMenor(valor1,valor2){
    return valor1 < valor2;
}

function isIgual(valor1,valor2){
    return valor1 == valor2;
}

function isDiferentes(valor1,valor2){
    return valor1 != valor2;
}

function compararValores(){
    console.log("Digite o primeiro número:")
    let valor1 = parseInt(terminal.prompt())
    console.log("Digite o segundo número:")
    let valor2 = parseInt(terminal.prompt())
    console.log(`${valor1} >= ${valor2} ? ${isMaiorOuIgual(valor1,valor2)}`)
    console.log(`${valor1} > ${valor2} ? ${isMaior(valor1,valor2)}`)
    console.log(`${valor1} <= ${valor2} ? ${isMenorOuIgual(valor1,valor2)}`)
    console.log(`${valor1} < ${valor2} ? ${isMenor(valor1,valor2)}`)
    console.log(`${valor1} == ${valor2} ? ${isIgual(valor1,valor2)}`)
    console.log(`${valor1} != ${valor2} ? ${isDiferentes(valor1,valor2)}`)
}

compararValores()