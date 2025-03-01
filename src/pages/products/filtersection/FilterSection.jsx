import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";

const FilterSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Filter Button for Small Screens */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center gap-2  active:border-blue-500 px-4 py-2 rounded-md"
      >
        <FaFilter />
        <span>Filters</span>
      </button>

      {/* Sidebar for Large Screens & Dropdown for Small Screens */}
      <div
        className={`absolute md:static top-10 left-0  md:w-auto bg-gray-50 p-4 rounded-md md:shadow-md shadow-none ${
          isOpen ? "block" : "hidden md:block"
        }`}
      >
        <h2 className="text-lg font-semibold mb-3">Categories</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="cursor-pointer hover:text-blue-600">Men's Clothing</li>
          <li className="cursor-pointer hover:text-blue-600">
            Women's Clothing
          </li>
          <li className="cursor-pointer hover:text-blue-600">Accessories</li>
          <li className="cursor-pointer hover:text-blue-600">Electronics</li>
        </ul>
      </div>
    </div>
  );
};

export default FilterSection;
