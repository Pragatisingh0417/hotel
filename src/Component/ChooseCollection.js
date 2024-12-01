import React from "react";

const collections = [
  {
    title: "Summer Collection",
    image: "https://img.freepik.com/free-photo/young-couple-love-outdoor_158595-81.jpg?t=st=1732962141~exp=1732965741~hmac=069033903f4b592ba3fff1845f3081d591b7406918eb5ff28f8d98100cfe0a08&w=826",
    description: "Explore vibrant colors and cool designs perfect for summer.",
  },
  {
    title: "Winter Collection",
    image: "https://img.freepik.com/premium-photo/image-pretty-young-woman-outdoors-walking-snow-winter-park-forest_171337-73097.jpg?w=826",
    description: "Cozy up with our warm and stylish winter wear.",
  },
  {
    title: "Autumn Collection",
    image: "https://img.freepik.com/free-photo/beautiful-girls-have-fun-autumn-park_1157-22574.jpg?t=st=1732962283~exp=1732965883~hmac=51d46af6ffe3e384f4b4c2cea76fad8ff9bee9d3c7d23d7996afb3a03a35b5fd&w=826",
    description: "Enjoy the earthy tones and cozy styles for autumn.",
  },
  {
    title: "Spring Collection",
    image: "https://img.freepik.com/free-photo/video-camera-viewfinder-recording-show-tv-studio-focus-camera_1157-47920.jpg?t=st=1732962337~exp=1732965937~hmac=6d483bff22a1a377c3c6f2bc72561b8458afa93e20c32c0a7038c4091b6d72ec&w=826",
    description: "Fresh and floral outfits to bloom this spring.",
  },
];

const ChooseCollection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Choose a Collection</h2>
        <p className="text-gray-600 mb-12">
          Discover the perfect collection for every season. Explore our curated designs tailored to suit your style.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition"
            >
              {/* Background Image */}
              <img
                src={collection.image}
                alt={collection.title}
                className="h-60 w-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 rounded-lg"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
                <h3 className="text-xl font-semibold">{collection.title}</h3>
                <p className="text-sm mt-2">{collection.description}</p>
                {/* <button className="mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium rounded-lg">
                  Explore
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseCollection;
