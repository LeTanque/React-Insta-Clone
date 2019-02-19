import React from 'react';
import igLogo from '../../assets/1200px-Instagram_logo.svg.png'
// import PropTypes from "prop-types";
import { FiInstagram, FiCompass, FiHeart, FiUser } from 'react-icons/fi';

const SearchBar = () => {
    return (

        <section className="search-bar-container">
            <div className="search-bar">
                
                <div className='search-bar-logo'>
                    <FiInstagram /><img src={igLogo} alt='Instagram logo' className='ig-logo' />
                </div>
                
                <form>
                    <input placeholder='Search'></input>
                </form>

                <div className='search-bar-icons'>
                    <FiCompass /><FiHeart /><FiUser />
                </div>
            </div>
        </section>
    )
}



export default SearchBar;
