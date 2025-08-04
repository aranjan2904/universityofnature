import { StrictMode } from "react";
import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false); // Toggle state

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Flip true/false
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo and Title */}
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})} className="flex items-center space-x-3">
          <img
            src={logo}
            alt="logo"
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover border border-green-600 shadow-sm"
          />
          <span className="text-xl sm:text-2xl font-semibold text-gray-800 tracking-tight">
            University of Nature
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="/" className="hover:text-green-700 transition duration-200">
            Home
          </a>
          <a href="/" className="hover:text-green-700 transition duration-200">
            About
          </a>
          <a href="/" className="hover:text-green-700 transition duration-200">
            Events
          </a>
          <a href="/" className="hover:text-green-700 transition duration-200">
            Contacts
          </a>
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-7 h-7 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3 text-gray-700 font-medium border-t border-gray-200">
          <a href="/" className="block hover:text-green-700 transition">
            Home
          </a>
          <a href="/" className="block hover:text-green-700 transition">
            About
          </a>
          <a href="/" className="block hover:text-green-700 transition">
            Events
          </a>
          <a href="/" className="block hover:text-green-700 transition">
            Contacts
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
