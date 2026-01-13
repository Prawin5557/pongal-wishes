
import React, { useMemo } from 'react';

const BackgroundDecor: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* Decorative Specks */}
      <DecorativeSpecks />

      {/* The Sun */}
      <div className="absolute -top-12 -right-12 md:top-5 md:right-5">
        <svg width="180" height="180" viewBox="0 0 100 100" className="md:w-[250px] md:h-[250px] opacity-70 animate-pulse">
          <defs>
            <radialGradient id="sunGradient">
              <stop offset="0%" stopColor="#FFF59D" />
              <stop offset="100%" stopColor="#FBC02D" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="45" fill="url(#sunGradient)" />
          <circle cx="50" cy="50" r="22" fill="#FBC02D" />
          {[...Array(18)].map((_, i) => (
            <line
              key={i}
              x1="50" y1="20" x2="50" y2="2"
              stroke="#FBC02D"
              strokeWidth="2.5"
              strokeLinecap="round"
              transform={`rotate(${i * 20} 50 50)`}
              className="opacity-40"
            />
          ))}
        </svg>
      </div>

      {/* Rotating Kolam Patterns */}
      <div className="absolute -top-24 -left-24 opacity-[0.06] md:opacity-10 kolam-spin">
        <KolamSVG color="#795548" size={350} mdSize={550} />
      </div>
      <div className="absolute -bottom-32 -right-32 opacity-[0.06] md:opacity-10 kolam-spin" style={{ animationDirection: 'reverse' }}>
        <KolamSVG color="#2E7D32" size={400} mdSize={650} />
      </div>

      {/* Swaying Sugarcanes */}
      <div className="absolute bottom-0 -left-12 md:left-2 sway-animation">
        <SugarcaneSVG side="left" className="w-[160px] md:w-[280px] opacity-80 md:opacity-100" />
      </div>
      <div className="absolute bottom-0 -right-12 md:right-2 sway-animation" style={{ animationDelay: '1s' }}>
        <SugarcaneSVG side="right" className="w-[160px] md:w-[280px] opacity-80 md:opacity-100" />
      </div>

      {/* Soft Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(255,248,231,0.4)_100%)]"></div>
    </div>
  );
};

const DecorativeSpecks: React.FC = () => {
  const specks = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      type: i % 2 === 0 ? 'rice' : 'turmeric',
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      rotation: `${Math.random() * 360}deg`,
      duration: `${30 + Math.random() * 40}s`,
      delay: `${Math.random() * -30}s`,
      scale: 0.5 + Math.random() * 1,
    }));
  }, []);

  return (specks.map((s) => (
    <div
      key={s.id}
      className="absolute animate-slow-drift opacity-[0.05]"
      style={{
        top: s.top,
        left: s.left,
        animationDuration: s.duration,
        animationDelay: s.delay,
        transform: `rotate(${s.rotation}) scale(${s.scale})`,
      }}
    >
      {s.type === 'turmeric' ? (
        <div className="w-2 h-2 bg-[#FBC02D] rounded-full blur-[0.5px]" />
      ) : (
        <svg width="8" height="12" viewBox="0 0 10 15" fill="#FFFFFF">
           <path d="M5 0 C8 3 10 10 5 15 C0 10 2 3 5 0 Z" />
        </svg>
      )}
    </div>
  )));
};

const SugarcaneSVG: React.FC<{ side: 'left' | 'right'; className?: string }> = ({ side, className }) => (
  <svg 
    viewBox="0 0 100 250" 
    className={`${className} ${side === 'right' ? 'scale-x-[-1]' : ''}`} 
    height="auto"
  >
    <g>
      <rect x="42" y="50" width="12" height="200" rx="4" fill="#5D4037" />
      <rect x="56" y="65" width="12" height="185" rx="4" fill="#6D4C41" />
      {[75, 110, 145, 180, 215].map(y => (
        <React.Fragment key={y}>
          <rect x="42" y={y} width="12" height="1.5" fill="#3E2723" />
          <rect x="56" y={y + 12} width="12" height="1.5" fill="#4E342E" />
        </React.Fragment>
      ))}
    </g>
    <path d="M42 50 Q5 20 -20 80" fill="none" stroke="#2E7D32" strokeWidth="4" strokeLinecap="round" />
    <path d="M52 50 Q95 20 120 80" fill="none" stroke="#2E7D32" strokeWidth="4" strokeLinecap="round" />
    <path d="M42 45 Q15 5 0 60" fill="none" stroke="#2E7D32" strokeWidth="5" strokeLinecap="round" />
    <path d="M52 45 Q85 5 105 60" fill="none" stroke="#2E7D32" strokeWidth="5" strokeLinecap="round" />
    <path d="M47 40 Q47 -10 70 35" fill="none" stroke="#66BB6A" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const KolamSVG: React.FC<{ color: string; size: number; mdSize: number }> = ({ color, size, mdSize }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    stroke={color} 
    strokeWidth="0.5"
    className={`w-[${size}px] md:w-[${mdSize}px] h-auto`}
  >
    <circle cx="50" cy="50" r="10" />
    <circle cx="50" cy="50" r="28" strokeDasharray="2 6" />
    <circle cx="50" cy="50" r="45" />
    {[...Array(12)].map((_, i) => (
      <g key={i} transform={`rotate(${i * 30} 50 50)`}>
        <path d="M50 12 Q68 -5 85 12 T50 48" strokeWidth="0.4" />
        <circle cx="50" cy="12" r="2" fill={color} opacity="0.4" />
      </g>
    ))}
  </svg>
);

export default BackgroundDecor;
