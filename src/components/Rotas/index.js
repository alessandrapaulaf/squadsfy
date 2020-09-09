import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import history from './../../services/history';

import Init from '../../pages/Init';
import Historico from '../../pages/Historico';
import Login from '../../pages/Login';
import Register from '../../pages/Login/register';
import Player from '../../pages/Player';

const Rotas = () => {
    return(
        <BrowserRouter history={history}>
            <Switch>
                <Route exact path='/' component={Init} />
                <Route path='/home' component={Player} />
                <Route exact path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/historico' component={Historico} />
            </Switch>
        </BrowserRouter>
    );
}

export default Rotas;