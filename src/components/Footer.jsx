import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-8">
          {/* About Us Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p className="text-gray-400 leading-relaxed">
              We are committed to providing the best coding challenges to help you enhance your frontend development skills. Join our community and start building today!
            </p>
            <p className="text-gray-400 text-sm mt-6">
              Mateshwari Verma - Senior Frontend Engineer
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-blue-400 hover:text-blue-300">Home</a>
              </li>
              <li>
                <a href="/file-explorer" className="text-blue-400 hover:text-blue-300">File Explorer</a>
              </li>
              <li>
                <a href="/nested-comments" className="text-blue-400 hover:text-blue-300">Nested Comments</a>
              </li>
              <li>
                <a href="/count-down" className="text-blue-400 hover:text-blue-300">Countdown Application</a>
              </li>
              <li>
                <a href="/todo-list" className="text-blue-400 hover:text-blue-300">Todo List</a>
              </li>
              <li>
                <a href="/shopping-cart" className="text-blue-400 hover:text-blue-300">Shopping Cart</a>
              </li>
              <li>
                <a href="/autocomplete-search" className="text-blue-400 hover:text-blue-300">Autocomplete Search</a>
              </li>
              <li>
                <a href="/pagination" className="text-blue-400 hover:text-blue-300">Pagination</a>
              </li>
              <li>
                <a href="/infinite-scroll" className="text-blue-400 hover:text-blue-300">Infinite Scroll</a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-6 mb-4">
              <a 
                href="https://www.linkedin.com/in/mateshwari-verma-a41143168/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn profile" 
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <FaLinkedin size={28} />
              </a>
              <a 
                href="https://instagram.com/_mpverma_" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram profile" 
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                <FaInstagram size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-400 mt-8">
          <p>&copy; {new Date().getFullYear()} Frontend Developer Machine Coding Challenge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
