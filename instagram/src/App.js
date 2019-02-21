import React from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import authenticate from './components/Authentication/authenticate';
import LoginPage from './components/Login/LoginPage';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    
    
    return (

      
      <PostsPage loggedInUser={this.state.loggedIn} />
      

    );
  }
}


export default authenticate(App)(LoginPage);
