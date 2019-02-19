import React from 'react';


const CommentSection = props => {
    // Key is username of commenter + math.random.
    return (
        <React.Fragment>


            <section className="comment-section">

                {props.comments.map(comment => (
                    <div key={comment.username + Math.random()} className='comment' >
                        <strong>{comment.username} </strong>
                        {comment.text}
                    </div>
                ))}
                
            </section>


        </React.Fragment>
    )
}


export default CommentSection