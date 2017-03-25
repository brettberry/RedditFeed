import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Login from './components/Login';
import Home from './components/Home';

export default function RouteProvider() {
  return (
    <Router history={browserHistory}>
        <Route path="/" component={Login}/>
        <Route path="home" component={Home}/>
    </Router>
  );
}
