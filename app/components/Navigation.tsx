'use client';

import React from 'react';

const Navigation = () => {
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
      <nav className="w-full max-w-5xl mx-auto bg-gray-800/50 backdrop-blur-lg rounded-full border border-white/10 shadow-lg">
        <div className="flex items-center justify-between h-16 px-8">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={(e) => scrollToSection(e, 'hero')}>
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
              onClick={(e) => scrollToSection(e, 'hero')}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Home
            </a>
            <a 
              href="#features" 
              onClick={(e) => scrollToSection(e, 'features')}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => scrollToSection(e, 'pricing')}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Pricing
            </a>
            <a 
              href="#why-audit" 
              onClick={(e) => scrollToSection(e, 'why-audit')}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              About Us
            </a>
          </div>
          
          {/* Auth Buttons */}
          <div className="flex items-center space-x-2">
            <button 
              className="bg-transparent text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Login
            </button>
            <button 
              className="bg-gradient-to-r from-blue-400 to-cyan-400 text-charcoal hover:from-blue-300 hover:to-cyan-300 px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-lg hover:shadow-cyan-400/30"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
