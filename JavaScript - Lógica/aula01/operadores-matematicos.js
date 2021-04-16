const terminal = require("readline-sync")

function somar(numero1, numero2){
    return numero1 + numero2;
}

function subtrair(numero1, numero2){
    return numero1 - numero2;
}

function multiplicar(numero1, numero2){
    return numero1 * numero2;
}

function divitir(numero1, numero2){
    return numero1 / numero2;
}

function restoDaDivisao(numero1, numero2){
    return numero1 % numero2;
}

function executarExemploSoma(){
    console.log(">>> Soma de dois números <<<")
    console.log("Digite o primeiro número:")
    let valor1 = parseFloat(terminal.prompt())
    console.log("Digite o segundo número:")
    let valor2 = parseFloat(terminal.prompt())
    let resultado = somar(valor1,valor2)
    console.log(`A soma de ${valor1} e ${valor2} é ${resultado}`)
}

function executarExemploSublitracao(){
    console.log(">>> Subitração de dois números <<<")
    console.log("Digite o primeiro número:")
    let valor1 = parseFloat(terminal.prompt())
    console.log("Digite o segundo número:")
    let valor2 = parseFloat(terminal.prompt())
    let resultado = subtrair(valor1,valor2)
    console.log(`A subtração de ${valor1} e ${valor2} é ${resultado}`)
}

function executarExemploMultiplicacao(){
    console.log(">>> Multiplicação de dois números <<<")
    console.log("Digite o primeiro número:")
    let valor1 = parseFloat(terminal.prompt())
    console.log("Digite o segundo número:")
    let valor2 = parseFloat(terminal.prompt())
    let resultado = multiplicar(valor1,valor2)
    console.log(`A Multiplicação de ${valor1} e ${valor2} é ${resultado}`)
}

function executarExemploDivisao(){
    console.log(">>> Divisão de dois números <<<")
    console.log("Digite o primeiro número:")
    let valor1 = parseFloat(terminal.prompt())
    console.log("Digite o segundo número:")
    let valor2 = parseFloat(terminal.prompt())
    let resultado = divitir(valor1,valor2)
    console.log(`A Divisão de ${valor1} e ${valor2} é ${resultado}`)
}

function executarExemploRestodaDivisao(){
    console.log(">>> Resto da Divisão de dois números <<<")
    console.log("Digite o primeiro número:")
    let valor1 = parseFloat(terminal.prompt())
    console.log("Digite o segundo número:")
    let valor2 = parseFloat(terminal.prompt())
    let resultado = restoDaDivisao(valor1,valor2)
    console.log(`O Resto da Divião de ${valor1} e ${valor2} é ${resultado}`)
}

executarExemploSoma()
executarExemploSublitracao()
executarExemploMultiplicacao()
executarExemploDivisao()
executarExemploRestodaDivisao()