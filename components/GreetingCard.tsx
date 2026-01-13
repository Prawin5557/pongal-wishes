
import React from 'react';

const GreetingCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center animate-fade-in transition-all duration-1000 w-full max-h-screen">
      {/* Logo Container with combined Scale and Pulse on Hover */}
      <div className="mb-6 transition-transform duration-300 hover-logo-pulse">
        <img 
          src="https://nizhalmenspg.com/wp-content/uploads/2024/07/cropped-IMG-20240621-WA0086-removebg-preview1.png" 
          alt="Nizhal Men's PG Logo" 
          className="h-20 md:h-28 lg:h-32 object-contain"
          onError={(e) => {
            // Fallback
            e.currentTarget.src = "https://nizhalmenspg.com/wp-content/uploads/2023/11/Asset-1-8.png";
          }}
        />
      </div>

      {/* Greeting Heading */}
      <h1 className="font-heading text-4xl md:text-7xl lg:text-8xl font-bold text-[#4C9A2A] mb-2 md:mb-4 drop-shadow-md">
        🌾 Happy Pongal 🌾
      </h1>

      {/* Pongal Pot Illustration */}
      <div className="mb-4 md:mb-6">
        <svg width="100" height="100" viewBox="0 0 100 100" className="mx-auto drop-shadow-lg md:w-[120px] md:h-[120px]">
          {/* The Pot (Clay Brown) */}
          <path d="M20 70 Q20 90 50 90 Q80 90 80 70 Q80 50 70 45 Q70 40 30 40 Q30 50 20 70" fill="#8B4513" />
          {/* Pot Rim */}
          <ellipse cx="50" cy="42" rx="22" ry="6" fill="#6B2E10" />
          {/* Milk/Rice Overflow (White) */}
          <path d="M30 42 Q30 30 50 30 Q70 30 70 42 Q65 48 50 48 Q35 48 30 42" fill="#FFFFFF" />
          <path d="M45 48 L45 60 Q45 65 50 65 Q55 65 55 60 L55 48 Z" fill="#FFFFFF" />
          {/* Turmeric & Kumkum dots */}
          <circle cx="40" cy="70" r="3" fill="#FFD700" />
          <circle cx="50" cy="75" r="3" fill="#A52A2A" />
          <circle cx="60" cy="70" r="3" fill="#FFD700" />
        </svg>
      </div>

      {/* Subheading */}
      <h2 className="text-xl md:text-3xl lg:text-4xl font-heading text-[#A52A2A] font-semibold mb-4 md:mb-6 max-w-3xl leading-tight px-2">
        Wishing you a harvest full of happiness, prosperity, and peace.
      </h2>

      {/* Additional Text */}
      <p className="text-base md:text-xl lg:text-2xl text-[#5D4037] max-w-2xl leading-relaxed opacity-95 px-4">
        May this Pongal bring new beginnings, good health, and success to you and your family.
      </p>

      {/* Decorative Divider */}
      <div className="mt-6 md:mt-8 flex justify-center items-center space-x-4 md:space-x-6">
        <div className="w-12 md:w-16 h-1 bg-[#F8D030] rounded-full opacity-40"></div>
        <div className="w-4 h-4 md:w-6 md:h-6 bg-[#4C9A2A] rounded-full border-2 md:border-4 border-[#FFF8E7] shadow-sm"></div>
        <div className="w-12 md:w-16 h-1 bg-[#F8D030] rounded-full opacity-40"></div>
      </div>
    </div>
  );
};

export default GreetingCard;
