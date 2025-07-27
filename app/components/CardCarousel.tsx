'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  GitBranch, 
  GitCommit, 
  GitPullRequest, 
  GitMerge, 
  GitCompare 
} from 'lucide-react';

const cards = [
  {
    icon: <GitBranch className="w-10 h-10 text-electric" />,
    title: 'End-to-End Traceability',
    description: 'Follow the complete decision path of your AI models, from input data to final output, with full visibility into every step.',
  },
  {
    icon: <GitCommit className="w-10 h-10 text-electric" />,
    title: 'Model Decision Logs',
    description: 'Maintain detailed logs of model decisions, including confidence scores and alternative paths considered.',
  },
  {
    icon: <GitPullRequest className="w-10 h-10 text-electric" />,
    title: 'RAG Integration',
    description: 'Seamlessly integrate with your existing RAG pipelines to trace how retrieved information influences model outputs.',
  },
  {
    icon: <GitMerge className="w-10 h-10 text-electric" />,
    title: 'Multi-Model Analysis',
    description: 'Compare and contrast how different models process the same inputs, identifying strengths and weaknesses.',
  },
  {
    icon: <GitCompare className="w-10 h-10 text-electric" />,
    title: 'Version Comparison',
    description: 'Track how model behavior changes between versions, with detailed diffs of decision-making patterns.',
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
    const opacity = isCenter ? 1 : 0.7;
    const filter = isCenter ? 'blur(0px)' : 'blur(2px)';

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
              className="absolute w-96 h-64 bg-black/80 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center justify-center text-center border-2 border-electric/40 hover:border-electric/60 transition-all duration-500"
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
