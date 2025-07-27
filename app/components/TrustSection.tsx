import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Users, Globe, FileCheck } from 'lucide-react';

const TrustSection = () => {
  const complianceLogos = [
    { name: "HIPAA", icon: <Lock className="h-8 w-8" /> },
    { name: "SOC2", icon: <Shield className="h-8 w-8" /> },
    { name: "GDPR", icon: <Globe className="h-8 w-8" /> },
    { name: "ISO 27001", icon: <FileCheck className="h-8 w-8" /> },
  ];

  const features = [
    {
      icon: <Shield className="h-6 w-6 text-electric" />,
      title: "Enterprise-Grade Security",
      description: "End-to-end encryption and strict access controls to protect your data."
    },
    {
      icon: <Users className="h-6 w-6 text-electric" />,
      title: "Role-Based Access",
      description: "Granular permissions to control who can access and manage your audit data."
    },
    {
      icon: <Lock className="h-6 w-6 text-electric" />,
      title: "Data Privacy",
      description: "Committed to protecting your data with industry-leading privacy practices."
    },
    {
      icon: <Globe className="h-6 w-6 text-electric" />,
      title: "Global Compliance",
      description: "Designed to meet regulatory requirements across multiple jurisdictions."
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
            Built on Trust & Transparency
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're committed to the highest standards of security, compliance, and ethical AI practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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

        <motion.div 
          className="bg-charcoal-800/30 backdrop-blur-sm rounded-2xl p-10 max-w-5xl mx-auto border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-3">Compliance & Certifications</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">We meet the highest industry standards for security and compliance across all our services.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {complianceLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                className="flex flex-col items-center justify-center p-6 bg-charcoal-700/30 rounded-xl border border-gray-800 hover:border-electric/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                viewport={{ once: true }}
              >
                <div className="text-electric mb-3 group-hover:scale-110 transition-transform">{logo.icon}</div>
                <span className="text-white font-semibold">{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-6 text-lg">Have specific compliance requirements?</p>
          <button className="px-6 py-3 bg-electric/10 hover:bg-electric/20 text-electric font-medium rounded-lg flex items-center justify-center mx-auto group transition-colors duration-300 border border-electric/20 hover:border-electric/50">
            Contact our security team
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
