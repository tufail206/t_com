import React from 'react'
import Carousel from '../../components/HomeSlider'
import { Link } from 'react-router-dom';
import Todays_Products from './todays_products';
import BrowseByCategory from './browse_category';
import BestSelling from './best_selling';
import Enhance from './enhance_section';
import New_Arrivals from './new_arivals';
const Home = () => {

  return (
    <div className="container mx-auto  ">
      <div className="home-view flex flex-col md:flex-row  justify-between  gap-4  ">
        <div className="hidden md:block category my-2 w-max ">
          <h1>Categories</h1>

          <ul className="space-y-4 my-2">
            <li>
              <Link
                to={`/products/category/data`}
                state={"women"}
                className=" cursor-pointer  py-2 hovertext-blue-300 rounded"
              >
                Women's Shirt
              </Link>
            </li>
            <li>
              <Link
                to={`/products/category/data`}
                state={"women's"}
                className=" cursor-pointer  py-2 hover:text-blue-300 rounded"
              >
                Men's Shirt
              </Link>
            </li>
            <li>
              <Link
                to={`/products/category/data`}
                state={"children"}
                className=" cursor-pointer  py-2 hover:text-blue-300 rounded"
              >
                Children's Shirt
              </Link>
            </li>
          </ul>
        </div>
        <Carousel />
      </div>
      <Todays_Products />
      <BrowseByCategory />
      <BestSelling/>
      <Enhance/>
      <New_Arrivals/>
    </div>
  );
}

export default Home