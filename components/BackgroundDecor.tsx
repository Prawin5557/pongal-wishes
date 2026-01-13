
import React from 'react';

const BackgroundDecor: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Sun Atmosphere */}
      <div className="absolute -top-20 -right-20 md:top-0 md:right-0">
        <svg width="250" height="250" viewBox="0 0 100 100" className="md:w-[450px] md:h-[450px] opacity-40">
          <defs>
            <radialGradient id="sunGrad">
              <stop offset="0%" stopColor="#FFF176" />
              <stop offset="100%" stopColor="#FBC02D" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g className="sun-rays">
            {[...Array(24)].map((_, i) => (
              <path
                key={i}
                d="M50 50 L50 0 L54 50 Z"
                fill="url(#sunGrad)"
                transform={`rotate(${i * 15} 50 50)`}
                opacity="0.2"
              />
            ))}
          </g>
          <circle cx="50" cy="50" r="22" fill="#FBC02D" opacity="0.8" />
          <circle cx="50" cy="50" r="15" fill="#FFF176" />
        </svg>
      </div>

      {/* Decorative Kolams */}
      <div className="absolute -top-28 -left-28 opacity-[0.05] md:opacity-[0.1] kolam-spin">
        <KolamSVG color="#795548" size={380} mdSize={650} />
      </div>
      <div className="absolute -bottom-36 -right-36 opacity-[0.05] md:opacity-[0.1] kolam-spin" style={{ animationDirection: 'reverse' }}>
        <KolamSVG color="#2E7D32" size={450} mdSize={750} />
      </div>

      {/* Sugarcanes framing the bottom corners */}
      <div className="absolute bottom-[-20px] -left-16 md:left-4 sway" style={{ animationDuration: '8s' }}>
        <SugarcaneSVG side="left" className="w-[180px] md:w-[340px] opacity-60 md:opacity-100" />
      </div>
      <div className="absolute bottom-[-20px] -right-16 md:right-4 sway" style={{ animationDuration: '10s', animationDelay: '1s' }}>
        <SugarcaneSVG side="right" className="w-[180px] md:w-[340px] opacity-60 md:opacity-100" />
      </div>

      {/* Overall warmth overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(255,253,247,0.3)_100%)]"></div>
    </div>
  );
};

const SugarcaneSVG: React.FC<{ side: 'left' | 'right'; className?: string }> = ({ side, className }) => (
  <svg 
    viewBox="0 0 100 250" 
    className={`${className} ${side === 'right' ? 'scale-x-[-1]' : ''}`} 
    height="auto"
  >
    <g>
      {/* Stalk */}
      <rect x="42" y="50" width="14" height="200" rx="4" fill="#6D4C41" />
      <rect x="56" y="65" width="12" height="185" rx="4" fill="#795548" />
      {/* Nodes */}
      {[75, 110, 145, 180, 215].map(y => (
        <React.Fragment key={y}>
          <rect x="42" y={y} width="14" height="2" fill="#3E2723" opacity="0.6" />
          <rect x="56" y={y + 12} width="12" height="2" fill="#3E2723" opacity="0.6" />
        </React.Fragment>
      ))}
    </g>
    {/* Leaves */}
    <g stroke="#1B5E20" strokeLinecap="round" fill="none">
      <path d="M42 50 Q0 15 -35 85" strokeWidth="5" opacity="0.9" />
      <path d="M54 50 Q100 15 135 85" strokeWidth="5" opacity="0.9" />
      <path d="M48 45 Q48 -10 75 40" strokeWidth="4" stroke="#4C9A2A" />
      <path d="M48 45 Q20 0 10 55" strokeWidth="4" stroke="#4C9A2A" />
    </g>
  </svg>
);

const KolamSVG: React.FC<{ color: string; size: number; mdSize: number }> = ({ color, size, mdSize }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    stroke={color} 
    strokeWidth="0.8"
    className={`w-[${size}px] md:w-[${mdSize}px] h-auto`}
  >
    <circle cx="50" cy="50" r="10" strokeWidth="1.5" />
    <circle cx="50" cy="50" r="28" strokeDasharray="3 6" />
    <circle cx="50" cy="50" r="45" />
    {[...Array(12)].map((_, i) => (
      <g key={i} transform={`rotate(${i * 30} 50 50)`}>
        <path d="M50 12 Q70 0 90 15 T50 50" strokeWidth="0.5" opacity="0.4" />
        <circle cx="50" cy="12" r="1.5" fill={color} opacity="0.4" />
      </g>
    ))}
  </svg>
);

export default BackgroundDecor;
