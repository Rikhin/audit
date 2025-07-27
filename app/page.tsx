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
  Clock,
  ChevronDown
} from 'lucide-react'

import { HeroBackground } from './components/HeroBackground';
import { CornerBorder } from './components/CornerBorder';
import { WaitlistModal } from './components/WaitlistModal';
import Navigation from './components/Navigation';
import UseCaseDeepDive from './components/UseCaseDeepDive';
import TrustSection from './components/TrustSection';
import PricingSection from './components/PricingSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

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

// Coming Soon Modal
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

// Hero Section
const HeroSection = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = React.useState(false);
  const [isComingSoonOpen, setIsComingSoonOpen] = React.useState(false);
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-charcoal overflow-hidden">
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
      
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
      
      <ComingSoonModal 
        isOpen={isComingSoonOpen}
        onClose={() => setIsComingSoonOpen(false)}
      />
    </section>
  )
}

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = React.useState(false);
  
  return (
    <main className="min-h-screen bg-charcoal text-white">
      <Navigation />
      <HeroSection />
      
      <section id="features" className="relative">
        <ScrollNarrative />
      </section>
      
      <section id="why-audit" className="relative py-32 overflow-hidden w-full bg-charcoal">
        <div className="w-full max-w-[1600px] mx-auto px-4">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <CornerBorder className="bg-black/90 backdrop-blur-sm p-8 md:p-12">
              <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 text-white">
                Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric via-cyan-400 to-blue-400 animate-text">Audit</span>?
              </h2>
              <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                Unlock unparalleled transparency and control over your AI systems with our comprehensive traceability platform.
              </p>
              <div className="mt-8">
                <CardCarousel />
              </div>
            </CornerBorder>
          </motion.div>
        </div>
      </section>
      
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-charcoal to-transparent -z-10"></div>
        <UseCaseDeepDive />
      </div>
      
      <TrustSection />
      
      <section id="pricing" className="relative">
        <PricingSection />
      </section>
      
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

// Add other component implementations here (UseCaseDeepDive, TrustSection, PricingSection, CallToAction, Footer)
// ...
