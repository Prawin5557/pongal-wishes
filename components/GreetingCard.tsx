
import React from 'react';

const GreetingCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center w-full px-2">
      {/* Logo Container */}
      <div className="mb-6 md:mb-10 animate-fade-in-down">
        <img 
          src="https://nizhalmenspg.com/wp-content/uploads/2024/07/cropped-IMG-20240621-WA0086-removebg-preview1.png" 
          alt="Nizhal Men's PG Logo" 
          className="h-24 md:h-36 object-contain transition-transform duration-500 hover:scale-110 hover-logo-pulse"
          onError={(e) => {
            e.currentTarget.src = "https://nizhalmenspg.com/wp-content/uploads/2023/11/Asset-1-8.png";
          }}
        />
      </div>

      {/* Shimmering Heading */}
      <h1 className="font-heading text-4xl md:text-8xl font-bold mb-4 md:mb-8 tracking-wider text-shimmer drop-shadow-sm">
        🌾 Happy Pongal 🌾
      </h1>

      {/* Enhanced Pongal Pot Illustration with Steam */}
      <div className="relative mb-6 md:mb-10 animate-fade-in-up">
        {/* Steam Puffs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 flex space-x-2">
          <div className="w-3 h-3 bg-white rounded-full steam-puff" style={{ animationDelay: '0s' }}></div>
          <div className="w-4 h-4 bg-white rounded-full steam-puff" style={{ animationDelay: '1s' }}></div>
          <div className="w-2 h-2 bg-white rounded-full steam-puff" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        <svg width="90" height="90" viewBox="0 0 100 100" className="mx-auto drop-shadow-xl md:w-[160px] md:h-[160px]">
          <defs>
            <linearGradient id="potGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8D6E63" />
              <stop offset="50%" stopColor="#5D4037" />
              <stop offset="100%" stopColor="#3E2723" />
            </linearGradient>
            <radialGradient id="riceGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F5F5F5" />
            </radialGradient>
          </defs>
          {/* The Pot */}
          <path d="M20 70 Q20 90 50 90 Q80 90 80 70 Q80 50 70 45 Q70 40 30 40 Q30 50 20 70" fill="url(#potGrad)" />
          {/* Pot Rim */}
          <ellipse cx="50" cy="42" rx="24" ry="7" fill="#4E342E" />
          {/* Rice Overflow */}
          <path d="M30 42 Q30 28 50 28 Q70 28 70 42 Q65 48 50 48 Q35 48 30 42" fill="url(#riceGrad)" />
          <path d="M44 48 L44 62 Q44 68 50 68 Q56 68 56 62 L56 48 Z" fill="url(#riceGrad)" />
          {/* Decorative accents */}
          <circle cx="40" cy="72" r="3" fill="#FFF176" className="animate-pulse" />
          <circle cx="50" cy="78" r="3.5" fill="#E53935" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="60" cy="72" r="3" fill="#FFF176" className="animate-pulse" style={{ animationDelay: '1s' }} />
        </svg>
      </div>

      {/* Subheading */}
      <h2 className="text-2xl md:text-5xl font-heading text-[#B71C1C] font-extrabold mb-4 md:mb-8 max-w-lg md:max-w-4xl leading-tight px-4 drop-shadow-sm animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        Wishing you a harvest full of happiness, prosperity, and peace.
      </h2>

      {/* Additional Text */}
      <p className="text-base md:text-3xl text-[#4E342E] max-w-sm md:max-w-3xl leading-relaxed font-semibold px-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        May this Pongal bring new beginnings, good health, and success to you and your family.
      </p>

      {/* Decorative Divider */}
      <div className="mt-8 md:mt-16 flex justify-center items-center space-x-6 md:space-x-16 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
        <div className="w-16 md:w-48 h-1 bg-gradient-to-r from-transparent via-[#FFD54F] to-transparent opacity-60"></div>
        <div className="w-4 h-4 md:w-8 md:h-8 bg-[#2E7D32] rounded-full border-4 border-white shadow-lg animate-bounce"></div>
        <div className="w-16 md:w-48 h-1 bg-gradient-to-r from-transparent via-[#FFD54F] to-transparent opacity-60"></div>
      </div>
    </div>
  );
};

export default GreetingCard;
