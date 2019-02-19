import React, { Component } from 'react';
import data from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';



const dataArr = data;


class App extends Component {
  constructor() {
    super();
    this.state = {
      dataArr
    };
  }

  addComment = (event, comment) => {  // UNFINISHED
  //   event.preventDefault();
  //   const newTask = {
  //     comments:,
  //     id: Date.now(),
  //     completed: false
  //   };
  //   this.setState({
  //     todoArr: [...this.state.todoArr, newTask]
  //   });
  };



  render() {
    console.log(dataArr);

    return (
      
      <section className="App">
        
        <SearchBar />

        <section className='post-container-container'>
          <PostContainer addComment={this.addComment} key={this.state.timestamp} dataArr={this.state.dataArr} />
          
          
        </section>
        
        
      </section>
    );
  }
}







export default App;
