import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Users } from 'lucide-react';
import EmailDialog from './EmailDialog';

const TrustSection = () => {
  const [isEmailDialogOpen, setIsEmailDialogOpen] = useState(false);

  const features = [
    {
      icon: <Shield className="h-6 w-6 text-electric" />,
      title: "Security First",
      description: "We prioritize the security of your data in everything we build."
    },
    {
      icon: <Users className="h-6 w-6 text-electric" />,
      title: "User Focused",
      description: "Designed with user experience and privacy in mind."
    },
    {
      icon: <Lock className="h-6 w-6 text-electric" />,
      title: "Data Protection",
      description: "Your data is handled with care and respect for your privacy."
    }
  ];

  return (
    <section id="trust" className="relative py-24 overflow-hidden bg-charcoal">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
      
      <div className="container-max relative z-10 px-4">
        <motion.div 
          className="text-center mb-20 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Commitment
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We believe in building trust through transparency and responsible development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-charcoal-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-electric/60 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-14 w-14 rounded-xl bg-electric/10 flex items-center justify-center mb-6 group-hover:bg-electric/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6 text-lg">Questions about our approach to security?</p>
          <button 
            onClick={() => setIsEmailDialogOpen(true)}
            className="inline-flex items-center px-6 py-3 bg-electric/10 hover:bg-electric/20 text-electric font-medium rounded-lg mx-auto group transition-colors duration-300 border border-electric/20 hover:border-electric/50"
          >
            Contact Us
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      <EmailDialog 
        isOpen={isEmailDialogOpen} 
        onClose={() => setIsEmailDialogOpen(false)}
        subject="Security Inquiry - Audit Tool"
      />
    </section>
  );
};

export default TrustSection;
