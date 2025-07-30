'use client'

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '@/app/components/Button';
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
      <nav className="w-full max-w-5xl mx-auto bg-gray-800/50 backdrop-blur-lg rounded-full border border-white/10 shadow-lg">
        <div className="flex items-center justify-between h-16 px-8 mx-auto">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <img 
                src="/images/Startup_Multimedia_Letter_A_by_Design-removebg-preview.png" 
                alt="Audit Logo" 
                className="w-14 h-14"
              />
              <span className="text-white font-bold text-2xl -ml-1">Audit</span>
            </div>
          </div>
          
          {/* Navigation Links - Centered */}
          <div className="hidden md:flex items-center justify-center space-x-6">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">About</a>
            <a href="#why-audit" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Why Us?</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Pricing</a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">FAQ</a>
          </div>
          
          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Sign In</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="bg-white text-gray-900 hover:bg-gray-100 transition-colors text-sm font-medium px-4 py-2 rounded-full">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
