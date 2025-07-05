import React, { useEffect, useRef } from 'react';

const WavesBackground = ({ darkMode }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Call once at start
    setCanvasDimensions();
    
    // Update on resize
    window.addEventListener('resize', setCanvasDimensions);
    
    // Wave properties
    const waves = [
      {
        wavelength: 200,
        amplitude: 75,
        speed: 0.04,
        color: darkMode ? 'rgba(139, 92, 246, 0.15)' : 'rgba(139, 92, 246, 0.1)',
        offset: 0
      },
      {
        wavelength: 100,
        amplitude: 50,
        speed: 0.03,
        color: darkMode ? 'rgba(59, 130, 246, 0.12)' : 'rgba(59, 130, 246, 0.08)',
        offset: 2
      },
      {
        wavelength: 150,
        amplitude: 60,
        speed: 0.02,
        color: darkMode ? 'rgba(79, 70, 229, 0.1)' : 'rgba(79, 70, 229, 0.06)',
        offset: 4
      }
    ];
    
    // Animation function
    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw each wave
      waves.forEach(wave => {
        wave.offset += wave.speed;
        
        ctx.fillStyle = wave.color;
        ctx.beginPath();
        
        // Start at the left side, slightly off-screen
        ctx.moveTo(-50, canvas.height / 2);
        
        // Draw the wave
        for (let x = 0; x <= canvas.width + 50; x += 10) {
          const y = Math.sin(x / wave.wavelength + wave.offset) * wave.amplitude + canvas.height / 2;
          ctx.lineTo(x, y);
        }
        
        // Complete the path to form a closed shape
        ctx.lineTo(canvas.width + 50, canvas.height + 50);
        ctx.lineTo(-50, canvas.height + 50);
        ctx.closePath();
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationFrameId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, [darkMode]);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
};

export default WavesBackground;
