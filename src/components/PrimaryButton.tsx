import React from 'react';

const PrimaryButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="px-8 py-3 bg-gray-800 text-white font-medium text-base md:text-lg rounded-md shadow-md transition duration-300 ease-in-out hover:shadow-[0_0_25px_4px_rgba(255,255,255,0.5)]"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
