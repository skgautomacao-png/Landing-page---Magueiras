
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { motion } from 'framer-motion';

const StaticOverlay = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
       {/* Grid Effect */}
       <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </div>
  );
};

const FluidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0a0b1e]">
      
      <StaticOverlay />

      {/* Blob 1: Brand Red */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[90vw] h-[90vw] bg-[#e31e24] rounded-full mix-blend-screen filter blur-[120px] opacity-10 will-change-transform"
        animate={{
          x: [0, 50, -25, 0],
          y: [0, -25, 25, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ transform: 'translateZ(0)' }}
      />

      {/* Blob 2: Brand Green */}
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[100vw] h-[80vw] bg-[#28a745] rounded-full mix-blend-screen filter blur-[120px] opacity-10 will-change-transform"
        animate={{
          x: [0, -50, 25, 0],
          y: [0, 50, -25, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transform: 'translateZ(0)' }}
      />

      {/* Static Grain Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none"></div>
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/10 to-black/60 pointer-events-none" />
    </div>
  );
};

export default FluidBackground;
