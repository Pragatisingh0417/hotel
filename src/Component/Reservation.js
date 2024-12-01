import React, { useState } from "react";

const Reservation = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  return (
    <div className="bg-black text-white py-8 ">
      {/* Reservation Title */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6">Reservation</h2>

      {/* Reservation Form */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4">
        {/* Check-In Date */}
        <div className="text-center">
          <h4 className="text-[#AB8965] text-sm font-semibold mb-2">Check In</h4>
          <input
            type="date"
            className="bg-black text-white  text-center py-2 px-4 rounded border-2 border-[#AB8965] focus:outline-none"
          />
        </div>

        {/* Check-Out Date */}
        <div className="text-center">
          <h4 className="text-[#AB8965] text-sm font-semibold mb-2">Check Out</h4>
          <input
            type="date"
            className="bg-black text-white text-center py-2 px-4 rounded border-2 border-[#AB8965] focus:outline-none"
          />
        </div>

        {/* Adult Counter */}
        <div className="text-center">
          <h4 className="text-[#AB8965] text-sm font-semibold mb-2">Adult</h4>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
              className="h-8 w-8 bg-[#AB8965] rounded-full text-white text-lg font-bold"
            >
              -
            </button>
            <input
              type="number"
              min="1"
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              className="w-12 text-center bg-black text-white rounded border-2 border-[#AB8965] py-1"
            />
            <button
              onClick={() => setAdults((prev) => prev + 1)}
              className="h-8 w-8 bg-[#AB8965] rounded-full text-white text-lg font-bold"
            >
              +
            </button>
          </div>
        </div>

        {/* Children Counter */}
        <div className="text-center">
          <h4 className="text-[#AB8965] text-sm font-semibold mb-2">Children</h4>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setChildren((prev) => Math.max(0, prev - 1))}
              className="h-8 w-8 bg-[#AB8965] rounded-full text-white text-lg font-bold"
            >
              -
            </button>
            <input
              type="number"
              min="0"
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
              className="w-12 text-center text-white bg-black rounded border-2 border-[#AB8965] py-1"
            />
            <button
              onClick={() => setChildren((prev) => prev + 1)}
              className="h-8 w-8 bg-[#AB8965] rounded-full text-white text-lg font-bold"
            >
              +
            </button>
          </div>
        </div>

        {/* Check Availability Button */}
        <div className="mt-6 md:mt-0">
          <button className="bg-[#AB8965] text-black font-bold py-3 px-6 rounded hover:bg-[#916d50] transition">
            CHECK AVAILABILITY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
