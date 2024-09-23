import React from 'react';
import Card from '../components/Card';

const githubBaseUrl = "https://github.com/mpv33/interviewpro-react/blob/main/src/pages/";

const challenges = [
  {
    title: "Todo List",
    description: "Implement a todo list with features for adding, editing, deleting, and filtering tasks.",
    link: "/todo-list",
    level: 1,
    difficulty: "Easy",
    githubUrl: `${githubBaseUrl}TodoList.jsx`
  },
  {
    title: "Countdown",
    description: "Build a customizable countdown timer with start, pause, and reset features.",
    link: "/count-down",
    level: 1,
    difficulty: "Easy",
    githubUrl: `${githubBaseUrl}CountdownTimer.jsx`
  },
  {
    title: "Search System",
    description: "Build a highly efficient search component that delivers quick and relevant results, optimizing user experience with minimal input.",
    link: "/autocomplete-search",
    level: 1,
    difficulty: "Easy",
    githubUrl: `${githubBaseUrl}AutocompleteSearchPage.jsx`
  },
  {
    title: "Nested Comments",
    description: "Develop a comment section with nested replies, including adding, editing, and deleting comments.",
    link: "/nested-comments",
    level: 3,
    difficulty: "Hard",
    githubUrl: `${githubBaseUrl}NestedComments.jsx`
  },
  {
    title: "File Explorer",
    description: "Create a file explorer with nested folders and expand/collapse functionality using Tailwind CSS.",
    link: "/file-explorer",
    level: 2,
    difficulty: "Medium",
    githubUrl: `${githubBaseUrl}FileExplorer.jsx`
  },
  {
    title: "Shopping Cart",
    description: "Construct a shopping cart system with product management, cart functionalities, and checkout.",
    link: "/shopping-cart",
    level: 3,
    difficulty: "Hard",
    githubUrl: `${githubBaseUrl}ShoppingCart.jsx`
  },
  {
    title: "Pagination",
    description: "Build a pagination component with page numbers and navigation buttons for large datasets.",
    link: "/pagination",
    level: 2,
    difficulty: "Medium",
    githubUrl: `${githubBaseUrl}PaginationPage.jsx`
  },
  {
    title: "Infinite Scroll",
    description: "Implement infinite scrolling to load more items as the user scrolls down.",
    link: "/infinite-scroll",
    level: 2,
    difficulty: "Medium",
    githubUrl: `${githubBaseUrl}InfiniteScrollPage.jsx`
  }
];

// Sort challenges by level
challenges.sort((a, b) => a.level - b.level);

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 py-12 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Frontend Developer Challenges</h1>
        <p className="text-xl mb-6">Sharpen your skills with hands-on coding challenges built using React and Tailwind CSS.</p>
        <a href="#challenges" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
          Get Started
        </a>
      </section>

      {/* Challenges Section */}
      <section id="challenges" className="sm:p-6 lg:p-16">
        <h2 className="text-4xl font-bold text-center mb-8">Practice Challenges</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge, index) => (
            <div key={index}>
              <Card
                title={challenge.title}
                description={challenge.description}
                link={challenge.link}
                difficulty={challenge.difficulty}
                githubUrl={challenge.githubUrl}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 py-8 text-center text-white">
        <p>&copy; {new Date().getFullYear()} Frontend Challenges. All Rights Reserved.</p>
        <a href="https://github.com/mpv33/interviewpro-react" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-600 transition duration-300">
          View Source on GitHub
        </a>
      </footer>
    </div>
  );
};

export default Home;
