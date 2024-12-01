import React from 'react';
import ScrollableTextWithFixedImages from '../Component/ScrollableTextWithFixedImages';
import Footer from '../Component/Footer';
import Room from '../Component/Rooms';

import Testimonials from '../Component/Testimonials';

function About() {
  return (
    <div>
      <ScrollableTextWithFixedImages></ScrollableTextWithFixedImages>
      <Testimonials></Testimonials>
      <Room></Room>
      
      <Footer></Footer>
    </div>
  );
}

export default About;
