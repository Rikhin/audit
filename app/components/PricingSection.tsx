import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, ArrowRight } from 'lucide-react';

const PricingSection = () => {
  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams getting started with AI traceability',
      features: [
        'Up to 10K model inferences/month',
        'Basic audit trails',
        'Email support',
        '3-month data retention',
        'Standard security features'
      ],
      cta: 'Get Started',
      popular: false,
      highlight: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'For growing teams with advanced compliance needs',
      features: [
        'Up to 100K model inferences/month',
        'Advanced audit trails',
        'Priority email & chat support',
        '12-month data retention',
        'Enhanced security & compliance',
        'API access',
        'Custom metadata support'
      ],
      cta: 'Start Free Trial',
      popular: true,
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For organizations with custom requirements',
      features: [
        'Unlimited model inferences',
        'Complete audit trail with custom fields',
        '24/7 dedicated support',
        'Unlimited data retention',
        'Enterprise-grade security',
        'SLA & dedicated success manager',
        'On-premises deployment',
        'Custom integrations'
      ],
      cta: 'Contact Sales',
      popular: false,
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="relative py-24 bg-black overflow-hidden">
      {/* Grid paper background in electric blue */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0, 229, 255, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 229, 255, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)',
      }}></div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        background: 'radial-gradient(ellipse at center, rgba(0,229,255,0.1) 0%, transparent 70%)',
      }}></div>
      
      <div className="container-max relative z-10 px-4">
        <motion.div 
          className="text-center mb-16 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 relative inline-block">
            <span className="relative z-10">Simple, Transparent Pricing</span>
            <span className="absolute -inset-4 bg-gradient-to-r from-electric/20 to-purple-500/20 blur-2xl -z-10 rounded-full"></span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees, just straightforward pricing.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div 
              key={tier.name}
              className={`relative rounded-2xl p-8 ${tier.highlight ? 'bg-gradient-to-br from-electric/10 to-purple-500/10 border-2 border-electric/30' : 'bg-charcoal-800/50 border border-white/10'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-electric text-charcoal text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline mb-1">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-400 ml-2">{tier.period}</span>
                </div>
                <p className="text-gray-300 text-sm">{tier.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-electric flex-shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                  tier.highlight 
                    ? 'bg-gradient-to-r from-electric to-blue-500 text-charcoal hover:opacity-90' 
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {tier.cta}
              </button>
              
              {tier.popular && (
                <div className="absolute -right-4 -top-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-electric/90 rounded-full flex items-center justify-center">
                      <Zap className="h-6 w-6 text-charcoal fill-current" />
                    </div>
                    <div className="absolute inset-0 bg-electric/80 rounded-full animate-ping opacity-75"></div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Need something custom? We've got you covered.</p>
          <button className="text-electric hover:text-white font-medium flex items-center justify-center mx-auto group">
            Contact our sales team
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
