import React from 'react';
import TodoItem from './TodoItem/TodoItem';
import classes from './TodoList.module.css';

import Button from '../UI/Button/Button';




const todoList = (props) => {

    const items = props.todoItems.map(i => {

        return (
            <li key={i.id} style={{textDecoration: i.completed ? 'line-through' : 'none'}}>
                <TodoItem
                title={i.title}
                completed={i.completed}
                />
                <Button btnType="Success" clicked={() => props.complete(i)}>Complete</Button>
                <Button btnType="Danger" clicked={() => props.delete(i.id)}>Delete</Button>
            </li>
        );
    });

    return (<ul className={classes.TodoList}>
        {items}
    </ul>);

}

export default todoList;