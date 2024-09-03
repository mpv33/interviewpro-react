import React from 'react';
import Card from '../components/Card';
import About from '../components/About';

const Home = () => {
  return (
    <div className="w-full sm:p-2 lg:p-8">
      <About />
      <h1 className='m-6 text-center text-3xl font-bold'> Practice Challenges</h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="w-full">
          <Card
            title="File Explorer"
            description="Create a file explorer interface with nested folders, expand/collapse functionality, and file content display."
            link="/file-explorer"
          />
        </div>
        <div className="w-full">
          <Card
            title="Nested Comments"
            description="Develop a comment section that supports nested replies, with features like adding, editing, and deleting comments."
            link="/nested-comments"
          />
        </div>
        <div className="w-full">
          <Card
            title="Counter Application"
            description="Implement a simple counter with increment, decrement, and reset buttons."
            link="/counter-app"
          />
        </div>
        <div className="w-full">
          <Card
            title="Todo List"
            description="Build a todo list with task management features such as adding, editing, deleting, and filtering tasks."
            link="/todo-list"
          />
        </div>
        <div className="w-full">
          <Card
            title="Shopping Cart"
            description="Construct a shopping cart system with product listings, cart management, and checkout functionalities."
            link="/shopping-cart"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
