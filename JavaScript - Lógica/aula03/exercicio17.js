const terminal = require("readline-sync")

function media(nota1,nota2,nota3){
    return nota1 + nota2 + nota3 / 3;
}

function calculo(){
    if(media >= 7){
        console.log("O Aluno foi Aprovado!")
    }else{
        console.log("O Aluno Foi Reprovado!")
    }
}

function exercicio02(){
    console.log("Informe a primeira nota do aluno:");
    let nota1 = parseInt(terminal.prompt());
    console.log("Digite a segunda nota do aluno:")
    let nota2 = parseInt(terminal.prompt());
    console.log("Digite a terceira nota do aluno:")
    let nota3 = parseInt(terminal.prompt());
    media(nota1,nota2,nota3)
    calculo(nota1,nota2,nota3)
}
exercicio02()