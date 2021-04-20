// Vetor
var clientes = [];

var posicaoCliente;

// Adiconar vetor no local storage
function vetorLocal(){
    localStorage.setItem("dados", JSON.stringify(clientes));
}

// Verifica se há JSON no LocalStorage
window.onload = function(){
    if(localStorage.getItem("dados") != null){
        clientes = JSON.parse(localStorage.getItem("dados"))
        listar();
    }
}

// Cadastrar
function cadastrar() {
    var nome = document.getElementById("nome")
    var idade = document.getElementById("idade")

    // Enviar para o vetor
    clientes.push({ 'nome': nome.value, 'idade': idade.value });

    // Limpar campos
    nome.value = '';
    idade.value = '';

    // Cuersos no campo nome
    nome.focus();

    alert("Cliente cadastrado com sucesso!")

    // console.table(clientes)

    listar()

    // Cadastrar Dados Localmente
    vetorLocal()
}

// Listar
function listar() {
    // Obter tabela
    var tabela = document.getElementById("tabela")

    // Limpar os conteudos da tabela
    tabela.innerHTML = "";

    // Loço derepetição
    for (var indice = 0; indice < clientes.length; indice++) {

        // Inserir Linha
        var linha = tabela.insertRow(-1)

        // colunas
        var coluna1 = linha.insertCell(0);
        var coluna2 = linha.insertCell(1);
        var coluna3 = linha.insertCell(2);
        var coluna4 = linha.insertCell(3);

        // Vetor
        coluna1.innerHTML = indice + 1
        coluna2.innerHTML = clientes[indice].nome
        coluna3.innerHTML = clientes[indice].idade
        coluna4.innerHTML = "<button class='btn btn-warning' onclick='selecionar(" + indice + ")'>Selecionar</button>"
    }
}

// Selecionar
function selecionar(posicao) {
    document.getElementById("nome").value = clientes[posicao].nome;
    document.getElementById("idade").value = clientes[posicao].idade;

    posicaoCliente = posicao;

    // Botão
    document.getElementById("botao_cadastrar").style.display = "none"
    document.getElementById("botao_alterar").style.display = "inline-block"
    document.getElementById("botao_excluir").style.display = "inline-block"
    document.getElementById("botao_cancelar").style.display = "inline-block"
}

// Altarar
function alterar() {
    // Obter dacos do formulario
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;

    // alterar no vetor
    clientes[posicaoCliente] = { 'nome': nome, 'idade': idade }

    listar()

    cancelar()

    // Cadastrar Dados Localmente
    vetorLocal()
}

// Excluir
function excluir() {

    // valida exclucao
    var valida = confirm("Deseja realmente remover esse cliente?")

    // Condicional
    if (valida == true) {
        // Remover Vetor
        clientes.splice(posicaoCliente, 1)

        // Atuatizar tabela
        listar();

        // Limpar Campos
        cancelar();
    }else{
        alert("Cliente Não Removido.")
    }

    // Cadastrar Dados Localmente
    vetorLocal()


}

// Cancelar
function cancelar() {

    document.getElementById("nome").value = ""
    document.getElementById("idade").value = ""

    document.getElementById("nome").focus();

    // Botão
    document.getElementById("botao_cadastrar").style.display = "inline-block"
    document.getElementById("botao_alterar").style.display = "none"
    document.getElementById("botao_excluir").style.display = "none"
    document.getElementById("botao_cancelar").style.display = "none"
}