import React from "react";

const authenticate = App => LoginPage =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      if (!localStorage.getItem('username')) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }

    logout = e => {
      e.preventDefault();
      localStorage.clear();
      window.location.reload();
    };

    render() {
      console.log(this.state);
      
      if (this.state.loggedIn) {
        return <App loggedInUser={this.state.loggedIn} logout={this.logout} />;
      } 
      return <LoginPage />;
    }
  };

export default authenticate;


