import React from "react";

function Room() {
  return (
    <div className=" pt-20 pb-20 px-8">
      <p className="text-lg text-[#AB8965] font-bold">Our Rooms</p>
      <h1 className="text-5xl mt-3 font-extrabold"> Accomodation</h1>

      <div className="grid grid-cols-1 md:grid-cols-3  h-full mt-5">
        <div>
          {/* First Card */}
          <div className="max-w-sm rounded-lg border bg-[#FFF5ED] border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            {/* Image */}
            <div className="relative w-full h-64">
              <img
                src="https://img.freepik.com/free-photo/luxury-bedroom-hotel_1150-10836.jpg?t=st=1732953938~exp=1732957538~hmac=4842ac0326b4ac84cdb189ee14360aed4f2f91db4c5a0a8cda336ea89f3b8172&w=826"
                alt="Beautiful Landscape"
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            {/* Description */}
            <div className="px-4 py-3">
              <h2 className="text-xl font-semibold text-[#593a1a]">
              Presidential Suite
              </h2>
            </div>
            <div >
              <h2 className="text-sm font-semibold text-[#AB8965]">
              2 Guests 35 Feets Size $50
              </h2>
            </div>

            {/* Button */}
            <div className="px-4 py-3">
              <button
                onClick={() => alert("Learn More clicked!")}
                className="w-full bg-[#AB8965] text-white py-2 rounded-lg  focus:outline-none"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div>
          {/* First Card */}
          <div className="max-w-sm rounded-lg border bg-[#FFF5ED] border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            {/* Image */}
            <div className="relative w-full h-64">
              <img
                src="https://img.freepik.com/free-photo/pillow-bed-with-blanket-decoration-interior_74190-11507.jpg?t=st=1732954685~exp=1732958285~hmac=c76b8a2928553b3539a5c7bd0bf18890cfa0615a90f82f70741e6412ce47a437&w=826"
                alt="Beautiful Landscape"
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            {/* Description */}
            <div className="px-4 py-3">
              <h2 className="text-xl font-semibold text-[#593a1a]">
              Presidential Suite
              </h2>
            </div>
            <div >
              <h2 className="text-sm font-semibold text-[#AB8965]">
              2 Guests 35 Feets Size $50
              </h2>
            </div>

            {/* Button */}
            <div className="px-4 py-3">
              <button
                onClick={() => alert("Learn More clicked!")}
                className="w-full bg-[#AB8965] text-white py-2 rounded-lg  focus:outline-none"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div>
          {/* First Card */}
          <div className="max-w-sm rounded-lg border bg-[#FFF5ED] border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            {/* Image */}
            <div className="relative w-full h-64">
              <img
                src="https://img.freepik.com/free-photo/white-pillow-bed_74190-2473.jpg?t=st=1732954656~exp=1732958256~hmac=631a35681f0a587ad4a61981d504367daa5468fceab19ac47d9ab864348956d0&w=826"
                alt="Beautiful Landscape"
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            {/* Description */}
            <div className="px-4 py-3">
              <h2 className="text-xl font-semibold text-[#593a1a]">
              Presidential Suite
              </h2>
            </div>
            <div >
              <h2 className="text-sm font-semibold text-[#AB8965]">
              2 Guests 35 Feets Size $50
              </h2>
            </div>

            {/* Button */}
            <div className="px-4 py-3">
              <button
                onClick={() => alert("Learn More clicked!")}
                className="w-full bg-[#AB8965] text-white py-2 rounded-lg  focus:outline-none"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Room;
