// src/components/BuyCourse.js
import React from 'react';
import PlanCard from './PlanCard';
import CourseAccordion from './CourseAccordian';
import { plans } from '../../Utils/constants'; // Make sure you are importing plans correctly
import CourseTestimonials from './CourseTestimonials';

const BuyCourse = () => {
  return (
    <div className="bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Choose Your Gardening Course
        </h2>
        <p className="mt-4 max-w-xl text-lg text-gray-600 mx-auto">
          Whether you're just starting out or looking to refine your gardening skills, we have a plan for you.
        </p>
      </div>

      <div className="mt-5 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} /> // Pass the plan object correctly
        ))}
      </div>

      <CourseTestimonials />
    </div>
  );
};

export default BuyCourse;
