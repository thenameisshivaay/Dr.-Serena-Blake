import React, { useEffect, useRef, useState } from 'react';

const AreasOfFocus = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleSections((prev) => [...new Set([...prev, index])]);
              }, index * 300); 
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const areas = [
    {
      image: '/2.jpeg',
      title: 'Anxiety & Stress Management ',
      description:
        "Persistent worry, racing thoughts, and overwhelming stress can interfere with your daily life and well-being. Whether you're dealing with performance pressure, navigating life transitions, or struggling to manage constant anxiety, therapy can help you understand the roots of your stress and develop tools to calm your mind. Through evidence-based techniques and a supportive therapeutic space, we’ll work together to identify triggers, shift thought patterns, and create a personalized approach to managing anxiety and building resilience.",
    },
    {
      image: '/3.jpeg',
      title: 'Relationship Counseling',
      description:
        "Relationships can be deeply fulfilling—and deeply challenging. Whether you're facing communication issues, trust concerns, emotional distance, or navigating life transitions as a couple, therapy offers a safe, neutral space to explore these struggles. Together, we’ll uncover underlying patterns, strengthen emotional connection, and build healthier ways of relating so that your relationship can move toward greater understanding, respect, and resilience",
    },
    {
      image: '/1.jpeg',
      title: 'Trauma Recovery',
      description:
        'Trauma can have a lasting impact on your mental health and well-being. Whether you are dealing with the effects of a single traumatic event or complex trauma from ongoing adversity, therapy can help you process your experiences, develop coping strategies, and work toward healing. Together, we’ll create a safe space for you to explore your feelings, understand the impact of trauma on your life, and build resilience for the future.',
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24" style={{ backgroundColor: '#F3F0E8' }}>
      <div className="container-content">
        <div className="text-center mb-16">
          <h1
            className="text-3xl mb:text-4xl text-gray-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Areas of Focus
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {areas.map((area, index) => (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className={`text-center transform transition-all duration-1000 ease-in-out ${
                visibleSections.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="mb-8">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-64 h-64 rounded-full object-cover mx-auto shadow-lg"
                />
              </div>

              <h2
                className="text-xl lg:text-2xl text-gray-900 mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {area.title}
              </h2>

              <p
                className="text-gray-700 text-base leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasOfFocus;
