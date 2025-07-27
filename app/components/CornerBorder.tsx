import React from 'react';

interface CornerBorderProps {
  children: React.ReactNode;
  className?: string;
}

export const CornerBorder: React.FC<CornerBorderProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Top Left Corner */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white">
        <div className="absolute -top-1 -left-1 w-4 h-4">
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L16 16M0 16L16 0" stroke="#00C2FF" strokeWidth="2" />
          </svg>
        </div>
        <div className="absolute top-0 left-0 w-8 h-1 bg-charcoal -translate-y-1/2"></div>
        <div className="absolute top-0 left-0 w-1 h-8 bg-charcoal -translate-x-1/2"></div>
      </div>

      {/* Top Right Corner */}
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white">
        <div className="absolute -top-1 -right-1 w-4 h-4">
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L16 16M0 16L16 0" stroke="#00C2FF" strokeWidth="2" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-8 h-1 bg-charcoal -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-1 h-8 bg-charcoal translate-x-1/2"></div>
      </div>

      {/* Bottom Left Corner */}
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-white">
        <div className="absolute -bottom-1 -left-1 w-4 h-4">
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L16 16M0 16L16 0" stroke="#00C2FF" strokeWidth="2" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-8 h-1 bg-charcoal translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1 h-8 bg-charcoal -translate-x-1/2"></div>
      </div>

      {/* Bottom Right Corner */}
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white">
        <div className="absolute -bottom-1 -right-1 w-4 h-4">
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L16 16M0 16L16 0" stroke="#00C2FF" strokeWidth="2" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-8 h-1 bg-charcoal translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-1 h-8 bg-charcoal translate-x-1/2"></div>
      </div>

      {/* Content */}
      <div className="border-2 border-white/80 py-16 px-8 md:py-24 md:px-12">
        {children}
      </div>
    </div>
  );
};
