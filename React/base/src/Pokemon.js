import React from 'react'

export default class Fetch extends React.Component{

    constructor(props){
        super(props);
        this.state = {lista : []}
    }

    // Antes de renderisar o rander
    componentDidMount(){
        fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(dados => dados.json())
        .then(dados => this.setState({lista : dados.results}))
        .then(() => console.log(this.state.lista))
    }


    render(){
        return(
            <main>
                {this.state.lista.map((pkm, indice) => {
                    return(
                        <div key={indice}>
                            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(indice+1)+".png"} />
                            <p>{pkm.name}</p>
                        </div>
                    )
                })}
            </main>
        )
    }

}