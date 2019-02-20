import React, { Component } from 'react';
import data from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: [],
      filteredPosts: [],
      searchInput: ""
    };
  }

  componentDidMount() {
    this.setState({ postData: data });
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  searchHandler = event => {
    // event.preventDefault();
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
      

      <section className="App">

        <SearchBar 
          searchInput={this.state.searchInput}
          searchHandler={this.searchHandler}
        />
        
        <section className='post-container-container'>
        
          <PostContainer 
            // key={this.state.timestamp} 
            // dataArr={this.state.dataArr} 
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







export default App;
