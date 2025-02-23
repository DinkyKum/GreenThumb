import React from 'react';

const Contact= () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-green-800 text-center mb-6">Contact Us</h1>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="flex flex-col">
            <label className="text-gray-600 mb-2" htmlFor="name">Name</label>
            <input
              className="border border-gray-300 p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              type="text"
              id="name"
              placeholder="Your Name"
              required
            />

            <label className="text-gray-600 mb-2" htmlFor="email">Email</label>
            <input
              className="border border-gray-300 p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              type="email"
              id="email"
              placeholder="Your Email"
              required
            />

            <label className="text-gray-600 mb-2" htmlFor="message">Message</label>
            <textarea
              className="border border-gray-300 p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              id="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> support@greenthumb.com
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Phone:</strong>+91- 9823648923
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Address:</strong> 123 Garden Lane, Green City, India
            </p>
            <h3 className="text-xl font-semibold text-green-800 mt-6">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.facebook.com"
                className="text-gray-600 hover:text-green-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f fa-lg"></i>
              </a>
              <a
                href="https://www.instagram.com"
                className="text-gray-600 hover:text-green-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a> 
              <a
                href="https://www.twitter.com"
                className="text-gray-600 hover:text-green-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
