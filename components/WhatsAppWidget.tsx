
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppWidget: React.FC = () => {
  return (
    <div className="fixed bottom-24 right-4 md:bottom-28 md:right-6 z-50 flex flex-col items-end pointer-events-none">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="relative mb-2 px-4 py-2 bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 pointer-events-auto group"
      >
        <div className="absolute -bottom-1 right-6 w-3 h-3 bg-white rotate-45 border-r border-b border-gray-100" />
        <span className="text-black font-bold text-[10px] md:text-xs uppercase tracking-wider">Fale conosco</span>
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
      </motion.div>

      <motion.a
        href="https://wa.me/5511997379588"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto block relative group"
        data-hover="true"
      >
        <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        <img 
          src="https://i.imgur.com/jAm2QjF.png" 
          alt="WhatsApp SK-G" 
          className="w-16 h-auto md:w-24 drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:-translate-y-1"
        />
      </motion.a>
    </div>
  );
};

export default WhatsAppWidget;
