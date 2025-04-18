# React State

This project focuses on implementing state management in React applications. It builds upon previous React projects and introduces state management, lifecycle methods, controlled components, and context API.

## Learning Objectives

By the end of this project, you should be able to explain:

- What the state of a component or container is
- The lifecycle of a component
- How to modify state and execute code in the right order
- What a controlled component is
- How to use Forms in React
- How to reuse smaller components, keep them pure, and lift state to principal containers
- The use of React Hooks and how to create one
- How to pass data deeply using context

## Requirements

- All files will be interpreted/compiled on Ubuntu 20.04 LTS using node 20.x.x and npm 10.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A README.md file at the root of the project folder is mandatory
- Jest should be installed globally: `npm install -g jest`

## Project Structure

The project is divided into several tasks:

### Task 0: Adding a local state for notifications

- Implement local state in App component to manage the display of notifications
- Create functions to handle showing and hiding notifications
- Update tests to verify notification display functionality

### Task 1: Controlled components and state callback

- Convert Login component from functional to class component
- Implement form handling and controlled inputs
- Add validation for email and password fields
- Enable/disable submit button based on input validity
- Add tests to verify form behavior

### Task 2: Context

- Create a React Context to manage user information
- Implement login functionality
- Update App component to use context
- Pass login method to Login component
- Update tests for the new functionality

### Task 3: Log Out implementation

- Modify Header component to use Context API
- Add logout section that appears when user is logged in
- Implement logout functionality
- Update tests to verify logout functionality

### Task 4: Context consumer & advanced state

- Subscribe Footer component to context changes
- Display "Contact us" link when user is logged in
- Add notification management with markNotificationAsRead method
- Convert Notifications component to PureComponent
- Update tests for all new functionality

## Installation and Usage

1. Clone the repository:
```
git clone https://github.com/yourusername/holbertonschool-web_react.git
cd holbertonschool-web_react/react_state
```

2. For each task directory, install dependencies:
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

## Author

BM

## License

This project is licensed under the MIT License - see the LICENSE file for details.