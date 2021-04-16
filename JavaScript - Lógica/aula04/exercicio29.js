// Escreva um programa que solicite o preço de 
// um produto e o valor de desconto a ser aplicado, em seguida calcule 
// o novo valor do produto com o desconto aplicado 
// (Usem o comando window.alert(novoPreco)).
//  O programa deve voltar a executar automaticamente até que o usuário 
// digite o valor 0 como preço do produto.
const terminal = require("readline-sync")

let preco = 0
let desconto = 0

function pedirpreço(){
    console.log("Digite o preço do produto:")
    return preco = parseInt(terminal.prompt())
    
}
function calculardesconto(desconto){
    desconto = preco - desconto
    return desconto;
}
function mostrarMensagem(){
    console.log(`O Preço atual do seu produto foi: ${desconto}`)
}
function final(){
    pedirpreço()
    mostrarMensagem(calculardesconto(desconto))
}
final()