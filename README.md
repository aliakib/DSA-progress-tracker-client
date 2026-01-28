### DSA Progress Tracker – Frontend

A React + TypeScript application for tracking DSA practice progress with a clean, responsive UI.

✨ Features

JWT-based authentication with protected routes

Persistent login with auth hydration (no refresh flicker)

Topic-wise DSA sheet with problems

Mark problems as completed / pending

Visual progress bars per topic

Progress overview page (difficulty-based tiles)

Fully responsive (mobile, tablet, desktop)

Route-level code splitting

Skeleton loaders & inline spinners

🛠 Tech Stack

React + TypeScript

Redux Toolkit + Thunks

React Router v6

Tailwind CSS

Axios

🏗 Structure

Feature-based architecture (auth, topics, progress)

Centralized route constants

Derived state for progress (no duplication)

▶️ Run Frontend
npm install
npm run dev

🌐 Env
VITE_API_URL=http://localhost:5000/api/v1