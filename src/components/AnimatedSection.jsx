import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const animation = useSpring({
    transform: inView ? 'translateY(0px)' : 'translateY(60px)',
    opacity: inView ? 1 : 0,
    config: { mass: 1, tension: 280, friction: 60 },
    delay: delay
  });

  return (
    <animated.div
      ref={ref}
      style={animation}
      className={className}
    >
      {children}
    </animated.div>
  );
};

export default AnimatedSection;
