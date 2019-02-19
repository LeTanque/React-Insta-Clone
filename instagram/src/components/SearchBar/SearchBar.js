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
                    
                    <form>
                        <input placeholder='Search'></input>
                    </form>

                    <div className='search-bar-icons'>
                        <FiCompass /><FiHeart /><FiUser />
                    </div>
                </div>
            </section>


            {props.dataArr.map(post => (
                <React.Fragment key={post.timestamp}>
                    <div >{post.username}</div>
                </React.Fragment>
            ))}
            

        </React.Fragment>


    )
}



export default SearchBar;
