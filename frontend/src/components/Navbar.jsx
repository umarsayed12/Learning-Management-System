import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, UserCircle } from "lucide-react";
import { TabsTrigger } from "@radix-ui/react-tabs";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
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
          <span className="text-4xl font-bold font-cedar text-custom-yellow">
            Lumora
          </span>
        </div>

        {/* Center: Links */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8">
          {["Home", "Features", "About", "Contact"].map((item) => (
            <a key={item} href="#" className="relative group">
              <span className="group-hover:text-custom-yellow underline-offset-4">
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
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-1 rounded bg-white text-custom-blueDark hover:bg-black hover:text-white"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="px-4 py-1 rounded text-custom-blueDark bg-custom-yellow hover:bg-yellow-500"
              >
                Sign Up
              </button>
            </>
          )}
        </div>

        {/* Mobile Right: Hamburger + Profile */}
        <div className="md:hidden flex items-center space-x-3">
          <button onClick={toggleDarkMode}>
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
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
        <div className="md:hidden absolute top-full left-0 w-full bg-transparent backdrop-blur-md dark:bg-gray-900 text-black px-6 py-4 space-y-4 shadow-lg z-40">
          <ul className="space-y-3 w-full">
            {["Home", "Features", "About", "Contact"].map((item) => (
              <li className="flex justify-center" key={item}>
                <a
                  onClick={() => setMenuOpen(!menuOpen)}
                  href="#"
                  className="block w-fit border-b-2 text-center border-transparent hover:border-custom-orange transition duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-700">
            {!isLoggedIn && (
              <>
                <button
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                    navigate("/login");
                  }}
                  className="px-4 py-1 rounded bg-custom-orange hover:bg-custom-orangeLight"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                    navigate("/signup");
                  }}
                  className="px-4 py-1 rounded bg-custom-yellow hover:bg-yellow-500"
                >
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
