import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const OrderSuccessPage = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  // Mock order ID and order placed timestamp
  const orderId = 'ORD12345678';
  const placedTime = new Date().toLocaleString();

  // Handle continue shopping
  const handleContinueShopping = () => {
    clearCart(); // Clear the cart
    navigate('/shop'); // Navigate to the shop page
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      {/* Success Message */}
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 text-6xl mb-4" />
        <h1 className="text-3xl font-bold text-green-800 mb-4">Order Placed Successfully!</h1>
        <p className="text-gray-700 text-lg">
          Thank you for your purchase. Your order has been placed and is being processed.
        </p>
        <p className="text-gray-600 text-md mt-2">Order ID: <strong>{orderId}</strong></p>
        <p className="text-gray-600 text-md">Placed on: <strong>{placedTime}</strong></p>

        {/* Order Summary */}
        <div className="mt-6 bg-gray-50 p-4 rounded-lg w-full max-w-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Details</h2>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <img src={item.images[0]} alt={item.name} className="h-16 w-16 object-cover rounded-md" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-700 font-semibold">₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">Your cart is empty.</p>
          )}

          <div className="flex justify-between text-gray-700 font-semibold text-lg mt-6">
            <span>Total Price:</span>
            <span>₹{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</span>
          </div>
        </div>

        {/* Continue Shopping Button */}
        <div className="mt-8">
          <button
            onClick={handleContinueShopping}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors duration-300"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
