import React from 'react';
import { motion } from 'framer-motion';

const ModernCard = ({ 
  children, 
  className = "", 
  hover = true, 
  delay = 0,
  background = "white",
  shadow = true 
}) => {
  const hoverEffects = hover ? {
    scale: 1.02,
    y: -5,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
  } : {};

  return (
    <motion.div
      className={`
        relative overflow-hidden transition-all duration-300
        ${background === "white" ? "bg-white" : "bg-gray-50"}
        ${shadow ? "shadow-lg hover:shadow-2xl" : ""}
        ${className}
      `}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={hoverEffects}
      whileTap={{ scale: 0.98 }}
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100" />
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.3) 1px, transparent 0)
            `,
            backgroundSize: '20px 20px'
          }}
        />
      </div>
    </motion.div>
  );
};

export default ModernCard;
