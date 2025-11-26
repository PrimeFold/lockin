"use client";

import { motion } from "motion/react";

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border-2 border-blue-500/20 rounded-lg"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 border-2 border-purple-500/20 rounded-full"
        animate={{
          y: [0, 30, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-40 left-1/4 w-12 h-12 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-lg backdrop-blur-sm"
        animate={{
          y: [0, -25, 0],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/3 w-24 h-24 border border-blue-400/10 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Glowing lines */}
      <motion.div
        className="absolute top-1/4 left-0 w-64 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
        animate={{
          x: [-100, window.innerWidth],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-0 w-48 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
        animate={{
          x: [window.innerWidth, -100],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          delay: 3,
        }}
      />
    </div>
  );
};

export default FloatingElements;
