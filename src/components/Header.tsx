import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 20 || currentY < lastScrollY) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientY < 60) {
        setShowHeader(true);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <header
      className={`bg-[#f7f4ee] sticky top-0 z-50 border-b border-gray-200 w-full transition-transform duration-300 ease-in-out ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="container-content flex items-center justify-between py-6">
        
        <div className="flex-shrink-0">
          <a href="/#hero">
            <img
              src="/logo.png"
              alt="Dr. Serena Blake, PsyD (Clinical Psychologist)"
              className="h-20 w-auto cursor-pointer"
            />
          </a>
        </div>

        
        <div className="hidden md:flex items-center space-x-10 font-medium text-sm text-neutral-800">
          <a href="/#hero" className="hover:underline">Home</a>
          <a href="/#about" className="hover:underline">About</a>
          <a href="/#services" className="hover:underline">Services</a>
        </div>

        
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-black" />
              <span className="block w-6 h-0.5 bg-black" />
              <span className="block w-6 h-0.5 bg-black" />
            </div>
          </button>
        </div>
      </nav>

      
      {isMenuOpen && (
        <div className="md:hidden bg-[#f7f4ee] px-6 pb-6 space-y-4 text-sm text-neutral-800 font-medium">
          <a href="/#hero" onClick={() => setIsMenuOpen(false)} className="block">Home</a>
          <a href="/#about" onClick={() => setIsMenuOpen(false)} className="block">About</a>
          <a href="/#services" onClick={() => setIsMenuOpen(false)} className="block">Services</a>
        </div>
      )}
    </header>
  );
};

export default Header;
