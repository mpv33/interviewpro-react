import React from 'react';
import Card from '../components/Card';

const challenges = [
  {
    title: "Todo List",
    description: "Implement a todo list with features for adding, editing, deleting, and filtering tasks.",
    link: "/todo-list",
    level: 1,
    difficulty: "Easy"
  },
  {
    title: "Countdown Application",
    description: "Build a customizable countdown timer with start, pause, and reset features.",
    link: "/count-down",
    level: 1,
    difficulty: "Easy"
  },
  {
    title: "Autocomplete Search",
    description: "Create an autocomplete search component that suggests results as the user types.",
    link: "/autocomplete-search",
    level: 2,
    difficulty: "Medium"
  },
  {
    title: "Nested Comments",
    description: "Develop a comment section with nested replies, including adding, editing, and deleting comments.",
    link: "/nested-comments",
    level: 2,
    difficulty: "Medium"
  },
  {
    title: "File Explorer",
    description: "Create a file explorer with nested folders and expand/collapse functionality using Tailwind CSS.",
    link: "/file-explorer",
    level: 3,
    difficulty: "Hard"
  },
  {
    title: "Shopping Cart",
    description: "Construct a shopping cart system with product management, cart functionalities, and checkout.",
    link: "/shopping-cart",
    level: 2,
    difficulty: "Medium"
  },
  {
    title: "Pagination",
    description: "Build a pagination component with page numbers and navigation buttons for large datasets.",
    link: "/pagination",
    level: 1,
    difficulty: "Easy"
  },
  {
    title: "Infinite Scroll",
    description: "Implement infinite scrolling to load more items as the user scrolls down.",
    link: "/infinite-scroll",
    level: 2,
    difficulty: "Medium"
  }
];

// Sort challenges by level
challenges.sort((a, b) => a.level - b.level);

const Home = () => {
  return (
    <div className="w-full sm:p-2 lg:p-8">
      <h1 className="m-6 text-center text-3xl font-bold">Practice Challenges</h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {challenges.map((challenge, index) => (
          <div key={index} className="w-full">
            <Card
              title={challenge.title}
              description={challenge.description}
              link={challenge.link}
              difficulty={challenge.difficulty}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
