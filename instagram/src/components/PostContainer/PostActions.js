import React from 'react';
import { FiHeart, FiMessageCircle} from 'react-icons/fi';



class PostActions extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            likes: this.props.likes
        }
    }


    addLike = () => {
        this.setState({ likes: this.state.likes + 1 })
    }


    render() {
        return (
            <React.Fragment>


                <div className='post-actions'>
                    <FiHeart onClick={() => this.addLike()} /> <FiMessageCircle />
                </div>


                <div className='post-likes'>{this.state.likes} likes</div>


            </React.Fragment>
        )
    }
}

export default PostActions;