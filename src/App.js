import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home/index'
import Products from './pages/Products/index'
import Checkout from './pages/Checkout/index'
import Layout from './hocs/Layout'
import './App.css';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/products" component={Products}/>
          <Route exact path="/checkout" component={Checkout}/>
        </Switch>
    </Router>
  );
}

export default App;
