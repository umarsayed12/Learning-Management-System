import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, UserCircle } from "lucide-react";

const Navbar = ({ isLoggedIn }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-custom-blueDark dark:bg-gray-900 text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-custom-yellow">Lumora</span>
        </div>

        {/* Center: Links */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8">
          {["Home", "Features", "About", "Contact"].map((item) => (
            <a key={item} href="#" className="relative group">
              <span className="group-hover:underline underline-offset-4">
                {item}
              </span>
            </a>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button onClick={toggleDarkMode}>
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          {isLoggedIn ? (
            <UserCircle className="w-6 h-6 text-custom-orange" />
          ) : (
            <>
              <button className="px-4 py-1 rounded bg-custom-orange hover:bg-custom-orangeLight">
                Login
              </button>
              <button className="px-4 py-1 rounded bg-custom-yellow hover:bg-yellow-500">
                Sign Up
              </button>
            </>
          )}
        </div>

        {/* Mobile Right: Hamburger + Profile */}
        <div className="md:hidden flex items-center space-x-3">
          {isLoggedIn && <UserCircle className="w-6 h-6 text-custom-orange" />}
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown Overlay) */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-custom-blueDark dark:bg-gray-900 text-white px-6 py-4 space-y-4 shadow-lg z-40">
          <ul className="space-y-3">
            {["Home", "Features", "About", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block w-fit border-b-2 border-transparent hover:border-custom-orange transition duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4 pt-4 border-t border-gray-700">
            <button onClick={toggleDarkMode}>
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            {!isLoggedIn && (
              <>
                <button className="px-4 py-1 rounded bg-custom-orange hover:bg-custom-orangeLight">
                  Login
                </button>
                <button className="px-4 py-1 rounded bg-custom-yellow hover:bg-yellow-500">
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
