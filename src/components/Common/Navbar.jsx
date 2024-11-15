import React, { useEffect, useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";

import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Burger menu toggle for mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu after clicking a link
  };

  // Toggle for services dropdown on desktop
  const [isOpenDes, setIsOpenDes] = useState(false);
  const dropdownRef = useRef(null); // Define the ref here

  const toggleDropdown = () => {
    setIsOpenDes((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsOpenDes(false); // Close the dropdown when an option is clicked
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpenDes(false); // Close dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }} // Start invisible and slightly above
      animate={{ opacity: 1 }} // Fade in and move to position
      transition={{ duration: 0.7 }} // Customize duration as needed
      className={`navbar bg-base-100 pt-1 z-10   sticky -top-0  duration-300 pb-0 ${
        sticky
          ? " shadow-inner  bg-white bg-opacity-90 backdrop-blur-lg  transition-all ease-in-out"
          : ""
      }`}
    >
      <div className="w-full flex justify-between">
        <Link to="/" className="w-64 ml-5 cursor-pointer">
          <img src="/eshaLogo.png" alt="Logo" />
        </Link>

        {/* Burger menu button */}
        <div className="dropdown lg:hidden">
          <div
            tabIndex="0"
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleMenu} // Toggle the mobile menu visibility
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow absolute right-3"
            >
              <li>
                <Link to="/" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>

              {/* Services dropdown on mobile */}
              <li className="relative">
                <button onClick={toggleDropdown} className="w-full text-left">
                  Services
                </button>

                <ul className="p-2">
                  <li>
                    <Link
                      to="services/web-development"
                      onClick={handleLinkClick}
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link to="services/web-hosting" onClick={handleLinkClick}>
                      Web Hosting
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="services/digital-marketing"
                      onClick={handleLinkClick}
                    >
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="services/business-consultancy"
                      onClick={handleLinkClick}
                    >
                      Business Consultancy
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/about" onClick={handleLinkClick}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleLinkClick}>
                  Contact Us
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar hidden lg:flex justify-end">
        <ul className=" menu-horizontal text-base gap-10">
          <li className="relative">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-500 font-semibold bg-indigo-50 p-2 rounded-xl  "
                  : "text-gray-600 group p-2"
              }
            >
              Home
              <span className=" absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </li>

          {/* Services Dropdown on Desktop */}
          <div
            className="dropdown dropdown-bottom dropdown-end relative"
            ref={dropdownRef}
          >
            <div
              onClick={toggleDropdown}
              role="button"
              tabIndex="0"
              className={` ${
                isOpenDes ? "bg-indigo-300" : ""
              } text-gray-600 group p-2 rounded-lg`}
            >
              Services
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </div>

            {isOpenDes && (
              <ul className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-xl border absolute top-full mt-1">
                <li>
                  <Link to="services/web-development" onClick={closeDropdown}>
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="services/web-hosting" onClick={closeDropdown}>
                    Web Hosting
                  </Link>
                </li>
                <li>
                  <Link to="services/digital-marketing" onClick={closeDropdown}>
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    to="services/business-consultancy"
                    onClick={closeDropdown}
                  >
                    Business Consultancy
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <li className="relative">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-500 font-semibold bg-indigo-50 p-2 rounded-xl"
                  : "text-gray-600 group p-2"
              }
            >
              About Us
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </li>

          <li className="relative">
            <NavLink
              to="/contact"
              className="text-gray-600 group py-2 px-4 bg-indigo-500 text-white rounded-lg"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
