
import React from 'react';

const GreetingCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center w-full px-4 select-none max-w-lg md:max-w-4xl">
      {/* Animated Logo Section */}
      <div className="mb-6 md:mb-10 animate-[fadeInDown_1.2s_ease-out]">
        <div className="relative group">
          <div className="absolute -inset-3 bg-amber-400/20 rounded-full blur-xl group-hover:bg-amber-400/40 transition duration-700"></div>
          <img 
            src="https://nizhalmenspg.com/wp-content/uploads/2024/07/cropped-IMG-20240621-WA0086-removebg-preview1.png" 
            alt="Nizhal Logo" 
            className="relative h-28 md:h-44 object-contain transition-transform duration-700 hover:scale-110 active:scale-95 cursor-pointer"
            onError={(e) => {
              e.currentTarget.src = "https://nizhalmenspg.com/wp-content/uploads/2023/11/Asset-1-8.png";
            }}
          />
        </div>
      </div>

      {/* Title Section */}
      <div className="animate-[fadeInUp_1s_ease-out]">
        <h1 className="font-heading text-4xl md:text-8xl font-black mb-4 md:mb-10 tracking-tight text-gold-shimmer drop-shadow-gold">
          🌾 Happy Pongal 🌾
        </h1>
      </div>

      {/* Decorative Steaming Pot */}
      <div className="relative mb-8 md:mb-14 animate-[fadeInUp_1.2s_ease-out_0.2s_both]">
        {/* Magic Steam Puffs */}
        <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 flex space-x-3">
          <div className="w-4 h-4 bg-white/40 rounded-full steam-puff" style={{ animationDelay: '0s' }}></div>
          <div className="w-5 h-5 bg-white/30 rounded-full steam-puff" style={{ animationDelay: '1.5s' }}></div>
          <div className="w-3 h-3 bg-white/40 rounded-full steam-puff" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <svg width="100" height="100" viewBox="0 0 100 100" className="mx-auto drop-shadow-2xl md:w-[180px] md:h-[180px]">
          <defs>
            <linearGradient id="potGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8D6E63" />
              <stop offset="60%" stopColor="#5D4037" />
              <stop offset="100%" stopColor="#3E2723" />
            </linearGradient>
            <radialGradient id="riceHighlight">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F5F5F5" />
            </radialGradient>
          </defs>
          {/* Pot Base */}
          <path d="M15 70 Q15 95 50 95 Q85 95 85 70 Q85 50 75 45 Q75 38 25 38 Q25 50 15 70" fill="url(#potGrad)" />
          {/* Traditional Decor */}
          <circle cx="35" cy="75" r="3" fill="#FFD54F" opacity="0.8" />
          <circle cx="50" cy="82" r="3.5" fill="#D32F2F" opacity="0.8" />
          <circle cx="65" cy="75" r="3" fill="#FFD54F" opacity="0.8" />
          {/* Creamy Rice Overflow */}
          <path d="M25 42 Q25 25 50 25 Q75 25 75 42 Q70 48 50 48 Q30 48 25 42" fill="url(#riceHighlight)" />
          <path d="M44 48 L44 65 Q44 70 50 70 Q56 70 56 65 L56 48 Z" fill="url(#riceHighlight)" />
        </svg>
      </div>

      {/* Message Section */}
      <div className="space-y-6 md:space-y-12 animate-[fadeInUp_1.2s_ease-out_0.4s_both]">
        <h2 className="text-2xl md:text-5xl font-heading text-[#8B0000] font-bold max-w-sm md:max-w-4xl leading-snug px-2 drop-shadow-sm">
          Wishing you a harvest full of <span className="text-amber-700">happiness</span>, prosperity, and peace.
        </h2>
        
        <p className="text-base md:text-3xl text-[#5D4037] max-w-xs md:max-w-3xl leading-relaxed font-semibold px-4 italic opacity-90">
          "May this Pongal bring new beginnings, good health, and success to you and your family."
        </p>
      </div>

      {/* Footer Ornament */}
      <div className="mt-10 md:mt-24 flex justify-center items-center space-x-6 md:space-x-16 animate-[fadeInUp_1.2s_ease-out_0.6s_both]">
        <div className="h-[2px] w-16 md:w-40 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        <div className="relative">
          <div className="absolute inset-0 bg-green-500/20 rounded-full blur-lg animate-pulse"></div>
          <div className="w-4 h-4 md:w-10 md:h-10 bg-green-700 rounded-full border-2 border-white shadow-lg"></div>
        </div>
        <div className="h-[2px] w-16 md:w-40 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      </div>
    </div>
  );
};

export default GreetingCard;
