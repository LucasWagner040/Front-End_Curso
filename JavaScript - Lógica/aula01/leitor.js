const terminal = require('readline-sync');

function questionario(){
    console.log("Digite seu nome:");
    let nome = terminal.prompt();
    console.log("Digite sua idade");
    let idade = terminal.prompt();

    console.log("O nome informado foi ",nome);
    console.log("E a idade informada foi ",idade);
}
questionario();