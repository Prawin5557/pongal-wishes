
import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  type: 'marigold' | 'glitter';
  left: string;
  duration: string;
  delay: string;
  size: string;
  color: string;
}

const FloatingFlowers: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const marigoldColors = [
      '#FF8F00', // Deep Orange
      '#FFA000', // Amber
      '#FFD600', // Yellow
      '#F4511E', // Vermilion
    ];

    const newParticles: Particle[] = Array.from({ length: 40 }).map((_, i) => {
      const isGlitter = i % 4 === 0;
      return {
        id: i,
        type: isGlitter ? 'glitter' : 'marigold',
        left: `${Math.random() * 100}%`,
        duration: `${12 + Math.random() * 20}s`,
        delay: `-${Math.random() * 30}s`,
        size: isGlitter 
          ? `${3 + Math.random() * 4}px` 
          : `${18 + Math.random() * 25}px`,
        color: isGlitter ? '#FFD700' : marigoldColors[Math.floor(Math.random() * marigoldColors.length)],
      };
    });
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map(p => (
        p.type === 'marigold' ? (
          <div
            key={p.id}
            className="animate-float-up absolute"
            style={{
              left: p.left,
              top: '110%',
              animationDuration: p.duration,
              animationDelay: p.delay,
              width: p.size,
              height: p.size,
            }}
          >
            <svg viewBox="0 0 100 100" fill={p.color} className="opacity-60 drop-shadow-sm">
              <path d="M50 0 C60 30 100 40 100 50 C100 60 60 70 50 100 C40 70 0 60 0 50 C0 40 40 30 50 0" />
            </svg>
          </div>
        ) : (
          <div
            key={p.id}
            className="absolute animate-pulse"
            style={{
              left: p.left,
              top: `${Math.random() * 100}%`,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              borderRadius: '50%',
              opacity: 0.5,
              boxShadow: `0 0 10px ${p.color}`,
              animationDuration: `${1 + Math.random() * 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        )
      ))}
    </div>
  );
};

export default FloatingFlowers;
