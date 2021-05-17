import React from 'react'
import litecoin from './Imagens/litecoin.png'

import './Principal.css'

export default class Litecoin extends React.Component {

    componentDidMount() {

        setInterval(() => {
            fetch('https://www.mercadobitcoin.net/api/ltc/ticker')
                .then(retorno => retorno.json())
                .then(retorno => this.setState({ highlitecoin: retorno.ticker.high }));
            fetch('https://www.mercadobitcoin.net/api/ltc/ticker')
                .then(retorno => retorno.json())
                .then(retorno => this.setState({ lowlitecoin: retorno.ticker.low }));
            fetch('https://www.mercadobitcoin.net/api/ltc/ticker')
                .then(retorno => retorno.json())
                .then(retorno => this.setState({ vollitecoin: retorno.ticker.vol }));
            fetch('https://www.mercadobitcoin.net/api/ltc/ticker')
                .then(retorno => retorno.json())
                .then(retorno => this.setState({ lastlitecoin: retorno.ticker.last }));
            fetch('https://www.mercadobitcoin.net/api/ltc/ticker')
                .then(retorno => retorno.json())
                .then(retorno => this.setState({ buylitecoin: retorno.ticker.buy }));
            fetch('https://www.mercadobitcoin.net/api/ltc/ticker')
                .then(retorno => retorno.json())
                .then(retorno => this.setState({ selllitecoin: retorno.ticker.sell }));
            fetch('https://www.mercadobitcoin.net/api/ltc/ticker')
                .then(retorno => retorno.json())
                .then(retorno => this.setState({ datelitecoin: retorno.ticker.date }));

        }, 2000)
    }

    constructor(props) {
        super(props);

        this.state = {
            litecoin: 0
        }
    }

    render() {
        return (
            <div>


                <main>
                    <div class="container cripto">
                        <div class="imgcripto">
                            <img src={litecoin} />
                        </div>
                        <div>
                            <p>Menor preço de oferta de venda das últimas 24 horas.</p>
                            <p className="paragrafo2">R$ {Number(this.state.selllitecoin).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>

                            <p>Maior preço unitário de negociação das últimas 24 horas.</p>
                            <p className="paragrafo2">R$ {Number(this.state.highlitecoin).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>

                            <p>Menor preço unitário de negociação das últimas 24 horas.</p>
                            <p className="paragrafo2">R$ {Number(this.state.lowlitecoin).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>

                            <p>Quantidade negociada nas últimas 24 horas.</p>
                            <p className="paragrafo1"> {Number(this.state.vollitecoin).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>

                            <p>Preço unitário da última negociação.</p>
                            <p className="paragrafo2">R$ {Number(this.state.lastlitecoin).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>

                            <p>Maior preço de oferta de compra das últimas 24 horas.</p>
                            <p className="paragrafo2">R$ {Number(this.state.buylitecoin).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>


                            <p>Data e hora da informação em Era Unix </p>
                            <p className="paragrafo3">R$ {Number(this.state.datelitecoin).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>
                        </div>
                    </div>
                </main>

            </div>
        )
    }
}