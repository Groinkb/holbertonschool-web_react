import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('should render with background color #deb5b545 when isHeader is true', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="test" />
    );
    expect(wrapper.find('tr').prop('style')).toHaveProperty('backgroundColor', '#deb5b545');
  });

  it('should render with background color #deb5b545 when isHeader is true and textSecondCell is not null', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="test" textSecondCell="test2" />
    );
    expect(wrapper.find('tr').prop('style')).toHaveProperty('backgroundColor', '#deb5b545');
  });

  it('should render with background color #f5f5f5ab when isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test2" />
    );
    expect(wrapper.find('tr').prop('style')).toHaveProperty('backgroundColor', '#f5f5f5ab');
  });
});