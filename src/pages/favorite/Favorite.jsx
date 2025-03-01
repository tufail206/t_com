import React from 'react'

const Favorite = () => {
  return (
    <div className='container mx-auto px-3 lg:px-0'>
      <h2 className='text-3xl font-semibold my-3 text-red-500'>Wishlist</h2>
      <div className="md:col-span-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Product Cards */}
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-md p-4 rounded-md  outline-black"
            >
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

      </div>
    </div>
  );
}

export default Favorite