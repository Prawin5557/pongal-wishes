
import React from 'react';

const BackgroundDecor: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Radiant Sun */}
      <div className="absolute -top-32 -right-32 md:-top-16 md:-right-16">
        <svg width="350" height="350" viewBox="0 0 100 100" className="md:w-[500px] md:h-[500px] opacity-40">
          <defs>
            <radialGradient id="sunGlow">
              <stop offset="0%" stopColor="#FFF9C4" />
              <stop offset="100%" stopColor="#FBC02D" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g className="sun-rays-rotate">
            {[...Array(24)].map((_, i) => (
              <path
                key={i}
                d="M50 50 L50 0 L55 50 Z"
                fill="url(#sunGlow)"
                transform={`rotate(${i * 15} 50 50)`}
                opacity="0.3"
              />
            ))}
          </g>
          <circle cx="50" cy="50" r="24" fill="#FBC02D" opacity="0.6" />
          <circle cx="50" cy="50" r="16" fill="#FFF176" />
        </svg>
      </div>

      {/* Atmospheric Kolams */}
      <div className="absolute -top-32 -left-32 opacity-[0.06] md:opacity-[0.12] kolam-spin">
        <KolamSVG color="#795548" size={400} mdSize={700} />
      </div>
      <div className="absolute -bottom-40 -right-40 opacity-[0.06] md:opacity-[0.12] kolam-spin" style={{ animationDirection: 'reverse' }}>
        <KolamSVG color="#2E7D32" size={450} mdSize={800} />
      </div>

      {/* Detailed Swaying Sugarcanes */}
      <div className="absolute bottom-[-20px] -left-20 md:left-6 sway-animation">
        <SugarcaneSVG side="left" className="w-[200px] md:w-[360px] opacity-80 md:opacity-100" />
      </div>
      <div className="absolute bottom-[-20px] -right-20 md:right-6 sway-animation" style={{ animationDelay: '1.2s' }}>
        <SugarcaneSVG side="right" className="w-[200px] md:w-[360px] opacity-80 md:opacity-100" />
      </div>

      {/* Soft warm glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(255,253,247,0.4)_100%)]"></div>
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
      <rect x="42" y="50" width="16" height="210" rx="6" fill="#5D4037" />
      <rect x="58" y="65" width="14" height="195" rx="6" fill="#6D4C41" />
      {[75, 110, 145, 180, 215].map(y => (
        <React.Fragment key={y}>
          <rect x="42" y={y} width="16" height="3" fill="#3E2723" opacity="0.6" />
          <rect x="58" y={y + 15} width="14" height="3" fill="#3E2723" opacity="0.6" />
        </React.Fragment>
      ))}
    </g>
    <g stroke="#1B5E20" strokeLinecap="round" fill="none">
      <path d="M42 50 Q0 10 -40 90" strokeWidth="6" opacity="0.9" />
      <path d="M58 50 Q110 10 145 90" strokeWidth="6" opacity="0.9" />
      <path d="M50 45 Q50 -20 85 45" strokeWidth="5" stroke="#4C9A2A" />
      <path d="M50 45 Q15 0 0 60" strokeWidth="5" stroke="#4C9A2A" />
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
    <circle cx="50" cy="50" r="30" strokeDasharray="3 7" />
    <circle cx="50" cy="50" r="48" />
    {[...Array(12)].map((_, i) => (
      <g key={i} transform={`rotate(${i * 30} 50 50)`}>
        <path d="M50 12 Q72 -5 95 15 T50 55" strokeWidth="0.4" opacity="0.3" />
        <circle cx="50" cy="12" r="1.5" fill={color} opacity="0.4" />
      </g>
    ))}
  </svg>
);

export default BackgroundDecor;
