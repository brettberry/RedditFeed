import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Login from './Pages/Login';
import Home from './Pages/Home';

export default function RouteProvider() {
  return (
    <Router history={browserHistory}>
        <Route path="/" component={Login}/>
        <Route path="home" component={Home}/>
    </Router>
  );
}
