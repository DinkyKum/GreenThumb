// src/Components/CartPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-green-800">Your Cart</h1>
        <Link to="/shop" className="text-green-600 hover:underline">
          Continue Shopping
        </Link>
      </header>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-700">
            Your cart is empty.
          </h2>
          <Link
            to="/shop"
            className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors duration-300"
          >
            Browse Plants
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row">
          {/* Cart Items */}
          <div className="lg:w-3/4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow mb-4">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="h-24 w-24 object-cover rounded-md"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      className="px-2 py-1 bg-gray-200 rounded-l hover:bg-gray-300 transition-colors duration-200"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded-r hover:bg-gray-300 transition-colors duration-200"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-700 font-semibold">
                  ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-2 text-red-500 hover:underline"
                  >
                    <i className="fas fa-trash-alt mr-6"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary and Checkout */}
          <div className="lg:w-1/4 lg:ml-8 mt-8 lg:mt-0">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
              <div className="flex justify-between text-gray-700">
                <span>Total Items:</span>
                <span>{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
              </div>
              <div className="flex justify-between text-gray-700 mt-2">
                <span>Total Price:</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>

              <button className="w-full bg-green-600 text-white py-2 px-4 rounded mt-6 hover:bg-green-700 transition-colors duration-300">
              
              <Link to="/payment" className="block w-full h-full text-center">
              Proceed to Pay
              </Link>
              </button>

              
              <button
                className="w-full bg-red-500 text-white py-2 px-4 rounded mt-4 hover:bg-red-600 transition-colors duration-300"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
