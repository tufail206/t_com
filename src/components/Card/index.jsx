import React from 'react'

const Card = () => {
  return (
    <div>
      <div  className="bg-white shadow-md p-4 rounded-md">
        <img
          src="https://via.placeholder.com/150"
          alt="Product"
          className="w-full h-40 object-cover rounded"
        />
        <h3 className="text-lg font-semibold mt-2">Product </h3>
        <p className="text-gray-600">$29.99</p>
        <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;