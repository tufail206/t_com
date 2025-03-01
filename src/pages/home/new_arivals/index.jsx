import React from 'react'
import arrivals1 from '../../../assets/home-img/arrivals1.png'
import arrivals2 from '../../../assets/home-img/arrivals2.png'
import arrivals3 from '../../../assets/home-img/arrivals3.png'
import arrivals4 from '../../../assets/home-img/arrivals4.png'
const New_Arrivals = () => {
  return (
    <div className="py-12 px-3">
      <p className="text-red-500">Featured</p>

      <h3 className="text-2xl font-semibold my-2">New Arrival</h3>
      <div className="arrivals_products flex gap-3 justify-between flex-col-reverse lg:flex-row  ">
        <div className="arrivals_left w-full lg:w-1/2 h-[200px] lg:h-[450px] bg-black">
          <img src={arrivals1} alt="arrivals 1" className=" h-full" />
        </div>
        <div className="arrivals_right flex flex-1 flex-col gap-3 h-[450px]">
          <div className="arrivals_top w-full h-[213px]">
            <img src={arrivals2} alt="arrival 2" className="w-full h-full " />
          </div>
          <div className="arrivals_bottoms flex gap-3 justify-between flex-col md:flex-row  h-1/2">
            <div className="arrivals_b-1 w-full md:w-1/2 bg-black">
              <img src={arrivals3} alt="" />
            </div>
            <div className="arrivals_b-1 w-full md:w-1/2 bg-black">
              <img src={arrivals4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New_Arrivals;