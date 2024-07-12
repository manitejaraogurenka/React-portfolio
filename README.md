# MERN Stack with Vite

This template provides a minimal setup to get started with the MERN (MongoDB, Express, React, Node.js) stack using Vite for the frontend development environment, including Hot Module Replacement (HMR) and ESLint rules.

## Project Structure

manitejaraogurenka/
├── client/ # React frontend
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── App.jsx
│ │ └── index.jsx
│ ├── .env # Frontend environment variables
│ └── package.json# Frontend dependencies and scripts
├── server/ # Node.js & Express backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── app.js
│ ├── server.js
│ ├── .env # Backend environment variables
│ └── package.json# Backend dependencies and scripts
├── .gitignore # Ignored files and directories for version control
└── README.md # Project documentation

### Prerequisites

- Node.js installed on your machine
- MongoDB installed locally or accessible via a cloud service

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/manitejaraogurenka.git
   cd manitejaraogurenka
   ```

# Install backend dependencies

cd server
npm install or npm i

# Install frontend dependencies

cd ../client
npm install or npm i
