"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronsRight } from "lucide-react";
import { useState } from "react";
import HomeHeader from "./header";
import ShimmerButton from "./shimmer-button";
import WordAnimator from "./word-animator";
import GetStartedButton from "./get-started-button";
import StarButton from "./star";
import Background from "../Background";
import StarBorder from "../StarBorder";

import { div } from "motion/react-client";




const HeroSection = () => {
  const [localTheme, setLocalTheme] = useState<"light" | "dark">("light");
  const words = ["Focused", "Productive", "Unstoppable", "Disciplined"];
  return (
    <div className={localTheme === "dark" ? "dark" : "light"}>
      <section className="min-h-screen relative pb-20 dark:bg-transparent bg-transparent">
        <Background />
        
        <article className="grid 2xl:pt-52 2xl:pb-24 md:py-40 py-32 relative z-[2] sm:px-0 px-4">
          <div className="flex justify-center mb-6">
            <StarButton />
          </div>
          <h1 className="xl:text-7xl md:text-6xl sm:text-5xl text-3xl text-primary text-center font-semibold tracking-tight">
            <span className="text-[2.5rem]">Block Distractions,</span>{" "}
            <span className="relative translate-x-0 flex gap-2 justify-center">
              Stay{" "}
              <WordAnimator
                words={words}
                duration={5}
                className="italic w-fit pr-3 dark:bg-gray-800 bg-gray-200 dark:border-neutral-800 border-neutral-200"
              />{" "}
            </span>
          </h1>
          <p className="mx-auto text-primary-foreground lg:w-[700px] sm:w-[80%] text-center sm:text-lg text-sm mt-5">
            Take control of your time with <strong>LockIn</strong>. Block distracting websites 
            for custom durations and reclaim your focus. No more impulse browsing, 
            no more procrastination—just pure, <strong>uninterrupted productivity</strong>. 
            Your goals deserve your full attention. 🎯
          </p>
          <div className="flex gap-2 justify-center items-center mt-4">
            <ShimmerButton
              borderRadius={"100px"}
              className={cn(
                "flex items-center gap-2 w-fit rounded-full text-white border sm:px-4 px-2 py-2",
              )}
              background={"#334cec"}
            >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Lock in Now !
              </span>
            </ShimmerButton>

            
            <GetStartedButton>
              Watch a Demo
              <ChevronsRight />
            </GetStartedButton>
          </div>
        </article>

      </section>
    </div>
  );
};

export default HeroSection;
