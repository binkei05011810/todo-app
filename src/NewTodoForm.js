import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css'

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { todo: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let newTodo = { ...this.state, id: uuidv4(), completed: false }
        this.props.addTodo(newTodo);
        this.setState({ todo: "" });
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <form class="NewTodoForm" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="todo"
                    value={this.state.todo}
                    onChange={this.handleChange} />
                <button>Add Todo</button>
            </form>
        )
    }
}

export default NewTodoForm;