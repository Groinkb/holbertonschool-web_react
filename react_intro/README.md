# Holberton School Dashboard

A React-based dashboard application that displays notifications and provides a login interface.

## Project Overview

This project is a simple React application built with Vite that demonstrates the fundamentals of React development including component creation, styling, testing, and project organization.

## Features

- Header with Holberton logo
- Login form with email and password inputs
- Notifications display with prioritized items
- Responsive footer with copyright information

## Tech Stack

- React
- Vite (Build tool)
- React Testing Library + Jest (Testing)
- CSS for styling

## Project Structure

```
dashboard/
├── public/
│   └── favicon.ico
├── src/
│   ├── App/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   └── App.spec.js
│   ├── Notifications/
│   │   ├── Notifications.css
│   │   ├── Notifications.jsx
│   │   └── Notifications.spec.js
│   ├── utils/
│   │   ├── utils.js
│   │   └── utils.spec.js
│   ├── assets/
│   │   ├── holberton-logo.jpg
│   │   └── close-button.png
│   └── index.js
├── .babelrc
├── fileTransformer.js
├── setupTests.js
└── package.json
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/holbertonschool-web_react.git
cd holbertonschool-web_react/react_intro/task_5/dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173/
```

## Testing

To run the tests:

```bash
npm test
```

This will execute all test files with the `.spec.js` extension.

## Building for Production

To build the application for production:

```bash
npm run build
```

The build files will be located in the `dist` directory.

## Deployment

This project can be deployed to GitHub Pages:

1. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add deployment scripts to package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy the application:
```bash
npm run deploy
```

## Components

### App

The main application component that includes:
- Header with Holberton logo
- Login form
- Footer with copyright information

### Notifications

Displays notification items with different priority levels:
- Default notifications (blue)
- Urgent notifications (red)
- HTML notifications (rendered using dangerouslySetInnerHTML)

## Utils

Utility functions that provide:
- Current year for footer copyright
- Footer text based on isIndex parameter 
- HTML string for latest notification

## License

This project is part of the Holberton School curriculum.

##Author
[BM]