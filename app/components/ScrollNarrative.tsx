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
      {/* Section 1: The AI Black Box Challenge */}
      <section className="py-20 flex items-center bg-gradient-to-br from-charcoal via-charcoal-100/5 to-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,229,255,0.02)_25%,rgba(0,229,255,0.02)_50%,transparent_50%,transparent_75%,rgba(0,229,255,0.02)_75%)] bg-[length:20px_20px]"></div>
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                <span className="text-electric">01</span> The AI Black Box Challenge
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Modern AI systems often operate as 'black boxes,' making it impossible to understand their decision-making processes. This lack of transparency creates risks in compliance, debugging, and trust.
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
                  <div className="w-16 h-16 bg-charcoal-100/20 rounded-lg border border-electric/30 flex items-center justify-center mb-3">
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
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-electric rounded-full flex items-center justify-center">
                      <span className="text-xs text-charcoal">?</span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-300">AI Model</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-0.5 bg-electric/30"></div>
                  <div className="w-0.5 h-8 bg-electric/30"></div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-charcoal-100/20 rounded-lg border border-electric/30 flex items-center justify-center mb-3">
                    <AlertTriangle className="h-8 w-8 text-electric" />
                  </div>
                  <span className="text-sm text-gray-300">Risky Decision</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Illuminating the Path */}
      <section className="py-20 flex items-center bg-gradient-to-br from-charcoal via-charcoal-100/5 to-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,229,255,0.02)_25%,rgba(0,229,255,0.02)_50%,transparent_50%,transparent_75%,rgba(0,229,255,0.02)_75%)] bg-[length:20px_20px]"></div>
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:order-2"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                <span className="text-electric">02</span> Illuminating the Path
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our platform provides end-to-end traceability, mapping every data point, model transformation, and inference. We turn complexity into a clear, auditable decision path.
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
                  <div className="w-16 h-16 bg-charcoal-100/20 rounded-lg border border-electric/30 flex items-center justify-center mb-3">
                    <Database className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm text-gray-300">Input Data</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-0.5 bg-purple-500/50"></div>
                  <div className="w-0.5 h-8 bg-purple-500/50"></div>
                </div>
                <div className="text-center">
                  <div className="w-20 h-16 bg-purple-500/10 rounded-lg border border-purple-500/30 flex items-center justify-center mb-3 relative">
                    <div className="w-8 h-8 border-2 border-purple-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 border border-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-300">Traceable Path</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-0.5 bg-purple-500/50"></div>
                  <div className="w-0.5 h-8 bg-purple-500/50"></div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-charcoal-100/20 rounded-lg border border-electric/30 flex items-center justify-center mb-3">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm text-gray-300">Auditable Output</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Tangible & Trusted Results */}
      <section className="py-20 flex items-center bg-gradient-to-br from-charcoal via-charcoal-100/5 to-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,229,255,0.02)_25%,rgba(0,229,255,0.02)_50%,transparent_50%,transparent_75%,rgba(0,229,255,0.02)_75%)] bg-[length:20px_20px]"></div>
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                <span className="text-electric">03</span> Tangible & Trusted Results
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Achieve unparalleled clarity, boost model performance, and ensure regulatory compliance with verifiable audit trails. Build trust with stakeholders and deploy AI with confidence.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-charcoal-100/10 p-6 rounded-xl border border-electric/20 text-center backdrop-blur-sm"
              >
                <div className="text-electric mb-3">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-white mb-1">+30%</div>
                <div className="text-sm text-gray-400">Efficiency</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-charcoal-100/10 p-6 rounded-xl border border-electric/20 text-center backdrop-blur-sm"
              >
                <div className="text-electric mb-3">
                  <Shield className="w-8 h-8 mx-auto" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-gray-400">Compliance</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-charcoal-100/10 p-6 rounded-xl border border-electric/20 text-center backdrop-blur-sm"
              >
                <div className="text-electric mb-3">
                  <CheckCircle className="w-8 h-8 mx-auto" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">-75%</div>
                <div className="text-sm text-gray-400">Debug Time</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-charcoal-100/10 p-6 rounded-xl border border-electric/20 text-center backdrop-blur-sm"
              >
                <div className="text-electric mb-3">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-white mb-1">+15%</div>
                <div className="text-sm text-gray-400">Model Accuracy</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
