import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import FileExplorer from '../pages/FileExplorer';
import NestedComments from '../pages/NestedComments';
// import CounterApp from '../pages/CounterApp';
// import TodoList from '../pages/TodoList';
// import ShoppingCart from '../pages/ShoppingCart';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/file-explorer" element={<FileExplorer />} />
        <Route path="/nested-comments" element={<NestedComments />} />
        {/* <Route path="/counter-app" element={<CounterApp />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
