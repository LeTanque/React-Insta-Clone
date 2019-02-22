import React from "react";

const authenticate = App => LoginPage =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() { // This works, just not the way it's supposed to. 
      // If user/pass entered, access
      // If user only, access
      // If pass only, no access
      // If no user/pass, no access
      if (!(localStorage.getItem('username') && localStorage.getItem('password')) === false) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    }

    logout = e => {
      e.preventDefault();
      localStorage.clear();
      window.location.reload();
    };

    render() {
      
      if (this.state.loggedIn) {
        return <App loggedInUser={this.state.loggedIn} logout={this.logout} />;
      } 
      return <LoginPage />;
    }
  };

export default authenticate;


