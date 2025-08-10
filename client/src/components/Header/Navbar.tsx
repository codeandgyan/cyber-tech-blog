import { Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "@phosphor-icons/react";

function Navbar() {
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <nav className="hidden lg:flex items-center font-bold space-x-5">
      <Link
        to="/blog"
        className="px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition hover:underline"
      >
        Articles
      </Link>
      <Link
        to="/blog"
        className="px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition hover:underline"
      >
        Blog
      </Link>
      <Link
        to="/blog"
        className="px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition hover:underline"
      >
        Scams
      </Link>
      <Link
        to="/blog"
        className="px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition hover:underline"
      >
        About us
      </Link>
      <button
        onClick={() => {
          toggleTheme();
        }}
        className={`p-1 px-3 cursor-pointer rounded
          bg-gray-200 text-black
          dark:bg-gray-800  dark:text-gray-200
          hover:opacity-70 active:opacity-50 active:scale-95 transition`}
      >
        <SunIcon size={24} className="hidden dark:block" />
        <MoonIcon size={24} className="block dark:hidden" />
      </button>
    </nav>
  );
}

export default Navbar;
