import React from 'react';
import CourseListRow from "./CourseListRow";
import {shallow} from 'enzyme';
import {StyleSheetTestUtils} from 'aphrodite';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

test('Renders th cell with colspan = 2, when isHeader is true and textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First Cell" textSecondCell={null} />);
    expect(wrapper.find('tr').length).toBe(1);
    expect(wrapper.find('tr').find('th').length).toBe(1);
    expect(wrapper.find('tr').find('th').text().includes('First Cell')).toBe(true);
    expect(wrapper.find('tr').find('th').prop('colSpan')).toBe("2");
});

test('Renders th cells, when isHeader is true and textSecondCell exist', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First Cell" textSecondCell="Second Cell" />);
    expect(wrapper.find('tr').length).toBe(1);
    expect(wrapper.find('tr').find('th').length).toBe(2);
    expect(wrapper.find('tr').find('th').at(0).text().includes('First Cell')).toBe(true);
    expect(wrapper.find('tr').find('th').at(1).text().includes('Second Cell')).toBe(true);
});

test('Renders th cells, when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="First Cell" textSecondCell="Second Cell" />);
    expect(wrapper.find('tr').length).toBe(1);
    expect(wrapper.find('tr').find('td').length).toBe(2);
    expect(wrapper.find('tr').find('td').at(0).text().includes('First Cell')).toBe(true);
    expect(wrapper.find('tr').find('td').at(1).text().includes('Second Cell')).toBe(true);
});
