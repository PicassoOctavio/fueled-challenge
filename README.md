## Blog App

Frontend application built with **React + Vite**, using **Redux Toolkit** for global state management, **JWT authentication**, and posts consumption via API.

---

## Installation

Clone this repository:

```bash
git clone https://github.com/PicassoOctavio/fueled-challenge
cd fueled-challenge
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Run development server

```bash
npm run dev
```

This will start the development server at [http://localhost:5173](http://localhost:5173).

---

## 🏗️ Available scripts

- `npm run dev` → start the Vite development server.
- `npm run build` → build the project for production.
- `npm run preview` → preview the production build locally.
- `npm run lint` → run ESLint to check for code style and errors.

---

## 📂 Project structure

```
src/
 ├── api/              # Axios instance (with interceptors)
 ├── components/       # Reusable UI components
 │    └── Post.jsx     # Renders a post (title, author, content)
 ├── hooks/            # Custom hooks (useAuthStore, useBlogStore, etc.)
 ├── pages/            # Main views (Login, Home, About, etc.)
 ├── router/           # Routing with react-router-dom
 ├── store/            # Redux Toolkit slices and configuration
 └── App.jsx           # App entry point
```
