import React from 'react';
import { FiHeart, FiMessageCircle} from 'react-icons/fi';
import CommentSection from '../CommentSection/CommentSection';
import moment from 'moment';

const Post = props => {
    return (
        <React.Fragment>
            {props.dataArr.map(post => (
                <div className="post" key={post.timestamp} >
                    <div className='post-header'>
                        <img src={post.thumbnailUrl} alt={post.username} className="user-img" />
                        <h6 className='user-name'>{post.username}</h6>
                    </div>
                    <img src={post.imageUrl} alt={post.name} className='post-img' />
                    <div className='post-actions'>
                        <FiHeart /><FiMessageCircle />
                    </div>


                    <div className='post-likes'>{post.likes} likes</div>
                    
                    
                    <section className="comment-section">
                        <CommentSection username={post.username} />
                    </section>

                    <div className="timestamp">{post.timestamp}</div>
                    <hr></hr>
                </div>
                
            ))}
        </React.Fragment>
    )
}

export default Post