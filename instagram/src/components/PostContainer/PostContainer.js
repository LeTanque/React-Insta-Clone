import React from 'react';
// import PropTypes from "prop-types";
import Post from './Post';




const PostContainer = props => {
    if (!props.dataArr.length) {  // If there are no posts showing up, then do this
        return <h4>Loading Posts...</h4>;
    }


    return (
        <React.Fragment>
            <section className='post-container'>
                <Post dataArr={props.dataArr} />
                

            </section>
        </React.Fragment>
        
    )
}



export default PostContainer