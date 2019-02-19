import React from 'react';
import { FiHeart, FiMessageCircle} from 'react-icons/fi';
import CommentSection from '../CommentSection/CommentSection';
import AddComment from '../CommentSection/AddComment';
import moment from 'moment';

const Post = props => {

    // Post key is the timestamp + the username because a user would not be able
    // to post multiple posts at the exact same time and date, though different users
    // could; making timestamp alone insufficient. 
    // A UID attached to each post would be superior, but this will be sufficient for 
    // a long time, I imagine.
    return (
        <React.Fragment>


            {props.dataArr.map(post => (
                <section className="post" key={post.timestamp + post.username} >
                    
                    <div className='post-header'>
                        <img src={post.thumbnailUrl} alt={post.username} className="user-img" />
                        <h6 className='user-name'>{post.username}</h6>
                    </div>
                    
                    <img src={post.imageUrl} alt={post.name} className='post-img' />
                    
                    <div className='post-actions'>
                        <FiHeart /><FiMessageCircle />
                    </div>


                    <div className='post-likes'>{post.likes} likes</div>
                    
                    
                    <CommentSection username={post.username} comments={post.comments} />


                    {/* <div className="timestamp">{moment.unix(post.timestamp).format("MM/DD/YYYY")} - {post.timestamp}</div> */}
                    <div className="timestamp">
                        {moment(post.timestamp, 'MMMM Do YYYY, LTS').format('dddd')}
                    </div>

                    <hr></hr>

                    <AddComment />

                </section>
            ))}


        </React.Fragment>
    )

    
}

export default Post