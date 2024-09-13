import React, { useState, useEffect } from 'react';

// Pagination Component
const Pagination = ({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
    previousLabel = 'Previous',
    nextLabel = 'Next',
    maxVisiblePages = 5,
    handleItemsPerPageChange
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageClick = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            onPageChange(pageNumber);
        }
    };

    const renderPageNumbers = () => {
        const pages = [];
        const halfVisible = Math.floor(maxVisiblePages / 2);
        let startPage = Math.max(1, currentPage - halfVisible);
        let endPage = Math.min(totalPages, currentPage + halfVisible);

        if (currentPage <= halfVisible) {
            endPage = Math.min(totalPages, maxVisiblePages);
        }

        if (currentPage + halfVisible >= totalPages) {
            startPage = Math.max(1, totalPages - maxVisiblePages + 1);
        }

        if (startPage > 1) {
            pages.push(
                <button
                    key="first"
                    onClick={() => handlePageClick(1)}
                    className="mx-1 px-3 py-1 rounded bg-gray-200 text-gray-800 hover:bg-gray-300"
                >
                    1
                </button>
            );
            if (startPage > 2) {
                pages.push(<span key="ellipsis-start" className="mx-1 px-3 py-1 text-gray-600">...</span>);
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handlePageClick(i)}
                    className={`mx-1 px-3 py-1 rounded ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                >
                    {i}
                </button>
            );
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pages.push(<span key="ellipsis-end" className="mx-1 px-3 py-1 text-gray-600">...</span>);
            }
            pages.push(
                <button
                    key="last"
                    onClick={() => handlePageClick(totalPages)}
                    className="mx-1 px-3 py-1 rounded bg-gray-200 text-gray-800 hover:bg-gray-300"
                >
                    {totalPages}
                </button>
            );
        }

        return pages;
    };

    return (
        <div className="flex items-center justify-center mt-4">
            <div className="mx-6">
                <label htmlFor="itemsPerPage" className="mr-2">Items per page:</label>
                <select
                    id="itemsPerPage"
                    value={itemsPerPage}
                    onChange={handleItemsPerPageChange}
                    className="px-2 py-1 border rounded"
                >
                    {[5, 10, 15, 20].map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
            <button
                onClick={() => handlePageClick(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded mr-2 ${currentPage === 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
                {previousLabel}
            </button>
            {renderPageNumbers()}
            <button
                onClick={() => handlePageClick(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded ml-2 ${currentPage === totalPages ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
                {nextLabel}
            </button>
        </div>
    );
};




// Main Application Component
const PaginationPage = () => {
    const [products, setProducts] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    useEffect(() => {
        fetchData();
    }, [currentPage, itemsPerPage]);

    const fetchData = async () => {
        try {
            const skip = (currentPage - 1) * itemsPerPage;
            const response = await fetch(`https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}&select=title,price`);
            const data = await response.json();
            setProducts(data.products);
            setTotalItems(data.total);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    const handleItemsPerPageChange = (event) => {
        setItemsPerPage(Number(event.target.value));
        setCurrentPage(1); // Reset to first page
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-center">Product List - Pagination</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.map(product => (
                    <div key={product.id} className="p-4 border rounded shadow-sm">
                        <h3 className="text-xl font-semibold">Id:{product.id} {product.title}</h3>
                        <p className="text-gray-600">${product.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>

            <Pagination
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                previousLabel="Prev"
                nextLabel="Next"
                maxVisiblePages={5}
                handleItemsPerPageChange={handleItemsPerPageChange}
            />
        </div>
    );
};

export default PaginationPage;
