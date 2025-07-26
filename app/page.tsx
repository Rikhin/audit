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
  FileCheck
} from 'lucide-react'

const HeroBackground = dynamic(() => 
  import('./components/HeroBackground').then(mod => mod.HeroBackground),
  { ssr: false }
);

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
            <div className="w-8 h-8 bg-blue-500 rounded-md mr-3 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <span className="text-white font-bold text-xl">Audit</span>
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
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-charcoal overflow-hidden">
      <HeroBackground />
      
      <div className="container-max px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="relative inline-block">
              Audit
              <svg
                className="absolute -bottom-3 left-0 w-full h-auto"
                viewBox="0 0 150 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.16992 9.5C25.6699 4.16667 87.6699 -3.5 148.17 9.5"
                  stroke="url(#paint0_linear_1_101)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_101"
                    x1="0"
                    y1="9.5"
                    x2="150"
                    y2="9.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8A2BE2" />
                    <stop offset="1" stopColor="#00E5FF" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            : AI, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Explained</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Reveal the why behind every AI answer. Enterprise-grade traceability for healthcare, legal, and finance — every decision, every step, fully auditable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" className="px-8 py-4 text-lg group">
              Start Free Trial
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" className="px-8 py-4 text-lg">
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
  )
}

// Use Case Deep Dive
const UseCaseDeepDive = () => {
  const [activeTab, setActiveTab] = React.useState('healthcare')
  
  const useCases = {
    healthcare: {
      title: "AI Diagnosis Traceability",
      description: "Track every step from symptoms to treatment recommendations for unparalleled auditability and trust in clinical settings.",
      compliance: "HIPAA",
      steps: [
        {
          title: "Patient Input",
          icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>,
          content: {
            symptoms: "Fever, Cough",
            history: "Asthma",
            vitals: "O2 96%, HR 88"
          }
        },
        {
          title: "AI Analysis",
          icon: <Database className="w-6 h-6" />,
          content: {
            model: "GPT-Health-v4",
            confidence: "98.7%",
            traceId: "A8-0B2-C3D"
          },
          active: true
        },
        {
          title: "Diagnosis & Treatment",
          icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>,
          content: {
            prognosis: "Viral Pneumonia",
            recommend: "Antivirals",
            followUp: "3 days"
          }
        }
      ]
    },
    legal: {
      title: "Legal Research Traceability",
      description: "Ensure every legal argument is backed by verified sources with complete audit trails for court proceedings.",
      compliance: "SOC 2",
      steps: [
        {
          title: "Case Input",
          icon: <FileText className="w-6 h-6" />,
          content: {
            caseType: "Contract Dispute",
            jurisdiction: "Federal Court",
            parties: "Plaintiff vs Defendant"
          }
        },
        {
          title: "AI Analysis",
          icon: <Database className="w-6 h-6" />,
          content: {
            model: "Legal-GPT-v3",
            confidence: "94.2%",
            traceId: "L7-9F1-D2E"
          },
          active: true
        },
        {
          title: "Legal Opinion",
          icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>,
          content: {
            ruling: "Breach of Contract",
            precedent: "Smith v. Jones (2022)",
            recommendation: "Settlement Recommended"
          }
        }
      ]
    },
    finance: {
      title: "Financial Risk Traceability",
      description: "Track every financial decision with complete transparency for regulatory compliance and risk management.",
      compliance: "GDPR",
      steps: [
        {
          title: "Market Data",
          icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>,
          content: {
            market: "NASDAQ",
            volatility: "High",
            volume: "2.3B shares"
          }
        },
        {
          title: "AI Analysis",
          icon: <Database className="w-6 h-6" />,
          content: {
            model: "Risk-GPT-v2",
            confidence: "96.8%",
            traceId: "F4-5A7-B9C"
          },
          active: true
        },
        {
          title: "Risk Assessment",
          icon: <AlertTriangle className="w-6 h-6" />,
          content: {
            riskLevel: "Medium",
            recommendation: "Hold Position",
            alert: "Monitor Closely"
          }
        }
      ]
    }
  }

  const activeUseCase = useCases[activeTab as keyof typeof useCases];

  return (
    <section className="py-32 bg-gradient-to-br from-charcoal-100/10 via-charcoal to-charcoal-100/10 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,229,255,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,229,255,0.05),transparent_50%)]"></div>
      <div className="container-max relative z-10">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-center mb-4 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Built for Trust in Any Industry
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our platform provides the critical explainability layer required for deploying AI in regulated environments.
        </motion.p>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          {Object.keys(useCases).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 mx-2 rounded-lg transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-electric text-charcoal' 
                  : 'bg-charcoal-100/10 text-gray-300 hover:bg-charcoal-100/20'
              }`}
            >
              {useCases[tab as keyof typeof useCases].title.split(' ')[0]}
            </button>
          ))}
        </div>
        
        <motion.div
          key={activeTab} 
          className="grid lg:grid-cols-2 gap-12 items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Section */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-electric">
              {activeUseCase.title}
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              {activeUseCase.description}
            </p>
            <div className="flex items-center">
              <span className="text-gray-400 mr-3">Compliance:</span>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <div className="px-3 py-1 border border-green-400 rounded text-white text-sm">
                  {activeUseCase.compliance}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Section - Process Flow */}
          <div className="space-y-3">
            {activeUseCase.steps.map((step, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className={`bg-charcoal-100/10 rounded-lg p-4 border ${
                  step.active ? 'border-electric/50' : 'border-electric/20'
                } relative`}
              >
                {/* Window Controls */}
                <div className="flex space-x-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-electric">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-white mb-2">{step.title}</h4>
                    <div className="space-y-1 text-xs">
                      {Object.entries(step.content).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-400 uppercase">{key}:</span>
                          <span className="text-white font-mono">{value as string}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Arrow to next step */}
                {index < activeUseCase.steps.length - 1 && (
                  <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2">
                    <svg width="2" height="16" viewBox="0 0 2 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 0V16" stroke="#00E5FF" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="4 4"/>
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
  const complianceLogos = [
    { name: "HIPAA", icon: <Lock className="h-8 w-8" /> },
    { name: "SOC2", icon: <Shield className="h-8 w-8" /> },
    { name: "GDPR", icon: <Globe className="h-8 w-8" /> },
    { name: "ISO 27001", icon: <FileCheck className="h-8 w-8" /> },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-charcoal-100/10 via-charcoal to-charcoal-100/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,229,255,0.08),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(138,43,226,0.08),transparent_40%)]"></div>
      <div className="container-max relative z-10">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-center mb-4 text-white"
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
    </section>
  );
};

const CallToAction = () => {
  return (
    <section className="py-32 bg-charcoal">
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
          Start your free trial today and see how Audit can transform your AI systems into fully transparent and trustworthy partners.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button variant="primary" className="px-10 py-5 text-xl group">
            Get Started Now
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
  return (
    <main className="bg-charcoal text-white font-sans">
      <Navigation />
      <HeroSection />
      <UseCaseDeepDive />
      <TrustSection />
      <section className="py-20">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-white">What Our Customers Say</h2>
        <CardCarousel />
      </section>
      <ScrollNarrative />
      <CallToAction />
      <Footer />
    </main>
  )
}