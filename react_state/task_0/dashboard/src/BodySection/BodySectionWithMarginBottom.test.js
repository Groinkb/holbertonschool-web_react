import React from 'react';
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import {StyleSheetTestUtils} from 'aphrodite';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

test('BodySectionWithMarginBottom add the right props', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom 
        title="Title text"
        children={<p>Paragraph test text</p>} />);
    expect(wrapper.find('BodySection').length).toBe(1);
    expect(wrapper.find('BodySection').find('p').length).toBe(1);
    expect(wrapper.find('p').length).toBe(1);

    expect(wrapper.find('BodySection').prop('title')).toBe(('Title text'));
    expect(wrapper.find('p').text()).toBe(('Paragraph test text'));
});
