// src/components/BuyPlan.jsx
import React from 'react';

const BuyPlan = ({ className }) => {
  const handlePurchase = () => {
    // Implement purchase logic or navigation
    alert('Redirecting to purchase page...');
  };

  return ( 
    <div
      className={`border-2 border-green-500 rounded-md p-6 text-center ${className || ''}`}
    >
      <h3 className="text-2xl font-bold text-green-700 mb-4">Unlock Full Access</h3>
      <p className="text-gray-700 mb-6">
        Purchase a plan to access all lectures and exclusive content.
      </p>
      <button
        onClick={handlePurchase}
        className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors"
      >
        Buy Plan
      </button>
    </div>
  );
};

export default BuyPlan;
