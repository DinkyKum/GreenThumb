// src/components/PlanList.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { plans } from '../../Utils/constants';

const PlanList = () => {
  const { id } = useParams(); // Retrieve the id from the URL parameters
  const plan = plans.find((p) => p.id === parseInt(id)); // Find the plan using the id

  if (!plan) {
    return (
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Plan Not Found</h2>
        <p className="mt-4 text-gray-600">The requested plan could not be found. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Explore Courses in the {plan.name} Plan
        </h2>
        <p className="mt-2 max-w-2xl text-xl text-gray-600 mx-auto">
          Here are the detailed courses included in the {plan.name} plan. Dive into each course to enhance your gardening skills.
        </p>
      </div>

      {/* Display courses included in the plan */}
      <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {plan.courses.map((course) => (
          <div key={course.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
            <img src={course.image} alt={course.name} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">{course.name}</h3>
            <p className="mt-2 text-gray-600">{course.description}</p>
            <div className="mt-2 text-2xl font-bold text-green-700">₹{course.price}</div>

            {/* Buttons */}
            <div className="mt-6 flex space-x-4">
              <button className="flex-1 bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition duration-200 font-bold">
                Buy Now
              </button>
              <Link to={`/courses/${course.id}`} className="flex-1 bg-gray-100 text-green-700 py-2 px-4 rounded-md hover:bg-gray-200 transition duration-200 text-center font-bold">
                Know More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanList;
