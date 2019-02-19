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
        this.setState({ text: '' });
        this.props.addComment(event, this.state.text);
    }

    addComment = (event, text) => {
        event.preventDefault();
        const newComment = {
            username: `frank`,
            text: text
        };
        this.setState({
            comments: [...this.props.comments, newComment]
        });
    };

    // addTask = (event, task) => {
    //     event.preventDefault();
    //     const newTask = {
    //       task: task,
    //       id: Date.now(),
    //       completed: false
    //     };
    //     this.setState({
    //       todoArr: [...this.state.todoArr, newTask]
    //     });
    // };
    
    render() {
        console.log(this.props.comments);
        
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