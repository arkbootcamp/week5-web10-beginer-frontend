import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../../pages/Home'
import Detail from '../../pages/Detail'
import About from '../../pages/About'
import Login from '../../pages/Login'
import HomePage from '../../pages/HomePage'
import Product from '../../pages/Product'
import PrivateRoute from './module/PrivateRoute'
import PublicRoute from './module/PublicRoute'
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <PrivateRoute exact path="/home" component={HomePage} />
        <Route path="/product/:idproduct" component={Detail} />
        <PublicRoute path="/login" component={Login} />
        <PrivateRoute path="/product" component={Product} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
