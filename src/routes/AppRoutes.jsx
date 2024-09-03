import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import FileExplorer from '../pages/FileExplorer';
import NestedComments from '../pages/NestedComments';
import CountdownTimer from '../pages/CountdownTimer';
import TodoList from '../pages/TodoList';
import ShoppingCart from '../pages/ShoppingCart';

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/file-explorer" element={<FileExplorer />} />
        <Route path="/nested-comments" element={<NestedComments />} />
        <Route path="/count-down" element={<CountdownTimer />} /> 
        <Route path="/todo-list" element={<TodoList />} /> 
        <Route path="/shopping-cart" element={<ShoppingCart />} /> 
      </Routes>
  );
};

export default AppRoutes;
