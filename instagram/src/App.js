import React from 'react';
import authenticate from './components/Authentication/authenticate';
import LoginPage from './components/Login/LoginPage';
import PostsPage from './components/PostContainer/PostsPage';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {

    
    return (

      
      <PostsPage loggedInUser={this.props.loggedInUser} logout={this.props.logout} />
      

    );
  }
}


export default authenticate(App)(LoginPage);
