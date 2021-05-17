import React from 'react'
import eth from './Imagens/eth.png'

import './Principal.css'

export default class Etheriun extends React.Component {
    componentDidMount() {

        setInterval(() => {
            fetch('https://www.mercadobitcoin.net/api/eth/ticker')
                .then(retorno => retorno.json())
                .then(retorno => this.setState({ high: retorno.ticker.high }));
            fetch('https://www.mercadobitcoin.net/api/eth/ticker')
                .then(retorno => retorno.json())
                .then(retorno => this.setState({ low: retorno.ticker.low }));
            fetch('https://www.mercadobitcoin.net/api/eth/ticker')
                .then(retorno => retorno.json())
                .then(retorno => this.setState({ vol: retorno.ticker.vol }));
            fetch('https://www.mercadobitcoin.net/api/eth/ticker')
                .then(retorno => retorno.json())
                .then(retorno => this.setState({ last: retorno.ticker.last }));
            fetch('https://www.mercadobitcoin.net/api/eth/ticker')
                .then(retorno => retorno.json())
                .then(retorno => this.setState({ buy: retorno.ticker.buy }));
            fetch('https://www.mercadobitcoin.net/api/eth/ticker')
                .then(retorno => retorno.json())
                .then(retorno => this.setState({ sell: retorno.ticker.sell }));
            fetch('https://www.mercadobitcoin.net/api/eth/ticker')
                .then(retorno => retorno.json())
                .then(retorno => this.setState({ date: retorno.ticker.date }));

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
                            <img src={eth} />
                        </div>
                        <div>
                            <p>Menor preço de oferta de venda das últimas 24 horas.</p>
                            <p className="paragrafo2">R$ {Number(this.state.sell).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>

                            <p>Maior preço unitário de negociação das últimas 24 horas.</p>
                            <p className="paragrafo2">R$ {Number(this.state.high).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>

                            <p>Menor preço unitário de negociação das últimas 24 horas.</p>
                            <p className="paragrafo2">R$ {Number(this.state.low).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>

                            <p>Quantidade negociada nas últimas 24 horas.</p>
                            <p className="paragrafo1"> {Number(this.state.vol).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>

                            <p>Preço unitário da última negociação.</p>
                            <p className="paragrafo2">R$ {Number(this.state.last).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>

                            <p>Maior preço de oferta de compra das últimas 24 horas.</p>
                            <p className="paragrafo2">R$ {Number(this.state.buy).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>


                            <p>Data e hora da informação em Era Unix </p>
                            <p className="paragrafo3">R$ {Number(this.state.date).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>
                        </div>
                    </div>
                </main>

            </div>
        )
    }
}