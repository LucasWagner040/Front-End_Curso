const terminal = require("readline-sync")

function exercicio(){
    let opcao = 0;
    while(opcao < 10 || opcao > 20){
        console.log("Dgite um número entre 10 e 20")
        opcao = parseInt(terminal.prompt())
    }
    while(opcao >= 0){
        console.log(opcao);
        opcao--;
    }
}
exercicio()

// function exemploOperadorWhile(){
//     console.log("Digite Um número entre 10 e 20:")
//     let numero = parseInt(terminal.prompt())
//     if(numero >= 10 && numero <= 20){
//         while(numero = 0){
//             console.log(`${numero}`)
//             numero--
//         }
//     }else{
//         console.log("Numero Invalido:\nTente Dinovo")
//     }
// }

// exemploOperadorWhile()