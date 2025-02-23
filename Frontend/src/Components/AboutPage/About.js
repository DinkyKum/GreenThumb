// src/Components/AboutUs.js

import React from 'react';
import { Link } from 'react-router-dom';

import AboutImage from '../Pictures/AboutPlant.png'
import MeetOurTeam from './MeetOurTeam';
import Testimonials from './Testimonials';

const AboutUs = () => {
  
  return (
    <div className="bg-white mx-10 mt-3">
      {/* <section className="grid md:grid-cols-2 rounded-lg shadow-lg gap-16 mb-16 bg-[#dce1e2] "> */}
      <section className="flex justify-between rounded-lg shadow-lg mb-10 bg-[#dce1e2] ">
        <div className="flex flex-col justify-center ml-10 text-lg w-[950px]">
           <h1 className="text-5xl font-extrabold text-green-900 mb-7">Our Mission</h1>
        <p className="text-lg text-gray-600 mx-auto"> 
          At, <strong>Green Thumb</strong>, our mission is to empower individuals to cultivate their green spaces effortlessly. We provide expert guidance to help both novice and experienced gardeners thrive in their gardening journeys. Our curated selection of premium plants ensures you have the best options to bring nature closer to your home. With innovative tools and resources at your disposal, caring for your plants becomes a rewarding and enjoyable experience. We are dedicated to making gardening accessible for everyone, transforming spaces into vibrant, lush environments.
        </p>

          <a href="#team" className="mt-16 bg-green-900 text-white rounded-lg hover:bg-white hover:text-green-900 hover: border-2 border-green-900 transition duration-300 px-3 py-2 font-bold text-lg w-[125px]"> Learn More
          </a>

        </div>
        <div className="flex justify-center w-[550px]">
          <img
            src={AboutImage}
            alt="Plant Collection"
            className='rounded-lg align-right'
          />
        </div>
      </section>
      <section id='team'>
      <MeetOurTeam/>
      </section>
      <Testimonials/>
    </div>
  );
};

export default AboutUs;
