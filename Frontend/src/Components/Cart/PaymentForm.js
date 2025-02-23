import React from 'react';

const PaymentForm = ({ selectedPaymentMethod }) => {
  const renderForm = () => {
    switch (selectedPaymentMethod) {
      case 'Credit Card':
      case 'Debit Card':
        return (
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Card Number" 
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <input 
              type="text" 
              placeholder="Name on Card" 
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <div className="flex space-x-4">
              <input 
                type="text" 
                placeholder="Expiry Date (MM/YY)" 
                className="w-1/2 p-2 border border-gray-300 rounded-lg"
              />
              <input 
                type="password" 
                placeholder="CVV" 
                className="w-1/2 p-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        );
      case 'Net Banking':
        return (
          <div className="space-y-4">
            <p className="text-gray-700 mb-2">Select your bank:</p>
            <div className="flex flex-col space-y-2">
              <label className="flex items-center space-x-4">
                <input type="radio" name="bank" className="form-radio text-green-600" />
                <img
                  src="https://static-asset.inc42.com/hdfc-bank.png"
                  alt="HDFC Bank Logo"
                  className="w-10 rounded-full border-gray-300 border-[0.5px]"
                />
                <span>HDFC Bank</span>
              </label>
              <hr className="border-t border-gray-300 my-2" />
              <label className="flex items-center space-x-4">
                <input type="radio" name="bank" className="form-radio text-green-600" />
                <img
                  src="https://logosandtypes.com/wp-content/uploads/2020/07/ICICI-bank.png"
                  alt="ICICI Bank Logo"
                  className="w-10 rounded-full border-gray-300 border-[0.5px]"
                />
                <span>ICICI Bank</span>
              </label>
              <hr className="border-t border-gray-300 my-2" />
              <label className="flex items-center space-x-4">
                <input type="radio" name="bank" className="form-radio text-green-600" />
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/020/975/552/small_2x/sbi-logo-sbi-icon-transparent-free-png.png"
                  alt="SBI Logo"
                  className="w-10 rounded-full border-gray-300 border-[0.5px]"
                />
                <span>SBI</span>
              </label>
            </div>
          </div>
        );
      case 'Cash on Delivery':
      default:
        return (
          <div>
            <p className="text-gray-600">You will pay upon delivery.</p>
          </div>
        );
    }
  };

  return (
    <div>
      {renderForm()}
    </div>
  );
};

export default PaymentForm;
