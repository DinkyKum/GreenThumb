import React from 'react';

import mainbgImage from '../Pictures/bg.png'
import CategoriesComponent from './CategoriesComponent';
import Courses from './Courses';
import Features from './Features';


const Home = () => {
  return ( 
    <div className="bg-white">
      <div className="mb-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-gray-100">
          {/* Left Section: Text */}
          <div className="md:w-1/2 flex flex-col items-start text-left mt-24 ml-16">
            <h1 className="text-5xl font-extrabold text-green-900 mb-6">
              Welcome to Your Gardening Haven
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover the joys of gardening with our comprehensive plant care and gardening resources. Whether you're a seasoned gardener or just starting, we have everything you need to help your plants thrive.
            </p>
            <div>
            <a
              href="#features"
              className="bg-green-900 text-white font-semibold py-3 px-6  shadow-lg hover:bg-white transition duration-300 hover:text-green-900 hover: border-green-900 hover: border-2 mb-16"
            >
              Explore Now
            </a>
            <a
              href="#courses"
              className="bg-white text-green-900 font-semibold border-2 border-green-900 py-3 px-6 shadow-lg hover:bg-green-900 transition duration-300 hover:text-white mb-16 ml-8"
            >
              Learn More
            </a>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={mainbgImage}
              alt="Gardening Haven"
              className="w-full object-cover h-72 md:h-96 mt-20"
            />
          </div>
        </div>
      </div>
    
        <section id="features" className=" bg-green-50 m- -20">
      <Features/>
        </section> 
        
        <section id="courses" className='my-10 '>
          <Courses/>
          <CategoriesComponent/>
         
        </section>

       
      </div>
  );
};

export default Home;
