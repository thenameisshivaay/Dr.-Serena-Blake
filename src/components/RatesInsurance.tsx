import React, { useEffect, useRef, useState } from 'react';

const RatesInsurance = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, 400);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 transition-all duration-1000 ease-out"
      style={{ backgroundColor: '#94B0B0' }}
    >
      <div
        className={`container-content transform transition-all duration-1000 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1
            className="text-3xl lg:text-4xl text-black mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Rates and Insurance
          </h1>

          <div className="space-y-8">
            <h2
              className="text-xl lg:text-2xl text-black"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Individual Session Fee – $200
            </h2>

            <h2
              className="text-xl lg:text-2xl text-black"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Couples Session Evaluation – $500
            </h2>

            <p
              className="text-lg text-gray-800 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              I accept both private pay and insurance. I am in-network with BCBS and Aetna.
            </p>

            <p
              className="text-lg text-gray-800 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              For out-of-network plans, I&apos;ve partnered with Mentaya using{' '}
              <a
                href="https://app.mentaya.com/p/qiXNacRErRNrk7OjP7lg"
                className="underline text-blue-900 hover:text-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                this tool
              </a>{' '}
              to help you check your eligibility for reimbursement for my services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatesInsurance;
