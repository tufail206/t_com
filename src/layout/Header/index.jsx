import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHeart, FaShoppingCart, FaTimes, FaUser } from "react-icons/fa";
import { appPath } from "../../utils/pathConstants";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50 ">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-2 lg:px-0 ">
        {/* Logo */}
        <Link to={appPath.HOME} className="text-2xl font-bold text-blue-600">
          MyWebsite
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to={appPath.ABOUT}
            className="text-gray-600 hover:text-blue-600"
          >
            About
          </Link>
          <Link
            to={appPath.CONTACT}
            className="text-gray-600 hover:text-blue-600"
          >
            Contact
          </Link>
          <Link
            to={appPath.PRODUCTS}
            className="text-gray-600 hover:text-blue-600"
          >
            Products
          </Link>
          <Link
            to={appPath.SIGNUP}
            className="text-gray-600 hover:text-blue-600"
          >
            Sign Up
          </Link>
          <Link to={appPath.CART} className="text-gray-600 hover:text-blue-600">
            <FaShoppingCart />
          </Link>
          <Link
            to={appPath.FAVORITE}
            className="text-gray-600 hover:text-blue-600"
          >
            <FaHeart />
          </Link>

          {/* Profile with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <FaUser className="cursor-pointer text-gray-600 hover:text-blue-600" />

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full -left-35 w-max bg-white shadow-lg rounded-md py-2">
                <Link
                  to={appPath.PROFILE_MANAGE}
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  Manage My Account
                </Link>
                <Link
                  to={appPath.USER_ORDERS}
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  My Orders
                </Link>
                <Link
                  to={appPath.USER_ORDERS_CANCELLATIONS}
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  My Cancellation
                </Link>
                <Link
                  to={appPath.USER_REVIEWS}
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  My Reviews
                </Link>

                <button className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden bg-white shadow-md transition-transform transform ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        } absolute top-full left-0 w-full`}
      >
        {menuOpen && (
          <ul className=" flex flex-col items-center py-4 space-y-4">
            <li>
              <Link
                to="/"
                className="text-gray-600 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-600 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-600 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
