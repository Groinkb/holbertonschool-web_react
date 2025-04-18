# React Component

This project focuses on understanding and implementing React components, including lifecycle methods, events handling, and various component patterns.

## Learning Objectives

By the end of this project, you should be able to explain:

- When to use a Class or a function to create a component
- The lifecycle of a Class component
- How to test a component
- How to use a Jest spy to verify that a function is being called correctly
- What a Higher Order Component (HOC) is and how to use it
- How to optimize performance and control which components to render

## Requirements

- All files will be interpreted/compiled on Ubuntu 20.04 LTS using node 20.x.x and npm 10.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A README.md file at the root of the project folder is mandatory
- Jest must be installed globally: `npm install -g jest`

## Project Structure

The project is divided into several tasks, each focusing on different aspects of React components:

### Task 0: Switch to Class Components

- Convert the App function component into a React Class component
- Ensure all tests still pass
- Maintain the same UI appearance

### Task 1: Component Lifecycles

- Add lifecycle methods to the App component
- Implement keyboard event listeners (Ctrl+H to log out)
- Write tests to verify event listener behavior

### Task 2: Handling Events

- Convert Notifications and NotificationItem from functional to class components
- Implement a markAsRead method to handle notification clicks
- Add tests to verify event handling

### Task 3: Reusable Components & Specialization

- Create a BodySection component for containment patterns
- Create a BodySectionWithMarginBottom component as a specialized version
- Write tests for both components

### Task 4: Component Integration

- Use the new BodySection components in the App component
- Wrap CourseList and Login components with BodySectionWithMarginBottom
- Add a new News section using BodySection
- Write tests to verify component integration

### Task 5: Higher Order Components (HOC)

- Create a WithLogging HOC to log component mounting and unmounting
- Apply the HOC to various components
- Write tests for the HOC

### Task 6: Pure Components

- Convert NotificationItem to a Pure Component
- Optimize rendering to avoid unnecessary updates

### Task 7: Custom Pure Component Implementation

- Optimize the Notifications component with shouldComponentUpdate
- Write tests to verify the component only re-renders when necessary

## Installation and Usage

1. Clone the repository:
```
git clone https://github.com/yourusername/holbertonschool-web_react.git
cd holbertonschool-web_react/react_component
```

2. Install dependencies:
```
cd task_X/dashboard
npm install
```

3. Run the development server:
```
npm start
```

4. Run tests:
```
npm test
```

## Testing Tips

- Use Jest spies to verify function calls
- Use the React Testing Library to test component behavior
- Clean up after each test to prevent memory leaks
- Mock browser functions like alert() for testing

## Performance Optimization

This project introduces several performance optimization techniques:
- Pure Components to prevent unnecessary re-renders
- Custom shouldComponentUpdate implementation
- Higher Order Components for cross-cutting concerns

## Author

[BM]

## License

This project is licensed under the MIT License - see the LICENSE file for details.