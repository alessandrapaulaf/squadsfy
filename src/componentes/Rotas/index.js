import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './../Home';
import Historico from './../Historico';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/historico' component={Historico} />
        </Switch>
    </BrowserRouter>
);

export default Rotas;