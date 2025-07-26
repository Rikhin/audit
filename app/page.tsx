'use client'

import React from 'react'
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
  Building
} from 'lucide-react'

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/80 backdrop-blur-sm border-b border-electric/20">
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-electric rounded-lg mr-3 flex items-center justify-center">
              <span className="text-charcoal font-bold text-lg">A</span>
            </div>
            <span className="text-white font-bold text-xl">Audit</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a>
          </div>
          
          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-sm px-4 py-2">
              Login
            </Button>
            <Button variant="primary" className="text-sm px-4 py-2">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Hero Section
const HeroSection = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-charcoal via-charcoal-100/5 to-charcoal">
      <motion.div 
        className="absolute inset-0 bg-gradient-radial"
        style={{ y, opacity }}
      />
      
      <div className="container-max">
        <div className="max-w-4xl mx-auto bg-charcoal-100/10 rounded-2xl border border-electric/20 p-12 relative backdrop-blur-sm">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Audit: AI, Explained
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Reveal the why behind every AI answer. Enterprise-grade traceability for healthcare, legal, and finance — every decision, every step, fully auditable.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button variant="primary" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary">
                <Play className="mr-2 h-4 w-4" />
                See How It Works
              </Button>
            </motion.div>
            
            <motion.div 
              className="text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              SOC 2 Compliant • HIPAA Ready • 99.9% Uptime
            </motion.div>
          </motion.div>
          

        </div>
      </div>
    </section>
  )
}

// Scroll Narrative Sections
const ScrollNarrative = () => {
  const { scrollYProgress } = useScroll()
  
  return (
    <div className="relative">
      {/* Section 1: The AI Black Box Challenge */}
      <section className="py-20 flex items-center bg-gradient-to-br from-charcoal via-charcoal-100/5 to-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,229,255,0.02)_25%,rgba(0,229,255,0.02)_50%,transparent_50%,transparent_75%,rgba(0,229,255,0.02)_75%)] bg-[length:20px_20px]"></div>
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                <span className="text-electric">01</span> The AI Black Box Challenge
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Modern AI systems often operate as 'black boxes,' making it impossible to understand their decision-making processes. This lack of transparency creates risks in compliance, debugging, and trust.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="flex items-center space-x-8">
                {/* Input Data */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-charcoal-100/20 rounded-lg border border-electric/30 flex items-center justify-center mb-3">
                    <Database className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm text-gray-300">Input Data</span>
                </div>
                
                {/* Arrow */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-0.5 bg-electric/30"></div>
                  <div className="w-0.5 h-8 bg-electric/30"></div>
                </div>
                
                {/* AI Model */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-electric/20 rounded-lg border border-electric/30 flex items-center justify-center mb-3 relative">
                    <Brain className="h-8 w-8 text-electric" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-xs text-white">?</span>
                    </div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-electric rounded-full flex items-center justify-center">
                      <span className="text-xs text-charcoal">?</span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-300">AI Model</span>
                </div>
                
                {/* Arrow */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-0.5 bg-electric/30"></div>
                  <div className="w-0.5 h-8 bg-electric/30"></div>
                </div>
                
                {/* Risky Decision */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-charcoal-100/20 rounded-lg border border-electric/30 flex items-center justify-center mb-3">
                    <AlertTriangle className="h-8 w-8 text-electric" />
                  </div>
                  <span className="text-sm text-gray-300">Risky Decision</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Illuminating the Path */}
      <section className="py-20 flex items-center bg-gradient-to-br from-charcoal via-charcoal-100/5 to-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,229,255,0.02)_25%,rgba(0,229,255,0.02)_50%,transparent_50%,transparent_75%,rgba(0,229,255,0.02)_75%)] bg-[length:20px_20px]"></div>
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:order-2"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                <span className="text-electric">02</span> Illuminating the Path
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                Our platform provides end-to-end traceability, mapping every data point, model transformation, and inference. We turn complexity into a clear, auditable decision path.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:order-1"
            >
              <div className="flex items-center space-x-8">
                {/* Input Data */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-charcoal-100/20 rounded-lg border border-electric/30 flex items-center justify-center mb-3">
                    <Database className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm text-gray-300">Input Data</span>
                </div>
                
                {/* Purple Line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-0.5 bg-purple-500/50"></div>
                  <div className="w-0.5 h-8 bg-purple-500/50"></div>
                </div>
                
                {/* Traceable Path */}
                <div className="text-center">
                  <div className="w-20 h-16 bg-purple-500/10 rounded-lg border border-purple-500/30 flex items-center justify-center mb-3 relative">
                    <div className="w-8 h-8 border-2 border-purple-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 border border-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-300">Traceable Path</span>
                </div>
                
                {/* Purple Line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-0.5 bg-purple-500/50"></div>
                  <div className="w-0.5 h-8 bg-purple-500/50"></div>
                </div>
                
                {/* Auditable Output */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-charcoal-100/20 rounded-lg border border-electric/30 flex items-center justify-center mb-3">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm text-gray-300">Auditable Output</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Tangible & Trusted Results */}
      <section className="py-20 flex items-center bg-gradient-to-br from-charcoal via-charcoal-100/5 to-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,229,255,0.02)_25%,rgba(0,229,255,0.02)_50%,transparent_50%,transparent_75%,rgba(0,229,255,0.02)_75%)] bg-[length:20px_20px]"></div>
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                <span className="text-electric">03</span> Tangible & Trusted Results
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                Achieve unparalleled clarity, boost model performance, and ensure regulatory compliance with verifiable audit trails. Build trust with stakeholders and deploy AI with confidence.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {/* Efficiency */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-charcoal-100/10 p-6 rounded-xl border border-electric/20 text-center backdrop-blur-sm"
              >
                <div className="text-electric mb-3">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-white mb-1">+30%</div>
                <div className="text-sm text-gray-400">Efficiency</div>
              </motion.div>
              
              {/* Compliance */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-charcoal-100/10 p-6 rounded-xl border border-electric/20 text-center backdrop-blur-sm"
              >
                <div className="text-electric mb-3">
                  <Shield className="w-8 h-8 mx-auto" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-gray-400">Compliance</div>
              </motion.div>
              
              {/* Debug Time */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-charcoal-100/10 p-6 rounded-xl border border-electric/20 text-center backdrop-blur-sm"
              >
                <div className="text-electric mb-3">
                  <CheckCircle className="w-8 h-8 mx-auto" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">-75%</div>
                <div className="text-sm text-gray-400">Debug Time</div>
              </motion.div>
              
              {/* Model Accuracy */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-charcoal-100/10 p-6 rounded-xl border border-electric/20 text-center backdrop-blur-sm"
              >
                <div className="text-electric mb-3">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-white mb-1">+15%</div>
                <div className="text-sm text-gray-400">Model Accuracy</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Feature Grid
const FeatureGrid = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const features = [
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      title: "Real-time Decision Tracking",
      description: "Monitor AI decision-making processes as they happen, with live data streams and visualizations.",
      visual: <div className="mt-4 flex justify-center"><div className="w-8 h-8 border-2 border-electric border-t-transparent rounded-full animate-spin"></div></div>
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Automated Audit Trails",
      description: "Generate immutable, timestamped logs for every action and data point, ensuring a complete, verifiable history.",
      visual: <div className="mt-4 bg-charcoal-100/20 p-3 rounded text-xs font-mono text-gray-300"><div>&gt; [AUDIT] User: 'admin' Action: 'approve_model_v2.1'</div><div>&gt; [TRACE] Input Hash: 7a8b2cd...</div><div>&gt; [VERIFY] Signature: OK_</div><div>&gt; [LOG] Status: COMPLETED</div></div>
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Compliance Reporting",
      description: "Automatically create reports for regulatory standards like GDPR, HIPAA, and SOC 2 with the click of a button.",
      visual: <div className="mt-4"><div className="flex items-center mb-2"><Shield className="w-6 h-6 text-green-400 mr-2" /><span className="text-green-400 text-sm">Compliance Checks Passed</span></div><div className="flex space-x-2"><span className="px-2 py-1 border border-gray-600 rounded text-xs text-white">SOC 2</span><span className="px-2 py-1 border border-gray-600 rounded text-xs text-white">GDPR</span><span className="px-2 py-1 border border-gray-600 rounded text-xs text-white">HIPAA</span></div></div>
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Risk Assessment",
      description: "Continuously scan for bias, drift, and vulnerabilities. Get real-time alerts on potential risks before they escalate.",
      visual: <div className="mt-4"><div className="flex items-center mb-2"><AlertTriangle className="w-6 h-6 text-yellow-400 mr-2" /><span className="text-yellow-400 text-sm">Risk Level: Low</span></div><div className="text-xs text-gray-400">Continuous monitoring active</div></div>
    }
  ];

  // Angles for 5 cards: [-40, -20, 0, 20, 40] (center at 0)
  const getRelativeIndex = (i: number) => {
    const diff = i - currentIndex;
    if (diff < -Math.floor(features.length / 2)) return diff + features.length;
    if (diff > Math.floor(features.length / 2)) return diff - features.length;
    return diff;
  };

  const getCardProps = (relIdx: number) => {
    const angles = [-40, -20, 0, 20, 40];
    const rx = 340;
    const ry = 120;
    let idx = relIdx + 2;
    if (idx < 0 || idx > 4) return { scale: 0.5, opacity: 0, z: -10, x: 0, y: 0, shadow: 'border-transparent', glass: '' };
    const angle = angles[idx] * (Math.PI / 180);
    const x = Math.cos(angle) * rx;
    const y = Math.sin(angle) * ry - ry;
    let scale = 0.7, opacity = 0.25, z = 10, shadow = 'border-glass/30', glass = 'backdrop-blur-md border border-glass/30';
    if (relIdx === 0) { scale = 1.12; opacity = 1; z = 50; shadow = 'shadow-[0_0_64px_rgba(0,229,255,0.5)] border-electric'; glass = 'backdrop-blur-lg border-2 border-electric'; }
    else if (Math.abs(relIdx) === 1) { scale = 0.88; opacity = 0.6; z = 20; shadow = 'border-glass/40'; glass = 'backdrop-blur-md border border-glass/40'; }
    return { scale, opacity, z, x, y, shadow, glass };
  };

  // Responsive: on mobile, only show 3 cards (-20, 0, 20)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const visibleRelIdxs = isMobile ? [-1, 0, 1] : [-2, -1, 0, 1, 2];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % features.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);

  return (
    <section className="py-32 bg-gradient-to-br from-charcoal via-charcoal-200/5 to-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(0,229,255,0.1)_1px,transparent_1px),radial-gradient(circle_at_75%_75%,rgba(0,229,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      <div className="container-max relative z-10">
        <motion.h2 className="text-4xl md:text-6xl font-bold text-center mb-4 text-white" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>Complete AI Traceability</motion.h2>
        <motion.p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>Gain unprecedented visibility into your AI systems. Our platform provides a comprehensive suite of tools to track, audit, and understand every decision, ensuring compliance and building trust.</motion.p>
        <div className="relative h-[440px] w-full flex items-center justify-center">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center">
            {features.map((feature, i) => {
              const relIdx = getRelativeIndex(i);
              if (!visibleRelIdxs.includes(relIdx)) return null;
              const { scale, opacity, z, x, y, shadow, glass } = getCardProps(relIdx);
              return (
                <motion.div
                  key={i}
                  style={{ zIndex: z }}
                  initial={{ opacity: 0, scale: 0.7, x: 0, y: 0 }}
                  animate={{ opacity, scale, x, y }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className={`absolute w-96 max-w-full p-8 bg-charcoal-100/20 rounded-2xl ${glass} ${shadow} transition-all duration-300 flex flex-col items-center justify-center text-center`}
                >
                  <div className="mb-4 text-electric">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-base leading-relaxed">{feature.description}</p>
                  {feature.visual}
                </motion.div>
              );
            })}
          </div>
          {/* Navigation Arrows - Bottom Center */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 flex justify-center items-center space-x-6 mt-8 z-30">
            <button onClick={prevSlide} className="w-12 h-12 bg-charcoal-100/30 rounded-full border-2 border-electric/30 text-electric hover:border-electric/60 transition-all duration-300 flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={nextSlide} className="w-12 h-12 bg-charcoal-100/30 rounded-full border-2 border-electric/30 text-electric hover:border-electric/60 transition-all duration-300 flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
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
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-4 text-electric">
              {useCases[activeTab as keyof typeof useCases].title}
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              {useCases[activeTab as keyof typeof useCases].description}
            </p>
            <div className="flex items-center">
              <span className="text-gray-400 mr-3">Compliance:</span>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <div className="px-3 py-1 border border-green-400 rounded text-white text-sm">
                  {useCases[activeTab as keyof typeof useCases].compliance}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Section - Process Flow */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            {useCases[activeTab as keyof typeof useCases].steps.map((step, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
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
                          <span className="text-white font-mono">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Arrow to next step */}
                {index < useCases[activeTab as keyof typeof useCases].steps.length - 1 && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <div className="w-0.5 h-3 bg-gray-600"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Trust Section
const TrustSection = () => {
  const complianceLogos = [
    { name: "HIPAA", icon: <Lock className="h-8 w-8" /> },
    { name: "SOC2", icon: <Shield className="h-8 w-8" /> },
    { name: "GDPR", icon: <Globe className="h-8 w-8" /> }
  ]

  return (
    <section className="py-32 bg-gradient-to-br from-charcoal-100/10 via-charcoal to-charcoal-100/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.04)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
      <div className="container-max text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Built to meet the world's most rigorous standards.
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Enterprise-grade security and compliance for the most sensitive AI applications.
        </motion.p>
        
        <motion.div 
          className="flex justify-center items-center gap-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {complianceLogos.map((logo, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-electric mb-2">
                {logo.icon}
              </div>
              <span className="text-sm text-gray-400">{logo.name}</span>
            </div>
          ))}
        </motion.div>
        
        {/* Testimonial */}
        <motion.div 
          className="max-w-2xl mx-auto bg-charcoal-100/10 p-8 rounded-xl border border-electric/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-lg text-gray-300 mb-4 italic">
            "The traceability features have transformed how we trust AI outputs in our clinical decision support system."
          </p>
          <div className="flex items-center justify-center">
            <div className="w-10 h-10 bg-electric rounded-full mr-3"></div>
            <div>
              <div className="text-white font-medium">Dr. Emily Rodriguez</div>
              <div className="text-sm text-gray-400">Chief Medical Officer, HealthTech Inc.</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Call to Action
const CallToAction = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-charcoal via-charcoal-200/10 to-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(0,229,255,0.02)_50%,transparent_100%)]"></div>
      <div className="container-max text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to trust your AI?
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join the future of transparent AI decision-making.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button variant="primary" className="text-lg px-8 py-4">
            → Request Early Access
          </Button>
          <Button variant="ghost">
            <Play className="mr-2 h-4 w-4" />
            Or watch a walkthrough
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  return (
    <footer className="py-16 bg-gradient-to-br from-charcoal-200/5 via-charcoal to-charcoal-200/5 border-t border-electric/20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(0,229,255,0.03),transparent_50%)]"></div>
      <div className="container-max relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-electric mr-3" />
              <span className="text-xl font-bold text-white">AI Trace</span>
            </div>
            <p className="text-gray-400">
              Making AI decisions transparent and trustworthy.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-electric transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-electric transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-electric transition-colors">About</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-electric/20 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AI Trace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ScrollNarrative />
      <FeatureGrid />
      <UseCaseDeepDive />
      <TrustSection />
      <CallToAction />
      <Footer />
    </main>
  )
} 