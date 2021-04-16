class ServiceContato{
    constructor(repositorio){
        this.repositorio = repositorio;
    }

    inserir(contato){
        this.repositorio.inserir(contado);
    }
    atualizar(contado){
        this.repositorio.atualizar(contado);
    }
    remover(id){
        this.repositorio.remover(contado);
    }
    buscarporId(id){
        this.repositorio.buscarporId(contado);
    }
    buscarTodos(){
        this.repositorio.buscarTodos(contado);
    }
}

module.exports = ServiceContato;