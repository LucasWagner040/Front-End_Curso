function test(nota1,nota2,nota3){
    let media = nota1 + nota2 + nota3 / 3;
    
    if(media >= 7){
        console.log("Aprovado")
    }else{
        console.log("Reprovado")
    }
}
function getMensagem(media){
    // let mensagem = "";
    if(media >= 7){
        console.log("Aprovado")
    }else{
        console.log("Reprovado")
    }
}

function calculador(nota1,nota2,nota3){
    return nota1 + nota2 + nota3 / 3;
}