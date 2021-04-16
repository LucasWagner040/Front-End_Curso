const terminal = require("readline-sync")

function verificarSituacaoEleitoral(){
    console.log("Digite sua idade:")
    let idade = parseInt(terminal.prompt());

    if(idade >= 18){
        console.log("Você tem a obrigação de fazer o titulo eleitoral")
    }else if(idade >= 16 && idade < 18){
        console.log("Você pode fazer o titulo eleitoral")
    }else{
        console.log("Você não tem a idade mínima para votar")
    }

    console.log("## Fim Da Aplicação. ##")
}

verificarSituacaoEleitoral()