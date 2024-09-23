import React, { useEffect, useState, useCallback, useRef } from 'react';

const useDebounce = (func, delay) => {
  const timerRef = useRef();

  const debounceFn = useCallback(
    (...args) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => func(...args), delay);
    },
    [func, delay]
  );

  return debounceFn;
};

const AutocompleteSearchPage = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  // Fetch products from API
  const fetchProducts = useCallback(async (query = '') => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products${query ? `/search?q=${query}` : ''}`
      );
      const data = await response.json();
      
      setNotFound(data.products.length === 0);
      setProducts(data.products);

      if (query) {
        setSuggestions(data.products.map((product) => product.title));
        setShowSuggestions(true);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    } catch (err) {
      setError('Failed to fetch products');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const debouncedFetchProducts = useDebounce(fetchProducts, 300);

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value) debouncedFetchProducts(e.target.value);
    else setShowSuggestions(false); // Hide suggestions if the query is empty
  };

  // Select suggestion and hide the dropdown
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };
    fetchProducts()
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      )}

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">Product List</h1>

        <div className="mb-6 flex justify-center relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            ref={inputRef}
            className="p-2 border border-gray-300 rounded-lg w-full max-w-md"
          />
          
          {showSuggestions && suggestions.length > 0 && (
            <div
              ref={suggestionsRef}
              className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto"
            >
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="p-3 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>

        {notFound ? (
          <div className="p-6 text-center text-gray-500">No products found.</div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-900">{product.title}</h2>
                  <p className="text-gray-700 mt-2">${product.price}</p>
                  <p className="text-gray-500 mt-2">Category: {product.category}</p>
                  <p className="text-gray-500 mt-2">Rating: {product.rating}⭐</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AutocompleteSearchPage;
