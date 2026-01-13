
import React from 'react';

const BackgroundDecor: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Sun Aura */}
      <div className="absolute -top-32 -right-32 md:-top-10 md:-right-10 sun-aura">
        <svg width="300" height="300" viewBox="0 0 100 100" className="md:w-[550px] md:h-[550px] opacity-40">
          <defs>
            <radialGradient id="sunBloom">
              <stop offset="0%" stopColor="#FFF59D" />
              <stop offset="100%" stopColor="#FBC02D" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="48" fill="url(#sunBloom)" />
          <circle cx="50" cy="50" r="18" fill="#FBC02D" opacity="0.6" />
        </svg>
      </div>

      {/* Mesmerizing Kolams */}
      <div className="absolute -top-40 -left-40 opacity-[0.06] md:opacity-[0.15] kolam-spin">
        <KolamSVG color="#795548" size={450} mdSize={750} />
      </div>
      <div className="absolute -bottom-48 -right-48 opacity-[0.06] md:opacity-[0.15] kolam-spin" style={{ animationDirection: 'reverse' }}>
        <KolamSVG color="#2E7D32" size={500} mdSize={850} />
      </div>

      {/* Majestic Sugarcanes framing the bottom */}
      <div className="absolute bottom-[-40px] -left-20 md:left-6 sway-gentle">
        <SugarcaneSVG side="left" className="w-[220px] md:w-[400px] opacity-80 md:opacity-100" />
      </div>
      <div className="absolute bottom-[-40px] -right-20 md:right-6 sway-gentle" style={{ animationDelay: '1.2s' }}>
        <SugarcaneSVG side="right" className="w-[220px] md:w-[400px] opacity-80 md:opacity-100" />
      </div>

      {/* Warm Glow Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-amber-100/10"></div>
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
      <rect x="42" y="40" width="16" height="210" rx="6" fill="#5D4037" />
      <rect x="58" y="55" width="14" height="195" rx="6" fill="#6D4C41" />
      {[75, 110, 145, 180, 215].map(y => (
        <React.Fragment key={y}>
          <rect x="42" y={y} width="16" height="3" fill="#3E2723" opacity="0.5" />
          <rect x="58" y={y + 15} width="14" height="3" fill="#3E2723" opacity="0.5" />
        </React.Fragment>
      ))}
    </g>
    <g stroke="#1B5E20" strokeLinecap="round" fill="none">
      <path d="M42 40 Q-10 0 -40 100" strokeWidth="6" opacity="0.9" />
      <path d="M58 40 Q110 0 140 100" strokeWidth="6" opacity="0.9" />
      <path d="M50 35 Q50 -20 90 45" strokeWidth="5" stroke="#4C9A2A" />
      <path d="M50 35 Q10 0 0 60" strokeWidth="5" stroke="#4C9A2A" />
    </g>
  </svg>
);

const KolamSVG: React.FC<{ color: string; size: number; mdSize: number }> = ({ color, size, mdSize }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    stroke={color} 
    strokeWidth="0.6"
    className={`w-[${size}px] md:w-[${mdSize}px] h-auto`}
  >
    <circle cx="50" cy="50" r="12" strokeWidth="2" />
    <circle cx="50" cy="50" r="30" strokeDasharray="4 8" />
    <circle cx="50" cy="50" r="48" />
    {[...Array(16)].map((_, i) => (
      <g key={i} transform={`rotate(${i * 22.5} 50 50)`}>
        <path d="M50 10 Q75 -5 100 15 T50 60" strokeWidth="0.4" opacity="0.3" />
        <circle cx="50" cy="10" r="2" fill={color} opacity="0.5" />
      </g>
    ))}
  </svg>
);

export default BackgroundDecor;
