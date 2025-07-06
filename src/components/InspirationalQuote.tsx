import React from 'react';

const InspirationalQuote = () => {
  return (
    <section className="relative py-32 lg:py-40">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/5.jpeg')", 
          filter: 'brightness(1.4) saturate(1.2)',
          zIndex: -2,
        }}
      ></div>

      
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: '#F3F0E8',
          opacity: 0.3,
          zIndex: -1,
        }}
      ></div>

      
      <div className="container-content relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p
            className="text-neutral-900 text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            “Even the darkest night will end and the sun will rise.”
          </p>
          <p
            className="text-neutral-700 text-lg md:text-xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            — Victor Hugo
          </p>
        </div>
      </div>
    </section>
  );
};

export default InspirationalQuote;
