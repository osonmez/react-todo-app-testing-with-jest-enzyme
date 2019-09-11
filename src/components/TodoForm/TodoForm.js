import React, { Component } from 'react';
import classes from './TodoForm.module.css';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import {updateObject} from '../../shared/utility';

class TodoForm extends Component {

    state = {
        todoForm: {
            todo: {
                elementType: 'input',
                elementConfig: {
                    type:'text',
                    placeholder: 'What to do?'
                },
                value:''
            }
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        const data = {
            "userId": 1,
            "title": this.state.todoForm.todo.value,
            "completed": false
          };

          this.props.addTodo(data);
        
    }

    inputChangedHandler = (event, elementId) => {
        const updatedElement = updateObject(this.state.todoForm[elementId], {
            value: event.target.value
        });

        const updatedForm = updateObject(this.state.todoForm, {
            [elementId]:updatedElement
        });
        this.setState({todoForm: updatedForm});
    }

    render(){
        const formElementArray = [];
        let key;
        for(key in this.state.todoForm){
            formElementArray.push({
                id: key,
                config: this.state.todoForm[key]
            });
        }

        return (
        <div className={classes.TodoForm}>
            <form onSubmit={this.submitHandler}> 

                {formElementArray.map(formElement => (
                    <Input 
                    key={formElement.id}
                    elementType={formElement.config.elementType} 
                    elementConfig={formElement.config.elementConfig} 
                    value={formElement.config.value}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
                ))}

                <Button btnType="Success">Submit</Button>
            </form>
        </div>);
    }
}

export default TodoForm;