import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Icons for styling

function Footer() {
  return (
    <footer className="bg-gray-900 py-10 text-white text-center">
      <div className="container mx-auto px-4">
        {/* Main Info */}
        <p className="text-lg font-semibold">
          &copy; {new Date().getFullYear()} Frontend Challenges. All Rights Reserved.
        </p>

        {/* GitHub Link */}
        <a
          href="https://github.com/mpv33/interviewpro-react"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center text-indigo-400 hover:text-indigo-600 transition duration-300 mt-3"
        >
          <FaGithub className="mr-2" /> View Source on GitHub
        </a>

        {/* Developer Info */}
        <div className="mt-6">
          <p className="text-md">Developed by <strong>Mateshwari Verma</strong></p>
          <a
            href="https://interviewpro.info/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center text-indigo-400 hover:text-indigo-600 transition duration-300 mt-2"
          >
            Visit InterviewPro.info Website <FaExternalLinkAlt className="ml-2" />
          </a>
        </div>
      </div>

      {/* Bottom Padding for Spacing */}
      <div className="pt-4">
        <p className="text-sm text-gray-400">Made with ❤️ InterviewPro.Info</p>
      </div>
    </footer>
  );
}

export default Footer;
