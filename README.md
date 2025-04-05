# Trello Client Side

![React](https://img.shields.io/badge/React-18.0+-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC)
![React DnD](https://img.shields.io/badge/React_DnD-16.0+-green)
![React Query](https://img.shields.io/badge/React_Query-4.0+-ff4154)

A modern, responsive Trello-inspired task management application frontend built with React. This application provides an intuitive drag-and-drop interface for managing tasks across different status categories.

## Important Links

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-2ea44f?style=for-the-badge&logo=vercel)](https://trello-0.netlify.app/)
[![Client Repository](https://img.shields.io/badge/Client_Code-GitHub-blue?style=for-the-badge&logo=github)](https://github.com/azizurrahman-zero/trello_client-side)
[![Server Repository](https://img.shields.io/badge/Server_Code-GitHub-blue?style=for-the-badge&logo=github)](https://github.com/azizurrahman-zero/trello_server-side)

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Features

- **Intuitive Drag & Drop**: Move tasks between different status columns with ease
- **Task Management**: Create, edit, and delete tasks with custom titles, and descriptions
- **Priority Levels**: Visual indicators for task priority (Low, Medium, High)
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Status Tracking**: Organize tasks into 5 different status categories:
  - To Do
  - Research
  - In Progress
  - Review
  - Completed
- **Real-time Updates**: Changes are immediately reflected in the UI and persisted to the backend

## Technologies Used

- **React**: Frontend library for building the user interface
- **React Beautiful DnD**: Drag and drop library for task movement [1]
- **React Query**: Data fetching, caching, and state management [3]
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Axios**: HTTP client for API requests
- **React Router**: Navigation and routing
- **React Icons**: Icon library for visual elements

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- The Trello backend API running (see [Server Repository](https://github.com/azizurrahman-zero/trello_server-side))

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/azizurrahman-zero/trello_client-side.git
   cd trello_client-side
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory:
   ```
   REACT_APP_BACKEND_URL=http://localhost:5000
   ```

4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Environment Variables

| Variable | Description |
|----------|-------------|
| REACT_APP_BACKEND_URL | URL of the backend API server |

## Usage

### Board View
The main interface displays all tasks organized by status columns. Drag and drop tasks between columns to update their status.

### Creating Tasks
Click the "Add Task" button in any column to create a new task. Fill in the required details:
- Title
- Description
- Priority Level (Low, Medium, High)

### Editing Tasks
Click on any task card's edit icon to edit information as needed. Changes are automatically saved to the backend and the UI updates immediately thanks to React Query's cache management.

## Project Structure

```
trello_client-side/
├── node_modules/
├── public/
│   ├── index.html
│   ├── favicon.png
│   └── ...
├── src/
│   ├── components/
│   │   ├── AddTicket.js
│   │   ├── AllList.js
│   │   ├── EditTicket.js
│   │   ├── Footer.js
│   │   ├── Home.js
│   │   ├── List.js
│   │   ├── Loading.js
│   │   ├── Navbar.js
│   │   ├── TicketList.js
│   │   └── services/
│   ├── Resource/
│   │   └── logo.png
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tailwind.config.js
```
