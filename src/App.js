import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './hocs/Layout'
import './App.css';

import Categories from './pages/Categories/index'
import Checkout from './pages/Checkout/index'
import Products from './pages/Products/Products'

// To do: Load the specific category's product info using the name and maybe fetch

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
            <Route exact path="/" render={() => <Categories categories={[{name: 'foo', id: '1233'}, {name:'bar', id: '123'}, {name: 'foobar', id: '233'}]}/>}/>
            <Route exact path="/checkout" component={Checkout}/>
            <Route path="/category/:name" component={Products} />
          </Switch>
      </Layout>
    </Router>
  );
}




export default App;



