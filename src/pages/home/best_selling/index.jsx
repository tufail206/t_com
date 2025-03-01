import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import {
  FaCamera,
  FaGamepad,
  FaHeadphonesAlt,
  FaMobileAlt,
} from "react-icons/fa";
import { BsWatch } from "react-icons/bs";
const BestSelling = () => {
  const products = [
    {
      id: 1,
      name: "Mobile",
      icons: <FaMobileAlt />,
      state: "mobile",
    },
    {
      id: 2,
      name: "Laptop",
      icons: <FaMobileAlt />,
      state: "laptop",
    },
    {
      id: 3,
      name: "Watch",
      icons: <BsWatch />,
      state: "watch",
    },
    {
      id: 4,
      name: "Camera",
      icons: <FaCamera />,
      state: "camera",
    },
    {
      id: 5,
      name: "Headphones",
      icons: <FaHeadphonesAlt />,
      state: "headphones",
    },
    {
      id: 6,
      name: "Gamings",
      icons: <FaGamepad />,
      state: "gaming",
    },
  ];

  return (
    <div className=" py-14 ">
      <div className="flex flex-col md:flex-row justify-between items-center my-4 ">
        <h3 className="text-2xl font-semibold">Best Selling</h3>
        <Link
          to="/products"
          className="text-blue-600 border px-2 py-1 rounded border-blue-500 hover:text-blue-500"
        >
          View All
        </Link>
      </div>

      {/* Category Slider */}
      <div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={6}
          navigation
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded cursor-pointer hover:bg-blue-600">
                    See Details
                  </button>
                </div>
              ))}
            </div>           
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default BestSelling;
