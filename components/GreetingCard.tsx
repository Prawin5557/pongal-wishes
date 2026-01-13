
import React from 'react';

const GreetingCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center w-full px-4 select-none max-w-lg md:max-w-4xl">
      {/* Nizhal Logo */}
      <div className="mb-8 md:mb-14 animate-[fadeInDown_1.2s_ease-out]">
        <div className="relative group">
          <div className="absolute -inset-6 bg-amber-400/10 rounded-full blur-3xl group-hover:bg-amber-400/20 transition duration-1000"></div>
          <img 
            src="https://nizhalmenspg.com/wp-content/uploads/2024/07/cropped-IMG-20240621-WA0086-removebg-preview1.png" 
            alt="Nizhal Men's PG" 
            className="relative h-32 md:h-48 object-contain transition-all duration-700 hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = "https://nizhalmenspg.com/wp-content/uploads/2023/11/Asset-1-8.png";
            }}
          />
        </div>
      </div>

      {/* Main Festive Title */}
      <div className="animate-[fadeInUp_1s_ease-out]">
        <h1 className="font-heading text-5xl md:text-9xl font-black mb-6 md:mb-10 tracking-tighter text-gold-shimmer drop-shadow-lg">
          Happy Pongal
        </h1>
      </div>

      {/* Magical Pongal Pot Illustration */}
      <div className="relative mb-10 md:mb-16 animate-[fadeInUp_1.2s_ease-out_0.2s_both]">
        {/* Animated Steam Puffs */}
        <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 flex space-x-4">
          <div className="w-5 h-5 bg-white/40 rounded-full steam-puff" style={{ animationDelay: '0s' }}></div>
          <div className="w-7 h-7 bg-white/30 rounded-full steam-puff" style={{ animationDelay: '1.5s' }}></div>
          <div className="w-4 h-4 bg-white/40 rounded-full steam-puff" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <svg width="120" height="120" viewBox="0 0 100 100" className="mx-auto drop-shadow-2xl md:w-[220px] md:h-[220px]">
          <defs>
            <linearGradient id="potClayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A1887F" />
              <stop offset="60%" stopColor="#5D4037" />
              <stop offset="100%" stopColor="#3E2723" />
            </linearGradient>
            <radialGradient id="riceWashLight">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F5F5F5" />
            </radialGradient>
          </defs>
          {/* Detailed Clay Pot */}
          <path d="M10 70 Q10 98 50 98 Q90 98 90 70 Q90 48 80 42 Q80 34 20 34 Q20 48 10 70" fill="url(#potClayGrad)" />
          {/* Boiled-over Milk/Rice */}
          <path d="M20 38 Q20 18 50 18 Q80 18 80 38 Q75 45 50 45 Q25 45 20 38" fill="url(#riceWashLight)" />
          <path d="M43 45 L43 65 Q43 72 50 72 Q57 72 57 65 L57 45 Z" fill="url(#riceWashLight)" />
          {/* Traditional Dots */}
          <circle cx="35" cy="80" r="3" fill="#D32F2F" className="animate-pulse" />
          <circle cx="50" cy="88" r="3" fill="#FBC02D" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
          <circle cx="65" cy="80" r="3" fill="#D32F2F" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
        </svg>
      </div>

      {/* Greeting Messages */}
      <div className="space-y-6 md:space-y-12 animate-[fadeInUp_1.2s_ease-out_0.4s_both]">
        <h2 className="text-3xl md:text-6xl font-heading text-[#8B0000] font-black max-w-sm md:max-w-4xl leading-tight">
          A harvest full of <span className="text-amber-700">happiness</span> & prosperity.
        </h2>
        
        <p className="text-lg md:text-4xl text-[#5D4037] max-w-md md:max-w-4xl leading-relaxed font-semibold px-4 italic opacity-95">
          "May this Pongal bring new beginnings and success to you and your family."
        </p>
      </div>
    </div>
  );
};

export default GreetingCard;
