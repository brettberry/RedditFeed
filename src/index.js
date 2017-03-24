
import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RouteProvider from './RouteProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'animate.css/animate.css';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <RouteProvider/>
  </MuiThemeProvider>
);


render(<App/>, document.getElementById('react-main'));
