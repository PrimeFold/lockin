"use client";

import { useState } from "react";

const cards = [
  {
    id: 1,
    icon: "📱",
    name: "Social Media",
    sitesCount: "25+ sites",
  },
  {
    id: 2,
    icon: "🎮",
    name: "Gaming",
    sitesCount: "15+ sites",
  },
  {
    id: 3,
    icon: "🎬",
    name: "Entertainment",
    sitesCount: "30+ sites",
  },
  {
    id: 4,
    icon: "📰",
    name: "News & Media",
    sitesCount: "20+ sites",
  },
  {
    id: 5,
    icon: "🛍️",
    name: "Shopping",
    sitesCount: "18+ sites",
  },
  {
    id: 6,
    icon: "💬",
    name: "Messaging",
    sitesCount: "12+ sites",
  },
  {
    id: 7,
    icon: "🎵",
    name: "Music & Audio",
    sitesCount: "10+ sites",
  },
  {
    id: 8,
    icon: "🎯",
    name: "Custom Lists",
    sitesCount: "Unlimited",
  },
];

const CARD_HEIGHT = 70; // px, adjust to match your h-16 + gap

function HoverTranslateTwo() {
  const [active, setActive] = useState(2); // Start with the middle card
  const [hovered, setHovered] = useState(false);

  // on hover, move to next card (if possible)
  const handleMouseEnter = () => {
    setHovered(true);
    if (active < cards.length - 1) setActive(active + 1);
  };

  // on leave, return to previous card
  const handleMouseLeave = () => {
    setHovered(false);
    if (active > 0) setActive(active - 1);
  };

  const containerHeight = 350;
  // grab middle pos
  const middlePos = containerHeight / 2;
  // center the card in the middle of container, but then move up a bit
  const translateY = middlePos - active * CARD_HEIGHT - 35;

  return (
    <>
      <div
        className="relative overflow-hidden flex flex-col items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex flex-col gap-4 transition-transform duration-300 ease-in-out w-full -mt-10 overflow-visible  items-center justify-center"
          style={{
            transform: `translateY(${translateY}px)`,
            backfaceVisibility: "hidden",
          }}
        >
          {cards.map((card, idx) => {
            const isCenter = idx === active;
            return (
              <div
                key={card.id}
                className={`
                  h-16 w-[275px] flex items-center justify-between gap-4 rounded-xl pl-3.5 pr-4 text-sm 
                  transition duration-300 ease-in-out 
                  ${
                    isCenter
                      ? "scale-[1.00] blur-none z-[99"
                      : "scale-95 blur-[2px] opacity-60"
                  }
                `}
                style={{
                  background:
                    "radial-gradient(65.62% 65.62% at 50% 50%, \
                  rgba(0, 0, 255, 0.32) 0%, \
                  rgba(0, 0, 255, 0) 100%), \
                  linear-gradient( \
                  rgba(0, 128, 255, 0.12) 0%, \
                  rgba(255,255,255,0.10) 100%), \
                  rgba(0, 0, 255, 0.56)",

                  boxShadow:
                    "rgba(0, 128, 255, 0.06) 0px -12px 16px 0px inset, \
                         rgba(0, 128, 255, 0.16) 0px 4px 16px 0px inset, \
                         rgba(0, 128, 255, 0.12) 0px 0.75px 0.25px 0px inset, \
                         rgba(0, 128, 255, 0.32) 0px 0.25px 0.25px 0px inset, \
                          rgba(0, 0, 255, 0.06) 0px 2px 16px 0px, \
                          rgba(0, 0, 255, 0.06) 0px 23px 14px 0px, \
                          rgba(0, 0, 255, 0.19) 0px 10px 10px 0px, \
                          rgba(0, 0, 255, 0.26) 0px 3px 6px 0px, \
                          rgba(0, 0, 255, 0.40) 0px 0px 0px 0.75px",
                }}
              >
                <div className="w-full">
                  <div className="flex items-center gap-3 w-full justify-between pr-2 pl-1">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">
                        {card.icon}
                      </span>
                      <span className="text-white font-medium -ml-0.5">
                        {card.name}
                      </span>
                    </div>
                    <span className="text-white font-medium text-xs">
                      {card.sitesCount}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* blurred gradient overlay at the top */}
        <div
          className="pointer-events-none absolute -top-12 left-0 w-full pt-[100px] pb-[80px] bg-gradient-to-b from-white to-transparent z-20"
          // done to get rid of random white line
          style={{ filter: "blur(4px)" }}
        />
      </div>
    </>
  );
}

export default HoverTranslateTwo;
