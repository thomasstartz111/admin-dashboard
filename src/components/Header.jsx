import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg'; // Import the logo using ES module syntax

const Header = () => {
  return (
    <header className="bg-[#00204F] shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <img
              src={logo} // Use the imported logo
              alt="Daisy Logo"
              className="h-[0.75in] w-auto mr-2" // Reduced margin-right
              style={{ marginLeft: 0 }} // Flush to the left
            />
            <span className="text-white font-bold text-xl">Daisy AI</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-6">
            <Link
              to="/dashboard"
              className="text-white font-medium hover:text-gray-300"
            >
              Dashboard
            </Link>
            <Link
              to="/patients"
              className="text-white font-medium hover:text-gray-300"
            >
              Patient List
            </Link>
            <Link
              to="/messages"
              className="text-white font-medium hover:text-gray-300"
            >
              Messages
            </Link>
            <Link
              to="/history"
              className="text-white font-medium hover:text-gray-300"
            >
              History
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
