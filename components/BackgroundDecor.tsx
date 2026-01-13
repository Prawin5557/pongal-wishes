
import React from 'react';

const BackgroundDecor: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* The Sun - Larger and more prominent */}
      <div className="absolute -top-10 -right-10 md:top-10 md:right-10 animate-pulse transition-opacity duration-1000">
        <svg width="250" height="250" viewBox="0 0 100 100">
          <defs>
            <radialGradient id="sunGradient">
              <stop offset="0%" stopColor="#FFF200" />
              <stop offset="100%" stopColor="#FFD700" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="45" fill="url(#sunGradient)" />
          <circle cx="50" cy="50" r="25" fill="#FFD700" />
          {[...Array(18)].map((_, i) => (
            <line
              key={i}
              x1="50" y1="15" x2="50" y2="0"
              stroke="#FFD700"
              strokeWidth="2"
              strokeLinecap="round"
              transform={`rotate(${i * 20} 50 50)`}
              className="opacity-60"
            />
          ))}
        </svg>
      </div>

      {/* Kolam Patterns - Corners with softer colors */}
      <div className="absolute -top-16 -left-16 opacity-10">
        <KolamSVG color="#A52A2A" size={450} />
      </div>
      <div className="absolute -bottom-24 -right-24 opacity-10 rotate-180">
        <KolamSVG color="#4C9A2A" size={550} />
      </div>

      {/* Sugarcanes - Tuned up for better height and realism */}
      <div className="absolute bottom-0 left-0 md:left-4 transform translate-y-6">
        <SugarcaneSVG side="left" />
      </div>
      <div className="absolute bottom-0 right-0 md:right-4 transform translate-y-6">
        <SugarcaneSVG side="right" />
      </div>

      {/* Subtle Sky Hue */}
      <div className="absolute top-0 w-full h-2/3 bg-gradient-to-b from-[#87CEEB15] to-transparent"></div>
    </div>
  );
};

const SugarcaneSVG: React.FC<{ side: 'left' | 'right' }> = ({ side }) => (
  <svg width="240" height="600" viewBox="0 0 100 250" className={side === 'right' ? 'scale-x-[-1]' : ''}>
    {/* Stems with segments */}
    <g>
      <rect x="42" y="50" width="10" height="200" rx="4" fill="#6B2E10" />
      <rect x="54" y="65" width="10" height="185" rx="4" fill="#8B4513" />
      {/* Node rings */}
      {[70, 100, 130, 160, 190, 220].map(y => (
        <React.Fragment key={y}>
          <rect x="42" y={y} width="10" height="1.5" fill="#52240D" />
          <rect x="54" y={y + 10} width="10" height="1.5" fill="#6B2E10" />
        </React.Fragment>
      ))}
    </g>
    {/* Lush Leaves */}
    <path d="M42 50 Q10 20 -10 80" fill="none" stroke="#4C9A2A" strokeWidth="3" strokeLinecap="round" />
    <path d="M52 50 Q90 20 110 80" fill="none" stroke="#4C9A2A" strokeWidth="3" strokeLinecap="round" />
    <path d="M42 45 Q20 5 0 60" fill="none" stroke="#4C9A2A" strokeWidth="4" strokeLinecap="round" />
    <path d="M52 45 Q80 5 100 60" fill="none" stroke="#4C9A2A" strokeWidth="4" strokeLinecap="round" />
    <path d="M47 40 Q47 -10 60 30" fill="none" stroke="#66BB6A" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const KolamSVG: React.FC<{ color: string; size: number }> = ({ color, size }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="0.8">
    <circle cx="50" cy="50" r="8" />
    <circle cx="50" cy="50" r="22" strokeDasharray="1 3" />
    <circle cx="50" cy="50" r="38" />
    {[...Array(12)].map((_, i) => (
      <g key={i} transform={`rotate(${i * 30} 50 50)`}>
        <path d="M50 12 Q65 -5 80 12 T50 40" strokeWidth="0.4" />
        <circle cx="50" cy="12" r="1.5" fill={color} />
      </g>
    ))}
  </svg>
);

export default BackgroundDecor;
