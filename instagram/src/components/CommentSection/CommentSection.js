import React from 'react';
// import PropTypes from "prop-types";

const CommentSection = props => {
    return (
        <React.Fragment>

            <section className="comment-section">
                This is where comments go {props.username}
            </section>

        </React.Fragment>
    )
}



export default CommentSection