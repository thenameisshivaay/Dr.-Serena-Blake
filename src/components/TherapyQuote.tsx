'use client';
import React, { useEffect, useRef, useState } from 'react';

const TherapyQuote = () => {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const dividerRef = useRef(null);

  const [visible, setVisible] = useState({
    heading: false,
    para: false,
    divider: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const key = entry.target.getAttribute('data-key');
          if (entry.isIntersecting && key) {
            setVisible((prev) => ({ ...prev, [key]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (paraRef.current) observer.observe(paraRef.current);
    if (dividerRef.current) observer.observe(dividerRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (paraRef.current) observer.unobserve(paraRef.current);
      if (dividerRef.current) observer.unobserve(dividerRef.current);
    };
  }, []);

  return (
    <section className="bg-[#F3F0E8] py-20 lg:py-28 font-sans">
      
      <style jsx>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-up {
          animation: fadeUp 0.8s ease-out forwards;
        }
      `}</style>

      <div className="container-content text-center">
        
        <h2
          ref={headingRef}
          data-key="heading"
          className={`text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-6 leading-snug transition-all duration-700 ${
            visible.heading ? 'fade-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Therapy is a space to invest in your peace.
Whether you're navigating anxiety, trauma, or relationship stress—
you don’t have to face it alone
        </h2>

        
        <p
          ref={paraRef}
          data-key="para"
          className={`text-base md:text-lg text-gray-700 leading-relaxed transition-all duration-700 ${
            visible.para ? 'fade-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma,
grief and loss, self-esteem issues, or challenges with family, parenting, or parental relationships.
Whatever the source of your stress, you don’t have to face it alone.
Therapy offers the time, space, and support to help you move toward peace and emotional wellness
        </p>
      </div>

      
      <div className="bg-[#F3F0E8] mt-12">
        <div className="container-content">
          <hr
            ref={dividerRef}
            data-key="divider"
            className={`h-1 bg-amber-800 transition-all duration-700 ${
              visible.divider ? 'fade-up opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '400ms' }}
          />
        </div>
      </div>
    </section>
  );
};

export default TherapyQuote;
