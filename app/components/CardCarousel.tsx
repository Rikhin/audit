'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Database, Zap, FileText, Shield, Eye } from 'lucide-react';

const cards = [
  {
    icon: <Database className="w-10 h-10 text-electric" />,
    title: 'Data & Model Lineage',
    description: 'Trace every piece of data and model version used in a decision, ensuring complete reproducibility.',
  },
  {
    icon: <Zap className="w-10 h-10 text-electric" />,
    title: 'Real-time Inference Tracking',
    description: 'Monitor AI decision-making processes as they happen, with live data streams and visualizations.',
  },
  {
    icon: <FileText className="w-10 h-10 text-electric" />,
    title: 'Immutable Audit Logs',
    description: 'Generate cryptographically-secured logs for every action, providing a tamper-proof chain of custody.',
  },
  {
    icon: <Shield className="w-10 h-10 text-electric" />,
    title: 'Compliance Verification',
    description: 'Automatically verify and document compliance with internal policies and external regulations.',
  },
  {
    icon: <Eye className="w-10 h-10 text-electric" />,
    title: 'Explainable AI (XAI) Insights',
    description: 'Integrate with XAI frameworks to provide human-readable explanations for complex model behaviors.',
  },
];

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const getCardStyle = (cardIndex: number) => {
    const offset = cardIndex - currentIndex;
    const totalCards = cards.length;
    let displayIndex = offset;

    if (offset > Math.floor(totalCards / 2)) {
      displayIndex = offset - totalCards;
    } else if (offset < -Math.floor(totalCards / 2)) {
      displayIndex = offset + totalCards;
    }

    const isCenter = displayIndex === 0;
    const absDisplayIndex = Math.abs(displayIndex);

    const x = displayIndex * 220; // Increase horizontal spacing
    const y = -absDisplayIndex * 30; // Invert to a U-shape curve
    const scale = isCenter ? 1.2 : 0.9; // Make all cards bigger
    const zIndex = totalCards - absDisplayIndex;
    const opacity = isCenter ? 1 : 0.4;
    const filter = isCenter ? 'blur(0px)' : 'blur(4px)';

    return {
      transform: `translateX(${x}px) translateY(${y}px) scale(${scale})`,
      zIndex,
      opacity,
      filter,
    };
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center">
      <div className="relative w-full h-96 flex items-center justify-center">
        <AnimatePresence initial={false}>
          {cards.map((card: { icon: JSX.Element; title: string; description: string }, i: number) => (
            <motion.div
              key={i}
              className="absolute w-96 h-64 bg-charcoal-100/20 backdrop-blur-xl rounded-2xl p-8 flex flex-col items-center justify-center text-center border border-electric/20 shadow-lg shadow-electric/10"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={getCardStyle(i)}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="mb-6 text-electric">{card.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-base text-gray-300">{card.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex space-x-4 mt-8">
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full bg-electric/10 text-electric flex items-center justify-center hover:bg-electric/20 transition-all duration-300"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-electric/10 text-electric flex items-center justify-center hover:bg-electric/20 transition-all duration-300"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
