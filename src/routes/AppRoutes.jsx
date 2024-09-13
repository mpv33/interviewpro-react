import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import FileExplorer from '../pages/FileExplorer';
import NestedComments from '../pages/NestedComments';
import CountdownTimer from '../pages/CountdownTimer';
import TodoList from '../pages/TodoList';
import ShoppingCart from '../pages/ShoppingCart';
import InfiniteScrollPage from '../pages/InfiniteScrollPage'
import PaginationPage from '../pages/PaginationPage';
import AutoCompleteSearchPage from '../pages/AutocompleteSearchPage';


const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/file-explorer" element={<FileExplorer />} />
        <Route path="/nested-comments" element={<NestedComments />} />
        <Route path="/count-down" element={<CountdownTimer />} /> 
        <Route path="/todo-list" element={<TodoList />} /> 
        <Route path="/shopping-cart" element={<ShoppingCart />} /> 
        <Route path="/infinite-scroll" element={<InfiniteScrollPage />} /> 
        <Route path="/autocomplete-search" element={<AutoCompleteSearchPage />} /> 
        <Route path="/pagination" element={<PaginationPage />} /> 
      </Routes>
  );
};

export default AppRoutes;
