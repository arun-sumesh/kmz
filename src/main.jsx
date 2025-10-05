// main.jsx (top of file, before imports)
const saved = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const theme = saved ?? (prefersDark ? "dark" : "light");
document.documentElement.classList.toggle("dark", theme === "dark");

// now import React stuff
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Tailwind or custom CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
