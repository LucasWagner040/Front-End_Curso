// Importar Modulo
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Bitcoin from './Bitcoin'
import Litecoin from './Litecoin'
import Etheriun from './Etheriun'
import Ripple from './Ripple'
import BitcoinCash from './BitcoinCash'
import Chiliz from './Chiliz'
import Dolar from './Dolar'

// mportar Componente
import Principal from './Principal';

// Importar Topo
import Topo from './Topo';

ReactDOM.render(
    <div>
        <Topo />
        <BrowserRouter>
            <switch>
                <Route path='/Principal' exact={true} component={Principal} />
                <Route path='/Bitcoin' component={Bitcoin} />
                <Route path='/Litecoin' component={Litecoin} />
                <Route path='/Etheriun' component={Etheriun} />
                <Route path='/BitcoinCash' component={BitcoinCash} />
                <Route path='/Ripple' component={Ripple} />
                <Route path='/Chiliz' component={Chiliz} />
                <Route path='/Dolar' component={Dolar} />

            </switch>
        </BrowserRouter>
    </div>
    ,document.getElementById('root')
);