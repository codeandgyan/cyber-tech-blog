import { Link } from "react-router-dom";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { useState } from "react";
import ToggleTheme from "./ToggleTheme";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Reusable navigation links
  const navLinks = [
    { to: "/articles", label: "Articles" },
    { to: "/blog", label: "Blog" },
    { to: "/tech", label: "Tech" },
    { to: "/about", label: "About us" },
  ];

  return (
    <nav className="relative">
      {/* Hamburger Menu for smaller screens */}
      <div className="lg:hidden flex items-center justify-end space-x-1">
        <ToggleTheme />

        <button
          onClick={toggleMenu}
          className="p-2 rounded hover:opacity-80 active:bg-gray-300 dark:active:bg-gray-800 transition"
        >
          {isMenuOpen ? <XIcon size={32} /> : <ListIcon size={32} />}
        </button>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg z-10">
          <ul className="flex flex-col items-start space-y-2 p-4">
            {navLinks.map((link) => (
              <li key={link.label} className="w-full">
                <Link
                  to={link.to}
                  className={`block p-1 rounded 
                    active:bg-gray-200 dark:active:bg-gray-800
                    hover:bg-gray-200 dark:hover:bg-gray-800 hover:underline transition`}
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Full Navbar for larger screens */}
      <div className="hidden lg:flex items-center font-bold space-x-5">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className="px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800 hover:underline transition"
          >
            {link.label}
          </Link>
        ))}
        <ToggleTheme />
      </div>
    </nav>
  );
}

export default Navbar;
