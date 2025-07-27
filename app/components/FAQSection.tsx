'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is AI model traceability?',
      answer: 'AI model traceability is the ability to track and understand how an AI system makes decisions by maintaining a complete record of all inputs, model parameters, and decision paths that led to a particular output. This is crucial for debugging, compliance, and building trust in AI systems.'
    },
    {
      question: 'How does Audit ensure data privacy?',
      answer: 'Audit is built with privacy by design. We use end-to-end encryption for all data in transit and at rest. Our platform is compliant with major regulations including GDPR, HIPAA, and SOC 2. You maintain full control over your data at all times.'
    },
    {
      question: 'Can I integrate Audit with my existing AI models?',
      answer: 'Absolutely! Audit is designed to work with any AI model, regardless of framework or deployment environment. Our simple API makes integration straightforward, and we provide SDKs for popular programming languages.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We offer different levels of support based on your plan. All plans include email support, while higher tiers include priority support, dedicated account management, and 24/7 emergency support for enterprise customers.'
    },
    {
      question: 'How does pricing work?',
      answer: 'We offer flexible pricing based on your needs. Our Starter plan is perfect for small teams, while our Professional and Enterprise plans offer more advanced features and support. All plans are billed monthly with no long-term contracts required.'
    },
    {
      question: 'What happens if I exceed my monthly usage limits?',
      answer: 'If you approach your monthly usage limits, we\'ll notify you in advance. For Professional and Enterprise plans, we can automatically scale your usage with overage protection. You can also upgrade your plan at any time.'
    }
  ];

  return (
    <section id="faq" className="relative py-24 bg-charcoal-950 overflow-hidden">
      <div className="container-max relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about Audit. Can't find the answer you're looking for?
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="bg-charcoal-800/50 rounded-xl overflow-hidden border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <button
                className={`w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none ${
                  activeIndex === index ? 'text-electric' : 'text-white'
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    activeIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <div className="text-gray-300">{faq.answer}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Still have questions?</p>
          <button className="text-electric hover:text-white font-medium flex items-center justify-center mx-auto group">
            Contact our support team
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
