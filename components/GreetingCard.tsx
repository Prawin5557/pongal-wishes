
import React from 'react';

const GreetingCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center animate-fade-in transition-all duration-1000">
      {/* Logo Container */}
      <div className="mb-12 transition-transform hover:scale-105 duration-300">
        <img 
          src="https://nizhalmenspg.com/wp-content/uploads/2023/11/Asset-1-8.png" 
          alt="Nizhal Men's PG Logo" 
          className="h-20 md:h-28 object-contain"
          onError={(e) => {
            // Fallback in case the specific path changes or is blocked
            e.currentTarget.src = "https://nizhalmenspg.com/wp-content/uploads/2024/01/Asset-1-8.png";
          }}
        />
      </div>

      {/* Greeting Heading */}
      <h1 className="font-heading text-5xl md:text-7xl font-bold text-[#4C9A2A] mb-6 drop-shadow-sm">
        🌾 Happy Pongal 🌾
      </h1>

      {/* Subheading */}
      <h2 className="text-2xl md:text-3xl font-heading text-[#A52A2A] font-semibold mb-6 max-w-2xl">
        Wishing you a harvest full of happiness, prosperity, and peace.
      </h2>

      {/* Additional Text */}
      <p className="text-lg md:text-xl text-[#5D4037] max-w-xl leading-relaxed opacity-90">
        May this Pongal bring new beginnings, good health, and success to you and your family.
      </p>

      {/* Visual divider / Clay Pot simple representation */}
      <div className="mt-10 flex justify-center space-x-4">
        <div className="w-12 h-1 bg-[#F8D030] rounded-full opacity-50"></div>
        <div className="w-4 h-4 bg-[#87CEEB] rounded-full"></div>
        <div className="w-12 h-1 bg-[#F8D030] rounded-full opacity-50"></div>
      </div>
    </div>
  );
};

export default GreetingCard;
