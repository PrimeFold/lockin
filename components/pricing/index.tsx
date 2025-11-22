"use client";

import { cn } from "@/lib/utils";

import { CheckCheck, Zap } from "lucide-react";
import { useRef } from "react";
import { TimelineContent } from "./timeline-animation";
import VerticalCutReveal from "./vertical-cut-reveal";



export default function PricingSection2() {
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };
  const timelineVaraints = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const currentPrice = 0; // Free forever
  const originalPrice = 49; // Show original value for comparison

  const features = [
    "Block unlimited websites",
    "Custom time blocks (15min to 24hrs)",
    "Unbreakable locks - no escape routes",
    "Smart scheduling & recurring blocks",
    "Productivity analytics & insights",
    "Cross-browser sync (coming soon)",
    "100% free forever",
  ];

  return (
    <div className="px-4 pt-10 min-h-screen mx-auto relative dark:bg-transparent bg-transparent" ref={pricingRef}>
      <div className="dark:bg-transparent bg-transparent py-16 px-4 ">
        <div className="max-w-4xl mx-auto text-center">
          <TimelineContent
            as="div"
            animationNum={0}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="flex items-center justify-center mb-4"
          >
            <Zap className="h-5 w-5 text-blue-400 fill-blue-400 mr-2" />
            <span className="text-blue-400 font-medium">Simple Pricing</span>
          </TimelineContent>

          <h1 className="md:text-5xl sm:text-4xl text-3xl font-semibold dark:text-white text-gray-900 mb-4 leading-[120%]">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.15}
              staggerFrom="first"
              reverse={true}
              containerClassName="justify-center"
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 40,
                delay: 0.4,
              }}
            >
              Choose Your Plan
            </VerticalCutReveal>
          </h1>

          <TimelineContent
            as="p"
            animationNum={1}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="text-xl dark:text-gray-400 text-gray-600"
          >
            Lock in your focus. Unlock your potential. Start today.
          </TimelineContent>
        </div>
      </div>

      {/* Product Features */}
      <div className="px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <TimelineContent
                as="h3"
                animationNum={2}
                timelineRef={pricingRef}
                customVariants={revealVariants}
                className="text-3xl font-medium dark:text-white text-gray-900 mb-2"
              >
                What You Get
              </TimelineContent>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <TimelineContent
                    key={index}
                    as="div"
                    animationNum={3 + index}
                    timelineRef={pricingRef}
                    customVariants={timelineVaraints}
                    className="flex items-center"
                  >
                    <div className="w-6 h-6 bg-blue-500 shadow-md shadow-blue-500/50 rounded-full flex items-center justify-center mr-3">
                      <CheckCheck className="h-4 w-4 text-white" />
                    </div>
                    <span className="dark:text-gray-300 text-gray-700">{feature}</span>
                  </TimelineContent>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {/* Free Plan */}
              <TimelineContent
                as="div"
                animationNum={3}
                timelineRef={pricingRef}
                customVariants={revealVariants}
                className="dark:bg-neutral-900/50 bg-neutral-100 rounded-2xl p-6 border dark:border-neutral-800 border-neutral-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-2xl font-bold dark:text-white text-gray-900">
                    Free
                  </h4>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500 text-white">
                    FOREVER FREE
                  </span>
                </div>
                <p className="text-sm dark:text-gray-400 text-gray-600 mb-4">
                  Perfect for getting started with focus blocking
                </p>
                <div className="text-center mb-4">
                  <span className="text-5xl font-semibold dark:text-white text-gray-900">
                    $0
                  </span>
                </div>
                <button className="text-white text-xl font-semibold h-10 sm:h-16 w-full rounded-full border-2 dark:border-neutral-700 border-neutral-300 dark:text-white text-gray-900 hover:dark:bg-neutral-800 hover:bg-neutral-200 transition-all duration-300">
                  Get Started Free
                </button>
              </TimelineContent>

              {/* Premium Locked-in Plan */}
              <TimelineContent
                as="div"
                animationNum={4}
                timelineRef={pricingRef}
                customVariants={revealVariants}
                className="dark:bg-neutral-900/50 bg-neutral-100 rounded-2xl p-6 border-2 border-blue-500 dark:border-blue-500 shadow-lg shadow-blue-500/20"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-2xl font-bold dark:text-white text-gray-900">
                    Locked-in
                  </h4>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500 text-white">
                    PREMIUM
                  </span>
                </div>
                <p className="text-sm dark:text-gray-400 text-gray-600 mb-4">
                  For serious productivity enthusiasts
                </p>
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-5xl font-semibold dark:text-white text-gray-900">
                      $9
                    </span>
                    <span className="text-xl dark:text-gray-500 text-gray-600 line-through">
                      $15
                    </span>
                  </div>
                  <span className="text-sm text-blue-500 font-semibold">
                    Save 40% • per month
                  </span>
                </div>
                <button className="text-white text-xl font-semibold h-10 sm:h-16 w-full rounded-full border-4 shadow-lg shadow-blue-500/50 border-blue-500 bg-gradient-to-t from-blue-600 via-blue-500 to-blue-600 hover:shadow-blue-500/70 transition-all duration-300">
                  Hit the Goals
                </button>
              </TimelineContent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
