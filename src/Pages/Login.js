import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import { purple500, red500 } from 'material-ui/styles/colors';
import './login.styles.scss';

class Login extends Component {

  static contextTypes = {
    login: PropTypes.func,
    router: PropTypes.object
  }

  state = {
    username: '',
    password: '',
    showError: false
  }

  handleLogin() {
    if (this.state.password !== 'password') {
      return this.setState({ showError: true });
    }
    this.context.router.push('/home');
  }

  render() {
    // Material UI library requires inline styling
    const styles = {
      input: {
        fontFamily: 'Raleway'
      },
      underlineStyle: {
        borderColor: purple500
      },
      floatingLabelStyle: {
        color: purple500
      },
      floatingLabelFocusStyle: {
        color: purple500
      },
      errorStyle: {
        color: red500
      }
    };

    return (
      <div className="loginPageContainer">
        <h1 className="welcomeHeader animated bounceInDown">Welcome</h1>
        <div className="loginContainer">
          <div className="inputContainer">
            <h2 className="title">Sign In</h2>
            <TextField style={styles.input}
                       floatingLabelText="Username"
                       fullWidth={true}
                       underlineFocusStyle={styles.underlineStyle}
                       floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                       onChange={(e) => this.setState({ username: e.target.value })} />
            <TextField style={styles.input}
                       floatingLabelText="Password"
                       fullWidth={true}
                       type="password"
                       underlineFocusStyle={styles.underlineStyle}
                       floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                       onChange={(e) => this.setState({ password: e.target.value })}
                       errorText={ this.state.showError && 'incorrect password'}/>
          </div>
          <button onClick={this.handleLogin.bind(this)} className="button">Sign In</button>
        </div>
      </div>
    );
  }
}

export default Login;
