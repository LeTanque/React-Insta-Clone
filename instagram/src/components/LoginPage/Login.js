import React from "react";
// import FirstComponent from "./FirstComponent";
// import SecondComponent from "./SecondComponent";
import withUserLogin from "./withUserLogin";
import App from "../../App";



// const ToShow = withUserLogin(FirstComponent)(SecondComponent);
// const ToShow = withUserLogin(App);



class Login extends React.Component {
  state = {
    showFirst: true
  };

  toggleComponents = () => this.setState({ showFirst: !this.state.showFirst });
  handleChanges = e => this.setState({ inputText: e.target.value });
  signIn = e => {
    e.preventDefault();
    window.localStorage.setItem("user", this.state.inputText);
    window.location.reload();
  };
  logout = e => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  };

  render() {
    return (
      <section className="login-page">
        {/* <ToShow /> */}
        <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          value={this.state.inputText}
          onChange={this.handleChanges}
        />
        <br />
        <button onClick={this.signIn} className='btn'>Sign-In</button>


      </section>
    );
  }
}

export default Login
