import React from "react";

const offers = [
  {
    title: "Luxury Suite at 30% Off",
    description: "Enjoy the luxury of our premium suites with an exclusive discount this season.",
    link: "#",
  },
  {
    title: "Weekend Getaway Special",
    description: "Book a weekend stay and get free breakfast for two!",
    link: "#",
  },
  {
    title: "Honeymoon Package",
    description: "Romantic getaway packages with complimentary wine and dinner.",
    link: "#",
  },
  {
    title: "Family Staycation Offer",
    description: "Kids stay free with our special family deals this holiday season.",
    link: "#",
  },
];

const Offers = () => {
  return (
    <div
      className=" bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&q=80&w=1920')`,
      }}
    >
      <div className="bg-black/40 py-10 px-6 text-center max-w-7xl mx-auto rounded-lg">
        <h2 className="text-4xl font-bold text-white mb-8">Exclusive Hotel Offers</h2>
        <p className="text-lg text-gray-200 mb-12">
          Take advantage of our limited-time deals and enjoy luxurious stays at unbeatable prices.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-gray-800">{offer.title}</h3>
              <p className="mt-2 text-gray-600">{offer.description}</p>
              <a
                href={offer.link}
                className="mt-4 inline-block bg-[#AB8965] text-white hover:text-[#AB8965] border hover:border-2-black py-2 px-4 rounded-lg hover:bg-[#F5EADD] hover:font-bold transition"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
