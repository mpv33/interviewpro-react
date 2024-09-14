// src/InfiniteScroll.js
import React, { useState, useEffect, useRef } from 'react';

const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false); // Added state for loading
  const containerRef = useRef(null);

  // Fetch items from the API
  const fetchItems = async () => {
    setLoading(true); // Start loading
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10}&select=title,price`);
      const data = await response.json();
      const newItems = data.products || [];
      setItems(prevItems => [...prevItems, ...newItems]);
      setHasMore(newItems.length > 0);
    } catch (error) {
      console.error('Failed to fetch items', error);
    } finally {
      setLoading(false); // End loading
    }
  };

  // Handle scrolling
  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = containerRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 100 && hasMore && !loading) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [page]);

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div
      ref={containerRef}
      className="flex justify-center items-center h-[500px] overflow-y-auto border border-gray-300 p-4"
    >
      <div>
        <ul className="">
          {items.map((item, index) => (
            <li key={index} className="p-2 border-b border-gray-200">
              <strong className="text-lg">{item.title}</strong> - <span className="text-gray-600">${item.price}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-center text-gray-600">
          {loading && <div className="flex justify-center items-center space-x-2">
            <div className="w-5 h-5 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p>Loading more items...</p>
          </div>}
          {!hasMore && !loading && <p>No more items</p>}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
