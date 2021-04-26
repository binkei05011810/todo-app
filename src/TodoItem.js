import React, { Component } from 'react'
import './TodoItem.css'

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = { isEditing: false, editedTask: this.props.todoContent };
        this.handleRemove = this.handleRemove.bind(this);
        this.renderEditForm = this.renderEditForm.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }

    handleRemove() {
        this.props.removeTodo(this.props.id);
    }

    handleEdit(event) {
        event.preventDefault();
        this.props.updateTodo(this.props.id, this.state.editedTask);
        this.setState({ isEditing: false });
    }

    handleChange(event) {
        this.setState({ editedTask: event.target.value });
    }

    renderEditForm() {
        this.setState({ isEditing: true });
    }

    handleComplete() {
        this.props.toggleComplete(this.props.id);
    }

    render() {
        let renderMessage;
        if (this.state.isEditing) {
            renderMessage =
                <div className="Todo">
                    <form className="Todo-edit-form" onSubmit={this.handleEdit}>
                        <input type="text" value={this.state.editedTask} onChange={this.handleChange} />
                        <button>Save</button>
                    </form>
                </div >
        } else {
            renderMessage =
                <div className="Todo">
                    <li onClick={this.handleComplete}
                        className={this.props.completed ? "TodoItem TodoItem-completed" : "TodoItem"}>
                        {this.props.todoContent}
                    </li>
                    <div className="TodoList-buttons">
                        <button onClick={this.renderEditForm}><i className="fas fa-pen" /></button>
                        <button onClick={this.handleRemove}><i className="fas fa-trash" /></button>
                    </div>
                </div >
        }
        return renderMessage;
    }
}

export default TodoItem;
