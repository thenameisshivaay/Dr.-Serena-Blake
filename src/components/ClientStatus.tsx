import React, { useState } from 'react';

const ClientStatus = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Do you accept insurance?',
      answer: 'No, but a superbill is provided for self-submission.',
    },
    {
      question: 'Are online sessions available?',
      answer: 'Yes—all virtual sessions via Zoom.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: '24-hour notice required.',
    },
  ];

  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: '#F3F0E8' }}>
      <div className="container-content">
        
        <div className="text-center mb-12">
          <h1
            className="text-3xl lg:text-4xl font-semibold text-black"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Frequently Asked Questions
          </h1>
        </div>

        
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-[#F3F0E8] rounded-md overflow-hidden transition-all duration-300 transform ${
                openIndex === index ? 'scale-[1.01]' : ''
              }`}
            >
              <button
                className="w-full text-left px-4 py-4 group transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
                onClick={() => toggleFAQ(index)}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-black transition-colors duration-300">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div
                  className="px-4 pb-4 text-gray-800 text-base"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientStatus;
