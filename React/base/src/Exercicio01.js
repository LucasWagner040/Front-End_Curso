// Importar o modulo react
import React from 'react'

export default class Exercicio01 extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            nome : '',
            idade : '',
            exbir : false
        }
    }

    // Funcao de envio
    enviar = (e) => {
        e.preventDefault();
        this.setState({exbir : true})
    }

    // funcao ao digitar
    digitar = (e) => {
        this.setState({[e.target.name] : e.target.value})
    } 

    render(){
        return(
            <form onSubmit={this.enviar}>
                <input type="text" placeholder="Informe seu Nome:" name="nome" onChange={this.digitar}></input>
                <input type="number" placeholder="Informe Sua Idade" name="idade" onChange={this.digitar}></input>
                <input type="submit" value="Enviar"></input>

                {this.state.exbir == true ?
                <p>Olá {this.state.nome} você tem {this.state.idade} anos.</p>
                :
                ''
                }
            </form>
        )
    }

}