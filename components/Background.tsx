"use client";

import { useEffect, useState } from "react";
import LaserFlow from "./LaserFlow";

interface BackgroundProps {
  variant?: "default" | "subtle" | "gradient";
  className?: string;
}

const Background = ({ variant = "default", className = "" }: BackgroundProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className={`absolute inset-0 w-full h-full pointer-events-none z-[0] ${className}`}>

        <LaserFlow
          horizontalBeamOffset={0.1}
          verticalBeamOffset={-0.489}
          color="#334cec"
          verticalSizing={1.5}
          horizontalSizing={0.5}
        />
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-2"
        style={{
          background: `linear-gradient(to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.2) 15%,
            rgba(255, 255, 255, 0.9) 50%,
            rgba(255, 255, 255, 0.2) 85%,
            rgba(255, 255, 255, 0) 100%)`,
          filter: `blur(2px)`,
          opacity: 0.7,
        }}
      />
    </>
  );
};

export default Background;
