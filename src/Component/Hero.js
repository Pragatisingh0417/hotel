import React, { useState } from "react";

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const slides = [
    {
      image:
        "https://img.freepik.com/premium-photo/luxury-sunset-infinity-pool-summer-beachfront-hotel-resort-tropical-landscape-tranquil_663265-1575.jpg?w=1060",
      heading: "Welcome to Paradise",
      paragraph: "Relax and unwind in the most luxurious beachfront resorts.",
      buttonText: "Book Now",
      buttonLink: "#",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/panorama-chic-five-star-hotel-with-pool-sands-katathani-evening-order-palm-trees-green-grass-vacation-spot_114160-208.jpg?w=1060",
      heading: "Experience Luxury",
      paragraph: "Indulge in world-class amenities and elegant accommodations.",
      buttonText: "Explore More",
      buttonLink: "#",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/eram-garden-shiraz-city-iran_134785-7152.jpg?w=1060",
      heading: "Discover Serenity",
      paragraph: "Find peace and tranquility in serene, nature-filled escapes.",
      buttonText: "Learn More",
      buttonLink: "#",
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <header className="relative bg-gray-100">
      {/* Slider Container */}
      <div className="relative w-full h-[500px] overflow-hidden">
        {/* Slider Image */}
        <img
          src={slides[currentImageIndex].image}
          alt={`Slider Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {slides[currentImageIndex].heading}
          </h1>
          {/* Paragraph */}
          <p className="text-lg md:text-xl mb-6">
            {slides[currentImageIndex].paragraph}
          </p>
          <a
            href={slides[currentImageIndex].buttonLink}
            className="bg-[#AB8965] hover:bg-inherit text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            {slides[currentImageIndex].buttonText}
          </a>
        </div>

        {/* Previous Button */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
          onClick={prevImage}
        >
          &#10094;
        </button>

        {/* Next Button */}
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
          onClick={nextImage}
        >
          &#10095;
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentImageIndex ? "bg-blue-500" : "bg-white"
            } border border-blue-500`}
          ></div>
        ))}
      </div>
    </header>
  );
}

export default Hero;
