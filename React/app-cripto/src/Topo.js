import React from 'react'

import './Principal.css'

export default class Topo extends React.Component{
    render(){
        return(
            <div>
                <header className='topo'>
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" href="/Principal">Menu</a>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        CriptoMoedas
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a class="dropdown-item" href="/bitcoin">Bitcoin</a>
                                        <a class="dropdown-item" href="/litecoin">Litecoin</a>
                                        <a class="dropdown-item" href="/etheriun">Etheriun</a>
                                        <a class="dropdown-item" href="/ripple">Ripple </a>
                                        <a class="dropdown-item" href="/bitcoinCash">Bitcoin Cash</a>
                                        <a class="dropdown-item" href="/dolar">Dolar</a>
                                        <a class="dropdown-item" href="/chiliz">Chiliz </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}