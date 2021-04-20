
var aluno = [];

var situacao;

var aprovados = 0;
var reprovado = 0;

function cadastrar(){
    var nome = document.getElementById("aluno");
    var nota1 = document.getElementById("nota1");
    var nota2 = document.getElementById("nota2");

    aluno.push({'nome':nome.value, 'nota1':nota1.value, 'nota2':nota2.value})

    nome.value = '';
    nota1.value = "";
    nota2.value = "";

    

    nome.focus();

    listar()
}

function listar(){
    var tabela = document.getElementById("tabela")

    tabela.innerHTML = "";

    for (var indice = 0; indice < aluno.length; indice++) {

        var media = (parseInt(aluno[indice].nota1) + parseInt(aluno[indice].nota2)) /2;



        situacao = media >= 7?"Aprovado" : "Reprovado";

        var linha = tabela.insertRow(-1)

        linha.classList.add(situacao == "Aprovado" ? "table-success" : "table-danger");

        var coluna1 = linha.insertCell(0);
        var coluna2 = linha.insertCell(1);
        var coluna3 = linha.insertCell(2);
        var coluna4 = linha.insertCell(3);
        var coluna5 = linha.insertCell(4);
        var coluna6 = linha.insertCell(5);
        var coluna7 = linha.insertCell(6);

        coluna1.innerHTML = indice + 1
        coluna2.innerHTML = aluno[indice].nome;
        coluna3.innerHTML = aluno[indice].nota1;
        coluna4.innerHTML = aluno[indice].nota2;
        coluna5.innerHTML = media;
        coluna6.innerHTML = situacao
        coluna6.style.color = situacao == "Aprovado" ? "green" : "red";
       
        coluna7.innerHTML = "<button class='btn btn-warning' onclick='selecionar(" + indice + ")'>Selecionar</button>"
    }
}