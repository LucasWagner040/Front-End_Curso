// Importar Modulo
import React from 'react';

// // Componente via função
// function Pagina(){
//     return(<h1>Componente atraves de funcao</h1>)
// }

class Pagina extends React.Component{
    render(){

        var nome = "Jennifer";

        return(
            <div>
                <h1>Componente atraves de classe</h1>
                <hr />
                <p>Aprendendo React</p>
                <p>A Soma de 5+5 = {5+5}</p>
                <p>O nome dela é {nome}</p>
                <p>O Nome via props é {this.props.nome} e a idade é {this.props.idade}</p>
            </div>
        )
    }
}

// Exportar
export default Pagina;