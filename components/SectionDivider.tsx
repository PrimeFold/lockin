"use client";

import { motion } from "motion/react";

interface SectionDividerProps {
  variant?: "dots" | "wave" | "gradient";
}

const SectionDivider = ({ variant = "dots" }: SectionDividerProps) => {
  if (variant === "dots") {
    return (
      <div className="relative w-full py-8 flex items-center justify-center">
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2,
              }}
              viewport={{ once: false }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === "wave") {
    return (
      <div className="relative w-full h-24 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,60 C300,20 600,100 900,60 C1050,40 1200,80 1200,60 L1200,120 L0,120 Z"
            className="fill-blue-500/5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative w-full h-px my-12">
      <div className="absolute inset-0 bg-transparent" />
    </div>
  );
};

export default SectionDivider;
