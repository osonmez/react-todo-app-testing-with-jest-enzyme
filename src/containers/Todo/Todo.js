import React, { Component } from 'react';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';
import axios from 'axios';
import classes from './Todo.module.css';


class Todo extends Component {

    state = {
        todos: []
    }

    componentDidMount(){
        //just 20 of todos
        axios.get('https://jsonplaceholder.typicode.com/todos?userId=1').then(response => {
            console.log(response.data);
            this.setState({todos: response.data});
        }).catch(error => {
            console.log(error);
        });
    }

    addTodo = (todo) => {
    
        axios.post('https://jsonplaceholder.typicode.com/todos', todo)
        .then(response => {
            const updatedTodos = [...this.state.todos, response.data];
            this.setState({todos: updatedTodos});
        })
        .catch(error => console.log(error));
    };

    delTodo = (id) => {
        const updatedTodos = this.state.todos.filter(todo => todo.id !== id);
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => {
            this.setState({todos: updatedTodos});
        })
        .catch(error => {
            console.log(error);
        });
        
    }
    
    markComplete = (item) => {
        item.completed = true;

        axios.put(`https://jsonplaceholder.typicode.com/todos/${item.id}`, item)
        .then(response => {
            const updatedTodos = this.state.todos.filter(todo => {

            if(todo.id === response.data.id){
                todo.completed = response.data.completed;
            }
            return todo;
            });



            this.setState({todos: updatedTodos});
        })
        .catch(error => console.log(error));

        
    }

    render(){
        return (
        <div className={classes.Todo}>
            <TodoForm addTodo={this.addTodo}/>
            <TodoList todoItems={this.state.todos} delete={this.delTodo} complete={this.markComplete}/>
        </div>
        );
    }
}

export default Todo;