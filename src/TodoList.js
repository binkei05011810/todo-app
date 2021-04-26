import React, { Component } from "react"
import TodoItem from "./TodoItem.js"
import NewTodoForm from "./NewTodoForm.js"
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todoItems: [{ todo: "Do homework", id: uuidv4(), completed: false }, { todo: "Do luandry", id: uuidv4(), completed: false }] }
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
    }

    addTodo(todo) {
        this.setState({ todoItems: [...this.state.todoItems, todo] });
    }

    removeTodo(id) {
        this.setState({ todoItems: this.state.todoItems.filter(item => item.id !== id) });
    }

    updateTodo(id, newContent) {
        let updateItems = this.state.todoItems.map(item => {
            if (item.id === id) {
                return { ...item, todo: newContent };
            }
            return item;
        })
        this.setState({ todoItems: updateItems })
    }

    toggleComplete(id) {
        let updateItems = this.state.todoItems.map(item => {
            if (item.id === id) {
                return { ...item, completed: !item.completed };
            }
            return item;
        })
        this.setState({ todoItems: updateItems })
    }

    render() {
        return (
            <div className="TodoList">
                <h1>Todo List</h1>
                <ul>
                    {this.state.todoItems.map(item =>
                        <TodoItem key={item.id}
                            id={item.id}
                            todoContent={item.todo}
                            removeTodo={this.removeTodo}
                            updateTodo={this.updateTodo}
                            completed={item.completed}
                            toggleComplete={this.toggleComplete} />)}
                </ul>
                <NewTodoForm addTodo={this.addTodo} />
            </div>
        )
    }
}

export default TodoList;