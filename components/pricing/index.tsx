"use client";

import { cn } from "@/lib/utils";

import { CheckCheck, Zap, X } from "lucide-react";
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
        delay: i * 0.225, // 3/4 of original delay
        duration: 0.375, // 3/4 of original duration
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
        delay: i * 0.075, // 3/4 of original delay
        duration: 0.375, // 3/4 of original duration
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  // Define features with tier availability
  const features = [
    { name: "Block unlimited websites", free: true, premium: true },
    { name: "Custom time blocks (15min - 4hrs)", free: true, premium: true },
    { name: "Basic productivity stats", free: true, premium: true },
    { name: "Browser extension", free: true, premium: true },
    { name: "Extended blocks (4hrs - 24hrs)", free: false, premium: true },
    { name: "Advanced analytics & insights", free: false, premium: true },
    { name: "Smart scheduling & recurring blocks", free: false, premium: true },
    { name: "Cross-device sync", free: false, premium: true },
    { name: "Priority support", free: false, premium: true },
    { name: "Custom block categories", free: false, premium: true },
  ];

  return (
    <div className="px-4 py-16 mx-auto relative dark:bg-transparent bg-transparent" ref={pricingRef} id="pricing">
      <div className="dark:bg-transparent bg-transparent py-16 px-4">
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
              staggerDuration={0.1125} // 3/4 of original duration
              staggerFrom="first"
              reverse={true}
              containerClassName="justify-center"
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 40,
                delay: 0.3, // 3/4 of original delay
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

      {/* Pricing Cards */}
      <div className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Free Plan */}
            <TimelineContent
              as="div"
              animationNum={2}
              timelineRef={pricingRef}
              customVariants={revealVariants}
              className="dark:bg-neutral-900/50 bg-neutral-100 rounded-2xl p-8 border dark:border-neutral-800 border-neutral-200"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-3xl font-bold dark:text-white text-gray-900">
                  Free
                </h4>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500 text-white">
                  FOREVER FREE
                </span>
              </div>
              <p className="text-sm dark:text-gray-400 text-gray-600 mb-6">
                Perfect for getting started with focus blocking
              </p>
              <div className="mb-6">
                <span className="text-6xl font-bold dark:text-white text-gray-900">
                  $0
                </span>
                <span className="text-lg dark:text-gray-400 text-gray-600 ml-2">
                  /month
                </span>
              </div>
              
              {/* Free Features List */}
              <div className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    {feature.free ? (
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCheck className="h-3 w-3 text-white" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 dark:bg-neutral-800 bg-neutral-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="h-3 w-3 dark:text-neutral-600 text-neutral-400" />
                      </div>
                    )}
                    <span className={cn(
                      "text-sm",
                      feature.free 
                        ? "dark:text-gray-300 text-gray-700" 
                        : "dark:text-gray-600 text-gray-400 line-through"
                    )}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <button className="text-xl font-semibold h-14 w-full rounded-full border-2 dark:border-neutral-700 border-neutral-300 dark:text-white text-gray-900 hover:dark:bg-neutral-800 hover:bg-neutral-200 transition-all duration-300">
                Get Started Free
              </button>
            </TimelineContent>

            {/* Premium Locked-in Plan */}
            <TimelineContent
              as="div"
              animationNum={3}
              timelineRef={pricingRef}
              customVariants={revealVariants}
              className="dark:bg-neutral-900/50 bg-neutral-100 rounded-2xl p-8 border-2 border-blue-500 dark:border-blue-500 shadow-lg shadow-blue-500/20 relative"
            >
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1.5 text-xs font-bold rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg">
                  MOST POPULAR
                </span>
              </div>

              <div className="flex items-center justify-between mb-3">
                <h4 className="text-3xl font-bold dark:text-white text-gray-900">
                  Locked-in
                </h4>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500 text-white">
                  PREMIUM
                </span>
              </div>
              <p className="text-sm dark:text-gray-400 text-gray-600 mb-6">
                For serious productivity enthusiasts
              </p>
              <div className="mb-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold dark:text-white text-gray-900">
                    $9
                  </span>
                  <span className="text-2xl dark:text-gray-500 text-gray-600 line-through">
                    $15
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm dark:text-gray-400 text-gray-600">
                    /month
                  </span>
                  <span className="text-sm text-blue-500 font-semibold">
                    • Save 40%
                  </span>
                </div>
              </div>
              
              {/* Premium Features List */}
              <div className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-blue-500/50">
                      <CheckCheck className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm dark:text-gray-300 text-gray-700">
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <button className="text-white text-xl font-semibold h-14 w-full rounded-full border-4 shadow-lg shadow-blue-500/50 border-blue-500 bg-gradient-to-t from-blue-600 via-blue-500 to-blue-600 hover:shadow-blue-500/70 transition-all duration-300">
                Upgrade to Premium
              </button>
            </TimelineContent>
          </div>
        </div>
      </div>
    </div>
  );
}
