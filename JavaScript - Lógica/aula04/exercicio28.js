const terminal = require("readline-sync")

//solisitar 3 notas
function solicitarNota(){
    console.log("Digite á primerira nota:")
    nota1 = parseInt(terminal.prompt())
    console.log("Digite á segunda nota:")
    while(nota1 < 1){
        nota2 = parseInt(terminal.prompt())
        console.log("Digite á terceira nota:")
        nota3 = parseInt(terminal.prompt())

        const media = (nota1 + nota2 + nota3 ) /3;

        console.log(`A media das notas é ${media}`)

        
    }
}
//mostrar resultado
function final(){
    solicitarNota()
    let media = calcularMedia()
    console.log(`A média das notas é ${media}`)
}
final()