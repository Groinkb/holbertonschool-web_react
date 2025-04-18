import React from 'react';
import NotificationItem from './NotificationItem';
import {shallow} from 'enzyme';
import {StyleSheetTestUtils} from 'aphrodite';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

test('Verify that the basic rendering of the component works without crashing', () => {
    shallow(<NotificationItem />);
});

test('Verify that by passing dummy type and dummy value,, it renders the correct html', () => {
    const wrapper = shallow(<NotificationItem type="default" value='test1' />);
    expect(wrapper.find('li').length).toBe(1);
    expect(wrapper.find('li').prop('data-notification-type')).toBe("default");
    expect(wrapper.find('li').text().includes('test1')).toBe(true);
});

test('Verify that by passing dummy value, it renders the correct html', () => {
    const wrapper = shallow(<NotificationItem html={{__html: '<u>test2</u>'}}/>);
    expect(wrapper.find('li').length).toBe(1);
    expect(wrapper.find('li').prop('dangerouslySetInnerHTML')).toEqual({__html: '<u>test2</u>'});
});
