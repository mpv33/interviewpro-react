import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, description, link, difficulty, githubUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out m-4">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-sm text-gray-500 mb-4">Difficulty: {difficulty}</p>
        <div className="flex justify-between items-center">
          <Link
            to={link}
            className="inline-block text-blue-600 font-semibold hover:underline transition-colors duration-300 ease-in-out"
          >
            Go to {title}
          </Link>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-sm hover:underline"
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
