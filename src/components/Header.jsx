import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <div className="flex gap-4">
          <Link to="/" className="hover:underline">
            Dashboard
          </Link>
          <Link to="/patients" className="hover:underline">
            Patient List
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
