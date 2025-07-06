import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [dividerVisible, setDividerVisible] = useState(false);
  const dividerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDividerVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (dividerRef.current) observer.observe(dividerRef.current);

    return () => {
      if (dividerRef.current) observer.unobserve(dividerRef.current);
    };
  }, []);

  return (
    <>
      <section id="about" className="py-20 lg:py-10 bg-[#f7f4ee]">
        <div className="container-content grid lg:grid-cols-2 gap-12 items-center">
          
          
          <div>
            <h1 className="text-4xl lg:text-5xl font-serif font-semibold text-gray-900 mb-4 leading-tight">
              About Dr. Serena Blake
            </h1>

            
            <h2 className="text-lg md:text-xl font-sans font-semibold text-gray-700 mb-8">
  Experience: 8 years of practice, 500+ sessions
</h2>
            

            <div className="space-y-6 text-base md:text-lg text-gray-800 leading-relaxed font-sans">
              <p>
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, California. With over eight years of professional experience and more than 500 client sessions, she has helped individuals navigate a wide range of emotional and psychological challenges. Her calm, thoughtful approach puts clients at ease and builds a strong foundation for meaningful therapeutic work.
              </p>

              <p>
                Drawing from evidence-based practices such as cognitive-behavioral therapy (CBT), mindfulness techniques, and trauma-informed care, Dr. Blake customizes each session to meet the unique needs of her clients. Whether you're struggling with anxiety, relationship difficulties, self-esteem, or the effects of past trauma, she offers guidance rooted in compassion and clinical expertise.
              </p>

              <p>
                Sessions are available both in person at her welcoming Maplewood Drive office and remotely through secure Zoom video calls. No matter how you choose to connect, Dr. Blake is committed to creating a safe, affirming space where healing, self-discovery, and personal growth can take place.
              </p>
            </div>
          </div>

          
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-[320px] md:w-[400px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/pic.jpeg"
                alt="Dr. Serena Blake"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      
      <div className="bg-[#f7f4ee] -mt-1">
        <div className="container-content">
          <hr
            ref={dividerRef}
            className={`h-1 bg-amber-800 transition-all duration-700 ${
              dividerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '400ms' }}
          />
        </div>
      </div>
    </>
  );
};

export default About;
