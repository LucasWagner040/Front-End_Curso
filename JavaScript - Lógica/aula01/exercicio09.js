const terminal = require("readline-sync")

function exe4(){
    console.log("Digite seu nome:")
    let nome = terminal.prompt();
    console.log("Digite sua profissão:")
    let profissao = terminal.prompt();
    console.log("Digite seu tempo de experiência:")
    let experiencia = terminal.prompt();

    console.log("Seu nome é: ",nome,"\nSua profissão é: ",profissao,"\nE o tempo de experiência é de: ",experiencia);
}

exe4()