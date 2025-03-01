import React from "react";
import { useLocation } from "react-router-dom";
import FilterSection from "./filtersection/FilterSection";

const Products = () => {
  const location = useLocation();
  const category = location.state;

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Products {category && `/ ${category}`}
        </h1>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <div className="text-gray-600 text-sm">Total Products: 200</div>
          <div className="flex items-center space-x-2">
          
            <select
              id="sort"
              name="sort"
              className="border border-blue-300 rounded px-2 py-1 outline-none text-gray-700"
            >
              <option value="">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar - Filter Section */}
       <FilterSection/>

        {/* Product Section */}
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
            {/* Sample Product Cards */}
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-gray-50 shadow-md p-4 rounded-md  outline-black">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Product"
                  className="w-full h-40 object-cover rounded"
                />
                <h3 className="text-lg font-semibold mt-2">
                  Product {index + 1}
                </h3>
                <p className="text-gray-600">$29.99</p>
                <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Pagination & Load More */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
              Previous
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
              Next
            </button>
            <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
