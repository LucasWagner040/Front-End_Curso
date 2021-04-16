const terminal = require("readline-sync")

//Pedir o nome de 10 pessoas
function exercicio30(){
    console.log("Digite o nome de 10 pessoas:")
    let nomes = [];
    let index = []

    while(index < 10){
        console.log("Digite o ",index+1," nome")
        nomes[index] = terminal.prompt();
        index++
    }
    index = 0
    console.log("Os nomes informados foram: ")
    while(nomes < index.length){
        console.log(nomes[index++]);
    }
}
exercicio30()