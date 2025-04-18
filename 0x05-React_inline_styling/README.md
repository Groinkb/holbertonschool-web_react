# React Inline Styling

This project focuses on implementing inline styling techniques in React applications. We'll convert traditional CSS files to inline styles using the Aphrodite library, implement conditional styling, responsive design, and animations.

## Learning Objectives

By the end of this project, you are expected to be able to explain to anyone:

- The differences between using a CSS file and inline styling
- How to use a CSS-in-JS tool like Aphrodite
- How to use conditions within JS to apply different styles
- How to use responsive design and make applications show different UI according to screen size
- How to create small animations within the app

## Requirements

- All files will be interpreted/compiled on Ubuntu 20.04 LTS using node 20.x.x and npm 10.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A README.md file at the root of the project folder is mandatory
- Jest should be installed globally: `npm install -g jest`

## Project Structure

The project is divided into four main tasks:

### Task 0: Inline Styling

Modify the `CourseListRow` component to use inline styling:
- Change background color of rows to `#f5f5f5ab`
- Change background color of header rows to `#deb5b545`
- Update tests to verify styling changes

### Task 1: Install Aphrodite

- Install Aphrodite: `npm install --save aphrodite`
- Convert CSS styling to Aphrodite in multiple components:
  - App
  - BodySectionWithMarginBottom
  - CourseList
  - Header
  - Login
  - Notifications
- Remove CSS files and update tests

### Task 2: Conditional Styling

- Implement conditional styling in `NotificationItem` and `CourseListRow` components
- Apply different styles based on props (urgent/default notifications, header/default rows)
- Ensure all tests continue to pass

### Task 3: Responsive Design

Implement responsive design for:
- Login component: Labels and inputs on each line, button on new line
- Notifications component: Full-screen layout when panel is open
- NotificationItem component: Full width, border, adjusted font size and padding

### Task 4: Animation

Add animations to the Notifications component:
- Opacity change animation
- Bounce effect animation
- Special hover styles for the menu item
- Configure animation duration and repetition

## Installation and Usage

1. Clone the repository:
```
git clone https://github.com/yourusername/holbertonschool-web_react.git
cd holbertonschool-web_react/react_inline_styling
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

## Testing with Aphrodite

When testing components that use Aphrodite, you may need to:
- Import `StyleSheetTestUtils` from Aphrodite
- Use `StyleSheetTestUtils.suppressStyleInjection()` before tests
- Use `StyleSheetTestUtils.clearBufferAndResumeStyleInjection()` after tests

## Author

[BM]

## License

This project is licensed under the MIT License - see the LICENSE file for details.