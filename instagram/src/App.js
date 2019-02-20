import React from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import authenticate from './components/Authentication/authenticate';
import LoginPage from './components/Login/LoginPage';




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: ''
    };
  }

  render() {
    console.log(this.state.loggedIn);
    
    return (
        
      <PostsPage loggedInUser={this.state.loggedIn} />


    );
  }
}


export default authenticate(App)(LoginPage);
