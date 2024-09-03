import React from 'react';
import { FaReact, FaCode, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-lg text-gray-600 mb-6 text-justify">
            At InterviewPro-React, we're passionate about empowering developers with hands-on coding challenges designed to sharpen your frontend skills. Our platform is your go-to resource for mastering React and other essential frontend technologies.
          </p>
          <p className="text-lg text-gray-600 mb-8 text-justify">
            Whether you're preparing for technical interviews or simply aiming to elevate your coding expertise, our diverse range of exercises will help you achieve your goals. Join our community of learners and take your skills to new heights!
          </p>
        </div>

        <div className="flex flex-wrap justify-around">
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center">
            <FaReact size={40} className="text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">React Challenges</h3>
            <p className="text-gray-700 text-center">
              Tackle a variety of React-specific challenges that test and expand your knowledge.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center">
            <FaCode size={40} className="text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Coding Practice</h3>
            <p className="text-gray-700 text-center">
              Work on frontend coding problems that enhance your problem-solving skills.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center">
            <FaUsers size={40} className="text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p className="text-gray-700 text-center">
              Join a community of developers, share solutions, and get feedback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
