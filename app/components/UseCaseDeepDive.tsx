import React from 'react';
import { motion } from 'framer-motion';
import { Building, Scale, Shield, Database, Network, Zap, CheckCircle } from 'lucide-react';

type UseCase = {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
};

type UseCases = {
  [key: string]: UseCase;
};

const UseCaseDeepDive = () => {
  const [activeTab, setActiveTab] = React.useState('healthcare');

  const tabs = [
    { id: 'healthcare', label: 'Healthcare', icon: <Shield className="w-5 h-5" /> },
    { id: 'legal', label: 'Legal', icon: <Scale className="w-5 h-5" /> },
    { id: 'finance', label: 'Finance', icon: <Building className="w-5 h-5" /> },
  ];

  const useCases: UseCases = {
    healthcare: {
      title: 'Healthcare Compliance & Safety',
      description: 'Ensure AI-driven diagnoses and treatment recommendations are transparent, explainable, and compliant with healthcare regulations.',
      features: [
        'Audit trails for all AI-assisted diagnoses',
        'Explanation of treatment recommendations',
        'HIPAA-compliant data handling',
        'Real-time monitoring of model decisions'
      ],
      benefits: [
        'Reduced liability with comprehensive documentation',
        'Improved patient trust through transparency',
        'Streamlined compliance with healthcare regulations',
        'Faster incident investigation and resolution'
      ]
    },
    legal: {
      title: 'Legal Document Analysis',
      description: 'Provide clear audit trails for AI-powered legal document review and analysis, ensuring accountability in sensitive legal matters.',
      features: [
        'Traceability for all document analysis',
        'Explanation of legal reasoning',
        'Privilege and confidentiality protection',
        'Version control for evolving case law'
      ],
      benefits: [
        'Enhanced due diligence capabilities',
        'Clear documentation for legal proceedings',
        'Reduced risk of oversight in document review',
        'Improved collaboration between legal teams'
      ]
    },
    finance: {
      title: 'Financial Decision Making',
      description: 'Bring transparency to AI-driven financial decisions, from credit scoring to investment recommendations.',
      features: [
        'Explainable credit decisions',
        'Audit trail for investment recommendations',
        'Regulatory compliance tracking',
        'Bias detection and mitigation'
      ],
      benefits: [
        'Compliance with financial regulations',
        'Improved risk assessment',
        'Enhanced customer trust',
        'Faster resolution of disputes'
      ]
    }
  };

  return (
    <section id="use-cases" className="relative py-20 bg-[#F8F8F8]">
      <div className="container-max px-4 mx-auto">
        <motion.div 
          className="text-center mb-16 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
            Industry-Specific Solutions
          </h2>
          <p className="text-lg text-[#666666] max-w-3xl mx-auto">
            Tailored AI transparency solutions for your industry's unique challenges
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#333333] text-white shadow-md'
                    : 'text-[#666666] bg-white hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {React.cloneElement(tab.icon, {
                  className: `w-4 h-4 mr-2 ${activeTab === tab.id ? 'text-white' : 'text-[#00C2FF]'}`
                })}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-black/90"
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Key Features Card */}
              <div className="bg-white p-6 rounded-xl border border-black/90 hover:border-black transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-[#00C2FF]/10 p-2 rounded-lg mr-3">
                    <Zap className="w-5 h-5 text-[#00C2FF]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#333333]">Key Features</h3>
                </div>
                <ul className="space-y-4">
                  {useCases[activeTab].features.map((feature, index) => (
                    <li key={`feature-${index}`} className="flex items-start">
                      <div className="bg-[#00C2FF]/10 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00C2FF]" />
                      </div>
                      <span className="text-[#333333] leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Business Benefits Card */}
              <div className="bg-white p-6 rounded-xl border border-black/90 hover:border-black transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-[#00D084]/10 p-2 rounded-lg mr-3">
                    <CheckCircle className="w-5 h-5 text-[#00D084]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#333333]">Business Benefits</h3>
                </div>
                <ul className="space-y-4">
                  {useCases[activeTab].benefits.map((benefit, index) => (
                    <li key={`benefit-${index}`} className="flex items-start">
                      <div className="bg-[#00D084]/10 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-[#00D084]" />
                      </div>
                      <span className="text-[#333333] leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="col-span-full px-8 pb-8 pt-6 bg-gray-50 border-t border-gray-100">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-xl font-semibold text-[#333333] mb-3">Ready to see it in action?</h3>
                <p className="text-[#666666] mb-6">Schedule a personalized demo to see how our solution can work for your business.</p>
                <a 
                  href="#" 
                  className="inline-block bg-black hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-full transition-colors shadow-md hover:shadow-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "mailto:rikhinkavuru@icloud.com?subject=Schedule a Demo - Audit Tool&body=Hello, I'd like to schedule a demo for the Audit Tool. Please provide available time slots.";
                  }}
                >
                  Schedule a Demo
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseDeepDive;
