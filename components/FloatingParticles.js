'use client';

import { useEffect, useState } from 'react';

export default function FloatingParticles({ count = 20 }) {
  const [isMounted, setIsMounted] = useState(false);
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    // Only run on client side
    setIsMounted(true);
    
    // Generate particles with random positions and animations
    setParticles(
      Array(count).fill(0).map(() => ({
        id: Math.random().toString(36).substr(2, 9),
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 10 + 10}s`,
        animationDelay: `${Math.random() * 5}s`
      }))
    );
  }, [count]);

  if (!isMounted) {
    // Return null during server-side rendering
    return null;
  }

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      <div className="relative w-full h-full">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-40"
            style={{
              top: particle.top,
              left: particle.left,
              animation: `float ${particle.animationDuration} infinite ease-in-out`,
              animationDelay: particle.animationDelay,
              willChange: 'transform',
              zIndex: 1
            }}
          />
        ))}
      </div>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-15px) translateX(5px);
          }
          50% {
            transform: translateY(0) translateX(10px);
          }
          75% {
            transform: translateY(15px) translateX(5px);
          }
        }
      `}</style>
    </div>
  );
}
