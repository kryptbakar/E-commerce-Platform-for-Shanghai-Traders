import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  life: number;
}

export default function ParticleMouseTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let particleId = 0;
    
    const createParticle = (x: number, y: number) => {
      const newParticle = {
        id: particleId++,
        x,
        y,
        life: 1
      };
      
      setParticles(prev => [...prev.slice(-10), newParticle]); // Keep max 10 particles
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Only create particles occasionally to avoid lag
      if (Math.random() > 0.7) {
        createParticle(e.clientX, e.clientY);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Clean up particles
    const interval = setInterval(() => {
      setParticles(prev => prev.filter(p => p.life > 0));
    }, 50);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle-trail"
          style={{
            left: particle.x - 2,
            top: particle.y - 2,
          }}
        />
      ))}
    </div>
  );
}