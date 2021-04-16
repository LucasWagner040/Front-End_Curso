const terminal = require("readline-sync")

function getMensagem(nota){
    let mensagem = "";
    if(nota >= 7){
        mensagem = "reprovado"
    }else{
        mensagem = "Aprovado"
    }
    return mensagem;
}

function exercicio01(){
    console.log("Informe a nota do aluno");
    let nota = parseInt(terminal.prompt());
    let resultado = getMensagem(nota);
    console.log(`O Aluno foi ${resultado}`)
}
exercicio01()