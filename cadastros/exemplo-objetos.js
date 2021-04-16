//O que é um Objeto?
//é tudo o que tem características e executa ações
//as características são mapeadas para as variáveis de instância ou propriedades  (substantivos)
//as ações são mapeadas para as funções/metodos (verbos)

/*
Lampada
-------
características
  tamanho: [dimenções variadas]
  intensidadeDeLuz: [9000k, 6400k, etc]
  cor:  [branca, amarela, vermelha, azul]
  voltagem: [110, 220, 12, 3, etc]
  tipo: [led, fluorecente, incandecente,etc]
  formato: [bastão, espiral, oval]
Ações
  ligar
  desligar
*/

//Forma Literal
const lampada = {
    //chave:valor ==> propriedade: valor
    tamanho:'pequena',
    intensidadeDeLuz:'9000k',
    cor:'Branca',
    voltagem:'220 volts',
    tipo: 'led',
    formato:'bastão',
    ligar:function(){
        console.log('Ligando a lampada...');
    },
    desligar:function(){
        console.log('Desligando a lampada');
    }
}

console.log("Voltagem: ",lampada.voltagem);
console.log("Cor: ",lampada.cor);
console.log("Tipo: ",lampada.tipo);
lampada.ligar();
lampada.desligar();

//Função construtora

function Lampada(tamanho,intensidadeDeLuz,cor,voltagem,tipo,formato){
    this.tamanho = tamanho;
    this.intensidadeDeLuz = intensidadeDeLuz;
    this.cor = cor;
    this.voltagem = voltagem;
    this.tipo = tipo;
    this.formato = formato;
    // this.ligar = function(){
    //     console.log('Ligando a lampada...');
    // };
    // this.desligar = function(){
    //     console.log('Desligando a lampada');
    // }
}
Lampada.prototype.ligar = function(){
    console.log('Ligando a lampada...');
};

Lampada.prototype.desligar = function(){
    console.log('Desligando  a lampada...');
};

const l1 = new Lampada('Média','6000k','Amarela','220 volts','led','oval');
const l2 = new Lampada('Grande','60 watts','Branca','110 volts','incandecente','oval');

console.log("Voltagem: ",l1.voltagem);
console.log("Cor: ",l1.cor);
console.log("Tipo: ",l1.tipo);
l1.ligar();
l1.desligar();

console.log("Voltagem: ",l2.voltagem);
console.log("Cor: ",l2.cor);
console.log("Tipo: ",l2.tipo);
l2.ligar();
l2.desligar();

class Lampada2{
    constructor(tamanho,intensidadeDeLuz,cor,voltagem,tipo,formato){
        this.tamanho = tamanho;
        this.intensidadeDeLuz = intensidadeDeLuz;
        this.cor = cor;
        this.voltagem = voltagem;
        this.tipo = tipo;
        this.formato = formato;
    }
    ligar(){
        console.log("Ligando a lampada na cor ",this.cor);
    }
    desligar(){
        console.log('Desligando a lampada...');
    }
}

const l3 = new Lampada2('Grande','6000k','Amarela','220 volts','led','tubular');
console.log("");
console.log("Dados da Lampda l3");
console.log('-------------------');
console.log("Voltagem: ",l3.voltagem);
console.log("Cor: ",l3.cor);
console.log("Tipo: ",l3.tipo);
l3.ligar();
l3.desligar()