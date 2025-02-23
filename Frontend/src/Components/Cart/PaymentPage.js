import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import PaymentOptions from './PaymentOptions';
import PaymentForm from './PaymentForm';

const PaymentPage = () => {
  const { cartItems } = useCart();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Credit Card');

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className=" bg-white p-8 w-3/4 m-auto rounded-lg mt-5 shadow-lg h-[600px]">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-green-800">Checkout</h1>
        <Link to="/cart" className="text-green-600 hover:underline">
          Back to Cart
        </Link>
      </header>

      <div className="flex flex-col lg:flex-row">
        {/* Left Section: Payment Options */}
        <div className="lg:w-1/3 border-r-2 pr-8">
          <h2 className="text-lg font-semibold mb-4">Choose Payment Method</h2>
          <PaymentOptions 
            selectedPaymentMethod={selectedPaymentMethod}
            handlePaymentSelection={setSelectedPaymentMethod}
          />
        </div>

        {/* Right Section: Payment Form */}
        <div className="lg:w-2/3 pl-8">
          <h2 className="text-xl font-semibold mb-4">{selectedPaymentMethod} Details</h2>
          <PaymentForm selectedPaymentMethod={selectedPaymentMethod} />

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow mt-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
            <div className="flex justify-between text-gray-700">
              <span>Total Items:</span>
              <span>{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
            </div>
            <div className="flex justify-between text-gray-700 mt-2">
              <span>Total Price:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button
              className="w-full bg-green-600 text-white py-2 px-4 rounded mt-6 hover:bg-green-700 transition-colors duration-300 font-bold"
            //   onClick={() => alert('Proceeding with ' + selectedPaymentMethod)}
            >
                <Link to="/orderSuccess">
              Confirm Payment
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
