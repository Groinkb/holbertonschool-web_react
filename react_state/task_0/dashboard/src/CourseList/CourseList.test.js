import React from 'react';
import {shallow} from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import {StyleSheetTestUtils} from 'aphrodite';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

const listCourses = [
    {id: 4, name: 'Javascript', credit: 60},
    {id: 5, name: 'Python', credit: 20},
    {id: 6, name: 'C', credit: 40}
  ];

test('Renders CourseList component without crashing', () => {
    shallow(<CourseList />);
});

test('Renders the 5 different rows, when 3 courses available', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses}><table></table></CourseList >);
    expect(wrapper.find('CourseListRow').length).toBe(5);
});

test('Renders the 2 different rows when no courses available', () => {
    const wrapper = shallow(<CourseList listCourses={[]}><table></table></CourseList >);
    expect(wrapper.find('CourseListRow').length).toBe(2);
    expect(wrapper.text().includes('No course available yet')).toBe(true);
});

test('Renders the right text if courses are available', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses}><table></table></CourseList >);
    expect(wrapper.text().includes('No course available yet')).toBe(false);
    const firstItem = wrapper.find(CourseListRow).first().dive();
    expect(firstItem.find('th').text()).toBe("Available courses");
});
