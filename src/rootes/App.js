import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/container/Home';
import Login from '../components/container/Login';
import NotFound from '../components/container/NotFound';
import Player from '../components/container/Player';
import Register from '../components/container/Register';
import Layout from '../components/Layout';

const App = (props) => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/player/:id' component={Player} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
