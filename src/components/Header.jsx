import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold mb-2 md:mb-0">
          <Link to="/" className="hover:text-blue-400 transition-colors duration-300 ease-in-out">
            InterviewPro React
          </Link>
        </h1>
        <h3 className="text-sm md:text-lg text-center md:text-left font-light md:font-normal">
          Master Machine Coding Challenges
        </h3>
      </div>
    </header>
  );
};

export default Header;
