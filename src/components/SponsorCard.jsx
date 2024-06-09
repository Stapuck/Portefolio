import React from 'react';
import { useState } from 'react';

const SponsorCard = ({ image, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative w-64 h-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ${isHovered ? 'rotate-y-180' : ''}`} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 flex items-center justify-center ${isHovered ? 'hidden' : 'block'}`}>
        <img src={image} alt="Sponsor Logo" className="w-full h-full object-contain p-4" />
      </div>
      <div className={`absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 ${isHovered ? 'block' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
};

export default SponsorCard;
