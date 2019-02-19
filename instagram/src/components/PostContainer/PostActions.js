import React from 'react';
import { FiHeart, FiMessageCircle} from 'react-icons/fi';





class PostActions extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            likes: this.props.likes
        }
    }

    addLike = event => {
        this.setState({likes: this.state.likes + 1})
    }

    render() {
        console.log(this.state.likes)
        return (
            <React.Fragment>


                <div className='post-actions'>
                    <span className="" onClick={() => this.addLike()}>
                        <FiHeart />
                    </span>
                    <FiMessageCircle />
                </div>


                <div className='post-likes'>{this.state.likes} likes</div>


            </React.Fragment>
        )
    }
}

export default PostActions;