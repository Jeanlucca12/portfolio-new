import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute top-0 left-0 w-full text-white z-10">
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-500 capitalize dark:text-gray-300">
        <div className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-gray-300 border-b-2 border-blue-500 mx-1.5 sm:mx-1"
          >
            Home
          </a>
          <a
            href="#section1"
            className="text-gray-300 border-b-2 border-transparent hover:text-white hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            About Me
          </a>
          <a
            href="#section2"
            className="text-gray-300 border-b-2 border-transparent hover:text-white hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Services
          </a>
          <a
            href="#section3"
            className="text-gray-300 border-b-2 border-transparent hover:text-white hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Projects
          </a>
        </div>
        <div className="md:hidden ml-auto">
          <button
            id="menu-btn"
            className="text-gray-300 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          id="menu"
          className="md:hidden flex flex-col items-center bg-gray-700 p-6 space-y-4"
        >
          <a href="#" className="text-gray-300 border-b-2 border-orange-400">
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 border-b-2 border-transparent hover:text-white hover:border-orange-400"
          >
            Services
          </a>
          <a
            href="#"
            className="text-gray-300 border-b-2 border-transparent hover:text-white hover:border-orange-400"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-gray-300 border-b-2 border-transparent hover:text-white hover:border-orange-400"
          >
            About Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
