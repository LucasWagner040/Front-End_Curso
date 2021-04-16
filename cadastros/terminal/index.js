const terminal = require('readline-sync')
const ServicoContato = require('..app/contato').esrvico;
const ContatoController = require('./controle-contato');
const CadastrosContato = require('./cadastro-contato')

function inicial(){
    const ContatoController = new ContatoController(ServicoContato)
    const CadastrosContato = new CadastrosContato
}