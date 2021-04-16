const terminal = require("readline-sync")

function exemploListas(){
    let frutas = ['abacaxi','Maracuja','banana']
    let notas = [9.5, 10, 7.8, 9]
    let nomes = [];
    nomes[0] = 'João'
    nomes[1] = 'Maria'
    nomes[2] = 'Ana'

    console.log("A Quantidade de frutas é ",frutas.length)
    console.log("A Quantidade de notas é ",notas.length)
    console.log("A Quantidade de nomes é ",nomes.length)

    console.log("As frutas são");
    console.log(frutas[0])
    console.log(frutas[1])
    console.log(frutas[2])
    let index = 0;
    console.log("Os Nomes são")
    while(index < nomes.length){
        console.log(nomes[index])
        index++
    }

    let cursos = [];
    index = 0;
    while(index < 5){
        console.log("Digite o nome do curso (",(index+1),"/5)");
        cursos[index] = terminal.prompt();
        index++
    }
    index = 0
    console.log("Os cursos informados foram: ")
    while(index < cursos.length){
        console.log(cursos[index++]);
    }

    let cidades = []
    console.log("Digite o nome de 5 cidades que você gostaria de visitar:")
    while(cidades.length < 5){
        cidades.push(terminal.prompt())
    }
    index = 0
    console.log("As cidades informadas foram:")
    while(index < cursos.length){
        console.log(cursos[index++]);
    }
}
exemploListas()