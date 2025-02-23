import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-4">About Us</h3>
            <p className="text-gray-300 text-sm">
              We provide expert advice and resources for all your plant care and gardening needs.
              Join our community and grow your garden today!
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-green-400 transition">About</a></li>
              <li><a href="/courses" className="text-gray-400 hover:text-green-400 transition">Courses</a></li>
              <li><a href="/shop" className="text-gray-400 hover:text-green-400 transition">Shop</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-green-400 transition">Blog</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-green-400 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-4">Contact Us</h3>
            <p className="text-gray-300 text-sm">
              Email: <a href="mailto:support@plantcare.com" className="text-green-400 hover:text-green-500">support@greenthumb.com</a>
            </p>
            <p className="text-gray-300 text-sm mt-2">Phone: +91- 9823648923</p>
            <p className="text-gray-300 text-sm mt-2">Address: 123 Garden Lane, Green City, India</p>
          </div>

          {/* Social Media Icons */}
          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-green-400 transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-green-400 transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-green-400 transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-green-400 transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; 2024 PlantCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
