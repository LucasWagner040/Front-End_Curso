class CadastrosContato{
    constructor(controle, terminal){
        this.controle = controle;
        this.terminal = terminal;
    }

    mostrarMenu(){
        let opcao = -1;
        while(opcao != 5){
            console.log("========================")
            console.log("        Menu Contados")
            console.log("========================")
            console.log("1 - Lista contados")
            console.log("2 - Inserir novo contato")
            console.log("3 - Atualizar Contato")
            console.log("4 - Remover Contato")
            console.log("5 - Voltar ao menu principal")
            opcao = parseInt(this.terminal.prompt());
            this.executar(opcao);
        }
    }
    executar(opcao){
        switch(opcao){
            case 1:
                this.listarContatos()
                break;
            case 2:
                this.inserirContatos()
                break;
            case 3:
                this.atualizarContato()
                break;
            case 4:
                this.removerContato()
                break;
        }
        if(opcao < 1 || opcao > 5){
            console.log("Opção Inválida");
        }
    }
    listarContatos(){
        console.log("========================")
        console.log("   Lista de Contatos")
        console.log("========================")
        const totalContatos = this.controle.getTotalContatos();
        if(totalContatos === 0){
            console.log('Não existe contatos Cadastrados')
        }else{
            for(let index = 0; index < totalContatos; index++){
                const contato = this.controle.getContato(index);
                const {id,nome,email,telefone} = contato;
                console.log(`${id} - ${nome} - ${email} - ${telefone}`)
            }
        }
    }
    inserirContatos(){
        console.log("========================")
        console.log("  Inserir Novo Contato")
        console.log("========================")
        console.log('informe o nome do contato:');
        const nome = this.terminal.prompt();
        console.log('informe o email do contato:');
        const email = this.terminal.prompt();
        console.log('informe o telefone do contato:');
        const telefone = this.terminal.prompt();
        this.controle.criarContato(nome,email,telefone);
        console.log('Cadastro Realizado');
    }
    atualizarContato(){
        console.log("========================")
        console.log("   Atualizar Contato")
        console.log("========================")
        console.log('Informe o códico do contato:');
        const id = this.terminal.prompt();
        const contato = this.controle.getContatoPorid(id)
        if(contato){
            console.log('informe o nome do contato:');
        const nome = this.terminal.prompt();
        console.log('informe o email do contato:');
        const email = this.terminal.prompt();
        console.log('informe o telefone do contato:');
        const telefone = this.terminal.prompt();
        this.controle.atualizarContato(contato);
        console.log('Cadastro Atualizado')
        }else{
            console.log("Contato Não encontrado")
        }
    }
    removerContato(){
        console.log("========================")
        console.log("    Remover Contato")
        console.log("========================")
        console.log('Informe o códico do contato:');
        const id = this.terminal.prompt();
        const contato = this.controle.getContatoPorid(id)
        if(contato){
            this.controle.removerContato(contato);
            console.log('Cadastro Removido')
        }else{
            console.log("Contato Não encontrado")
        }
    }
}

module.export