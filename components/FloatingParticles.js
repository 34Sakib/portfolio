'use client';

import { useEffect, useState } from 'react';

export default function FloatingParticles({ count = 20 }) {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Return a placeholder with the same dimensions but no animation
    return (
      <div className="absolute inset-0">
        {Array(count).fill(0).map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
          />
        ))}
      </div>
    );
  }

  // Generate random positions and animations on the client side
  const particles = Array(count).fill(0).map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 10 + 10}s`,
    animationDelay: `${Math.random() * 5}s`
  }));

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      <div className="relative w-full h-full">
        {particles.map((style, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-40"
            style={{
              top: style.top,
              left: style.left,
              animation: `float ${style.animationDuration} infinite ease-in-out`,
              animationDelay: style.animationDelay,
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
