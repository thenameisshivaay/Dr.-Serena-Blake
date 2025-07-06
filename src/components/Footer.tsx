import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
  if (location.pathname === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    navigate('/');
    
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); 
  }
};


  const handleEmailClick = () => {
    window.location.href = 'mailto:serena@blakepsychology.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+13235550192';
  };

  

  return (
    <footer className="py-16 lg:py-24 bg-[#f7f4ee] text-black font-sans">
      <div className="container-content text-center space-y-6">

        
        <h1 className="text-2xl lg:text-3xl font-normal font-serif">
          Dr. Serena Blake, PsyD (Clinical Psychologist)
        </h1>

        <p className="text-base lg:text-lg text-neutral-700">
          1287 Maplewood Drive, Los Angeles, CA 90026
        </p>

       
        <p onClick={handleEmailClick} className="cursor-pointer hover:underline text-neutral-700">
          serena@blakepsychology.com
        </p>
        <p onClick={handlePhoneClick} className="cursor-pointer hover:underline text-neutral-700">
          Phone: (323) 555-0192
        </p>

       
        <div className="flex flex-wrap justify-center gap-4 text-sm lg:text-base">
          <button onClick={handleHomeClick} className="hover:underline">Home</button>
      <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
      <Link to="/estimate" className="hover:underline">Good Faith Estimate</Link>
        </div>

       
        

        
        <hr className="border-gray-300 my-6 w-1/2 mx-auto" />

        <p className="text-gray-500 text-sm">
          © 2025 Dr. Serena Blake, PsyD (Clinical Psychologist Services), PLLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
