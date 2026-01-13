
import React from 'react';

const GreetingCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center w-full px-4 select-none max-w-2xl md:max-w-5xl z-20">
      {/* Premium Logo Aura */}
      <div className="mb-8 md:mb-12 animate-[fadeInDown_1.5s_ease-out]">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-amber-400/30 rounded-full blur-2xl animate-pulse"></div>
          <img 
            src="https://nizhalmenspg.com/wp-content/uploads/2024/07/cropped-IMG-20240621-WA0086-removebg-preview1.png" 
            alt="Nizhal Logo" 
            className="relative h-32 md:h-48 object-contain drop-shadow-lg transition-transform hover:scale-110 duration-700 cursor-pointer"
            onError={(e) => {
              e.currentTarget.src = "https://nizhalmenspg.com/wp-content/uploads/2023/11/Asset-1-8.png";
            }}
          />
        </div>
      </div>

      {/* Majestic Heading */}
      <div className="animate-[fadeInUp_1s_ease-out]">
        <h1 className="font-heading text-5xl md:text-9xl font-black mb-6 md:mb-12 tracking-tight text-liquid-gold drop-shadow-xl">
          Happy Pongal
        </h1>
      </div>

      {/* Artistic Pongal Pot with Steam */}
      <div className="relative mb-10 md:mb-16 animate-[fadeInUp_1.2s_ease-out_0.3s_both]">
        {/* Animated Steam */}
        <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 flex space-x-4">
          <div className="w-6 h-6 bg-white/40 rounded-full steam-puff" style={{ animationDelay: '0s' }}></div>
          <div className="w-8 h-8 bg-white/30 rounded-full steam-puff" style={{ animationDelay: '1.5s' }}></div>
          <div className="w-5 h-5 bg-white/40 rounded-full steam-puff" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <svg width="120" height="120" viewBox="0 0 100 100" className="mx-auto drop-shadow-2xl md:w-[220px] md:h-[220px]">
          <defs>
            <linearGradient id="clayPot" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A1887F" />
              <stop offset="60%" stopColor="#5D4037" />
              <stop offset="100%" stopColor="#3E2723" />
            </linearGradient>
            <radialGradient id="riceWhite">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#ECEFF1" />
            </radialGradient>
          </defs>
          {/* Main Pot Body */}
          <path d="M10 70 Q10 98 50 98 Q90 98 90 70 Q90 48 80 42 Q80 35 20 35 Q20 48 10 70" fill="url(#clayPot)" />
          {/* Decorative traditional patterns */}
          <g stroke="#FFD54F" strokeWidth="0.5" opacity="0.6">
             <path d="M25 60 Q50 55 75 60" fill="none" />
             <path d="M20 75 Q50 70 80 75" fill="none" />
          </g>
          {/* Creamy Overflowing Rice */}
          <path d="M20 38 Q20 20 50 20 Q80 20 80 38 Q75 45 50 45 Q25 45 20 38" fill="url(#riceWhite)" />
          <path d="M42 45 L42 68 Q42 75 50 75 Q58 75 58 68 L58 45 Z" fill="url(#riceWhite)" />
          {/* Festive dots */}
          <circle cx="35" cy="80" r="3" fill="#D32F2F" className="animate-pulse" />
          <circle cx="50" cy="88" r="3" fill="#FBC02D" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="65" cy="80" r="3" fill="#D32F2F" className="animate-pulse" style={{ animationDelay: '1s' }} />
        </svg>
      </div>

      {/* Heartfelt Greeting Message */}
      <div className="space-y-6 md:space-y-10 animate-[fadeInUp_1.2s_ease-out_0.6s_both]">
        <h2 className="text-3xl md:text-6xl font-heading text-[#8B0000] font-black max-w-lg md:max-w-4xl leading-tight px-4 drop-shadow-sm">
          A Harvest full of <span className="text-amber-600">Happiness</span> & Peace.
        </h2>
        
        <p className="text-lg md:text-4xl text-[#5D4037] max-w-md md:max-w-4xl leading-relaxed font-bold px-6 italic opacity-95">
          "Wishing you a year filled with success, prosperity, and joy."
        </p>
      </div>

      {/* Decorative Golden Line */}
      <div className="mt-12 md:mt-24 flex justify-center items-center space-x-8 md:space-x-20 animate-[fadeIn_2s_ease-out_1s_both]">
        <div className="h-[3px] w-24 md:w-64 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        <div className="w-6 h-6 md:w-14 md:h-14 bg-gradient-to-br from-green-600 to-green-900 rounded-full border-4 border-white shadow-2xl animate-bounce"></div>
        <div className="h-[3px] w-24 md:w-64 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      </div>
    </div>
  );
};

export default GreetingCard;
