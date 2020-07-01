import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/admin' component={Admin}></Route>
            </Switch>
        </BrowserRouter>
    )
}