import React from 'react';
import { motion } from 'framer-motion';

const ModernSkillCard = ({ skill, index, darkMode }) => {
  // Calculate delay based on index
  const delay = 0.1 + (index * 0.1);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`
        relative overflow-hidden rounded-xl 
        border border-transparent
        backdrop-blur-sm
        transition-all duration-300
        ${darkMode 
          ? 'bg-white/5 hover:bg-white/10 hover:border-purple-500/30' 
          : 'bg-white/80 hover:bg-white hover:border-purple-200'
        }
        p-6 h-full
      `}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className={`
            w-12 h-12 rounded-lg p-2 flex items-center justify-center
            bg-gradient-to-br ${skill.color}
            ${darkMode ? 'bg-opacity-20' : 'bg-opacity-10'}
          `}>
            <img 
              src={skill.logo} 
              alt={skill.name} 
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>
        
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-2">
            <h3 className={`text-lg font-semibold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {skill.name}
            </h3>
            <span className={`
              text-xs font-medium px-2 py-1 rounded-full
              ${darkMode 
                ? 'bg-white/10 text-purple-200' 
                : 'bg-purple-50 text-purple-600'
              }
            `}>
              {skill.category}
            </span>
          </div>
          
          <p className={`text-sm mb-4 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {skill.description}
          </p>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 opacity-10">
        <div className="w-full h-full rotate-12 transform-gpu">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={
            darkMode ? 'text-purple-400' : 'text-purple-600'
          }>
            <path d="M27.414 24.586l-5.077-5.077A9.932 9.932 0 0 0 24 14c0-5.514-4.486-10-10-10S4 8.486 4 14s4.486 10 10 10c1.974 0 3.81-.58 5.359-1.577l5.077 5.077a2 2 0 1 0 2.828-2.828zM14 20c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default ModernSkillCard;
