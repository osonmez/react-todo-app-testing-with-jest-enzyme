import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 

import TodoList from './TodoList';
import TodoItem from './TodoItem/TodoItem';
import Button from '../UI/Button/Button';

configure({adapter: new Adapter()});

const items = [{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 1,
  "id": 2,
  "title": "quis ut nam facilis et officia qui",
  "completed": false
}];

const mockProps = {
  todoItems: items,
  complete: jest.fn(),
  delete: jest.fn()
};

describe('<TodoList />', () => {    

      let wrapper;

      beforeEach(() => {
        wrapper = shallow(<TodoList todoItems={items}/>);
      });

    it('should have class todolist', () => {
        console.log(wrapper.debug());
        expect(wrapper.find('.TodoList')).toHaveLength(1);
    });
    
    it('should have 2 todo item', () => {
        console.log(wrapper.debug());
        expect(wrapper.find(TodoItem)).toHaveLength(2);
    });

    it('should mark complete', () => {
      wrapper = mount(<TodoList {...mockProps}/>);
      const completeButton = wrapper.find(Button).first();
      completeButton.simulate('click', items[0]);
      expect(mockProps.complete.mock.calls.length).toEqual(1);
    });

});