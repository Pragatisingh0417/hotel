import React from "react";

const Facilities = () => {
  const facilities = [
    { icon: "📺", title: "Cable TV", description: "Sunt dolor aliquip consectetur laborum incididunt tempor." },
    { icon: "💼", title: "Work Desk", description: "Sunt dolor aliquip consectetur laborum incididunt tempor." },
    { icon: "📶", title: "Free Wifi", description: "Sunt dolor aliquip consectetur laborum incididunt tempor." },
    { icon: "🔒", title: "Safebox", description: "Sunt dolor aliquip consectetur laborum incididunt tempor." },
    { icon: "🌅", title: "Balcony", description: "Sunt dolor aliquip consectetur laborum incididunt tempor." },
    { icon: "🏙️", title: "City View", description: "Sunt dolor aliquip consectetur laborum incididunt tempor." },
  ];

  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-fixed " // Ensuring the background image is fixed
      style={{
        backgroundImage: "url('https://img.freepik.com/premium-photo/minsk-belarus-may-2018-full-seamless-spherical-hdri-panorama-360-degrees-angle-interior-boudoir-room-newlyweds-elite-hotel-equirectangular-cube-projection-vr-ar-content_97694-4584.jpg?w=1060')", // Replace with your image path
      }}
    >
      <div className="bg-black/40 h-full rounded-lg mx-4 lg:mx-auto max-w-7xl px-5 lg:px-12 lg:py-10">
        <h2 className="text-3xl text-white font-bold text-center mb-12 mt-10">Facilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="text-3xl text-yellow-500">{facility.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
