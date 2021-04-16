const terminal = require("readline-sync")

function mediaDeTresNumeros(numero1, numero2, numero3){
    return numero1 + numero2 + numero3 / 3;
}

function total(valor1, valor2, valor3){
    return valor1 + valor2 + valor3;
}

function executarAcao(){
    console.log(">>> Media de Três Notas <<<")
    console.log("Digite a primeira nota:")
    let nota1 = parseFloat(terminal.prompt())
    console.log("Digite a segunda nota:")
    let nota2 = parseFloat(terminal.prompt())
    console.log("Digite a terceira nota:")
    let nota3 = parseFloat(terminal.prompt())
    let soma = total(nota1, nota2, nota3)
    let media = mediaDeTresNumeros(nota1, nota2, nota3)
    console.log(`>>> RESULTADO <<<\n`)
    console.log(`A Soma entre as notas é ${soma}\nE a média entre eles é ${media}`)
}

executarAcao()