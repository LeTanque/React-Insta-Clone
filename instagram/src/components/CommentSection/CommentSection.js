import React from 'react';
// import PropTypes from "prop-types";

const CommentSection = props => {
    return (
        <React.Fragment>


            <section className="comment-section">

                {props.comments.map(comment => (
                    <div key={Math.random()} className='comment' >
                        <strong>{comment.username} </strong>
                        {comment.text}
                    </div>
                ))}
                
            </section>


        </React.Fragment>
    )
}



export default CommentSection