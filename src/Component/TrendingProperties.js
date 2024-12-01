import React from "react";

const trendingProperties = [
  {
    id: 1,
    name: "Serene Beachside Villa",
    location: "Goa, India",
    price: "$300/night",
    image:
      "https://img.freepik.com/premium-photo/modern-house-cliffside-with-ocean-views_1203353-29665.jpg?w=826", // Replace with your image URL
  },
  {
    id: 2,
    name: "Mountain Escape Chalet",
    location: "Manali, India",
    price: "$250/night",
    image:
      "https://img.freepik.com/free-photo/wide-shot-brown-house-surrounded-by-forest-spruce-trees-clouds_181624-5123.jpg?t=st=1732911083~exp=1732914683~hmac=1e8ea8ee34d2c4c4713ebbfc858525e88565ffa7ed27f766604c45baf04d2f00&w=740", // Replace with your image URL
  },
  {
    id: 3,
    name: "Luxury City Apartment",
    location: "Mumbai, India",
    price: "$400/night",
    image:
      "https://img.freepik.com/free-photo/view-from-balcony-apartment_188544-12685.jpg?t=st=1732911136~exp=1732914736~hmac=a7e31a4cb82e5406ad81b2db3a0d5c6cd26c11276fb3375d41f6770c27231cfc&w=996", // Replace with your image URL
  },
  {
    id: 4,
    name: "Countryside Manor",
    location: "Lonavala, India",
    price: "$350/night",
    image:
      "https://img.freepik.com/free-photo/brown-building_395237-268.jpg?t=st=1732911172~exp=1732914772~hmac=b1f1b75b8f75ed577513665063d490d4ef11e807b19e383c756a5a4ecb9228e9&w=996", // Replace with your image URL
  },
];

function TrendingProperties() {
  return (
    <div className="p-6 sm:p-10 lg:p-20 bg-gray-100">
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Trending Properties</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {trendingProperties.map((property) => (
      <div
        key={property.id}
        className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-48 sm:h-56 md:h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg sm:text-xl font-semibold">{property.name}</h3>
          <p className="text-gray-500 text-sm sm:text-base">{property.location}</p>
          <p className="text-[#AB8965] font-bold">{property.price}</p>
          <button className="mt-4 w-full bg-[#AB8965] text-white py-2 rounded hover:bg-[#000000] transition">
            View Details
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}

export default TrendingProperties;
