import React, { Component } from 'react';
import data from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';


class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
      filteredPosts: [],
      searchInput: "",
    };
  }
  
  componentDidMount() {
    this.setState({ 
      postData: data
    });
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  searchHandler = event => {
    this.changeHandler(event);
    this.setState( prevState => {
      const filteredPostArray = prevState.postData.filter(post =>
        post.username.includes(prevState.searchInput)
      );
      return { filteredPosts: filteredPostArray };
    });
  };


  render() {

    return (

      <section className="posts-page">

        <SearchBar 
          searchInput={this.state.searchInput}
          searchHandler={this.searchHandler}
          logout={this.props.logout}
        />
        
        <section className='post-container-container'>
        
          <PostContainer 
            postData={
              this.state.filteredPosts.length > 0
                ? this.state.filteredPosts
                : this.state.postData
            }
          />

        </section>
      </section>

    );
  }
}







export default PostsPage;
