import React from 'react'
import bitcoin from './Imagens/bitcoin.png'

import './Principal.css'

export default class Bitcoin extends React.Component {

    componentDidMount() {

        setInterval(()=>{
        fetch('https://www.mercadobitcoin.net/api/BTC/ticker')
            .then(retorno => retorno.json())
            .then(retorno => this.setState({ highbitcoin: retorno.ticker.high }));
        fetch('https://www.mercadobitcoin.net/api/BTC/ticker')
            .then(retorno => retorno.json())
            .then(retorno => this.setState({ lowbitcoin: retorno.ticker.low }));
        fetch('https://www.mercadobitcoin.net/api/BTC/ticker')
            .then(retorno => retorno.json())
            .then(retorno => this.setState({ volbitcoin: retorno.ticker.vol }));
        fetch('https://www.mercadobitcoin.net/api/BTC/ticker')
            .then(retorno => retorno.json())
            .then(retorno => this.setState({ lastbitcoin: retorno.ticker.last }));
        fetch('https://www.mercadobitcoin.net/api/BTC/ticker')
            .then(retorno => retorno.json())
            .then(retorno => this.setState({ buybitcoin: retorno.ticker.buy }));
        fetch('https://www.mercadobitcoin.net/api/BTC/ticker')
            .then(retorno => retorno.json())
            .then(retorno => this.setState({ sellbitcoin: retorno.ticker.sell }));
            fetch('https://www.mercadobitcoin.net/api/BTC/ticker')
            .then(retorno => retorno.json())
            .then(retorno => this.setState({ datebitcoin: retorno.ticker.date }));

        },2000)
    }

    // componentDidMount(){
    // this.interval = setInterval(() => {
    //     fetch('https://www.mercadobitcoin.net/api/BTC/ticker')
    //         .then(retorno => retorno.json())
    //         .then(retorno => this.setState({ highbitcoin: retorno.ticker.high }));
    //     fetch('https://www.mercadobitcoin.net/api/BTC/ticker')
    //         .then(retorno => retorno.json())
    //         .then(retorno => this.setState({ lowbitcoin: retorno.ticker.low }));
    //     fetch('https://www.mercadobitcoin.net/api/BTC/ticker')
    //         .then(retorno => retorno.json())
    //         .then(retorno => this.setState({ volbitcoin: retorno.ticker.vol }));
    //     fetch('https://www.mercadobitcoin.net/api/BTC/ticker')
    //         .then(retorno => retorno.json())
    //         .then(retorno => this.setState({ lastbitcoin: retorno.ticker.last }));
    // }, 10000);

    constructor(props) {
        super(props);

        this.state = {
            bitcoin: 0
        }
    }

    render() {
        return (
            <div>


                <main>
                    <div class="container cripto">
                        <div class="imgcripto">
                            <img src={bitcoin} />
                        </div>
                        <div>
                            <p>Menor preço de oferta de venda das últimas 24 horas.</p>
                            <p className="paragrafo2">R$ {Number(this.state.sellbitcoin).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>

                            <p>Maior preço unitário de negociação das últimas 24 horas.</p>
                            <p className="paragrafo2">R$ {Number(this.state.highbitcoin).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>

                            <p>Menor preço unitário de negociação das últimas 24 horas.</p>
                            <p className="paragrafo2">R$ {Number(this.state.lowbitcoin).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>

                            <p>Quantidade negociada nas últimas 24 horas.</p>
                            <p className="paragrafo1"> {Number(this.state.volbitcoin).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>

                            <p>Preço unitário da última negociação.</p>
                            <p className="paragrafo2">R$ {Number(this.state.lastbitcoin).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>

                            <p>Maior preço de oferta de compra das últimas 24 horas.</p>
                            <p className="paragrafo2">R$ {Number(this.state.buybitcoin).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>


                            <p>Data e hora da informação em Era Unix </p>
                            <p className="paragrafo3">R$ {Number(this.state.datebitcoin).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>

                        </div>
                    </div>
                </main>

            </div>
        )
    }
}