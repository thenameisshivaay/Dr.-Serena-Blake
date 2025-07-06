import React from 'react';
import PrimaryButton from './PrimaryButton';

const Hero = () => {
  return (
    <section id="hero" className="bg-[#f7f4ee] pt-0 pb-24">
      <div className="container-content relative h-[600px] md:h-[750px] lg:h-[850px]">
       
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="video.mp4" type="video/mp4" />
        </video>

        
        <div className="absolute inset-0 bg-black/30 z-10" />

        
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center pt-10 md:pt-20 px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#f5f5f5] -mt-20 mb-2">
            Compassionate Psychological Care for Meaningful
          </h1>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#f5f5f5] mb-6">
            Change and Personal Growth
          </h2>
          <p className="text-base md:text-lg font-body text-[#f5f5f5] max-w-3xl mx-auto mb-8 leading-relaxed">
            Offering individual psychotherapy for adults via telehealth in Michigan and{' '}
            <a
              href="https://psypact.org/mpage/psypactmap"
              className="underline underline-offset-4 text-[#f5f5f5]"
              target="_blank"
              rel="noopener noreferrer"
            >
              most U.S. states
            </a>{' '}
            through PSYPACT participation.
          </p>

          
          

<PrimaryButton onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdYr2kxKWbJ23MGCfEjFhukhB4HGxcFRyaBaQJ8lVTMUUq6Pw/viewform?usp=dialog", "_blank")}>
  Schedule a Consultation
</PrimaryButton>

        </div>
      </div>
    </section>
  );
};

export default Hero;
