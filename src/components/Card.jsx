import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, description, link, difficulty }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out m-4">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">{title}</h2>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-sm text-gray-500 mb-4 "><strong>Difficulty:</strong> {difficulty}</p>
        <Link
          to={link}
          className="inline-block  text-blue-600 font-semibold hover:underline transition-colors duration-300 ease-in-out"
        >
          Go to {title}
        </Link>
      </div>
    </div>
  );
};

export default Card;
