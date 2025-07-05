import React, { useState, useEffect, useRef } from 'react';

const TypingAnimation = ({ texts, typingSpeed = 100, eraseSpeed = 50, delayBetween = 2000, className }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const currentText = texts[textIndex];
    
    if (isTyping) {
      // Typing effect
      if (charIndex < currentText.length) {
        timerRef.current = setTimeout(() => {
          setDisplayText(current => current + currentText.charAt(charIndex));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        // Finished typing, wait before erasing
        timerRef.current = setTimeout(() => {
          setIsTyping(false);
        }, delayBetween);
      }
    } else {
      // Erasing effect
      if (charIndex > 0) {
        timerRef.current = setTimeout(() => {
          setDisplayText(current => current.slice(0, -1));
          setCharIndex(charIndex - 1);
        }, eraseSpeed);
      } else {
        // Finished erasing, move to next text
        setIsTyping(true);
        setTextIndex((textIndex + 1) % texts.length);
      }
    }

    return () => clearTimeout(timerRef.current);
  }, [charIndex, delayBetween, eraseSpeed, isTyping, textIndex, texts, typingSpeed]);

  return (
    <div className={`inline-flex ${className}`}>
      <span className="text-inherit">{displayText}</span>
      <span className="animate-blink ml-0.5 w-2 h-full bg-white inline-block"></span>
    </div>
  );
};

export default TypingAnimation;
