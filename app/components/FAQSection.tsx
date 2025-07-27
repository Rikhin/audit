import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: 'What makes Audit different from other AI monitoring tools?',
      answer: 'Audit goes beyond basic monitoring to provide deep traceability of AI decision-making processes. We don\'t just show you what data was retrieved, but how and why the model made specific decisions.'
    },
    {
      question: 'Is my data secure with Audit?',
      answer: 'Absolutely. We implement enterprise-grade security measures including end-to-end encryption, SOC 2 compliance, and strict access controls to ensure your data remains private and secure.'
    },
    {
      question: 'How quickly can I get started with Audit?',
      answer: 'You can sign up and start using Audit in minutes. Our platform is designed for easy integration with your existing AI infrastructure.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We provide 24/7 support with dedicated account managers for enterprise customers. All plans include access to our comprehensive documentation and community forums.'
    },
    {
      question: 'Can I use Audit with any AI model?',
      answer: 'Yes, Audit is model-agnostic and works with all major AI frameworks and model architectures. Whether you\'re using proprietary models or open-source solutions, we\'ve got you covered.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-charcoal-900">
      <div className="container-max px-4 mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about Audit. Can't find the answer you're looking for?
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="bg-charcoal-800/50 rounded-xl overflow-hidden border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                  <ChevronDown className="h-5 w-5 text-gray-400 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 pt-0 text-gray-300">
                  {faq.answer}
                </div>
              </details>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Still have questions?</p>
          <a 
            href="mailto:support@audit.ai" 
            className="inline-flex items-center text-electric hover:text-white font-medium group"
          >
            Contact our support team
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
