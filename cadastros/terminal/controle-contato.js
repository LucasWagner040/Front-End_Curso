const Contato = require('../app/contato/contato')
class ContatoController{
    constructor(servico){
        this.servico = servico;
    }
    getTotalContatdos(){
        return this.servico.buscarTodos();
    }
    getContato(index){
        const contatos = this.servico.buscarTodos();
        if(index > -1 && index < contatos.length){
            return {...contatos[index]}
        }else{
            return null;
        }
    }
    criarContato(nome,email,telefone){
        const contato = new Contato(null,nome,email,telefone);
        if(contato){
            return {...contato}
        }else{
            return null;
        }
    }
    atualizarContato(contato){
        this.servico.atualizar(contato);
    }
    removerContato(contato){
        if(contato){
            this.servico.remover(contato.id)
        }
    }
}