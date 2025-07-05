import React from 'react';
import { motion } from 'framer-motion';

const ModernButton = ({ 
  children, 
  onClick, 
  className = '',
  variant = 'primary', // primary, secondary, outline, ghost
  size = 'medium', // small, medium, large
  rounded = 'medium', // none, small, medium, full
  icon = null,
  iconPosition = 'left', // left, right
  loading = false,
  disabled = false
}) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500';
  
  // Size classes
  const sizeClasses = {
    small: 'text-sm py-1.5 px-3',
    medium: 'text-base py-2.5 px-5',
    large: 'text-lg py-3 px-6'
  };
  
  // Rounded classes
  const roundedClasses = {
    none: 'rounded-none',
    small: 'rounded',
    medium: 'rounded-lg',
    full: 'rounded-full'
  };

  // Variant classes (with dark mode support)
  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-white hover:bg-gray-50 text-purple-600 border border-purple-200 shadow-sm hover:shadow',
    outline: 'bg-transparent hover:bg-purple-50 text-purple-600 border border-purple-300 hover:border-purple-500',
    ghost: 'bg-transparent hover:bg-purple-50 text-purple-600'
  };

  // Disabled state
  const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed' : 'hover:scale-105 active:scale-95';

  // Loading state
  const loadingState = loading && (
    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );

  // Icon rendering with proper positioning
  const renderIcon = () => {
    if (!icon) return null;
    return React.cloneElement(icon, { 
      className: `w-5 h-5 ${iconPosition === 'left' ? 'mr-2' : 'ml-2'}`
    });
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={disabled ? undefined : onClick}
      disabled={disabled || loading}
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${roundedClasses[rounded]}
        ${variantClasses[variant]}
        ${disabledClasses}
        ${className}
      `}
    >
      {loading && loadingState}
      {iconPosition === 'left' && !loading && renderIcon()}
      {children}
      {iconPosition === 'right' && !loading && renderIcon()}
    </motion.button>
  );
};

export default ModernButton;
