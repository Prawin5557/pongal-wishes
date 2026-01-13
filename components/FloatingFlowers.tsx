
import React, { useEffect, useState } from 'react';

interface FlowerProps {
  id: number;
  left: string;
  duration: string;
  delay: string;
  size: string;
  color: string;
}

const FloatingFlowers: React.FC = () => {
  const [flowers, setFlowers] = useState<FlowerProps[]>([]);

  useEffect(() => {
    const newFlowers = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${10 + Math.random() * 15}s`,
      delay: `-${Math.random() * 20}s`,
      size: `${15 + Math.random() * 20}px`,
      color: i % 2 === 0 ? '#F8D030' : '#FFD700', // Marigold yellow/orange colors
    }));
    setFlowers(newFlowers);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {flowers.map(flower => (
        <div
          key={flower.id}
          className="flower"
          style={{
            left: flower.left,
            bottom: '-50px',
            animationDuration: flower.duration,
            animationDelay: flower.delay,
            width: flower.size,
            height: flower.size,
          }}
        >
          <svg viewBox="0 0 100 100" fill={flower.color}>
            <path d="M50 0 Q60 25 85 15 Q75 40 100 50 Q75 60 85 85 Q60 75 50 100 Q40 75 15 85 Q25 60 0 50 Q25 40 15 15 Q40 25 50 0" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloatingFlowers;
