import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  
  // Simple progress animation
  const progressAnimation = useSpring({
    width: `${progress}%`,
    config: { tension: 280, friction: 60 }
  });

  // Fade out animation
  const fadeOut = useSpring({
    opacity: progress >= 100 ? 0 : 1,
    config: { tension: 280, friction: 60 }
  });

  // Loading progress effect
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(prev + 5, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Early return after all hooks
  if (progress >= 100) {
    return null;
  }

  return (
    <animated.div 
      style={fadeOut}
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-8 text-white">DHANUSH</h1>
        
        {/* Progress bar */}
        <div className="w-72 h-2 bg-slate-800 rounded-full overflow-hidden mx-auto mb-4">
          <animated.div 
            style={progressAnimation}
            className="h-full bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full"
          />
        </div>
        
        {/* Progress percentage */}
        <div className="text-purple-300 text-sm">
          {Math.round(progress)}%
        </div>
      </div>
    </animated.div>
  );
};

export default LoadingScreen;