import React from 'react';
import Post from './PostFunction';
import PropTypes from "prop-types";



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

// PoopTypes
PostContainer.propTypes = {
    dataArr: PropTypes.arrayOf(
        PropTypes.shape({
            imageUrl: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
            thumbnailUrl: PropTypes.string.isRequired,
            timestamp: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                    text: PropTypes.string.isRequired,
                    username: PropTypes.string.isRequired
                })
            )
        })
    )
}



export default PostContainer