'use client';

import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

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
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, 'hero')}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Home
            </a>
            <a 
              href="#features" 
              onClick={(e) => handleNavClick(e, 'features')}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => handleNavClick(e, 'pricing')}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              onClick={(e) => handleNavClick(e, 'faq')}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              FAQ
            </a>
            <a 
              href="#why-audit" 
              onClick={(e) => handleNavClick(e, 'why-audit')}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              About Us
            </a>
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
  );
};

export default Navigation;
