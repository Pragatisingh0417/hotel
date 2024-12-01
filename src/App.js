import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // Track if menu is open

  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu open/close
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-white text-[#AB8965] text-lg font-medium p-4 flex justify-end items-center relative">
        <div className="flex items-center gap-8">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>

          {/* Dropdown: Locations */}
          <div
            className="relative hidden md:block"
            onMouseEnter={() => handleDropdown('locations')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="hover:text-blue-400">Locations</button>
            {openDropdown === 'locations' && (
              <div className="absolute top-full left-0 mt-2 bg-[#333333] text-white rounded shadow-lg w-48 z-50">
                <Link to="/locations/beach" className="block px-4 py-2 hover:bg-gray-700">Beach Resorts</Link>
                <Link to="/locations/city" className="block px-4 py-2 hover:bg-gray-700">City Hotels</Link>
                <Link to="/locations/mountains" className="block px-4 py-2 hover:bg-gray-700">Mountain Escapes</Link>
              </div>
            )}
          </div>

          {/* Dropdown: Experiences */}
          <div
            className="relative hidden md:block"
            onMouseEnter={() => handleDropdown('experiences')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            
            <button className="hover:text-blue-400">Experiences</button>
            {openDropdown === 'experiences' && (
              <div className="absolute top-full left-0 mt-2 bg-[#333333] text-white rounded shadow-lg w-48 z-50">
                <Link to="/experiences/spa" className="block px-4 py-2 hover:bg-gray-700">Spa & Wellness</Link>
                <Link to="/experiences/adventure" className="block px-4 py-2 hover:bg-gray-700">Adventure</Link>
                <Link to="/experiences/fine-dining" className="block px-4 py-2 hover:bg-gray-700">Fine Dining</Link>
              </div>
            )}
          </div>

          {/* Dropdown: Offers */}
          <div
            className="relative hidden md:block"
            onMouseEnter={() => handleDropdown('offers')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="hover:text-blue-400">Offers</button>
            {openDropdown === 'offers' && (
              <div className="absolute top-full left-0 mt-2 bg-[#333333] text-white rounded shadow-lg w-48 z-50">
                <Link to="/offers/seasonal" className="block px-4 py-2 hover:bg-gray-700">Seasonal Offers</Link>
                <Link to="/offers/couples" className="block px-4 py-2 hover:bg-gray-700">Couples Getaways</Link>
                <Link to="/offers/family" className="block px-4 py-2 hover:bg-gray-700">Family Packages</Link>
              </div>
            )}
          </div>
          <div className="flex gap-5 justify-end">
  {/* Buttons */}
  <div>
    <button className="hidden md:inline px-6 py-2 rounded-lg bg-gradient-to-r from-black to-gray-700 text-white font-medium hover:from-gray-800 hover:to-gray-500 mt-4 md:mt-0">
      LUXURY GETAWAYS
    </button>
  </div>
  <button className="hidden md:inline px-6 py-2 rounded-lg border text-[#AB8965] font-medium flex items-center border-black space-x-2 hover:bg-white hover:text-gray-900 mt-4 md:mt-0">
    <span>📞</span>
    <span>+91 9167 928 471</span>
  </button>
</div>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMenu} // Toggle the mobile menu
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu (Visible when menuOpen is true) */}
      <div
        className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-white text-[#AB8965] p-4`}
      >
        <Link to="/" className="block py-2 hover:text-blue-400">Home</Link>
        <Link to="/about" className="block py-2 hover:text-blue-400">About</Link>

        <div className="relative">
          <button className="block py-2 hover:text-blue-400">Locations</button>
          <div className="bg-[#333333] text-white rounded shadow-lg w-48 mt-2">
            <Link to="/locations/beach" className="block px-4 py-2 hover:bg-gray-700">Beach Resorts</Link>
            <Link to="/locations/city" className="block px-4 py-2 hover:bg-gray-700">City Hotels</Link>
            <Link to="/locations/mountains" className="block px-4 py-2 hover:bg-gray-700">Mountain Escapes</Link>
          </div>
        </div>

        <div className="relative">
          <button className="block py-2 hover:text-blue-400">Experiences</button>
          <div className="bg-[#333333] text-white rounded shadow-lg w-48 mt-2">
            <Link to="/experiences/spa" className="block px-4 py-2 hover:bg-gray-700">Spa & Wellness</Link>
            <Link to="/experiences/adventure" className="block px-4 py-2 hover:bg-gray-700">Adventure</Link>
            <Link to="/experiences/fine-dining" className="block px-4 py-2 hover:bg-gray-700">Fine Dining</Link>
          </div>
        </div>
        

        <div className="relative">
          <button className="block py-2 hover:text-blue-400">Offers</button>
          <div className="bg-[#333333] text-white rounded shadow-lg w-48 mt-2">
            <Link to="/offers/seasonal" className="block px-4 py-2 hover:bg-gray-700">Seasonal Offers</Link>
            <Link to="/offers/couples" className="block px-4 py-2 hover:bg-gray-700">Couples Getaways</Link>
            <Link to="/offers/family" className="block px-4 py-2 hover:bg-gray-700">Family Packages</Link>
          </div>
        </div>
       
        
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/locations/beach" element={<h1 className="text-center p-10">Beach Resorts</h1>} />
        <Route path="/locations/city" element={<h1 className="text-center p-10">City Hotels</h1>} />
        <Route path="/locations/mountains" element={<h1 className="text-center p-10">Mountain Escapes</h1>} />
        <Route path="/experiences/spa" element={<h1 className="text-center p-10">Spa & Wellness</h1>} />
        <Route path="/experiences/adventure" element={<h1 className="text-center p-10">Adventure</h1>} />
        <Route path="/experiences/fine-dining" element={<h1 className="text-center p-10">Fine Dining</h1>} />
        <Route path="/offers/seasonal" element={<h1 className="text-center p-10">Seasonal Offers</h1>} />
        <Route path="/offers/couples" element={<h1 className="text-center p-10">Couples Getaways</h1>} />
        <Route path="/offers/family" element={<h1 className="text-center p-10">Family Packages</h1>} />
      </Routes>
    </div>
  );
}

export default App;
