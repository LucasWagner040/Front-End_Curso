const terminal = require("readline-sync")

let conta = parseInt("0");


function sacar(numero){
    numero - conta;
}

function Depositar(numero){
    numero + conta;
}

function exe24(){
    console.log(">>> MENU <<<\n")
    console.log("1 - Depositar\n2 - Vefificar Saldo\n3 - Sacar\n")
    console.log("Digite um número entre 1 e 3:")
    let numero = parseInt(terminal.prompt())
    let texto = ""
    switch(numero){
        case 1:
            texto = "Depositar"
            break;
        case 2:
            texto = "Verificar Saldo"
            break;
        case 3:
            texto = "Sacar"
            break;
        default:
            texto = "Opcão Inválida:"
    }
    console.log(`Você escolheu a opção: ${texto}`)

    if(numero = 1){
        console.log("Digite quanto quer depositar:")
        let retorno = parseInt(terminal.prompt());
        Depositar(retorno)
    }else if(numero = 2){
        console.log(`Sua conta contem: ${conta}`)
    }else if(numero = 3){
        console.log("Digite quanto quer sacar:")
        let retorno = parseInt(terminal.prompt());
        sacar(retorno)
    }
    
}
exe24()