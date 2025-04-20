import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Integration from '../components/Integration';
import Testimonials from '../components/Testimonials';

function Homepage() {
  return (
    <div>
      <Hero />
      <Features />
      <Integration />
      <Testimonials />
    </div>
  );
}

export default Homepage;
