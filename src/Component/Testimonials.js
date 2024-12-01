import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import "swiper/swiper-bundle.css"; // Import Swiper's CSS
import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Correct import for Swiper modules in v8+

const testimonials = [
  {
    name: "John Doe",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    testimonial:
      "This service has been amazing! The product quality exceeded my expectations, and the customer support was outstanding. I will definitely be coming back.",
  },
  {
    name: "Jane Smith",
    role: "Client",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    testimonial:
      "I had a wonderful experience. The process was smooth and easy to follow. Highly recommend this company to anyone looking for top-notch service.",
  },
  {
    name: "Samuel Johnson",
    role: "Happy Customer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    testimonial:
      "The quality of the product is exceptional, and the shipping was quick. I’m very pleased with my purchase and will continue to shop here.",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-[#f5eadd] py-16">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-black mb-8">What Our Customers Say</h2>

        {/* Swiper component with testimonials */}
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true} // Enables navigation buttons (prev/next)
          modules={[Autoplay, Pagination, Navigation]} // Include all required modules here
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {/* Map through the testimonials array and render each slide */}
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-1 rounded-full">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-28 h-28 object-cover rounded-full border-4 border-white"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mt-4">{testimonial.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
                <p className="text-gray-600 italic">{testimonial.testimonial}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
