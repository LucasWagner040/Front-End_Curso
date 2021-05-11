// Importar módulo
import React from 'react';

// Importar CSS
import './Pokemon.css'

// Classe
export default class Pokemon extends React.Component{

    // Construtor
    constructor(props){
        super(props);

        this.state = {lista : []}
    }

    // Antes de realizar o render
    componentDidMount(){
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(dados => dados.json())
        .then(dados => this.setState({lista : dados.results}))
        //.then(() => console.log(this.state.lista))
    }

    // Render
    render(){
        return(
            <main className='container-fluid'>
                <div className='row'>

                    {this.state.lista.map((pkm, indice) => {
                        return(
                            <div className='col-md-3' key={indice}>
                                <div className='card'>
                                    <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+(indice+1)+'.png'} alt={indice}/>
                                    <p>{pkm.name}</p>
                                </div>
                            </div>  
                        );
                    })}

                </div>
            </main>
        )
    }

}