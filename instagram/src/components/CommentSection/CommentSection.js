import React from 'react';
import moment from 'moment';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            text: ''
        }
    }

    addComment = event => {
        event.preventDefault();
        const newComment = {
            username: localStorage.getItem('username'),
            text: this.state.text
        };
        this.setState({
            comments: [...this.state.comments, newComment],
            text: ''
        });
    };

    
    handleChanges = synthEvent => {
        this.setState({
            [synthEvent.target.name]: synthEvent.target.value
        });
    };


    render() {
        // console.log(this.props.comments);  // Seems the props are passed in correctly
        // console.log(this.state.text);  //
        // console.log(localStorage.getItem('username')); // This is how you access localstorage

        return (
            <React.Fragment>
                <section className="comment-section">

                    {this.state.comments.map(comment => (
                        <div key={comment.username + Math.random()} className='comment' >
                            <strong>{comment.username} </strong>
                            {comment.text}
                        </div>
                    ))}

                </section>


                <div className="timestamp " >
                    {moment(this.props.timestamp, 'MMMM Do YYYY, LTS').format('dddd')}
                </div>
    

                <hr></hr>


                <form 
                    className='add-comment' 
                    onSubmit={this.addComment} 
                >

                    <input 
                        placeholder='Add a comment...'
                        name='text'
                        value={this.state.text}
                        onChange={this.handleChanges}
                    />

                </form>
    
    
            </React.Fragment>
        )
    }
}

export default CommentSection

