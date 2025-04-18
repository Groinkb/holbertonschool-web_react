import React from 'react';
import {shallow} from 'enzyme';
import Login from './Login';
import {StyleSheetTestUtils} from 'aphrodite';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

test('Login renders without crashing', () => {
    shallow(<Login />);
});

test('Verify that the Login component renders 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label').length).toBe(2);
    expect(wrapper.find('input').length).toBe(2);
});