import React from 'react';
import WithLogging from './WithLogging';
import {mount} from 'enzyme';
import Login from '../Login/Login';
import {StyleSheetTestUtils} from 'aphrodite';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

test('console.log was called on mount and on unmount when the wrapped element is pure html', () => {
    jest.spyOn(console, 'log');
    let HOC = WithLogging(() => <p />);
    HOC = mount(<HOC />);
    HOC.unmount();
    expect(console.log.mock.calls).toEqual([['Component Component is mounted'], ['Component Component is going to unmount']]);
    
    console.log.mockRestore();
});

test('console.log was called on mount and on unmount when the wrapped element is <Login />', () => {
    jest.spyOn(console, 'log');
    let HOC = WithLogging(Login);
    HOC = mount(<HOC />);
    HOC.unmount();
    expect(console.log.mock.calls).toEqual([['Component Login is mounted'], ['Component Login is going to unmount']]);
    
    console.log.mockRestore();
});