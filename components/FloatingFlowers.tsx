
import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  type: 'marigold' | 'glitter';
  left: string;
  duration: string;
  delay: string;
  size: string;
  color: string;
  rotation: string;
}

const FloatingFlowers: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 45 }).map((_, i) => {
      const type = i % 3 === 0 ? 'glitter' : 'marigold';
      return {
        id: i,
        type,
        left: `${Math.random() * 100}%`,
        duration: `${10 + Math.random() * 20}s`,
        delay: `-${Math.random() * 20}s`,
        size: type === 'glitter' 
          ? `${2 + Math.random() * 4}px` 
          : `${15 + Math.random() * 25}px`,
        color: type === 'glitter' 
          ? '#FFD700' 
          : (i % 2 === 0 ? '#FF8F00' : '#FFD600'), // Marigold Orange and Yellow
        rotation: `${Math.random() * 360}deg`,
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
            className="marigold"
            style={{
              left: p.left,
              top: '-50px',
              animationDuration: p.duration,
              animationDelay: p.delay,
              width: p.size,
              height: p.size,
            }}
          >
            <svg viewBox="0 0 100 100" fill={p.color} className="opacity-70 drop-shadow-md">
              <path d="M50 0 C60 30 100 40 100 50 C100 60 60 70 50 100 C40 70 0 60 0 50 C0 40 40 30 50 0" />
            </svg>
          </div>
        ) : (
          <div
            key={p.id}
            className="sparkle"
            style={{
              left: p.left,
              top: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
              animationDelay: p.delay,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              borderRadius: '50%',
              opacity: 0.6,
              boxShadow: `0 0 10px ${p.color}`,
            }}
          />
        )
      ))}
    </div>
  );
};

export default FloatingFlowers;
