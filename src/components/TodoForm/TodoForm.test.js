import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TodoForm from './TodoForm';

configure({adapter: new Adapter()});

describe('<TodoForm />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<TodoForm />);
    });

    it('should have class TodoForm', () => {
        expect(wrapper.find('.TodoForm')).toHaveLength(1);
    });

    
});