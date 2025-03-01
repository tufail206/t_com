import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Removed Navigation
import "swiper/css";
import "swiper/css/pagination";

import phone from "../../assets/home-img/phone1.png";
import laptop from "../../assets/home-img/laptop.png";
import clock from "../../assets/home-img/clock.png";
import tablet from "../../assets/home-img/tablet.png";
import { Link } from "react-router-dom";

const slides = [
  { id: 1, link: "/products/phone", image: phone, title: "Phone Pro" },
  { id: 2, link: "/products/laptop", image: laptop, title: "HP Laptop" },
  { id: 3, link: "/products/clock", image: clock, title: "Clock" },
  { id: 4, link: "/products/tablet", image: tablet, title: "Tablet" },
];

const Carousel = () => {
  return (
    <div className=" w-[95%] lg:w-[80%]">
      <Swiper
        modules={[Pagination, Autoplay]} // Removed Navigation
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="rounded-lg shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[400px] flex flex-col md:flex-row items-center bg-white p-6 md:p-10 lg:p-16 rounded-lg shadow-md">
              {/* Text Content */}
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {slide.title}
                </h3>
                <p className="text-gray-600 mt-2 md:mt-4 text-sm md:text-base">
                  Discover our latest collection with premium quality and
                  exclusive offers.
                </p>
                <Link
                  to={slide.link}
                  className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300"
                >
                  Shop Now
                </Link>
              </div>

              {/* Image */}
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-44 md:w-60 lg:w-80 object-contain transition-transform hover:scale-105 duration-300"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
