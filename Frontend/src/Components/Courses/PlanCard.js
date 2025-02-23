// src/components/PlanCard.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const PlanCard = ({ plan }) => {
  const { id, name, price, description, features, isMostPopular } = plan;

  return (
    <div className={`flex flex-col rounded-lg shadow-lg overflow-hidden hover:scale-105 duration-500 border ${isMostPopular ? 'border-green-700' : 'border-gray-200'}`}>
      {isMostPopular && (
        <div className="bg-green-700 text-white text-sm font-semibold text-center py-1">
          Most Popular
        </div>
      )}

      <div className={`flex-1 bg-white p-6 flex flex-col justify-between ${isMostPopular ? 'border-t-4 border-green-700' : ''}`}>
        <h3 className="text-xl font-semibold text-gray-900 mt-4 text-center">{name}</h3>
        <p className="mt-2 text-gray-500 text-center">{description}</p>
        <div className="mt-4 text-center">
          <span className="text-4xl font-bold text-green-700">₹{price}</span>
          <span className="text-base font-medium text-gray-500"> / month</span>
        </div>
        <ul className="mt-3 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <i className="fas fa-check text-green-700 mr-2"></i>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex space-x-4">
          <button className="flex-1 bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition duration-200 font-bold">
            Buy Now
          </button>
          <Link to={`/planlist/${id}`} className="flex-1 bg-gray-100 text-green-700 py-2 px-4 rounded-md hover:bg-gray-200 transition duration-200 text-center font-bold">
          Explore Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
