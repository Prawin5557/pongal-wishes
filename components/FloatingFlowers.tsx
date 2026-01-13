
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
    const newParticles: Particle[] = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      type: i % 3 === 0 ? 'sparkle' : 'flower',
      left: `${Math.random() * 100}%`,
      duration: `${12 + Math.random() * 18}s`,
      delay: `-${Math.random() * 25}s`,
      size: i % 3 === 0 ? `${5 + Math.random() * 10}px` : `${20 + Math.random() * 25}px`,
      color: i % 2 === 0 ? '#F8D030' : i % 3 === 0 ? '#FFFFFF' : '#FFD700',
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
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
            <svg viewBox="0 0 100 100" fill={p.color} className="opacity-70">
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
              animationDuration: `${2 + Math.random() * 3}s`,
              animationDelay: p.delay,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              borderRadius: '50%',
              boxShadow: `0 0 10px ${p.color}`,
            }}
          />
        )
      ))}
    </div>
  );
};

export default FloatingFlowers;
