
import React from 'react';

const BackgroundDecor: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Radiant Sun in Top Right */}
      <div className="absolute -top-32 -right-32 md:-top-16 md:-right-16">
        <svg width="400" height="400" viewBox="0 0 100 100" className="md:w-[600px] md:h-[600px] opacity-30">
          <defs>
            <radialGradient id="sunGlowGrad">
              <stop offset="0%" stopColor="#FFF9C4" />
              <stop offset="100%" stopColor="#FBC02D" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g className="sun-rays-rotate">
            {[...Array(24)].map((_, i) => (
              <path
                key={i}
                d="M50 50 L50 0 L54 50 Z"
                fill="url(#sunGlowGrad)"
                transform={`rotate(${i * 15} 50 50)`}
                opacity="0.4"
              />
            ))}
          </g>
          <circle cx="50" cy="50" r="22" fill="#FBC02D" opacity="0.6" />
          <circle cx="50" cy="50" r="14" fill="#FFF176" />
        </svg>
      </div>

      {/* Bottom Corner Decorations - Sugarcanes */}
      <div className="absolute bottom-[-20px] left-[-40px] md:left-4 sway-animation">
        <SugarcaneSVG side="left" className="w-[220px] md:w-[400px] opacity-70 md:opacity-90" />
      </div>
      <div className="absolute bottom-[-20px] right-[-40px] md:right-4 sway-animation" style={{ animationDelay: '1.5s' }}>
        <SugarcaneSVG side="right" className="w-[220px] md:w-[400px] opacity-70 md:opacity-90" />
      </div>

      {/* Soft Kolam Textures */}
      <div className="absolute top-[10%] left-[-100px] opacity-[0.05] kolam-spin">
        <KolamSVG color="#795548" size={300} mdSize={600} />
      </div>
      <div className="absolute bottom-[20%] right-[-100px] opacity-[0.05] kolam-spin" style={{ animationDirection: 'reverse' }}>
        <KolamSVG color="#2E7D32" size={350} mdSize={700} />
      </div>

      {/* Warm Ambient Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(255,248,231,0.5)_100%)]"></div>
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
      <path d="M42 50 Q0 10 -45 95" strokeWidth="6" opacity="0.9" />
      <path d="M58 50 Q110 10 150 95" strokeWidth="6" opacity="0.9" />
      <path d="M50 45 Q50 -25 95 45" strokeWidth="5" stroke="#4C9A2A" />
      <path d="M50 45 Q10 0 -10 65" strokeWidth="5" stroke="#4C9A2A" />
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
    <circle cx="50" cy="50" r="10" strokeWidth="2" />
    <circle cx="50" cy="50" r="28" strokeDasharray="3 7" />
    <circle cx="50" cy="50" r="46" />
    {[...Array(12)].map((_, i) => (
      <g key={i} transform={`rotate(${i * 30} 50 50)`}>
        <path d="M50 12 Q75 -10 100 15 T50 60" strokeWidth="0.4" opacity="0.4" />
        <circle cx="50" cy="12" r="1.5" fill={color} opacity="0.4" />
      </g>
    ))}
  </svg>
);

export default BackgroundDecor;
