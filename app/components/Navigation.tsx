'use client'

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '@/app/components/Button';

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
            <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">About</a>
            <a href="#why-audit" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Why Us?</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Pricing</a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">FAQ</a>
          </div>
          
          {/* Auth Buttons - Temporarily Disabled */}
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              className="text-sm px-4 py-2 text-gray-500 cursor-not-allowed"
              disabled
            >
              Login
            </Button>
            <Button 
              className="text-sm px-4 py-2 bg-gray-700 text-gray-400 cursor-not-allowed"
              disabled
            >
              Get Started
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
