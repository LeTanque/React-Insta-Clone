import React, { Component } from 'react';
// import logo from './assets/logo.svg';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import CommentSection from './components/CommentSection/CommentSection';
import PostContainer from './components/PostContainer/PostContainer';


const dummyDataArr = dummyData;
console.log(dummyDataArr);


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <SearchBar />
        <PostContainer>
          <CommentSection />
        </PostContainer>
        
        
      </div>
    );
  }
}

export default App;
