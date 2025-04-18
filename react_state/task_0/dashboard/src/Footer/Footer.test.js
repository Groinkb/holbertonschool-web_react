import React from 'react';
import {shallow} from 'enzyme';
import Footer from './Footer';

test('Footer renders without crashing', () => {
    shallow(<Footer />);
});

test('Verify that the Footer component at the very least render the text “Copyright”', () => {
    const wrapper = shallow(
        <Footer>
            <div className="App-footer"></div>
        </Footer>
    );
    expect(wrapper.text().includes('Copyright')).toBe(true);
});