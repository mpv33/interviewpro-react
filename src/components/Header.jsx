import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold mb-2 md:mb-0">
          <Link to="/" className="hover:text-blue-400 transition-colors">
            InterviewPro-React
          </Link>
        </h1>
        <h3 className="text-base md:text-lg text-center md:text-left">
          Machine Coding Challenges
        </h3>
      </div>
    </header>
  );
};

export default Header;
