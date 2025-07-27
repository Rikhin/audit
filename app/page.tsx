'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  Brain, 
  Shield, 
  Database, 
  FileText, 
  ArrowRight, 
  Play,
  CheckCircle,
  AlertTriangle,
  Zap,
  Network,
  Eye,
  Lock,
  Users,
  Globe,
  Building,
  FileCheck,
  X,
  Clock
} from 'lucide-react'

import { HeroBackground } from './components/HeroBackground';
import { WaitlistModal } from './components/WaitlistModal';

const ScrollNarrative = dynamic(() =>
  import('./components/ScrollNarrative').then(mod => mod.ScrollNarrative),
  { ssr: false }
);

const CardCarousel = dynamic(() =>
  import('./components/CardCarousel'),
  { ssr: false }
);

// Button Component
const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  [key: string]: any
}) => {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2 focus:ring-offset-charcoal"
  
  const variants = {
    primary: "bg-electric text-charcoal hover:bg-electric-400 shadow-lg hover:shadow-electric/50 animate-pulse-glow",
    secondary: "bg-transparent border border-electric text-electric hover:bg-electric/10 glow-border-hover",
    ghost: "bg-transparent text-white hover:bg-white/10"
  }
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

// Navigation Component
const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
      <nav className="w-full max-w-5xl mx-auto bg-gray-800/50 backdrop-blur-lg rounded-full border border-white/10 shadow-lg">
        <div className="flex items-center justify-between h-16 px-8">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/Startup_Multimedia_Letter_A_by_Design-removebg-preview.png" 
              alt="Audit Logo" 
              className="w-14 h-14"
            />
            <span className="text-white font-bold text-2xl -ml-1">Audit</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Features</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Pricing</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Blog</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">FAQ</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">About Us</a>
          </div>
          
          {/* Auth Buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" className="text-sm px-4 py-2">
              Login
            </Button>
            <Button variant="primary" className="text-sm px-4 py-2 rounded-full">
              Sign Up
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}



// Hero Section
const ComingSoonModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-charcoal-900 rounded-xl p-8 max-w-md w-full border border-electric/20 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-electric/10 mb-6">
            <Clock className="h-8 w-8 text-electric" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Coming Soon</h3>
          <p className="text-gray-300 mb-6">
            We're working hard to bring you this feature. Stay tuned for updates!
          </p>
          <Button 
            onClick={onClose}
            className="w-full justify-center"
          >
            Got it
          </Button>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = React.useState(false);
  const [isComingSoonOpen, setIsComingSoonOpen] = React.useState(false);
  
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-charcoal overflow-hidden">
        <HeroBackground />
        
        <div className="container-max px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-none tracking-tight">
              Audit: AI, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Explained</span>.
            </h1>
            <p className="text-xl text-gray-300 mt-12 mb-16 max-w-3xl mx-auto leading-relaxed">
              The definitive solution for tracing model outputs and decisions in regulated industries. 
              Go beyond retrieval to understand exactly why your AI makes the choices it does.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="group"
                onClick={() => setIsWaitlistOpen(true)}
              >
                Join the waitlist
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="secondary" 
                className="px-8 py-4 text-lg"
                onClick={() => setIsComingSoonOpen(true)}
              >
                <Play className="mr-2 h-5 w-5" />
                See How It Works
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              SOC 2 Compliant • HIPAA Ready • 99.9% Uptime
            </div>
          </div>
        </div>
      </section>
      
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
      
      <ComingSoonModal 
        isOpen={isComingSoonOpen}
        onClose={() => setIsComingSoonOpen(false)}
      />
    </>
  )
}

// Use Case Deep Dive
const UseCaseDeepDive = () => {
  const [activeTab, setActiveTab] = React.useState('healthcare')
  const sectionRef = React.useRef<HTMLDivElement>(null)
  
  const useCases = {
    healthcare: {
      title: "Clinical Decision Support",
      description: "Trace every factor in AI-assisted diagnoses, from patient data to treatment recommendations, with full model interpretability.",
      compliance: "HIPAA & FDA Compliant",
      steps: [
        {
          title: "Data Inputs",
          icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>,
          content: {
            dataSources: [
              "Patient vitals & symptoms",
              "Medical history & records",
              "Lab results & imaging"
            ],
            timestamp: "2025-07-26T14:30:00Z"
          }
        },
        {
          title: "Model Inference",
          icon: <Brain className="w-6 h-6" />,
          content: {
            model: "MedAI-Diagnosis-v3.2",
            version: "3.2.1",
            traceId: "MED-2025-0726-1421-A8B2",
            confidence: "High (98.7%)",
            rationale: "Pattern matches 98.7% similar to pneumonia cases with similar patient profiles"
          },
          active: true
        },
        {
          title: "Decision Path",
          icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>,
          content: {
            keyInfluencers: [
              "Consolidation on chest X-ray (87% weight)",
              "Elevated WBC count (92% confidence)",
              "Recent antibiotic use (78% relevance)",
              "Patient's asthma history (65% relevance)"
            ],
            decision: "Pneumonia diagnosis with 98.7% confidence",
            recommendation: "Prescribe antibiotics and schedule 3-day follow-up"
          }
        }
      ]
    },
    legal: {
      title: "Contract Intelligence",
      description: "Maintain immutable audit trails of AI contract analysis, showing how legal conclusions map to specific clauses and precedents.",
      compliance: "eIDAS & GDPR Ready",
      steps: [
        {
          title: "Document Analysis",
          icon: <FileText className="w-6 h-6" />,
          content: {
            documentType: "NDA Agreement",
            pagesAnalyzed: "12",
            clausesIdentified: "47",
            jurisdiction: "California, USA"
          }
        },
        {
          title: "AI Assessment",
          icon: <Brain className="w-6 h-6" />,
          content: {
            model: "Legal-BERT-2024",
            version: "2.1.3",
            traceId: "LEG-2025-0726-1422-B3C4",
            confidence: "94.2%",
            rationale: "Identified 3 non-standard clauses requiring legal review"
          },
          active: true
        },
        {
          title: "Risk Evaluation",
          icon: <AlertTriangle className="w-6 h-6" />,
          content: {
            keyFindings: [
              "Unlimited liability clause (High Risk)",
              "Overly broad IP assignment (Medium Risk)",
              "Missing termination conditions (Medium Risk)",
              "Standard confidentiality terms (Low Risk)"
            ],
            recommendation: "Flag sections 4.2, 7.3, and 9.1 for legal review"
          }
        }
      ]
    },
    finance: {
      title: "Credit Risk Analysis",
      description: "Provide transparent credit decisions with clear visibility into how each data point influences the final risk assessment.",
      compliance: "FCRA & ECOA Compliant",
      steps: [
        {
          title: "Applicant Profile",
          icon: <Users className="w-6 h-6" />,
          content: {
            creditScore: "720 (Good)",
            debtToIncome: "28% (Acceptable)",
            annualIncome: "$125,000",
            creditHistory: "12 years"
          }
        },
        {
          title: "Risk Assessment",
          icon: <Shield className="w-6 h-6" />,
          content: {
            model: "CreditRisk-2024",
            version: "5.2.0",
            traceId: "FIN-2025-0726-1423-C5D6",
            confidence: "96.5%",
            rationale: "Strong credit history offset by recent credit applications"
          },
          active: true
        },
        {
          title: "Decision Rationale",
          icon: <FileCheck className="w-6 h-6" />,
          content: {
            positiveFactors: [
              "12-year credit history (28% weight)",
              "Consistent payment history (32% weight)",
              "Low credit utilization (21% weight)"
            ],
            negativeFactors: [
              "3 recent credit inquiries (15% weight)",
              "Short employment history (4% weight)"
            ],
            decision: "Approved",
            terms: "4.25% APR, $500,000 maximum"
          }
        }
      ]
    }
  }

  const activeUseCase = useCases[activeTab as keyof typeof useCases];

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-charcoal overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-100/10 via-charcoal to-charcoal-100/10 bg-grid-pattern">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,229,255,0.08),transparent_50%)] opacity-70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,229,255,0.05),transparent_50%)] opacity-70"></div>
      </div>

      <div className="container-max relative z-10">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-center mb-4 text-white heading-glow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Built for Trust in Any Industry
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-300 text-center mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our platform provides the critical explainability layer required for deploying AI in regulated environments.
        </motion.p>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 px-4">
          {Object.keys(useCases).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm md:px-5 md:py-2.5 md:text-base rounded-lg transition-all duration-200 ${
                activeTab === tab 
                  ? 'bg-electric text-charcoal font-medium' 
                  : 'bg-charcoal-100/10 text-gray-300 hover:bg-charcoal-100/20'
              }`}
            >
              {useCases[tab as keyof typeof useCases].title.split(' ')[0]}
            </button>
          ))}
        </div>
        
        <motion.div
          key={activeTab} 
          className="grid lg:grid-cols-[1.2fr_1.8fr] gap-8 items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Section */}
          <div>
            <h3 className="text-2xl font-bold mb-3 text-electric">
              {activeUseCase.title}
            </h3>
            <p className="text-gray-300 mb-5">
              {activeUseCase.description}
            </p>
            <div className="flex items-center flex-wrap gap-2">
              <span className="text-sm text-gray-400">Compliance:</span>
              <div className="inline-flex items-center bg-charcoal-100/10 px-2.5 py-1 rounded-md border border-green-400/30">
                <CheckCircle className="w-3.5 h-3.5 text-green-400 mr-1.5 flex-shrink-0" />
                <span className="text-xs font-medium text-white">{activeUseCase.compliance}</span>
              </div>
            </div>
          </div>
          
          {/* Right Section - Process Flow */}
          <div className="space-y-2.5">
            {activeUseCase.steps.map((step, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className={`bg-charcoal-100/10 rounded-lg p-3 border ${
                  step.active ? 'border-electric/50' : 'border-electric/20'
                } relative`}
              >
                {/* Window Controls */}
                <div className="flex space-x-1.5 mb-2 opacity-50">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-electric">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-white mb-1.5">{step.title}</h4>
                    <div className="space-y-0.5 text-[11px]">
                      {Object.entries(step.content).map(([key, value]) => (
                        <div key={key} className="flex justify-between gap-2">
                          <span className="text-gray-400 uppercase whitespace-nowrap">{key}:</span>
                          <span className="text-white font-mono">{value as string}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Arrow to next step */}
                {index < activeUseCase.steps.length - 1 && (
                  <div className="absolute left-1/2 -bottom-3 transform -translate-x-1/2">
                    <svg width="1.5" height="12" viewBox="0 0 2 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 0V12" stroke="#00E5FF" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="3 2"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const TrustSection = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null)
  const complianceLogos = [
    { name: "HIPAA", icon: <Lock className="h-8 w-8" /> },
    { name: "SOC2", icon: <Shield className="h-8 w-8" /> },
    { name: "GDPR", icon: <Globe className="h-8 w-8" /> },
    { name: "ISO 27001", icon: <FileCheck className="h-8 w-8" /> },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal to-charcoal-800 -z-10"></div>
      <div className="container-max relative bg-charcoal-50/5 backdrop-blur-sm rounded-3xl p-16 overflow-hidden border border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,229,255,0.08),transparent_40%)] opacity-70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(138,43,226,0.08),transparent_40%)] opacity-70"></div>
        <div className="relative z-10">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-center mb-4 text-white heading-glow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Unwavering Security & Compliance
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We are committed to the highest standards of data security and regulatory adherence, ensuring your sensitive information is always protected.
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {complianceLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-lg border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="text-electric mb-4">{logo.icon}</div>
                <span className="text-white font-semibold">{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

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
    <section className="relative py-24 bg-charcoal-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(135deg, rgba(0,229,255,0.15) 0%, rgba(138,43,226,0.15) 100%)',
      }}></div>
      <div className="container-max relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Simple, Transparent Pricing
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

const CallToAction = ({ onOpenWaitlist }: { onOpenWaitlist: () => void }) => {
  const sectionRef = React.useRef<HTMLDivElement>(null)
  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-800 to-charcoal-900 -z-10">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.1) 0%, transparent 70%)'
        }}></div>
      </div>
      <div className="container-max text-center">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Bring Transparency to Your AI?
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join our waitlist to be the first to experience how Audit can transform your AI systems into fully transparent and trustworthy partners.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
            variant="primary" 
            className="px-10 py-5 text-xl group"
            onClick={onOpenWaitlist}
          >
            Join the Waitlist
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="bg-charcoal-100/5 py-12">
      <div className="container-max text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Audit. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = React.useState(false)
  
  return (
    <main className="min-h-screen bg-charcoal text-white">
      <Navigation />
      <HeroSection />
      <ScrollNarrative />
      <section className="relative py-24 bg-blue-dot-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 to-charcoal/0 -z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent -z-10"></div>
        <div className="container-max mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 text-white heading-glow">Why Audit?</h2>
          <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Unlock unparalleled transparency and control over your AI systems with our comprehensive traceability platform.
          </p>
          <div className="mt-4">
            <CardCarousel />
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-charcoal to-transparent -z-10"></div>
        <UseCaseDeepDive />
      </div>
      <TrustSection />
      <PricingSection />
      <CallToAction onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      <Footer />
      
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
      
      {/* Global Styles */}
      <style jsx global>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 10px 2px rgba(34, 211, 238, 0.2);
          }
          50% {
            box-shadow: 0 0 20px 4px rgba(34, 211, 238, 0.4);
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .glow-border-hover {
          position: relative;
          overflow: hidden;
        }
        .glow-border-hover::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 0.5rem;
          padding: 2px;
          background: linear-gradient(45deg, #22d3ee, #0ea5e9, #3b82f6);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        .glow-border-hover:hover::before {
          opacity: 1;
        }
      `}</style>
    </main>
  )
}