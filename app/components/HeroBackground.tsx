'use client'

import { motion } from 'framer-motion'

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(0,229,255,0.1)_0%,transparent_40%),radial-gradient(circle_at_90%_80%,rgba(0,229,255,0.1)_0%,transparent_40%)]"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Outermost square */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
            className="absolute w-full h-full rounded-[120px] border border-electric/10 bg-electric/5"
          ></motion.div>
          {/* Middle square */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            className="absolute w-[95%] h-[90%] rounded-[100px] border border-electric/10 bg-electric/5 backdrop-blur-sm"
          ></motion.div>
          {/* Innermost square */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute w-[85%] h-[75%] rounded-[80px] border border-electric/20 bg-electric/10 backdrop-blur-xl shadow-[0_0_80px_rgba(0,229,255,0.2)]"
          ></motion.div>
        </div>
      </div>
    </div>
  )
}
