
import React from 'react';

const BackgroundDecor: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* The Sun */}
      <div className="absolute top-10 right-10 md:top-20 md:right-20 animate-pulse">
        <svg width="120" height="120" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" fill="#FFD700" filter="drop-shadow(0 0 10px #FFD700)" />
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="50" y1="10" x2="50" y2="0"
              stroke="#FFD700"
              strokeWidth="4"
              strokeLinecap="round"
              transform={`rotate(${i * 30} 50 50)`}
            />
          ))}
        </svg>
      </div>

      {/* Kolam Patterns - Corners */}
      <div className="absolute -top-10 -left-10 opacity-20">
        <KolamSVG color="#A52A2A" size={300} />
      </div>
      <div className="absolute -bottom-20 -right-20 opacity-20 rotate-180">
        <KolamSVG color="#4C9A2A" size={400} />
      </div>

      {/* Sugarcanes - Side decorations */}
      <div className="absolute bottom-0 left-0 md:left-10 transform translate-y-10">
        <SugarcaneSVG side="left" />
      </div>
      <div className="absolute bottom-0 right-0 md:right-10 transform translate-y-10">
        <SugarcaneSVG side="right" />
      </div>

      {/* Subtle Sky Hue */}
      <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-[#87CEEB11] to-transparent"></div>
    </div>
  );
};

const SugarcaneSVG: React.FC<{ side: 'left' | 'right' }> = ({ side }) => (
  <svg width="200" height="500" viewBox="0 0 100 250" className={side === 'right' ? 'scale-x-[-1]' : ''}>
    {/* Stems */}
    <rect x="45" y="50" width="8" height="200" rx="4" fill="#6B2E10" />
    <rect x="55" y="70" width="8" height="180" rx="4" fill="#8B4513" />
    {/* Leaf segments */}
    {[80, 110, 140, 170, 200].map(y => (
      <line key={y} x1="45" y1={y} x2="53" y2={y} stroke="#FFF8E7" strokeWidth="1" />
    ))}
    {/* Leaves */}
    <path d="M45 50 Q20 30 10 70" fill="none" stroke="#4C9A2A" strokeWidth="4" strokeLinecap="round" />
    <path d="M53 50 Q80 30 90 70" fill="none" stroke="#4C9A2A" strokeWidth="4" strokeLinecap="round" />
    <path d="M45 40 Q25 10 5 40" fill="none" stroke="#4C9A2A" strokeWidth="4" strokeLinecap="round" />
    <path d="M53 40 Q75 10 95 40" fill="none" stroke="#4C9A2A" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const KolamSVG: React.FC<{ color: string; size: number }> = ({ color, size }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="1">
    <circle cx="50" cy="50" r="10" />
    <circle cx="50" cy="50" r="20" strokeDasharray="2 2" />
    <circle cx="50" cy="50" r="35" />
    {[...Array(8)].map((_, i) => (
      <g key={i} transform={`rotate(${i * 45} 50 50)`}>
        <path d="M50 15 Q60 5 70 15 T50 35" strokeWidth="0.5" />
        <circle cx="50" cy="15" r="2" fill={color} />
      </g>
    ))}
    <path d="M10 50 Q25 25 50 10 Q75 25 90 50 Q75 75 50 90 Q25 75 10 50" strokeWidth="2" opacity="0.4" />
  </svg>
);

export default BackgroundDecor;
