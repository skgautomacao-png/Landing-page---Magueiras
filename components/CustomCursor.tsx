
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springConfig = { damping: 30, stiffness: 500, mass: 0.2 }; 
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      const target = e.target as HTMLElement;
      const clickable = target.closest('button') || 
                        target.closest('a') || 
                        target.closest('[data-hover="true"]');
      setIsHovering(!!clickable);
    };
    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference hidden md:block will-change-transform"
      style={{ x, y }}
    >
      <motion.div
        animate={{ 
          scale: isHovering ? 1.2 : 1,
          rotate: isHovering ? 15 : 0
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
        >
          <path 
            d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" 
            fill="currentColor"
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
