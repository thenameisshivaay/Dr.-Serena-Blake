import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import TherapyQuote from './components/TherapyQuote';
import AreasOfFocus from './components/AreasOfFocus';
import RatesInsurance from './components/RatesInsurance';
import ClientStatus from './components/ClientStatus';
import InspirationalQuote from './components/InspirationalQuote';
import PrivacyPolicy from './pages/PrivacyPolicy';
import GoodFaithEstimate from './pages/Estimate';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <TherapyQuote />
              <AreasOfFocus />
              <RatesInsurance />
              <ClientStatus />
              <InspirationalQuote />
            </>
          }
        />
        
  <Route path="/privacy" element={<PrivacyPolicy />} />
  <Route path="/estimate" element={<GoodFaithEstimate />} /> {/* <-- Add this */}
</Routes>
      <Footer />
    </div>
  );
}

export default App;
