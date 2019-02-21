import React from 'react';
import igLogo from '../../assets/1200px-Instagram_logo.svg.png'
import { FiInstagram, FiCompass, FiHeart, FiUser } from 'react-icons/fi';

    
const SearchBar = props => {

    return (

        <React.Fragment>

            <section className="search-bar-container">
                <div className="search-bar">

                    <div className='search-bar-logo'>
                        <FiInstagram /><img src={igLogo} alt='Instagram logo' className='ig-logo' />
                    </div>
                    
                    <div className='form' >
                        <input 
                            placeholder="🔍 Search" 
                            type="text" 
                            name="searchInput"
                            value={props.searchInput}
                            onChange={props.searchHandler}
                        />
                    </div>

                    <div className='search-bar-icons'>
                        <FiCompass />
                        <FiHeart />
                        <span className="user-button">
                            <FiUser onClick={props.logout} />
                        </span>
                    </div>

                </div>
            </section>


        </React.Fragment>

    )
    
}


export default SearchBar;

