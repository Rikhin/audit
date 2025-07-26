'use client'

import { motion } from 'framer-motion'

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      {/* Subtle radial gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(0,229,255,0.04)_0%,transparent_30%),radial-gradient(circle_at_90%_80%,rgba(0,229,255,0.04)_0%,transparent_30%)]"></div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Outer square - largest and most subtle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute w-[95%] h-[85%] rounded-[100px] border border-electric/10 bg-gradient-to-br from-electric/5 to-purple-500/5"
          />

          {/* Middle square - medium size */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="absolute w-[90%] h-[80%] rounded-[90px] border border-electric/20 bg-gradient-to-br from-electric/8 to-purple-500/8 backdrop-blur-sm"
          >
            <div className="absolute inset-0 rounded-[90px] border border-white/5" />
          </motion.div>
          
          {/* Inner square - smallest and most prominent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              boxShadow: '0 0 60px rgba(0, 229, 255, 0.1)'
            }}
            transition={{ 
              duration: 1,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
              boxShadow: { repeat: Infinity, duration: 6, repeatType: 'reverse' }
            }}
            className="absolute w-[85%] h-[75%] rounded-[80px] border border-electric/30 bg-gradient-to-br from-electric/10 to-purple-500/10 backdrop-blur-sm"
          >
            <div className="absolute inset-0 rounded-[80px] border border-white/10" />
          </motion.div>
        </div>
      </div>
    </div>
  )
};
