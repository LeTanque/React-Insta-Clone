import React from "react";
import { FiInstagram } from 'react-icons/fi';



// const ToShow = withUserLogin(FirstComponent)(SecondComponent);
// const ToShow = withUserLogin(App);

class LoginPage extends React.Component {
  state = {
    inputUsername: '',
    inputPassword: ''
  };

  weakHashPass = function(input){
    return input.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
  }

  handleChanges = event => this.setState({ 
    inputUsername: event.target.value,
  });

  handlePassword = event => this.setState({ 
    inputPassword: event.target.value,
  });
  
  signIn = e => {
    e.preventDefault();
    window.localStorage.setItem("username", this.state.inputUsername);
    window.localStorage.setItem("password", this.weakHashPass(this.state.inputPassword));
    window.location.reload();
  };

  

  render() {
    
    return (
      <section className="login-page">


        <h1><FiInstagram /></h1>

        <input
          type="text"
          placeholder="username"
          value={this.state.inputUsername}
          onChange={this.handleChanges}
        />

        <br />
        
        <input
          type="text"
          placeholder="password"
          value={this.state.inputPassword}
          onChange={this.handlePassword}
        />
        
        <br />
        
        <button onClick={this.signIn} className='btn'>Sign-In</button>
        

      </section>
    );
  }
}

export default LoginPage
