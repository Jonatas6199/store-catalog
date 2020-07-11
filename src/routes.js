import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import FormCategory from './pages/FormCategory';
import FormProduct from './pages/FormProduct';
import FormContact from './pages/FormContact';
import FormUser from './pages/FormUser';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/admin' component={Admin}></Route>
                <Route path='/category' component={FormCategory}></Route>
                <Route path='/product' component={FormProduct}></Route>
                <Route path='/contact' component={FormContact}></Route>
                <Route path='/user' component={FormUser}></Route>
            </Switch>
        </BrowserRouter>
    )
}