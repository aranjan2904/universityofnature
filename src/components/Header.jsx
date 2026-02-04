import { useState } from "react";
import logo from "../assets/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { getText } from "../data/i18n";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const linkClass = ({ isActive }) =>
    `py-2 px-3 transition-all duration-300 rounded-md text-sm font-medium ${
      isActive
        ? "bg-green-100 text-green-700"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block py-2 px-4 text-base transition-all duration-300 rounded-md ${
      isActive ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-100"
    }`;

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo and Title */}
        <Link
          to="/"
          onClick={handleLinkClick}
          className="flex items-center space-x-3"
        >
          <img
            src={logo}
            alt={getText(language, "brand_name")}
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover border border-green-600 shadow-sm"
          />
          <span className="text-lg sm:text-xl font-bold text-gray-800 tracking-tight">
            {getText(language, "brand_name")}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-2">
          <NavLink to="/" className={linkClass}>
            {getText(language, "nav_home")}
          </NavLink>
          <NavLink to="/programs" className={linkClass}>
            {getText(language, "nav_programs")}
          </NavLink>
          <NavLink
            to="/mission"
            className={mobileLinkClass}
            onClick={handleLinkClick}
          >
            {getText(language, "nav_mission")}
          </NavLink>

          <NavLink to="/faculty" className={linkClass}>
            {getText(language, "nav_faculty")}
          </NavLink>
          <NavLink to="/gallery" className={linkClass}>
            {getText(language, "nav_gallery")}
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            {getText(language, "nav_contact")}
          </NavLink>
        </nav>

        {/* Right Side: Hamburger + Language Toggle */}
        <div className="flex items-center space-x-2">
          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">{getText(language, "nav_open_menu")}</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          {/* Language Toggle Button */}
          <div className="ml-2">
            <div
              className="relative w-16 h-8 rounded-full cursor-pointer bg-gradient-to-r from-green-500 to-blue-500 p-1 shadow-inner"
              onClick={() => setLanguage(language === "en" ? "hi" : "en")}
              aria-label={getText(language, "nav_toggle_language")}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg transform transition-all duration-300 flex items-center justify-center ${
                  language === "en" ? "left-1" : "left-9"
                }`}
              >
                <span className="text-xs font-bold">
                  {language === "en" ? "EN" : "HI"}
                </span>
              </div>
              <div className="flex justify-between px-2 h-full items-center text-xs font-medium text-white">
                <span>EN</span>
                <span>HI</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
          <NavLink to="/" className={mobileLinkClass} onClick={handleLinkClick}>
            {getText(language, "nav_home")}
          </NavLink>
          <NavLink
            to="/programs"
            className={mobileLinkClass}
            onClick={handleLinkClick}
          >
            {getText(language, "nav_programs")}
          </NavLink>
          <NavLink
            to="/mission"
            className={mobileLinkClass}
            onClick={handleLinkClick}
          >
            {getText(language, "nav_mission")}
          </NavLink>
          <NavLink
            to="/faculty"
            className={mobileLinkClass}
            onClick={handleLinkClick}
          >
            {getText(language, "nav_faculty")}
          </NavLink>
          <NavLink
            to="/gallery"
            className={mobileLinkClass}
            onClick={handleLinkClick}
          >
            {getText(language, "nav_gallery")}
          </NavLink>
          {/* <NavLink to="/blog" className={mobileLinkClass} onClick={handleLinkClick}>Blog</NavLink> */}
          <NavLink
            to="/contact"
            className={mobileLinkClass}
            onClick={handleLinkClick}
          >
            {getText(language, "nav_contact")}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
