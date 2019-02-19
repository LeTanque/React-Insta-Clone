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




  render() {
    console.log(this.state.dataArr[0].timestamp);
    
    return (
      

      <section className="App">


        <SearchBar 
          // key={this.state.dataArr} 
          dataArr={this.state.dataArr} 
        />

        
        <section className='post-container-container'>
        
          <PostContainer 
            // key={this.state.timestamp} 
            dataArr={this.state.dataArr} 
          />
          
        </section>
      </section>


    );
  }
}







export default App;
