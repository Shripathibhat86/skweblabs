import React from 'react';
import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import Services from '../components/Services';
import ContactBanner from '../components/ContactBanner';

const Home = () => {
  return (
    <>
      <Hero />
      <TrustBadges />
      <Services />
      <ContactBanner />
    </>
  );
};

export default Home;
