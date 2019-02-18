import React from 'react';
// import PropTypes from "prop-types";
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';



const PostContainer = props => {
    if (!props.dataArr.length) {  // If there are no posts showing up, then do this
        return <h4>Loading Posts...</h4>;
    }


    return (
        <React.Fragment>
            <section className='post-container'>
                <Post dataArr={props.dataArr} />
                <CommentSection />

            </section>
        </React.Fragment>
        
    )
}



export default PostContainer