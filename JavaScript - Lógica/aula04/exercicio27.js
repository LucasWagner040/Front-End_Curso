const terminal = require("readline-sync")

function exercicioFatorial(){
    //solicitar um número entre 1 e 10
    console.log("Digite um número entre 1 e 10:")
    let numero = parseInt(terminal.prompt())
    //validar se o número esta fora do range
    while (numero < 1 || numero > 10){ //enquanto estiver fora do range
        console.log("Digite um número entre 1 e 10:")
        numero = parseInt(terminal.prompt())
    }

    //calcular o fatoral
    let fatorial = 1;
    while(numero > 1){
        fatorial = fatorial * numero
        numero--
    }

    //Mostrar o resultado
    console.log("O fatorial do número é "+fatorial)
}
exercicioFatorial()

// function lerNumero(){
//     console.log("Digite um número entre 1 e 10")
//     let numero = parseInt(terminal.prompt())
//     return numero
// }

// function isNumeroValido(){
//     return numero >= 1 && numero <= 10
// }

// function exercicio2Fatorial(){
//     //solisitar núemro entre 1 e 10
//     let numero = lerNumero()
//     //validar número 
//     while(!isNumeroValido(numero)){
        // numero = lerNumero()
//     }
//     //calcular fatorial
//     //mostar o resultado
// }