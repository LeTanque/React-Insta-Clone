import React from 'react';
import { FiHeart, FiMessageCircle} from 'react-icons/fi';
import CommentSection from '../CommentSection/CommentSection';
import moment from 'moment';
import AddComment from '../CommentSection/AddComment';


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // likesTotal: post.likes,
        };
    }

    // Post key is the timestamp + the username because a user would not be able
    // to post multiple posts at the exact same time and date, though different users
    // could; making timestamp alone insufficient. 
    // A UID attached to each post would be superior, but this will be sufficient for 
    // a long time, I imagine.
    render() {

        console.log(this.props);
        

        return (
            <React.Fragment>
    

    
                {this.props.map(post => (
                    <section className="post" key={post.timestamp + post.username} >
                        
                        <div className='post-header'>
                            <img src={post.thumbnailUrl} alt={post.username} className="user-img" />
                            <h6 className='user-name'>{post.username}</h6>
                        </div>
                        
                        <img src={post.imageUrl} alt={post.name} className='post-img' />
                        
                        <div className='post-actions'>
                            <div className="footer-icon repost" onClick={() => this.addRepost()}><FiHeart /></div>
                            <FiMessageCircle />
                        </div>
    
    
                        <div className='post-likes'>{post.likes} likes</div>
                        
                        
                        <CommentSection username={post.username} comments={post.comments} />
    
    
                        <div className="timestamp " >
                            {moment(post.timestamp, 'MMMM Do YYYY, LTS').format('dddd')}
                        </div>
    
                        <hr></hr>
    
                        <AddComment comments={post.comments} />
    
                    </section>
                ))};

    

    
            </React.Fragment>
        )
    
    }
    
    
}

export default Post


