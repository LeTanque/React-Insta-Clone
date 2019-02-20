import React, { Component } from 'react';



class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        }
    }

    addComment = (event) => {
        event.preventDefault();
        const newComment = {
            username: `frank`,
            text: ''
        };
        this.setState({
            comments: [...this.state.comments, newComment]
        });
    };

    
    handleChanges = synthEvent => {
        console.log(this.props.comments);
        this.setState({
            [synthEvent.target.name]: synthEvent.target.value
        });
    };


    render() {
        // console.log(this.props.comments);  // Seems the props are passed in correctly
        // console.log(this.state.text);  //

        return (
            <React.Fragment>

                    <form 
                        className='add-comment' 
                        onSubmit={this.addComment} 
                    >

                        <input 
                            placeholder='Add a comment...'
                            // type='text'
                            name='text'
                            value={this.text}
                            onChange={this.handleChanges}
                        />

                    </form>
    
    
            </React.Fragment>
        )
    }
}

export default AddComment

