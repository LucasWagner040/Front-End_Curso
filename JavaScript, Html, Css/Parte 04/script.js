
var produtos = [];

var posicaoCliente;

function cadastrar(){
    var nome = document.getElementById("nome")
    var marca = document.getElementById("marca")
    var valor = document.getElementById("valor")

    produtos.push({'nome':nome.value, 'marca':marca.value, 'valor':valor.value})

    nome.value = '';
    marca.value = '';
    valor.value = '';

    nome.focus();

    listar()
}

function listar(){
    var tabela = document.getElementById("tabela")

    tabela.innerHTML = "";

    for (var indice = 0; indice < produtos.length; indice++) {

        var linha = tabela.insertRow(-1)

        var coluna1 = linha.insertCell(0);
        var coluna2 = linha.insertCell(1);
        var coluna3 = linha.insertCell(2);
        var coluna4 = linha.insertCell(3);
        var coluna5 = linha.insertCell(4);

        coluna1.innerHTML = indice + 1
        coluna2.innerHTML = produtos[indice].nome;
        coluna3.innerHTML = produtos[indice].marca;
        coluna4.innerHTML = "R$ "+ produtos[indice].valor;
        coluna5.innerHTML = "<button class='btn btn-warning' onclick='selecionar(" + indice + ")'>Selecionar</button>"
    }
}

function selecionar(posicao) {
    document.getElementById("nome").value = produtos[posicao].nome;
    document.getElementById("marca").value = produtos[posicao].marca;
    document.getElementById("valor").value = produtos[posicao].valor;

    posicaoCliente = posicao;

    // Botão
    document.getElementById("botao_cadastrar").style.display = "none"
    document.getElementById("botao_alterar").style.display = "inline-block"
    document.getElementById("botao_excluir").style.display = "inline-block"
    document.getElementById("botao_cancelar").style.display = "inline-block"
}

function alterar() {
    var nome = document.getElementById("nome").value;
    var marca = document.getElementById("marca").value;
    var valor = document.getElementById("valor").value;

    produtos[posicaoCliente] = { 'nome': nome, 'marca': marca, 'valor':valor }

    listar()

    cancelar()
}

function excluir() {

    var valida = confirm("Deseja realmente remover esse Produto?")

    if (valida == true) {
        produtos.splice(posicaoCliente, 1)

        listar();

        cancelar();
    }else{
        alert("Cliente Não Removido.")
    }
}


// Cancelar
function cancelar() {

    document.getElementById("nome").value = ""
    document.getElementById("marca").value = ""
    document.getElementById("valor").value = ""

    document.getElementById("nome").focus();

    // Botão
    document.getElementById("botao_cadastrar").style.display = "inline-block"
    document.getElementById("botao_alterar").style.display = "none"
    document.getElementById("botao_excluir").style.display = "none"
    document.getElementById("botao_cancelar").style.display = "none"
}