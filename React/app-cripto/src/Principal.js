import React from 'react';

// Importar imagens
import bitcoin from './Imagens/bitcoin.png'
import litcoin from './Imagens/litecoin.png'
import eth from './Imagens/eth.png'
import xrp from './Imagens/xrp.png'
import bch from './Imagens/bch.png'
import uscd from './Imagens/usdc.png'
import Chiliz from './Imagens/Chiliz.png'


// 
import './Principal.css'

// classe
export default class Principal extends React.Component {

    // componentDidMount(){
    // this.interval = setInterval(() => {
    //     fetch('https://www.mercadobitcoin.net/api/BTC/ticker/')
    //     .then(retorno => retorno.json())
    //     .then(retorno => console.log(bitcoin:retorno.ticker.sell))
    // }, 10000);

    componentDidMount() {

        setInterval(()=>{
        fetch('https://www.mercadobitcoin.net/api/BTC/ticker/')
            .then(retorno => retorno.json())
            .then(retorno => this.setState({ bitcoin: retorno.ticker.sell }));

        fetch('https://www.mercadobitcoin.net/api/ltc/ticker/')
            .then(retorno => retorno.json())
            .then(retorno => this.setState({ ltc: retorno.ticker.sell }));

        fetch('https://www.mercadobitcoin.net/api/eth/ticker/')
            .then(retorno => retorno.json())
            .then(retorno => this.setState({ eth: retorno.ticker.sell }));
        fetch('https://www.mercadobitcoin.net/api/xrp/ticker/')
            .then(retorno => retorno.json())
            .then(retorno => this.setState({ xrp: retorno.ticker.sell }));
        fetch('https://www.mercadobitcoin.net/api/bch/ticker/')
            .then(retorno => retorno.json())
            .then(retorno => this.setState({ bch: retorno.ticker.sell }));
        fetch('https://www.mercadobitcoin.net/api/usdc/ticker/')
            .then(retorno => retorno.json())
            .then(retorno => this.setState({ uscd: retorno.ticker.sell }));
        fetch('https://www.mercadobitcoin.net/api/chz/ticker/')
            .then(retorno => retorno.json())
            .then(retorno => this.setState({ chz: retorno.ticker.sell }));
        }, 2000)
    }

    constructor(props) {
        super(props);

        this.state = {
            bitcoin: 0,
            ltc: 0,
            eth: 0,
            xrp: 0,
            bch: 0,
            usdc: 0,
            chz: 0
        }
    }




    render() {
        return (
            <body class='container container-fluid'>
                <div className='row'>
                    <a href="./bitcoin" className='col-4'>
                        <img src={bitcoin} />
                        <p>R$ {Number(this.state.bitcoin).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>
                    </a>
                    <a href="./litecoin" className='col-4'>
                        <img src={litcoin} />
                        <p>R$ {Number(this.state.ltc).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>
                    </a>
                    <a href="./etheriun" className='col-4'>
                        <img src={eth} />
                        <p>R$ {Number(this.state.eth).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>
                    </a>
                    <a href="./ripple" className='col-4'>
                        <img src={xrp} />
                        <p>R$ {Number(this.state.xrp).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>
                    </a>
                    <a href="./bitcoincash" className='col-4'>
                        <img src={bch} />
                        <p>R$ {Number(this.state.bch).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>
                    </a>
                    <a href="./dolar" className='col-4'>
                        <img src={uscd} />
                        <p>R$ {Number(this.state.uscd).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>
                    </a>
                    <a href="./chiliz" className='col-4'>
                        <img src={Chiliz} />
                        <p>R$ {Number(this.state.chz).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}</p>
                    </a>

                </div>
            </body>
        )
    }
}