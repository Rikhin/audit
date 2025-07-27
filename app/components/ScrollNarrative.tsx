'use client'

import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { 
  Database, 
  Brain, 
  AlertTriangle, 
  FileText, 
  Shield, 
  CheckCircle 
} from 'lucide-react'

export const ScrollNarrative = () => {
  const { scrollYProgress } = useScroll()
  
  return (
    <div className="relative">
      {/* Section 1: The Model Traceability Gap */}
      <section className="py-12 md:py-16 flex items-center bg-gradient-to-br from-charcoal via-charcoal-100/5 to-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,229,255,0.02)_25%,rgba(0,229,255,0.02)_50%,transparent_50%,transparent_75%,rgba(0,229,255,0.02)_75%)] bg-[length:20px_20px]"></div>
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
                <span className="text-electric">01</span> The Model Traceability Gap
              </h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Current AI systems provide answers without revealing their reasoning. In regulated industries, it's not enough to know what the model decided—you need to understand exactly why and how it got there.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-charcoal-100/20 rounded-lg border border-electric/30 flex items-center justify-center mb-2">
                    <Database className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm text-gray-300">Input Data</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-0.5 bg-electric/30"></div>
                  <div className="w-0.5 h-8 bg-electric/30"></div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-electric/20 rounded-lg border border-electric/30 flex items-center justify-center mb-3 relative">
                    <Brain className="h-8 w-8 text-electric" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-xs text-white">?</span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-300">AI Model</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-0.5 bg-electric/30"></div>
                  <div className="w-0.5 h-8 bg-electric/30"></div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-charcoal-100/20 rounded-lg border border-electric/30 flex items-center justify-center mb-2">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm text-gray-300">Output</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Decision Traceability for RAG */}
      <section className="py-12 md:py-16 flex items-center bg-gradient-to-br from-charcoal via-charcoal-100/5 to-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,229,255,0.02)_25%,rgba(0,229,255,0.02)_50%,transparent_50%,transparent_75%,rgba(0,229,255,0.02)_75%)] bg-[length:20px_20px]"></div>
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:order-2"
            >
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
                <span className="text-electric">02</span> Decision Traceability for RAG
              </h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Our solution integrates seamlessly with your existing RAG pipelines, adding a layer of explainability that shows not just which chunks were retrieved, but how they influenced the final output.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:order-1"
            >
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-charcoal-100/20 rounded-lg border border-electric/30 flex items-center justify-center mb-2">
                    <Database className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm text-gray-300">Your Data</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-0.5 bg-purple-500/50"></div>
                  <div className="w-0.5 h-8 bg-purple-500/50"></div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-12 md:w-20 md:h-16 bg-purple-500/10 rounded-lg border border-purple-500/30 flex items-center justify-center mb-2 relative">
                    <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-purple-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 md:w-4 md:h-4 border border-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-300">RAG Pipeline</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-0.5 bg-purple-500/50"></div>
                  <div className="w-0.5 h-8 bg-purple-500/50"></div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-charcoal-100/20 rounded-lg border border-electric/30 flex items-center justify-center mb-2">
                    <Brain className="h-8 w-8 text-electric" />
                  </div>
                  <span className="text-sm text-gray-300">Model Decision</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Seamless Integration */}
      <section className="py-12 md:py-16 flex items-center bg-gradient-to-br from-charcoal via-charcoal-100/5 to-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,229,255,0.02)_25%,rgba(0,229,255,0.02)_50%,transparent_50%,transparent_75%,rgba(0,229,255,0.02)_75%)] bg-[length:20px_20px]"></div>
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
                <span className="text-electric">03</span> Seamless Integration
              </h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Designed for developers who need to add explainability without rebuilding their stack. A simple API call replaces your existing model call, adding comprehensive traceability with minimal code changes.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-3"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-charcoal-100/10 p-4 md:p-6 rounded-xl border border-electric/20 text-center backdrop-blur-sm"
              >
                <div className="text-electric mb-3">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="text-xl md:text-2xl font-bold text-white mb-1">One API Call</div>
                <div className="text-sm text-gray-400">To add traceability</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-charcoal-100/10 p-4 md:p-6 rounded-xl border border-electric/20 text-center backdrop-blur-sm"
              >
                <div className="text-electric mb-3">
                  <Shield className="w-8 h-8 mx-auto" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-white mb-1">Zero Lock-in</div>
                <div className="text-sm text-gray-400">Works with any model</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-charcoal-100/10 p-4 md:p-6 rounded-xl border border-electric/20 text-center backdrop-blur-sm"
              >
                <div className="text-electric mb-3">
                  <CheckCircle className="w-8 h-8 mx-auto" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">-75%</div>
                <div className="text-sm text-gray-400">Debug Time</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-charcoal-100/10 p-4 md:p-6 rounded-xl border border-electric/20 text-center backdrop-blur-sm"
              >
                <div className="text-electric mb-3">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">+15%</div>
                <div className="text-sm text-gray-400">Model Accuracy</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
