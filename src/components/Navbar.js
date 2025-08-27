import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ dark, setDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleToggle = () => setDark(!dark);

  const handleNavClick = (sectionId) => {
    if (location.pathname === "/") {
      // Already on home page, scroll directly
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home first, then scroll after short delay
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // 100ms delay ensures page has rendered
    }
    setIsOpen(false); // close mobile menu
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
          Jacob Abraham
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 text-gray-700 dark:text-gray-200 font-medium">
            <li>
              <button
                onClick={() => handleNavClick("home")}
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("about")}
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("projects")}
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("contact")}
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Dark Mode Toggle */}
          <button
            onClick={handleToggle}
            aria-label="Toggle dark mode"
            className="relative w-14 h-8 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition"
          >
            <div
              className={`absolute left-1 top-1 w-6 h-6 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow transition-transform ${
                dark ? "translate-x-6" : "translate-x-0"
              }`}
            >
              {dark ? <Sun className="w-4 h-4 text-yellow-500" /> : <Moon className="w-4 h-4 text-gray-700" />}
            </div>
          </button>
        </div>

        {/* Mobile Menu Button + Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={handleToggle}
            aria-label="Toggle dark mode"
            className="mr-2 relative w-12 h-6 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition"
          >
            <div
              className={`absolute left-1 top-1 w-4 h-4 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow transition-transform ${
                dark ? "translate-x-6" : "translate-x-0"
              }`}
            >
              {dark ? <Sun className="w-3 h-3 text-yellow-500" /> : <Moon className="w-3 h-3 text-gray-700" />}
            </div>
          </button>

          <button onClick={toggleMenu}>
            {isOpen ? (
              <X className="w-6 h-6 text-gray-800 dark:text-gray-100" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800 dark:text-gray-100" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 text-gray-700 dark:text-gray-200 font-medium bg-white dark:bg-gray-800 transition-colors">
          {["home", "about", "projects", "contact"].map((section) => (
            <li key={section}>
              <button onClick={() => handleNavClick(section)}>{section.charAt(0).toUpperCase() + section.slice(1)}</button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
