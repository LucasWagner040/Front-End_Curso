import React from 'react'

export default class Fetch extends React.Component{

    constructor(props){
        super(props);

        this.state = {clientes : []}
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(dados => dados.json())
        .then(dados => this.setState({clientes : dados}))
    }

    render(){
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Endereço</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.clientes.map((objeto, indice) => {
                            return(
                                <tr>
                                    <td>{indice+1}</td>
                                    <td>{objeto.name}</td>
                                    <td>{objeto.email}</td>
                                    <td>{objeto.address.street} - {objeto.address.suite}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

}