import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, description, link, difficulty, githubUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out m-4">
      <div className="p-6">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base mb-4">
          {description}
        </p>

        {/* Difficulty Badge */}
        <p className={`inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide mb-4 
          ${difficulty === 'Easy' ? 'bg-green-100 text-green-700' : 
            difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 
            'bg-red-100 text-red-700'}`}>
          {difficulty} Difficulty
        </p>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-4">
          {/* Main Button */}
          <Link
            to={link}
            className="inline-block bg-blue-500 text-white font-medium py-2 px-5 rounded-full shadow hover:bg-blue-600 hover:shadow-lg transition-colors duration-300 ease-in-out"
          >
            Go to {title}
          </Link>

          {/* GitHub Link */}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-sm hover:text-gray-900 hover:underline transition duration-300"
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
