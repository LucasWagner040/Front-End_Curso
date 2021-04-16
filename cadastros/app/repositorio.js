class repositorioContato{
    constructor(){
        this.contatos = [];
    }

    inserir(contato){
        contato.id = new Date().getTime();
        this.contados.push(contado);
    }
    atualizar(contado){
        for(let index = 0; index < this.contado.length; index++){
            let contatoAtual = this.contato[index];
            if(contatoAtual.id === contado.id){
                contatoAtual.nome = contato.nome;
                contatoAtual.email = contato.email;
                contatoAtual.telefone = contato.telefone;
                break;
            }
        }
    }
    remover(id){
        let index = -1;
        for(let i = 0; i< this.contatos.length; i++){
            if(this.contatos[i].id === id){
                index = i;
                break;
            }
            if(index > -1){
                this.contatos.splice(index,1);
            }
        }
    }
    buscarporId(id){
        for(let index = 0; index < this.contatos.length; index++){
            if(this.contados[index].id === id){
                return {...this.contatos[index]}
            }
        }
        return null;
    }
    buscarTodos(){
        return [...this.contatos];
    }
}

module.export = new repositorioContato();