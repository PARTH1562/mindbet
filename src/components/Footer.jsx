import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 py-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <p>&copy; 2025 MindBet. All Rights Reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <Link
            to="#"
            className="hover:text-white transition-colors duration-300"
          >
            Terms of Service
          </Link>
          <Link
            to="#"
            className="hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            to="#"
            className="hover:text-white transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
