
import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  type: 'flower' | 'sparkle';
  left: string;
  duration: string;
  delay: string;
  size: string;
  color: string;
}

const FloatingFlowers: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const festiveColors = [
      '#FFECB3', // Soft Yellow
      '#FFFFFF', // White
      '#FFCCBC', // Soft Peach
      '#F8BBD0', // Soft Pink
      '#DCEDC8', // Soft Green
      '#FFE082', // Amber Light
    ];

    const newParticles: Particle[] = Array.from({ length: 35 }).map((_, i) => {
      const isSparkle = i % 5 === 0;
      return {
        id: i,
        type: isSparkle ? 'sparkle' : 'flower',
        left: `${Math.random() * 100}%`,
        duration: `${15 + Math.random() * 25}s`,
        delay: `-${Math.random() * 30}s`,
        size: isSparkle 
          ? `${3 + Math.random() * 5}px` 
          : `${12 + Math.random() * 30}px`,
        color: festiveColors[Math.floor(Math.random() * festiveColors.length)],
      };
    });
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map(p => (
        p.type === 'flower' ? (
          <div
            key={p.id}
            className="flower"
            style={{
              left: p.left,
              bottom: '-50px',
              animationDuration: p.duration,
              animationDelay: p.delay,
              width: p.size,
              height: p.size,
            }}
          >
            <svg viewBox="0 0 100 100" fill={p.color} className="opacity-[0.25] md:opacity-[0.4] drop-shadow-sm">
              <path d="M50 0 Q60 25 85 15 Q75 40 100 50 Q75 60 85 85 Q60 75 50 100 Q40 75 15 85 Q25 60 0 50 Q25 40 15 15 Q40 25 50 0" />
            </svg>
          </div>
        ) : (
          <div
            key={p.id}
            className="sparkle"
            style={{
              left: p.left,
              top: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 4}s`,
              animationDelay: p.delay,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              borderRadius: '50%',
              opacity: 0.3,
              boxShadow: `0 0 6px ${p.color}`,
            }}
          />
        )
      ))}
    </div>
  );
};

export default FloatingFlowers;
