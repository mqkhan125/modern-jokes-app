# 😂 Modern Jokes App

A full-stack Jokes web application built with **React (Frontend)** and **Node.js + Express (Backend)**.  
The app allows users to browse jokes, search by text, and filter by categories with a simple and clean UI.

---
## UI Preview 
<img width="1329" height="616" alt="UI" src="https://github.com/user-attachments/assets/c890b025-7dba-44e1-88ce-a3df12668745" />
---

## 🚀 Tech Stack

### Frontend
- React.js (Hooks: useState, useEffect)
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- REST API
- Middleware
- Router
- Controller-based architecture

---

modern-jokes-app/
│
├── backend/
│ ├── routes/ # API routes
│ ├── controllers/ # Business logic
│ ├── middleware/ # Custom middleware (if any)
│ ├── data/ # Jokes data
│ └── server.js # Entry point
│
├── frontend/
│ ├── components/ # UI components (Header, Sidebar, Category, JokeCard)
│ ├── App.jsx # Main app logic
│ └── index.js


---

## ⚙️ Backend Features

- RESTful API creation
- Router-based structure
- Controller logic separation
- Middleware support
- Jokes data handling
- Search API (`/search?q=`)
- Category filter API (`/filter?category=`)

---

## 🎯 Frontend Features

- Fetch jokes from backend API
- Search functionality
- Category filtering system
- Dynamic UI rendering
- Responsive layout using Tailwind
- Components:
  - Header (Search + Total jokes)
  - Sidebar
  - Category filter
  - JokeCard display

---

## 🔍 API Endpoints

### Get all jokes
---

## 🧠 Key Learning

- React state management
- Component-based architecture
- API integration with Axios
- Backend MVC pattern (Router + Controller)
- Filtering & search logic
- UI state vs derived data understanding

---

## 👨‍💻 Author

**M Qasim Khan**

---
GET /api/jokes


### Search jokes

GET /api/jokes/search?q=keyword


### Filter by category

GET /api/jokes/filter?category=Programming

## 📌 Note

This project is built for learning full-stack development concepts including:
- API design
- React frontend architecture
- State management
- Real-world filtering and search logic

## 📁 Project Structure
