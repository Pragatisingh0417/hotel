import React from 'react';
import Hero from '../Component/Hero';
import Destinations from '../Component/Destinatons';
import TrendingProperties from '../Component/TrendingProperties';
import ScrollableTextWithFixedImages from '../Component/ScrollableTextWithFixedImages';
import Reservation from '../Component/Reservation';
import Room from '../Component/Rooms';
import Facilities from '../Component/Facilities';
import Testimonials from '../Component/Testimonials';
import ChooseCollection from  '../Component/ChooseCollection';
import Offers from '../Component/Offers';
import Footer from '../Component/Footer';





function Home() {
  return (
    <div className="text-center ">
        <Hero></Hero>
        <Reservation></Reservation>
        <Destinations></Destinations>
        <ScrollableTextWithFixedImages></ScrollableTextWithFixedImages>
        <TrendingProperties></TrendingProperties>
        <Room></Room>
        <Facilities></Facilities>
        <ChooseCollection></ChooseCollection>
        <Offers></Offers>
        <Testimonials></Testimonials>
        <Footer></Footer>
     
    </div>
  );
}

export default Home;
