import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Use Cases', href: '#use-cases' },
        { name: 'Integrations', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'API Reference', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Press', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Security', href: '#' },
        { name: 'Compliance', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Github className="h-5 w-5" />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Mail className="h-5 w-5" />, href: 'mailto:rikhinkavuru@icloud.com', label: 'Email' },
  ];

  return (
    <footer className="bg-charcoal-900 border-t border-white/10">
      <div className="container-max px-4 py-16 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/images/Startup_Multimedia_Letter_A_by_Design-removebg-preview.png" 
                alt="Audit Logo" 
                className="w-12 h-12"
              />
              <span className="text-white font-bold text-2xl ml-2">Audit</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              Bringing transparency and accountability to AI systems through comprehensive traceability.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ y: -2 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4 text-lg">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Audit AI, Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
