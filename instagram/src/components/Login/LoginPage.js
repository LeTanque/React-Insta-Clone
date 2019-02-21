import React from "react";
import { FiInstagram } from 'react-icons/fi';



// const ToShow = withUserLogin(FirstComponent)(SecondComponent);
// const ToShow = withUserLogin(App);

class LoginPage extends React.Component {
  state = {
  };

  handleChanges = event => this.setState({ inputText: event.target.value });
  signIn = e => {
    e.preventDefault();
    window.localStorage.setItem("username", this.state.inputUsername);
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
          onChange={this.handleChanges}
        />
        
        <br />
        
        <button onClick={this.signIn} className='btn'>Sign-In</button>
        

      </section>
    );
  }
}

export default LoginPage
