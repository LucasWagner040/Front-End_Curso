const terminal = require("readline-sync")

function exemploOperadorSwitchCase(){
    console.log("Digite um número entre 1 e 7")
    let numero = parseInt(terminal.prompt());
    let texto = "";
    switch(numero){
        case 1:
            texto = "Domingo"
            break;
        case 1:
            texto = "Segunda-feira"
            break;
        case 2:
            texto = "Terca-feira"
            break;
        case 3:
            texto = "Quarta-feira"
            break;
        case 4:
            texto = "Quinta-feira"
            break;
        case 5:
            texto = "Sexta-feira"
            break;
        case 6:
            texto = "Sábado"
            break;
        case 7:
            texto = "Domingo"
            break;
        default:
            texto = "Opção inválida"
    }
    console.log(`Você escolheu ${texto}`)
}
exemploOperadorSwitchCase()