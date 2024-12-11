import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for theme preference
    if (localStorage.theme === "dark") {
      return true; // Dark mode is set
    } else if (localStorage.theme === "light") {
      return false; // Light mode is set
    } else {
      // If no preference is set, check system preference
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => {
        setDarkMode((currMode) => !currMode);
      }}
    >
      {darkMode ? (
        <div className="rounded-full bg-dark p-2 px-6 hover:bg-gray-500">
          <SunIcon className="h-14" />
        </div>
      ) : (
        <div className="rounded-full bg-gray-200 p-2 px-6 text-dark transition-all duration-200 hover:bg-dark hover:text-gray-200">
          <MoonIcon className="h-14" />
        </div>
      )}
    </button>
  );
}

export default DarkModeToggle;
