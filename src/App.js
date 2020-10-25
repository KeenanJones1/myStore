import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './hocs/Navbar';
import Home from './pages/Home/index'
import Products from './pages/Products/index'
import Checkout from './pages/Checkout/index'
import Layout from './hocs/Layout'
import './App.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
            <Route exact path="/" render={() => <Home featuredProducts={[1,2,3]}/>}/>
            <Route exact path="/products" component={Products} />
            <Route exact path="/checkout" component={Checkout}/>
          </Switch>
      </Layout>
    </Router>
  );
}

export default App;



