import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';
import {StyleSheetTestUtils} from 'aphrodite';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

test('Header component renders whitout crashing', () => {
    shallow(<Header />);
});

test('Verify that the Header component render (1) img and (1) h1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
});
