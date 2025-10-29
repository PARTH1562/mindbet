import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-teal-400">
          MindBet
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className={`${
              isActive('/') ? 'text-teal-400 font-semibold' : 'text-gray-300'
            } hover:text-white transition-colors duration-300`}
          >
            Home
          </Link>
          <Link
            to="/sports"
            className={`${
              isActive('/sports') ? 'text-teal-400 font-semibold' : 'text-gray-300'
            } hover:text-white transition-colors duration-300`}
          >
            Sports
          </Link>
          <Link
            to="/livebetting"
            className={`${
              isActive('/livebetting') ? 'text-teal-400 font-semibold' : 'text-gray-300'
            } hover:text-white transition-colors duration-300`}
          >
            Live Betting
          </Link>
          <Link
            to="/promotions"
            className={`${
              isActive('/promotions') ? 'text-teal-400 font-semibold' : 'text-gray-300'
            } hover:text-white transition-colors duration-300`}
          >
            Promotions
          </Link>
          <Link
            to="/balance"
            className={`${
              isActive('/balance') ? 'text-teal-400 font-semibold' : 'text-gray-300'
            } hover:text-white transition-colors duration-300`}
          >
            Balance
          </Link>
          <Link
            to="/deposit"
            className={`${
              isActive('/deposit') ? 'text-teal-400 font-semibold' : 'text-gray-300'
            } hover:text-white transition-colors duration-300`}
          >
            Deposit
          </Link>
        </nav>

        <div className="hidden md:flex space-x-4">
          <Link to="/login">
            <button className="bg-teal-400 text-black font-semibold py-2 px-6 rounded-full hover:bg-teal-300 transition-colors duration-300">
              Log in
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-teal-400 text-black font-semibold py-2 px-6 rounded-full hover:bg-teal-300 transition-colors duration-300">
              Sign Up
            </button>
          </Link>
        </div>

        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-400 hover:text-white focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden bg-gray-700 w-full transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ position: mobileMenuOpen ? 'relative' : 'absolute' }}
      >
        <nav className="flex flex-col items-center py-4 space-y-4">
          <Link
            to="/"
            className="text-gray-300 hover:text-white py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/sports"
            className="text-gray-300 hover:text-white py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sports
          </Link>
          <Link
            to="/livebetting"
            className="text-gray-300 hover:text-white py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Live Betting
          </Link>
          <Link
            to="/promotions"
            className="text-gray-300 hover:text-white py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Promotions
          </Link>
          <Link
            to="/balance"
            className="text-gray-300 hover:text-white py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Balance
          </Link>
          <Link
            to="/deposit"
            className="text-gray-300 hover:text-white py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Deposit
          </Link>
          <div className="flex flex-col space-y-4 mt-4">
            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
              <button className="bg-transparent text-white border-2 border-teal-400 font-semibold py-2 px-6 rounded-full">
                Login
              </button>
            </Link>
            <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
              <button className="bg-teal-400 text-black font-semibold py-2 px-6 rounded-full">
                Sign Up
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
