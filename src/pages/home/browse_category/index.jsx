import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import {FaCamera, FaGamepad, FaHeadphonesAlt, FaMobileAlt} from 'react-icons/fa'
import { BsWatch } from "react-icons/bs";
const BrowseByCategory = () => {
  const products = [
    {
      id: 1,
      name: "Mobile",
      icons: <FaMobileAlt />,
      state:"mobile"
    },
    {
      id: 2,
      name: "Laptop",
      icons: <FaMobileAlt />,
      state:"laptop"
    },
    {
      id: 3,
      name: "Watch",
      icons: <BsWatch />,
      state:"watch"
    },
    {
      id: 4,
      name: "Camera",
      icons: <FaCamera />,
      state:"camera"
    },
    {
      id: 5,
      name: "Headphones",
      icons: <FaHeadphonesAlt />,
      state:"headphones"
    },
    {
      id: 6,
      name: "Gamings",
      icons: <FaGamepad />,
      state:"gaming"
    },
  ];

  return (
    <div className=" ">
      <h2 className="text-red-500 text-2xl font-bold ">Categories</h2>
      <div className="flex flex-col md:flex-row justify-between items-center my-4 ">
        <h3 className="text-2xl font-semibold">Browse By Category</h3>
      </div>

      {/* Category Slider */}
      <div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={6}
          navigation
          breakpoints={{
            200: { slidesPerView: 1 },
            320: { slidesPerView: 1 },
            375: { slidesPerView: 2 },
            425: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="shadow-lg bg-gray-50 px-2 md:px-0">
              <Link
                to={`/products/category/data`}
                state={product.state}
                className="p-1 shadow-red-800  "
              >
                <div className="flex items-center justify-center text-4xl">
                  {product.icons}
                </div>
                <h4 className="text-lg font-bold mt-2 text-center">
                  {product.name}
                </h4>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BrowseByCategory;
