import React, { useEffect, useState, useCallback, useRef } from 'react';

// Custom hook for debouncing
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
  const [notFound, setNotFound] = useState(false);

  // Fetch products based on search query
  const fetchProducts = useCallback(async (query = '') => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products${query ? `/search?q=${query}` : ''}`
      );
      const data = await response.json();
      
      setProducts(data.products);
      setNotFound(data.products.length === 0);
    } catch (err) {
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Debounced version of fetchProducts
  const debouncedFetchProducts = useDebounce(fetchProducts, 500);

  // Handle search input changes
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedFetchProducts(query);
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      )}

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">Product List</h1>

        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            autoComplete="off"
            className="p-2 border border-gray-300 rounded-lg w-full max-w-md"
          />
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
