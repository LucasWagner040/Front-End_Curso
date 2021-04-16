const terminal = require("readline-sync")

function exe23(){
    console.log(">>> Número Do Mês <<<\n")
    console.log("Digite um número entre 1 e 12:")
    let numero = parseInt(terminal.prompt())
    let texto = ""

    switch(numero){
        case 1:
            texto = "Janeiro"
            break;
        case 2:
            texto = "Fevereiro"
            break;
        case 3:
            texto = "Março"
            break;
        case 4:
            texto = "Abriu"
            break;
        case 5:
            texto = "maio"
            break;
        case 6:
            texto = "Junho"
            break;
        case 7:
            texto = "Julho"
            break;
        case 8:
            texto = "Agosto"
            break;
        case 9:
            texto = "Setembro"
            break;
        case 10:
            texto = "Outubro"
            break;
        case 11:
            texto = "Novembro"
            break;
        case 12:
            texto = "Dezembro"
            break;
        default:
            texto = "Opção inválida"
    }
    console.log(`Você escolheu: ${texto}`)
}
exe23()