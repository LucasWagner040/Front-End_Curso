const terminal = require("readline-sync")

function exe2(){
    console.log("Digite o nome da sua rua:")
    let rua = terminal.prompt()
    console.log("Digite o numero da sua casa:")
    let numero = terminal.prompt()
    console.log("Digite algum complemento:")
    let complemento = terminal.prompt()
    console.log("Digite o bairro de sua localidade:")
    let bairro = terminal.prompt()
    console.log("Digite o cep de onde você mora:")
    let cep = terminal.prompt()
    console.log("Digite a cidade onde você mora:")
    let cidade = terminal.prompt()

    console.log("O nome da sua rua é: ",rua,"\nO numero da sua casa é ",numero,"\nO Complemento é: ",complemento,"\nO seu bairro é: ",bairro,"\nO seu CEP é: ",cep,"\nE o nome da sua cidade é: ",cidade)
}

exe2();