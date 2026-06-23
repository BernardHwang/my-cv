"use client";

import React, { useState } from "react";
import { Universe } from "../components/canvas/Universe";
import { Section, portfolioData } from "../data/portfolio";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section | null>(null);

  const handleSectionClick = (section: Section) => {
    setActiveSection(section);
  };

  const handleClose = () => {
    setActiveSection(null);
  };

  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#050510] text-white font-sans">
      {/* 3D Universe Background */}
      <Universe activeSection={activeSection} onSectionClick={handleSectionClick} />

      {/* Intro Overlay when no section is active */}
      <AnimatePresence>
        {!activeSection && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-10 left-1/2 -translate-x-1/2 text-center pointer-events-none z-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
              {portfolioData.personalInfo.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide mb-4">
              {portfolioData.personalInfo.role}
            </p>
            <p className="text-sm md:text-md text-gray-400 max-w-md mx-auto">
              {portfolioData.personalInfo.bio}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Section Info Panel */}
      <AnimatePresence>
        {activeSection && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute top-0 right-0 h-full w-full md:w-[400px] bg-black/40 backdrop-blur-xl border-l border-white/10 p-8 z-20 flex flex-col shadow-2xl"
          >
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-12 flex-1"
            >
              <div 
                className="w-12 h-1 rounded-full mb-6" 
                style={{ backgroundColor: activeSection.color }}
              />
              <h2 className="text-3xl font-bold mb-4 tracking-tight">
                {activeSection.title}
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {activeSection.description}
              </p>

              {activeSection.details && (
                <ul className="space-y-4 mb-8">
                  {activeSection.details.map((detail, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-start text-gray-300"
                    >
                      <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: activeSection.color }} />
                      <span className="leading-relaxed">{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              )}

              {activeSection.link && (
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  href={activeSection.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium text-white transition-transform hover:scale-105 active:scale-95"
                  style={{ backgroundColor: activeSection.color + '40', border: `1px solid ${activeSection.color}` }}
                >
                  Visit Link
                  <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Help Tip */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 text-sm tracking-wider pointer-events-none uppercase">
        Drag to rotate • Scroll to zoom • Click a star
      </div>
    </main>
  );
}
