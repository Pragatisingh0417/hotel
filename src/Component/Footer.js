import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-[#AB8965] ">HotelName</h2>
          <p className="mt-4 text-gray-400">
            Experience luxury and comfort with our exclusive services and world-class amenities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-[#AB8965] mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-blue-500">About Us</a></li>
            <li><a href="/rooms" className="hover:text-blue-500">Rooms & Suites</a></li>
            <li><a href="/offers" className="hover:text-blue-500">Special Offers</a></li>
            <li><a href="/contact" className="hover:text-blue-500">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-bold text-[#AB8965] mb-4">Contact Us</h3>
          <p className="text-gray-400">
            📍 123 Luxury Avenue, Delhi<br />
            📞 +123 456 7890<br />
            ✉️ email@hotel.com
          </p>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-bold text-[#AB8965] mb-4">Stay Updated</h3>
          <p className="text-gray-400">Subscribe to our newsletter for exclusive offers and updates.</p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg focus:ring-2 focus:ring-[#AB8965] outline-none bg-gray-800 text-gray-200"
            />
            <button
              type="submit"
              className="mt-4 w-full bg-[#AB8965] text-white hover:text-[#AB8965] py-2 px-4 rounded-lg hover:bg-white transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col lg:flex-row items-center justify-between text-sm text-gray-400">
        <p>© 2024 HotelName. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 lg:mt-0">
          <a href="#" className="hover:text-blue-500">Facebook</a>
          <a href="#" className="hover:text-blue-500">Twitter</a>
          <a href="#" className="hover:text-blue-500">Instagram</a>
          <a href="#" className="hover:text-blue-500">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
