// Importar Modulo
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Bitcoin from './Bitcoin'

// mportar Componente
import Principal from './Principal';

// Importar Topo
import Topo from './Topo';

ReactDOM.render(
    <div>
        <Topo />
        <BrowserRouter>
            <switch>
                <Route path='/' exact={true} component={Principal} />
                <Route path='/Bitcoin' component={Bitcoin} />

            </switch>
        </BrowserRouter>
    </div>
    ,document.getElementById('root')
);