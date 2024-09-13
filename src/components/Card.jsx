import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, description, link, difficulty, githubUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out m-6 transform hover:scale-105">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>
        <p className="text-gray-600 text-base mb-4">{description}</p>
        <p className={`inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide mb-4
            ${difficulty === 'Easy' ? 'bg-green-100 text-green-700' : 
               difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 
               'bg-red-100 text-red-700'}`}>
          {difficulty} Difficulty
        </p>
        <div className="flex justify-between items-center mt-4">
          <Link
            to={link}
            className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-300 ease-in-out"
          >
            Go to {title}
          </Link>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-sm hover:text-gray-800 hover:underline"
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
