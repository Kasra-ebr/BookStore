
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

## ✅ Functional Components using React Hooks

- **Why it's separate**: This emphasizes that the project follows the modern React approach of using functional components instead of class-based components. **React Hooks** (like `useState`, `useEffect`, etc.) are used to handle state and side effects in functional components, which is a more declarative and concise way of writing React components.

---

## ✅ DRY Principles and Reusable UI

- **Why it's separate**: This section highlights the importance of keeping the code **clean, maintainable**, and **efficient**. **DRY** stands for "Don't Repeat Yourself," a principle that encourages avoiding code duplication. Instead of repeating logic, reusable UI components are created, making the code more modular and easier to update or scale.

---

## ✅ Context API for Global State

- **Why it's separate**: The **Context API** is a powerful tool for managing and sharing state across multiple components in a React application. Instead of passing props down through multiple layers of components (which can become cumbersome), the **Context API** is used to maintain a **global state** that can be accessed anywhere in the app. This is especially helpful for data like user authentication, app settings, or, in this case, **characters**, **episodes**, and **favourites**.

---

## ✅ Separation of UI and Logic

- **Why it's separate**: This describes the **architectural** approach taken in the app. Keeping **UI** (view-related code) and **business logic** (data-fetching, state management) in separate parts of the app helps with **modularity**, **reusability**, and **testability**. For example:
  - UI components only care about displaying data.
  - Logic (e.g., fetching characters from an API, managing state) is abstracted away in custom hooks or context, making the codebase cleaner and more maintainable.

---

## ✅ Reusable Button, Modal, and Character Components

- **Why it's separate**: This points to the **UI components** that have been made **reusable** to avoid redundancy in the code. For example:
  - **Button** component: A reusable button that can be customized for any use case.
  - **Modal** component: A general-purpose modal dialog that can display different content.
  - **Character** component: A component designed to display character details.

These components are **not hardcoded** for a specific part of the app. Instead, they can be used in various parts of the application by passing in different props.

---

## ✅ All State Lives in Context: Characters, Episodes, SelectedId, Search, Favourites

- **Why it's separate**: This point explains the state management strategy used. By centralizing all state within the **Context**, you ensure that:
  - Global state (like the list of **characters** and **episodes**) is accessible from any component without prop-drilling.
  - The **selected character** and **search query** are managed in a single place.
  - **Favourites** are stored and accessed in a consistent manner.


---

## 💻 Author

**Your Name** - [GitHub](https://github.com/Kasra-ebr)

---

## 📜 License

This project is open-source and free to use under the MIT License.
