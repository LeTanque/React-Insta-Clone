import React from 'react';
import igLogo from '../../assets/1200px-Instagram_logo.svg.png'
import { FiInstagram, FiCompass, FiHeart, FiUser } from 'react-icons/fi';




class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataArr: props.dataArr,
            username: ''
        }
    }


    search = event => {
        event.preventDefault();

        // this.state.dataArr.filter( searchTerm => this.state.username === searchTerm );
    }


// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);
// // expected output: Array ["exuberant", "destruction", "present"]


    handleSearch = synthEvent => {
        this.setState({ [synthEvent.target.name]: synthEvent.target.value });
    };


    // {this.state.dataArr.map(post => (
    //     <React.Fragment key={post.timestamp}>
    //         <div >{post.username}</div>
    //     </React.Fragment>
    // ))}
    // ⚲
    

    render() {
        console.log(this.state.dataArr);
        
        return (


            <React.Fragment>
    
                <section className="search-bar-container">
                    <div className="search-bar">
                        

                        <div className='search-bar-logo'>
                            <FiInstagram /><img src={igLogo} alt='Instagram logo' className='ig-logo' />
                        </div>
                        
    
                        <form onSubmit={this.search} >
                            <input 
                                placeholder='🔍 Search'
                                name='username'
                                value={this.state.username}
                                onChange={this.handleSearch}
                            />
                        </form>
    
    
                        <div className='search-bar-icons'>
                            <FiCompass /><FiHeart /><FiUser />
                        </div>


                    </div>
                </section>
    

    
            </React.Fragment>
    
        )
    }
}



export default SearchBar;
