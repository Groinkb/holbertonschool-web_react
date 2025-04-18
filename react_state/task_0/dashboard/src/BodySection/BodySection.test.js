import React from 'react';
import { shallow } from "enzyme";
import BodySection from "./BodySection";


test('BodySection renders the children and one h2 element', () => {
    const wrapper = shallow(<BodySection 
        title="Title text"
        children={<p>Paragraph test text</p>} />);
    expect(wrapper.find('h2').length).toBe(1);
    expect(wrapper.find('p').length).toBe(1);

    expect(wrapper.find('h2').text()).toBe(('Title text'));
    expect(wrapper.find('p').text()).toBe(('Paragraph test text'));
});
