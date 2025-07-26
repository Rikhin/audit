'use client'

import { motion } from 'framer-motion'

import { memo } from 'react';

export const HeroBackground = memo(() => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Single subtle gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.03)_0%,transparent_50%)]"></div>
      
      {/* Single animated container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          {/* Single combined background element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] rounded-[80px] border border-electric/20 bg-gradient-to-br from-electric/5 to-purple-500/5 backdrop-blur-sm"
          >
            {/* Inner highlight */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="absolute inset-4 rounded-[60px] border border-electric/10"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
});

HeroBackground.displayName = 'HeroBackground';
