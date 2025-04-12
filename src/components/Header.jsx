import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

const Header = () => {
  return (
    <header className="bg-[#00204F] text-white p-4 flex items-center">
      <img src={logo} alt="Daisy AI Logo" className="h-16 w-16 mr-4" />
      <h1 className="text-2xl font-bold">Daisy AI</h1>
      <nav className="ml-auto flex space-x-4">
        <Link to="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link to="/patients" className="hover:underline">
          Patient List
        </Link>
        <Link to="/messages" className="hover:underline">
          Messages
        </Link>
      </nav>
    </header>
  );
};

export default Header;
