
import React from 'react';

const GreetingCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center w-full px-4 select-none max-w-lg md:max-w-3xl z-20">
      {/* Nizhal Logo Section */}
      <div className="mb-8 md:mb-12 animate-[fadeInDown_1.2s_ease-out]">
        <div className="relative group">
          <div className="absolute -inset-4 bg-amber-400/10 rounded-full blur-2xl group-hover:bg-amber-400/20 transition duration-1000"></div>
          <img 
            src="https://nizhalmenspg.com/wp-content/uploads/2024/07/cropped-IMG-20240621-WA0086-removebg-preview1.png" 
            alt="Nizhal Men's PG" 
            className="relative h-32 md:h-44 object-contain transition-all duration-700 hover:scale-105 active:scale-95"
            onError={(e) => {
              e.currentTarget.src = "https://nizhalmenspg.com/wp-content/uploads/2023/11/Asset-1-8.png";
            }}
          />
        </div>
      </div>

      {/* Main Title */}
      <div className="animate-[fadeInUp_1s_ease-out]">
        <h1 className="font-heading text-5xl md:text-8xl font-black mb-4 md:mb-8 tracking-tighter text-gold-shimmer drop-shadow-md">
          Happy Pongal
        </h1>
      </div>

      {/* Magical Pongal Pot */}
      <div className="relative mb-8 md:mb-12 animate-[fadeInUp_1.2s_ease-out_0.2s_both]">
        {/* Steam Puffs */}
        <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 flex space-x-3">
          <div className="w-5 h-5 bg-white/40 rounded-full steam-puff" style={{ animationDelay: '0s' }}></div>
          <div className="w-7 h-7 bg-white/30 rounded-full steam-puff" style={{ animationDelay: '1.2s' }}></div>
          <div className="w-4 h-4 bg-white/40 rounded-full steam-puff" style={{ animationDelay: '2.5s' }}></div>
        </div>
        
        <svg width="110" height="110" viewBox="0 0 100 100" className="mx-auto drop-shadow-2xl md:w-[190px] md:h-[190px]">
          <defs>
            <linearGradient id="potClay" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A1887F" />
              <stop offset="60%" stopColor="#5D4037" />
              <stop offset="100%" stopColor="#2D1A16" />
            </linearGradient>
            <radialGradient id="riceWash">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F5F5F5" />
            </radialGradient>
          </defs>
          {/* Detailed Clay Pot */}
          <path d="M15 70 Q15 96 50 96 Q85 96 85 70 Q85 50 75 44 Q75 36 25 36 Q25 50 15 70" fill="url(#potClay)" />
          {/* Pattern */}
          <g stroke="#FFD54F" strokeWidth="0.5" opacity="0.4">
            <path d="M25 65 Q50 60 75 65" fill="none" />
            <path d="M20 78 Q50 73 80 78" fill="none" />
          </g>
          {/* Boiled-over Milk/Rice */}
          <path d="M25 40 Q25 24 50 24 Q75 24 75 40 Q70 46 50 46 Q30 46 25 40" fill="url(#riceWash)" />
          <path d="M44 46 L44 64 Q44 70 50 70 Q56 70 56 64 L56 46 Z" fill="url(#riceWash)" />
          {/* Decorative Turmeric/Kumkum dots */}
          <circle cx="35" cy="78" r="3" fill="#E53935" className="animate-pulse" />
          <circle cx="50" cy="85" r="3" fill="#FBC02D" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
          <circle cx="65" cy="78" r="3" fill="#E53935" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
        </svg>
      </div>

      {/* Greeting Messages */}
      <div className="space-y-6 md:space-y-10 animate-[fadeInUp_1.2s_ease-out_0.4s_both]">
        <h2 className="text-2xl md:text-5xl font-heading text-[#8B0000] font-black max-w-sm md:max-w-4xl leading-tight px-2">
          Wishing you a harvest full of <span className="text-amber-700">happiness</span>, prosperity, and peace.
        </h2>
        
        <p className="text-base md:text-3xl text-[#5D4037] max-w-xs md:max-w-3xl leading-relaxed font-semibold px-4 italic opacity-90">
          "May this Pongal bring new beginnings, good health, and success to you and your family."
        </p>
      </div>

      {/* Decorative Ornament */}
      <div className="mt-12 md:mt-24 flex justify-center items-center space-x-6 md:space-x-16 animate-[fadeInUp_1.2s_ease-out_0.6s_both]">
        <div className="h-[2px] w-16 md:w-56 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        <div className="relative">
          <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="w-5 h-5 md:w-12 md:h-12 bg-green-700 rounded-full border-2 border-white shadow-xl animate-bounce"></div>
        </div>
        <div className="h-[2px] w-16 md:w-56 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      </div>
    </div>
  );
};

export default GreetingCard;
