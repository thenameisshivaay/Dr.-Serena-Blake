import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import TherapyQuote from '../components/TherapyQuote';
import AreasOfFocus from '../components/AreasOfFocus';
import RatesInsurance from '../components/RatesInsurance';
import ClientStatus from '../components/ClientStatus';
import InspirationalQuote from '../components/InspirationalQuote';

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []); 

  return (
    <>
      <Hero />
      <About />
      <TherapyQuote />
      <AreasOfFocus />
      <RatesInsurance />
      <ClientStatus />
      <InspirationalQuote />
    </>
  );
};

export default Home;
