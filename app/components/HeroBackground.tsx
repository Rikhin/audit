'use client'

import { motion } from 'framer-motion'

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      {/* More subtle radial gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(0,229,255,0.04)_0%,transparent_30%),radial-gradient(circle_at_90%_80%,rgba(0,229,255,0.04)_0%,transparent_30%)]"></div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Single static background element for better performance */}
          <div className="absolute w-[85%] h-[75%] rounded-[80px] border border-electric/10 bg-gradient-to-br from-electric/5 to-purple-500/5 backdrop-blur-sm"></div>
          
          {/* Animated highlight elements */}
          <motion.div 
            initial={{ opacity: 0.3, scale: 0.95 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut" 
            }}
            className="absolute w-[90%] h-[80%] rounded-[90px] border border-electric/5 bg-gradient-to-br from-electric/3 to-purple-500/3"
          ></motion.div>
        </div>
      </div>
    </div>
  )
};
