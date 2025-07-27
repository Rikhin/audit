import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CallToActionProps {
  onOpenWaitlist: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ onOpenWaitlist }) => {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-charcoal-800 to-charcoal-900">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.1) 0%, transparent 70%)'
      }}></div>
      
      <div className="container-max relative z-10 px-4 text-center">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to Bring Transparency to Your AI?
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join our waitlist to be the first to experience how Audit can transform your AI systems into fully transparent and trustworthy partners.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button 
            onClick={onOpenWaitlist}
            className="px-8 py-4 bg-gradient-to-r from-electric to-blue-500 text-charcoal font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center group"
          >
            Join the Waitlist
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a 
            href="mailto:rikhinkavuru@icloud.com?subject=Schedule a Demo - Audit Tool&body=Hello, I'd like to schedule a demo of the Audit tool." 
            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-colors inline-block"
          >
            Schedule a Demo
          </a>
        </motion.div>
        
        <motion.div 
          className="mt-8 text-sm text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          No credit card required • 14-day free trial • Cancel anytime
        </motion.div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-electric/10 blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>
    </section>
  );
};

export default CallToAction;
