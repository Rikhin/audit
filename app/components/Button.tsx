import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2 focus:ring-offset-charcoal";
  
  const variants = {
    primary: "bg-electric text-charcoal hover:bg-electric-400 shadow-lg hover:shadow-electric/50 animate-pulse-glow",
    secondary: "bg-transparent border border-electric text-electric hover:bg-electric/10 glow-border-hover",
    ghost: "bg-transparent text-white hover:bg-white/10"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
