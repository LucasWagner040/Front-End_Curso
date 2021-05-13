import React from 'react'
import eth from './Imagens/eth.png'

import './Principal.css'

export default class Etheriun extends React.Component {
    render() {
        return (
            <div>
                

                <main>
                    <div class="container cripto">
                        <div class="imgcripto">
                            <img src={eth} />
                        </div>
                            <div>
                                <p>Maior preço unitário de negociação das últimas 24 horas.</p>
                                <div>Resposta</div>
                                <p>Menor preço unitário de negociação das últimas 24 horas.</p>
                                <div>Resposta</div>
                                <p>Quantidade negociada nas últimas 24 horas.</p>
                                <div>Resposta</div>
                                <p>Preço unitário da última negociação.</p>
                                <div>Resposta</div>
                                <p>Maior preço de oferta de compra das últimas 24 horas.</p>
                                <div>Resposta</div>
                                <p>Menor preço de oferta de venda das últimas 24 horas.</p>
                                <div>Resposta</div>
                                <p>Data e hora da informação em Era Unix </p>
                                <div>Resposta</div>
                            </div>
                        </div>
                </main>

            </div>
        )
    }
}