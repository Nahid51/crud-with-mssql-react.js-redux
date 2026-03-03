# DummyEmployee Frontend

A modern React application for managing employee records with a clean, responsive user interface. Built with React, Vite, Redux-Toolkit, and Tailwind CSS.

## Overview

DummyEmployee Frontend is a full-featured employee management system that provides an intuitive interface for creating, reading, updating, and deleting employee records. The application communicates with a backend API to manage employee data and provides real-time feedback through toast notifications.

## Features

- **View Employees**: Display a complete list of all employees in the system
- **Add Employees**: Create new employee records with relevant information
- **Update Employees**: Edit existing employee details
- **Delete Employees**: Remove employee records with confirmation
- **Real-time Notifications**: Get instant feedback on all operations via toast notifications
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **State Management**: Redux Toolkit for efficient state management

## Tech Stack

- **React 19.2.0** - UI library
- **Vite 7.3.1** - Build tool and dev server
- **Redux Toolkit 2.11.2** - State management
- **Tailwind CSS 4.2.1** - Utility-first CSS framework
- **React Hot Toast 2.6.0** - Notification library
- **React Redux 9.2.0** - React bindings for Redux
- **React Compiler** - Performance optimization

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dummyEmployee-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- **`npm run dev`** - Start the development server with hot module replacement
- **`npm run build`** - Build the application for production
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality

## Project Structure

```
src/
├── App.jsx              # Main application component
├── App.css              # Application styles
├── main.jsx             # Application entry point
├── store.js             # Redux store configuration
└── services/
    └── employee.js      # API service for employee operations
```

## API Integration

The application uses RTK Query for API communication. Employee operations are handled through the following mutations and queries:

- `useGetAllEmployeesQuery()` - Fetch all employees
- `useGetEmployeeByIdQuery()` - Fetch employee by ID
- `useAddEmployeeMutation()` - Create new employee
- `useUpdateEmployeeMutation()` - Update employee information
- `useDeleteEmployeeMutation()` - Delete employee record

## Development

### Code Quality

The project uses ESLint for code linting. Run the linter with:
```bash
npm run lint
```

### React Compiler

This template includes the React Compiler for enhanced performance optimization. For more information, see the [React Compiler documentation](https://react.dev/learn/react-compiler).

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This generates a `dist/` folder with the production-ready files.

To preview the production build locally:

```bash
npm run preview
```

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Create a feature branch for your changes
2. Write clear commit messages
3. Ensure code passes linting checks
4. Test your changes thoroughly

## License

This project is part of the DummyEmployee system. All rights reserved.
