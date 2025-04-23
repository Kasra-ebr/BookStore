
# 📚 Bookstore React App

A modern, responsive bookstore application built with React, TypeScript, and Vite.
Explore a collection of programming books with a sleek UI and powerful search functionality. Whether you're just browsing or curating a list of favourites, this app delivers a seamless, real-time experience

Users can:
- 🔍 Search for books
- 💖 Add/remove books to/from favourites
- 📖 View book information (image, price, title)
- 🔄 Live search functionality
- 💾 Persistent favourites via localStorage

---

## 🖼️ Preview

![Bookstore Screenshot](https://i.postimg.cc/Ssnm6PX2/Screenshot-279.png)

---

## 🧰 Technologies Used

[![React](https://img.shields.io/badge/React-Hooks-blue?style=flat-square&logo=react)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strongly_Typed-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-Fast-purple?style=flat-square&logo=vite)](https://vitejs.dev)
[![React Context](https://img.shields.io/badge/Context_API-State_Management-green?style=flat-square)](https://reactjs.org/docs/context.html)
[![React Icons](https://img.shields.io/badge/React_Icons-Icons-blue?style=flat-square)](https://react-icons.github.io/react-icons)

---

## 🏗️ Features

- ✅ Book List with image, price, and title
- ✅ Favourite functionality with heart icon
- ✅ Persistent favourites using localStorage
- ✅ Live Search
- ✅ Context API for global state
- ✅ Reusable UI components: Button, Input, Modal

---

## 📂 Project Structure

```bash
src/
├── App.tsx
├── Components/
│   ├── BookCardList.tsx
│   ├── Favourites.tsx
│   ├── Navbar.tsx
│   ├── Search.tsx
│   ├── Layout.tsx
│   └── UI/
│       ├── Button.tsx
│       └── Input.tsx
│   └── Hooks/
│       └── BookContextProvider.tsx
├── server/
│   └── server.ts
├── Type/
│   └── type.ts
├── index.css
└── main.tsx
```

---

## ✅ Best Practices

- **Functional Components** with **React Hooks**
- **DRY Principle** with reusable UI
- **Context API** for centralized global state
- **Separation of Concerns** between logic and UI

---

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/your-username/bookstore-react-app.git

# 2. Navigate into the directory
cd bookstore-react-app

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev
```

Visit `http://localhost:5173` to view the app in your browser.

---

## 📦 Backend (JSON Server)

Make sure `json-server` is running:

```bash
npx json-server --watch db.json --port 3001
```

---

## 💻 Author

**Your Name** - [GitHub](https://github.com/your-username)

---

## 📜 License

This project is open-source and free to use under the MIT License.
