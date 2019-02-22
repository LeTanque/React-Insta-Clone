import React from "react";
import { FiInstagram } from 'react-icons/fi';
import { LoginPageSection, LoginPageInput, Button } from '../StyledComponents/StyledComponents';

// const ToShow = withUserLogin(FirstComponent)(SecondComponent);
// const ToShow = withUserLogin(App);


class LoginPage extends React.Component {
  state = {
    inputUsername: '',
    inputPassword: ''
  };

  // This is probably how passwords were hashed in the 90's.
  weakHashPass = function(input){ // This is a weak way to hash a password, but you get the idea. 
    return input.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a*Math.random()},0);              
  }

  handleChanges = event => this.setState({ 
    inputUsername: event.target.value,
  });

  handlePassword = event => this.setState({ 
    inputPassword: event.target.value,
  });

  signIn = e => {
    e.preventDefault();
    window.localStorage.setItem("username", this.state.inputUsername); // This is how you pass something to localstorage
    window.localStorage.setItem("password", this.weakHashPass(this.state.inputPassword));
    window.location.reload();
  };

  

  render() {
    
    return (

      <LoginPageSection>

        <h1><FiInstagram /></h1>

        <LoginPageInput
          type="text"
          placeholder="username"
          value={this.state.inputUsername}
          onChange={this.handleChanges}
        />

        <br />
        
        <LoginPageInput
          type="password"
          placeholder="password"
          value={this.state.inputPassword}
          onChange={this.handlePassword}
        />
        
        <br />
        
        <Button onClick={this.signIn} >Log In</Button>
        
      </LoginPageSection>

    );
  }
}

export default LoginPage
