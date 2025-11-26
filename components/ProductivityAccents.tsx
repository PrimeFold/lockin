"use client";

import { motion } from "motion/react";
import { Lock, Shield, Target, Zap } from "lucide-react";

const ProductivityAccents = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
      {/* Lock icons representing blocked sites - top corners */}
      <motion.div
        className="absolute top-32 right-12 opacity-5 dark:opacity-10"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Lock className="w-16 h-16 text-blue-500" strokeWidth={1.5} />
      </motion.div>

      <motion.div
        className="absolute top-64 left-16 opacity-5 dark:opacity-10"
        animate={{
          y: [0, 10, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Shield className="w-20 h-20 text-purple-500" strokeWidth={1.5} />
      </motion.div>

      {/* Focus target - bottom area */}
      <motion.div
        className="absolute bottom-40 right-1/4 opacity-5 dark:opacity-10"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Target className="w-24 h-24 text-blue-500" strokeWidth={1} />
      </motion.div>

      {/* Productivity lightning bolt */}
      <motion.div
        className="absolute bottom-1/3 left-1/4 opacity-5 dark:opacity-10"
        animate={{
          y: [0, -15, 0],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Zap className="w-16 h-16 text-yellow-500 fill-yellow-500/20" strokeWidth={1.5} />
      </motion.div>

      {/* Subtle "blocked" crosses - representing blocked distractions */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-3 dark:opacity-5"
          style={{
            left: `${20 + i * 25}%`,
            top: `${30 + i * 15}%`,
          }}
          animate={{
            rotate: [0, 90, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut",
          }}
        >
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 w-full h-0.5 bg-red-500/30 top-1/2 -translate-y-1/2 rotate-45" />
            <div className="absolute inset-0 w-full h-0.5 bg-red-500/30 top-1/2 -translate-y-1/2 -rotate-45" />
          </div>
        </motion.div>
      ))}

      {/* Focus zone rings - concentric circles representing focus areas */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.02, 0.08, 0.02],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-96 h-96 rounded-full border-2 border-blue-500/20" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.03, 0.1, 0.03],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="w-64 h-64 rounded-full border-2 border-purple-500/20" />
      </motion.div>

      {/* Timer/clock ticks - subtle lines representing time blocks */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`tick-${i}`}
          className="absolute top-1/4 left-1/2 origin-bottom"
          style={{
            transform: `rotate(${i * 30}deg)`,
            height: '100px',
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.02, 0.06, 0.02],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        >
          <div className="w-px h-8 bg-blue-500/20" />
        </motion.div>
      ))}
    </div>
  );
};

export default ProductivityAccents;
