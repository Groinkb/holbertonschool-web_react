import React from 'react';
import { shallow, mount } from "enzyme";
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import {StyleSheetTestUtils} from 'aphrodite';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
    jest.restoreAllMocks();
});
  
test('App renders without crashing', () => {
    shallow(<Notifications />);
});

test('Verify that App renders 4 NotificationItem', () => {
    const wrapper = mount(<Notifications 
        displayDrawer={true} 
        listNotifications={[
            {id: 4, type: "urgent", value: "test1"},
            {id: 5, type: "urgent", value: "test2"},
            {id: 6, type: "urgent", value: "test3"},
            {id: 7, type: "default", value: "test4"},
        ]}/>);
    expect(wrapper.find('NotificationItem').length).toBe(4);
});

test('Verify that App renders a <tr> element with the right text', () => {
    const wrapper = shallow(
        <Notifications displayDrawer={true} listNotifications={[]} />
    );
    expect(wrapper.text().includes('Here is the list of notifications')).toBe(false);
    expect(wrapper.contains(<tr>No new notification for now</tr>)).toBe(true);
});

test('Verify that App renders a div with the class App-header', () => {
    const wrapper = shallow(<Notifications 
        displayDrawer={true} 
        listNotifications={[
            {id: 4, type: "urgent", value: "test1"},
            {id: 5, type: "urgent", value: "test2"},
            {id: 6, type: "urgent", value: "test3"},
            {id: 7, type: "default", value: "test4"},
        ]}/>);
    const firstItem = wrapper.find(NotificationItem).first().dive();
    expect(firstItem.find('li').text()).toBe("test1");
});

test('Menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('[data-testid="menu-item"]').length).toBe(1);
});

test('div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.Notifications').length).toBe(0);
});

test('Menu item is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('[data-testid="menu-item"]').length).toBe(1);
});

test('div.Notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('[data-testid="notis"]').length).toBe(1);
});

test('Notifications renders correctly with a empty array or if no array is added', () => {
    shallow(<Notifications displayDrawer={true} />);
    shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
});

test('Calls markAsRead() when list item is clicked', () => {
    const mockMarkAsRead = jest.fn();
    const wrapper = shallow(<Notifications 
        displayDrawer={true} 
        listNotifications={[
            {id: 4, type: "urgent", value: "test1"},
            {id: 5, type: "urgent", value: "test2"},
            {id: 6, type: "urgent", value: "test3"},
            {id: 7, type: "default", value: "test4"},
        ]}/>);
    wrapper.instance().markAsRead = mockMarkAsRead;

    // Mock console.log
    console.log = jest.fn();

    // Simulate a click event
    const id = 4;
    wrapper.instance().markAsRead(id);

    // Check that console.log was called with the correct message
    expect(mockMarkAsRead).toHaveBeenCalled();
});

test('Logs the correct message when list item is clicked', () => {
    const mockMarkAsRead = jest.fn();
    const wrapper = shallow(<Notifications 
        displayDrawer={true} 
        listNotifications={[
            {id: 4, type: "urgent", value: "test1"},
            {id: 5, type: "urgent", value: "test2"},
            {id: 6, type: "urgent", value: "test3"},
            {id: 7, type: "default", value: "test4"},
        ]}/>);
        const id = 4;
        jest.spyOn(console, 'log'); // keep track of all calls to console.log and direct them to the mock function
        
        // Create a new instance of the Notifications class
        (new Notifications(Notifications.defaultProps)).markAsRead(id);
        expect(console.log.mock.calls).toEqual([[`Notification ${id} has been marked as read`]]);

        console.log.mockRestore(); // brings back the original behavior of console.log
    });

test('When updating the props with the same list, shouldComponentUpdate works as expected', () => {
    const wrapper = shallow(<Notifications 
        displayDrawer={true} 
        listNotifications={[
            {id: 4, type: "urgent", value: "test1"},
            {id: 5, type: "urgent", value: "test2"},
        ]}/>);
    const instance = wrapper.instance();
    // Simulate a nextProps
    const methodReturnValue = instance.shouldComponentUpdate({
        displayDrawer: true,
        listNotifications: [
        {id: 4, type: "urgent", value: "test1"},
        {id: 5, type: "urgent", value: "test2"},
    ]});

    // Check that shouldComponentUpdate returns the right value
    expect(methodReturnValue).toBe(false);
});

test('When updating the props with a larger list, shouldComponentUpdate works as expected', () => {
    const wrapper = shallow(<Notifications
        displayDrawer={true} 
        listNotifications={[
            {id: 4, type: "urgent", value: "test1"},
            {id: 5, type: "urgent", value: "test2"},
        ]}/>);
    const instance = wrapper.instance();
    // Simulate a nextProps
    const methodReturnValue = instance.shouldComponentUpdate({
        displayDrawer: true,
        listNotifications: [
        {id: 4, type: "urgent", value: "test1"},
        {id: 5, type: "urgent", value: "test2"},
        {id: 6, type: "urgent", value: "test3"},
    ]});

    // Check that shouldComponentUpdate returns the right value
    expect(methodReturnValue).toBe(true);
});

test('When updating the props with the same list, the component doesnt rerender', () => {
    // When wrapper is created, it calls render method once
    const wrapper = mount(<Notifications
        displayDrawer={true} 
        listNotifications={[
            {id: 4, type: "urgent", value: "test1"},
            {id: 5, type: "urgent", value: "test2"},
        ]}/>);

    const instance = wrapper.instance();
    const renderSpy = jest.spyOn(instance, 'render');
    instance.forceUpdate(); // To attach the spy

    wrapper.setProps({listNotifications: [
        {id: 4, type: "urgent", value: "test1"},
        {id: 5, type: "urgent", value: "test2"},
    ]});

    expect(renderSpy).toHaveBeenCalledTimes(1);

    wrapper.setProps({listNotifications: [
        {id: 4, type: "urgent", value: "test1"},
        {id: 5, type: "urgent", value: "test2"},
    ]});

    expect(renderSpy).toHaveBeenCalledTimes(1);
});

test('When updating the props with a larger list, the component rerender', () => {
    // When wrapper is created, it calls render method once
    const wrapper = mount(<Notifications
        displayDrawer={true} 
        listNotifications={[
            {id: 4, type: "urgent", value: "test1"},
            {id: 5, type: "urgent", value: "test2"},
        ]}/>);

    const instance = wrapper.instance();
    const renderSpy = jest.spyOn(instance, 'render');
    instance.forceUpdate(); // To attach the spy

    wrapper.setProps({listNotifications: [
        {id: 4, type: "urgent", value: "test1"},
        {id: 5, type: "urgent", value: "test2"},
        {id: 6, type: "urgent", value: "test3"},
    ]});

    expect(renderSpy).toHaveBeenCalledTimes(2);

    wrapper.setProps({listNotifications: [
        {id: 4, type: "urgent", value: "test1"},
        {id: 5, type: "urgent", value: "test2"},
        {id: 6, type: "urgent", value: "test3"},
        {id: 7, type: "urgent", value: "test4"},
    ]});

    expect(renderSpy).toHaveBeenCalledTimes(3);
});

test('clicking close button calls handleHideDrawer()', () => {
    const mockHandleHideDrawer = jest.fn();
    const wrapper = mount(<Notifications
        displayDrawer={true} 
        listNotifications={[
            {id: 4, type: "urgent", value: "test1"},
            {id: 5, type: "urgent", value: "test2"},
        ]}
        handleHideDrawer={mockHandleHideDrawer}
    />);

    wrapper.find('button').simulate('click');

    expect(mockHandleHideDrawer).toHaveBeenCalled();
    mockHandleHideDrawer.mockClear();
});

test('clicking div.menuItem calls handleDisplayDrawer()', () => {
    const mockHandleDisplayDrawer = jest.fn();
    const wrapper = mount(<Notifications
        displayDrawer={false} 
        listNotifications={[
            {id: 4, type: "urgent", value: "test1"},
            {id: 5, type: "urgent", value: "test2"},
        ]}
        handleDisplayDrawer={mockHandleDisplayDrawer}
    />);

    wrapper.find('div[data-testid="menu-item"]').simulate('click');

    expect(mockHandleDisplayDrawer).toHaveBeenCalled();
    mockHandleDisplayDrawer.mockClear();
});
