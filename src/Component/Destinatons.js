import React from 'react';
import { Link } from 'react-router-dom';
import { FaUmbrellaBeach, FaCity, FaMountain } from 'react-icons/fa';

function Destinations() {
  return (
    <div className="pt-20 pb-20 px-5 bg-[#f5eadd] ">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#181818]">Explore Our Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Beach Resorts */}
        <Link to="/locations/beach" className="hover:bg-[#AB8965] shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transform transition  border border-[#181818]">
          <FaUmbrellaBeach className="text-black text-6xl mb-4" />
          <h2 className="text-2xl font-semibold">Beach Resorts</h2>
          <p className="text-gray-600 text-center">Relax by the sea with luxurious amenities and scenic views.</p>
        </Link>
        
        {/* City Hotels */}
        <Link to="/locations/city" className="hover:bg-[#AB8965] shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transform transition border border-[#181818]">
          <FaCity className="text-black text-6xl mb-4" />
          <h2 className="text-2xl font-semibold">City Hotels</h2>
          <p className="text-black text-center">Stay in the heart of vibrant cities with world-class facilities.</p>
        </Link>
        
        {/* Mountain Escapes */}
        <Link to="/locations/mountains" className="hover:bg-[#AB8965] shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transform transition  border border-[#181818]">
          <FaMountain className="text-black text-6xl mb-4" />
          <h2 className="text-2xl font-semibold">Mountain Escapes</h2>
          <p className="text-black text-center">Experience tranquility and adventure in picturesque mountains.</p>
        </Link>
      </div>
    </div>
  );
}

export default Destinations;
