import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Login from './components/Login';
import Home from './components/Home';
import Upvoted from './components/Upvoted';
import Downvoted from './components/Downvoted';
import App from './components/App';

export default function RouteProvider() {
  return (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Login}/>
          <Route path="home" component={Home}/>
          <Route path="upvoted" component={Upvoted}/>
          <Route path="downvoted" component={Downvoted}/>
        </Route>
    </Router>
  );
}
