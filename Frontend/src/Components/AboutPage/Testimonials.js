// src/Components/Testimonials.js

import React, { useState, useEffect } from 'react';
import { testimonials } from '../../Utils/constants';
import BoyFace from '../Pictures/BoyFace.png';
import GirlFace from '../Pictures/GirlFace.png';


const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, [length]);

  return (
    <div className="w-full bg-white py-10 px-4 ">
      <div className="max-w-[1500px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-green-700 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">
            Hear from our satisfied customers who have transformed their gardening experience with Green Thumb.
          </p>
        </div>

        {/* Testimonial Container */}
        <div className="flex flex-col items-center">
          {/* Testimonial Card */}
          <div className="w-full max-w-2xl bg-gray-50 rounded-lg shadow-lg p-8 transition-opacity duration-500">
            {testimonials.map((testimonial, index) => (
              index === current && (
                <div key={testimonial.id}>
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.sex=='F'? GirlFace : BoyFace}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-green-700">{testimonial.name}</h3>
                      <p className="text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.description}"</p>
                </div>
              )
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`h-3 w-3 rounded-full cursor-pointer transition-colors duration-300 ${
                  index === current ? 'bg-green-700' : 'bg-gray-300'
                }`}
                onClick={() => setCurrent(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
