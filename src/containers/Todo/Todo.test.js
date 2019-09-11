import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Todo from './Todo';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';

//setting up enzyme
configure({adapter: new Adapter()});

describe('<Todo />', () => {

    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<Todo />);
    });

    it('should have todoform', () => {
        expect(wrapper.find(TodoForm)).toHaveLength(1);
    });

    it('should have todolist', () => {
        expect(wrapper.find(TodoList)).toHaveLength(1);
    });

    it('should have todolist', () => {
        expect(wrapper.find(TodoList)).toHaveLength(1);
    });

    /*todo chech here 
    it('should have 20 todos in state', async () => {
        expect(wrapper.state('todos')).toHaveLength(10);
    });*/

});