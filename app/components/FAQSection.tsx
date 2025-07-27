import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What makes Audit different from other AI monitoring tools?',
      answer: 'Audit provides comprehensive traceability for AI decisions, going beyond basic monitoring to show the complete reasoning chain behind every model output, including data sources, processing steps, and confidence scores.'
    },
    {
      question: 'How does Audit ensure data privacy and security?',
      answer: 'We implement enterprise-grade security including end-to-end encryption, SOC 2 compliance, and strict access controls. Your data is never used for training our models and remains under your control at all times.'
    },
    {
      question: 'What AI models does Audit support?',
      answer: 'Audit is model-agnostic and works with all major AI frameworks including OpenAI, Anthropic, LLaMA, and custom models. We support both cloud-based and on-premises deployments.'
    },
    {
      question: 'How quickly can I integrate Audit with my existing systems?',
      answer: 'Most teams complete integration in under an hour using our SDKs for Python, JavaScript, and other popular languages. Our documentation includes step-by-step guides for all major platforms.'
    },
    {
      question: 'What kind of support is included?',
      answer: 'All plans include 24/7 email support, while enterprise plans feature dedicated account management and SLAs. We also offer professional services for complex deployments.'
    },
    {
      question: 'Can I try Audit before committing?',
      answer: 'Yes, we offer a 14-day free trial with full access to all features. No credit card is required to start your trial.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-charcoal-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>
      
      <div className="container-max px-4 mx-auto relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about Audit. Can't find the answer you're looking for?{' '}
            <a href="#contact" className="text-electric hover:text-cyan-400 transition-colors">Contact our team</a>.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="bg-charcoal-800/50 rounded-xl overflow-hidden border border-white/10 hover:border-electric/30 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className={`w-full px-6 py-5 text-left flex items-center justify-between ${activeIndex === index ? 'text-white' : 'text-gray-300'}`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 transition-transform duration-300 ${activeIndex === index ? 'transform rotate-180 text-electric' : 'text-gray-400'}`} 
                />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 text-gray-300 border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Still have questions?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is here to help. Get in touch with our support team and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-100 text-black font-medium rounded-lg transition-colors duration-300 border border-gray-300"
            >
              Contact Support
            </a>
            <a 
              href="#pricing" 
              className="inline-flex items-center justify-center px-6 py-3 border border-white/20 hover:border-electric/50 text-white font-medium rounded-lg transition-colors duration-300"
            >
              View Pricing
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
