import React, { Component } from 'react';



class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    handleChanges = synthEvent => {
        this.setState({ [synthEvent.target.name]: synthEvent.target.value });
    };

    submitTask = event => {
        event.preventDefault();
        this.setState({ 
            text: '' 
        });
        this.addComment(this.state.text);
    }

    addComment = (stateText) => {
        const newComment = {
            username: `frank`,
            text: stateText
        };
        this.setState({
            text: [...this.props.comments, newComment]
        });
    };

    render() {
        console.log(this.props.comments);  // Seems the props are passed in correctly
        console.log(this.state.text);  //

        return (
            <React.Fragment>

                    <form className='add-comment' onSubmit={this.submitTask} >

                        <input 
                            placeholder='Add a comment...'
                            type='text'
                            name='text'
                            value={this.state.text}
                            onChange={this.handleChanges}
                        />

                    </form>
    
    
            </React.Fragment>
        )
    }
}

export default AddComment