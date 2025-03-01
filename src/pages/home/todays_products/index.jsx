import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Todays_Products = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 2,
    minutes: 19,
    seconds: 5,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          minutes = 59;
          hours--;
        } else if (days > 0) {
          hours = 23;
          days--;
        } else {
          clearInterval(timer);
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const products = [
    {
      id: 1,
      reviews: 2.2,
      image: "/images/product1.jpg",
      name: "Product 1",
      price: "$20",
    },
    {
      id: 2,
      reviews: 2.2,
      image: "/images/product2.jpg",
      name: "Product 2",
      price: "$35",
    },
    {
      id: 3,
      reviews: 2.2,
      image: "/images/product3.jpg",
      name: "Product 3",
      price: "$50",
    },
    {
      id: 4,
      reviews: 2.2,
      image: "/images/product4.jpg",
      name: "Product 4",
      price: "$75",
    },
    {
      id: 5,
      reviews: 2.2,
      image: "/images/product4.jpg",
      name: "Product 4",
      price: "$75",
    },
    {
      id: 6,
      reviews: 2.2,
      image: "/images/product4.jpg",
      name: "Product 4",
      price: "$75",
    },
  ];

  return (
    <div className="py-16 ">
      <h2 className="text-red-500 text-2xl font-bold ">Today's Deals</h2>

      {/* Countdown Timer */}
      <div className="flex flex-col md:flex-row justify-between  mt-6 px-2 md:px-0 gap-4">
        <h3 className="text-2xl font-semibold">Flash Sales</h3>
        <div className="grid grid-cols-4 gap-2 ">
          {["Days", "Hours", "Minutes", "Seconds"].map((unit, index) => (
            <div
              key={index}
              className="p-2 flex flex-col items-center bg-gray-100 rounded-lg px-4"
            >
              <span className="text-xl">{Object.values(timeLeft)[index]}</span>
              <span className="text-sm text-gray-600">{unit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Product Slider */}
      <div className="px-4 lg:px-0  my-10">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={2}
          navigation
          breakpoints={{
            375: { slidesPerView: 1 },
            425: { slidesPerView: 2 },

            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="bg-gray-50">
              <div className=" shadow-lg p-1 rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className=" h-40 object-cover rounded-lg"
                />
                <h4 className="text-lg font-bold mt-2">{product.name}</h4>
                <p className="text-red-500 font-semibold">
                  Price {product.price}
                </p>
                <p className="font-semibold">
                  Reviews
                  <span className="text-[#ffc800] "> {product.reviews}</span>
                </p>
                <Link to={"/products/id"} className="mt-3 w-full bg-blue-500 text-white inline-block text-center py-2 rounded cursor-pointer hover:bg-blue-600">
                  See Details
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="views  flex justify-center items-center w-full">
        <Link
          to={"/products"}
          className="bg-red-500 py-2 px-4 cursor-pointer my-10 rounded-lg text-lg text-white"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default Todays_Products;
