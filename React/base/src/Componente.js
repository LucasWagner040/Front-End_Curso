// Importar o modulo react
import React from 'react';

// class
export default class Componente extends React.Component{

    // Construtor
    constructor(props){
        super(props);

        this.state = {
            nome : ''
        }
    }

    // Função
    aoDigitar = (e) => {
        this.setState({nome : e.target.value});
    }

    render(){
        return(
            <div>
                <h1>{this.state.nome}</h1>
                <input type='text' onChange={this.aoDigitar}></input>
            </div>
        )
    }
}