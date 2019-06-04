import React from 'react';

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Layout from './containers/layout/Layout';
import Orders from './containers/Orders/Orders';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;