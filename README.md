# iTech Club App

This project is a full-stack web application for managing club users and attendance at Zetech University. It consists of two main parts:

- [`client`](client) — The frontend, built with React and Vite.
- [`backend`](backend) — The backend API, built with Node.js, Express, and MongoDB.

---

## Features

- User registration and login
- Role-based user management (member, admin, moderator)
- Attendance tracking for club members
- Modern responsive UI

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)

---

### 1. Backend Setup

1. Go to the backend folder:

   ```sh
   cd backend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the `backend` directory with the following variables:

   ```
   PORT=3002
   MONGODB_URI=mongodb://localhost:27017/itech
   BCRYPT_SALT_ROUNDS=10
   JWT_KEY=your_jwt_secret
   ```

4. Start the backend server:

   ```sh
   npm run dev
   ```

   The backend API will run on `http://localhost:3002`.

---

### 2. Client Setup

1. Open a new terminal and go to the client folder:

   ```sh
   cd client
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the frontend development server:

   ```sh
   npm run dev
   ```

   The React app will run on `http://localhost:5173` (or as shown in your terminal).

---

## Folder Structure

- [`client`](client): React frontend (see [client/README.md](client/README.md) for more info)
- [`backend`](backend): Express backend API

---

## API Endpoints

- `POST /itech-club/user` — Register a new user
- `POST /itech-club/user/login` — User login
- `GET /itech-club/user` — Get all users
- `GET /itech-attend/attendance` — Get all attendance records
- `POST /itech-attend/attendance` — Create or update attendance

---


## Author

waren