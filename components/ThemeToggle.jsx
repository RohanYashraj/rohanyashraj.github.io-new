"use client";
// components/ThemeToggle.js
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = root.classList.contains("dark") ? "dark" : "light";
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.remove("dark");
      setTheme("light");
    } else {
      root.classList.add("dark");
      setTheme("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center h-8 rounded-full w-16 bg-gray-300 dark:bg-gray-500 focus:outline-none transition-colors"
    >
      <span
        className={`${
          theme === "dark" ? "translate-x-8" : "translate-x-1"
        } inline-block w-6 h-6 transform bg-white rounded-full transition-transform flex items-center justify-center`}
      >
        {theme === "dark" ? (
          <FaMoon className="text-primary/80" />
        ) : (
          <FaSun className="text-yellow-400" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
