import React from 'react'
import tabImage from '../../../assets/home-img/tabImage.png'
import { Link } from 'react-router-dom';
const Enhance = () => {
  return (
    <div className="flex justify-center md:justify-between flex-col md:flex-row items-center gap-2 bg-[#201f1fda] p-6">
      <div className="text-sections">
        <h3 className="text-2xl text-red-500">Category</h3>
        <h3 className="text-5xl text-white my-2">Enhance Your <br /> Music Experience</h3>
        <p className='text-gray-50'>
          Immerse yourself in high-quality sound and elevate your music <br />
          experience with the best audio solutions.
        </p>
        <Link to={"/products/category/data"} state={"music"} className="my-3 inline-block  py-2 rounded  bg-red-500 hover:bg-transparent hover:outline hover:outline-red-500  text-white  cursor-pointer px-2">
          Explore Now
        </Link>
      </div>
      <div className="image-section ">
        <img src={tabImage} alt="audio tab image" className='w-[70%] md:w-full' />
      </div>
    </div>
  );
}

export default Enhance;