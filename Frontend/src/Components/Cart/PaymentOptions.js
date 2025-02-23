import React from 'react';

const PaymentOptions = ({ selectedPaymentMethod, handlePaymentSelection }) => {
  const paymentMethods = ['Cash on Delivery', 'Credit Card', 'Debit Card', 'Net Banking'];

  return (
    <div className="space-y-4">
      {paymentMethods.map((method) => (
        <button 
          key={method}
          onClick={() => handlePaymentSelection(method)}
          className={`w-full text-left p-2 rounded-lg font-medium 
            ${selectedPaymentMethod === method ? 'border-l-4 bg-gray-50 border-green-700 text-green-700' : 'hover:bg-gray-50'}
          `}
        >
          {method}
        </button>
      ))}
    </div>
  );
};

export default PaymentOptions;
