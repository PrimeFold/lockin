"use client";

import { ArrowRight, PencilLine } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import HoverTranslateTwo from "./interactive-card-stack";
import { TimelineContent } from "./timeline-animation";

const Feature1 = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.267, // 3/4 of original delay
        duration: 0.33, // 3/4 of original duration
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  // Chart bar animation variants
  const barVariants = {
    hidden: { scaleY: 0, originY: 1 },
    visible: (i: number) => ({
      scaleY: 1,
      transition: {
        delay: 2.1 + i * 0.075, // 3/4 of original delay
        duration: 0.375, // 3/4 of original duration
        ease: "easeOut",
      },
    }),
  };

  // Chat message variants
  const messageVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 2.4 + i * 0.45, // 3/4 of original delay
        duration: 0.375, // 3/4 of original duration
        ease: "easeOut",
      },
    }),
  };
  
  const colorClasses = {
    green: "before:bg-green-500 shadow-green-500/20",
    orange: "before:bg-orange-500 shadow-orange-500/20",
    blue: "before:bg-blue-500 shadow-blue-500/20",
  };

  return (
    <section className="max-w-7xl mx-auto p-4 pt-0 pb-16 dark:bg-transparent bg-transparent relative overflow-hidden" ref={featuresRef} id="features">
      
      <div className="min-w-7xl relative z-10">
        <article className="max-w-5xl mx-auto py-10 text-center space-y-2 px-8">
          <TimelineContent
            as="h1"
            animationNum={0}
            timelineRef={featuresRef}
            customVariants={revealVariants}
            className="md:text-5xl sm:text-4xl text-3xl font-medium dark:text-white text-black"
          >
            Stay Focused, <br />
            Block Distractions
          </TimelineContent>
          <TimelineContent
            as="p"
            animationNum={1}
            timelineRef={featuresRef}
            customVariants={revealVariants}
            className="dark:text-gray-400 text-gray-600 sm:text-base text-sm sm:w-[70%] w-full mx-auto"
          >
            Powerful tools designed to help you stay focused and productive.
            Block distracting websites, track your progress, and achieve your goals
            with LockIn's comprehensive suite of features.
          </TimelineContent>
        </article>
        
        <div className="grid grid-cols-12 gap-4">
          {/* Interactive Card Stack */}
          <TimelineContent
            as="div"
            animationNum={0}
            timelineRef={featuresRef}
            customVariants={revealVariants}
            className="lg:col-span-5 sm:col-span-6 col-span-12 relative w-full h-[350px] rounded-xl overflow-hidden border dark:border-neutral-800 border-neutral-200 dark:bg-neutral-900/50 bg-white"
          >
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#b0b0b02e_1px,transparent_1px),linear-gradient(to_bottom,#b0b0b02e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
            <HoverTranslateTwo />

            <article className="absolute right-0 bottom-0 left-0 w-full bg-gradient-to-t dark:from-neutral-900 from-white dark:via-neutral-900 via-white to-transparent p-6 pt-[100px]">
              <h3 className="px-1 pt-1 dark:text-white text-black text-2xl font-medium">
                Smart Website Blocking
              </h3>
              <p className="mt-1 px-1 pb-1 font-normal dark:text-gray-400 text-gray-600 text-sm w-full">
                Block specific websites or entire categories with our intelligent
                blocking system. Stay focused on what matters most.
              </p>
            </article>
          </TimelineContent>

          {/* Usage Stats */}
          <TimelineContent
            as="div"
            animationNum={1}
            timelineRef={featuresRef}
            customVariants={revealVariants}
            className="lg:col-span-3 sm:col-span-6 col-span-12 border dark:border-neutral-800 border-neutral-200 flex flex-col justify-between rounded-lg p-4 relative dark:bg-neutral-900/50 bg-white"
          >
            <div
              className="absolute inset-0 z-0 rounded-lg"
              style={{
                background:
                  "radial-gradient(125% 125% at 50% 10%, #ffffff00 40%, #6366f1 100%)",
              }}
            />
            <motion.div
              className="flex -space-x-3 relative z-10"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.375 }} // Moderately faster
            >
              {[
                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200",
                "https://images.unsplash.com/photo-1617171594279-3aa1f300a0f2?q=80&w=200",
                "https://images.unsplash.com/photo-1659228135452-c4c7b5118047?q=80&w=200",
              ].map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  width={24}
                  height={24}
                  className="rounded-xl border-4 dark:border-neutral-900 border-white h-14 w-14 object-cover"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.67 + i * 0.067, // 3/4 of original delay
                    duration: 0.375, // 3/4 of original duration
                    type: "spring",
                    stiffness: 200,
                  }}
                />
              ))}
            </motion.div>
            <motion.div
              className="relative z-10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.67, duration: 0.375 }} // Moderately faster
            >
              <motion.h1
                className="text-4xl font-semibold sm:pt-0 pt-20 dark:text-white text-black"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.67, duration: 0.225, type: "spring" }} // Moderately faster
              >
                10k+
              </motion.h1>
              <p className="text-sm dark:text-gray-400 text-gray-600">
                Trusted by productive individuals 
              </p>
            </motion.div>
          </TimelineContent>

          {/* Memberships */}
          <TimelineContent
            as="div"
            animationNum={2}
            timelineRef={featuresRef}
            customVariants={revealVariants}
            className="lg:col-span-4 sm:col-span-6 col-span-12 border dark:border-neutral-800 border-neutral-200 rounded-lg p-4 group dark:bg-neutral-900/50 bg-white"
          >
            <motion.h1
              className="text-4xl font-semibold dark:text-white text-black"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.375 }} // Moderately faster
            >
              Block Durations
            </motion.h1>
            <motion.p
              className="text-sm dark:text-gray-400 text-gray-600"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.375 }} // Moderately faster
            >
              Choose how long you want to stay focused
            </motion.p>
            <div className="space-y-2 mt-6">
              {[
                {
                  title: "Quick Focus",
                  desc: "15-30 minutes sessions",
                  color: "green",
                  rotation: 0,
                },
                {
                  title: "Deep Work",
                  desc: "1-4 hours of focus time",
                  color: "orange",
                  rotation: 3,
                },
                {
                  title: "Full Day",
                  desc: "8-24 hours lockdown",
                  color: "blue",
                  rotation: -1,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`flex gap-2 justify-between items-center dark:bg-neutral-800 bg-neutral-50 p-2 rounded-xl border dark:border-neutral-700 border-neutral-200 shadow-lg pl-7 relative before:content-[''] before:absolute before:left-2.5 before:rounded-md before:top-1.5 before:w-1.5 before:h-[80%] ${colorClasses[item.color as keyof typeof colorClasses]} group-hover:rotate-0 transition-all`}
                  style={{
                    rotate: `${item.rotation}deg`,
                    boxShadow: `0 10px 15px -3px rgb(${item.color === "green" ? "34 197 94" : item.color === "orange" ? "249 115 22" : "59 130 246"} / 0.1)`,
                  }}
                  initial={{ x: -30, opacity: 0, rotate: item.rotation + 10 }}
                  animate={{ x: 0, opacity: 1, rotate: item.rotation }}
                  transition={{
                    delay: i * 0.133, // 3/4 of original delay
                    duration: 0.375, // 3/4 of original duration
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{ rotate: 0 }}
                >
                  <div>
                    <h3 className="font-semibold dark:text-white text-black">{item.title}</h3>
                    <p className="text-sm dark:text-gray-400 text-gray-600">{item.desc}</p>
                  </div>
                  <ArrowRight className="dark:text-white text-black" />
                </motion.div>
              ))}
            </div>
          </TimelineContent>

          <TimelineContent
            as="div"
            animationNum={3}
            timelineRef={featuresRef}
            customVariants={revealVariants}
            className="lg:col-span-7 sm:col-span-6 col-span-12 relative border dark:border-neutral-800 border-neutral-200 p-4 rounded-xl overflow-hidden dark:bg-neutral-900/50 bg-white"
          >
            <article className="w-full bg-gradient-to-t font-helvetica dark:from-neutral-900 from-white dark:via-neutral-900 via-white to-transparent">
              <h3 className="px-1 pt-1 dark:text-white text-black text-2xl font-medium">
                Productivity Analytics
              </h3>
              <p className="mt-1 px-1 pb-1 font-normal dark:text-gray-400 text-gray-600 text-sm w-full">
                Track your focus sessions and visualize your productivity gains
                over time with detailed charts and insights.
              </p>
            </article>
            <motion.svg
              width="552"
              height="225"
              viewBox="0 0 552 225"
              className="w-fit h-72 pt-5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.375 }} // Moderately faster
            >
              {[224, 163, 106, 50].map((y, i) => (
                <motion.path
                  key={i}
                  d={`M0 ${y}H552`}
                  stroke="#dbdbdb"
                  strokeDasharray="2 2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.375 }} // Moderately faster
                />
              ))}

              {[
                {
                  d: "M19 2.00001C19 0.895436 19.8954 0 21 0H29C30.1046 0 31 0.895431 31 2V224H19V2.00001Z",
                  fill: "#F93861",
                },
                {
                  d: "M283 2.00001C283 0.895436 283.895 0 285 0H292C293.105 0 294 0.895431 294 2V224H283V2.00001Z",
                  fill: "#008AFF",
                },
                {
                  d: "M46 93C46 91.8954 46.8954 91 48 91H55C56.1046 91 57 91.8954 57 93V224H46V93Z",
                  fill: "#FFCA00",
                },
                {
                  d: "M309 93C309 91.8954 309.895 91 311 91H319C320.105 91 321 91.8954 321 93V224H309V93Z",
                  fill: "#B8A6DC",
                },
                {
                  d: "M72 25C72 23.8954 72.8954 23 74 23H82C83.1046 23 84 23.8954 84 25V224H72V25Z",
                  fill: "#25A87C",
                },
                {
                  d: "M336 25C336 23.8954 336.895 23 338 23H345C346.105 23 347 23.8954 347 25V224H336V25Z",
                  fill: "#F93861",
                },
                {
                  d: "M98 132C98 130.895 98.8954 130 100 130H108C109.105 130 110 130.895 110 132V224H98V132Z",
                  fill: "#B8A6DC",
                },
                {
                  d: "M362 132C362 130.895 362.895 130 364 130H371C372.105 130 373 130.895 373 132V224H362V132Z",
                  fill: "#25A87C",
                },
                {
                  d: "M125 203C125 201.895 125.895 201 127 201H134C135.105 201 136 201.895 136 203V224H125V203Z",
                  fill: "#4EEAEF",
                },
                {
                  d: "M388 203C388 201.895 388.895 201 390 201H398C399.105 201 400 201.895 400 203V224H388V203Z",
                  fill: "#4EEAEF",
                },
                {
                  d: "M151 9C151 7.89543 151.895 7 153 7H161C162.105 7 163 7.89543 163 9V224H151V9Z",
                  fill: "#8E5AF5",
                },
                {
                  d: "M415 9C415 7.89543 415.895 7 417 7H424C425.105 7 426 7.89543 426 9V224H415V9Z",
                  fill: "#8E5AF5",
                },
                {
                  d: "M178 165C178 163.895 178.895 163 180 163H187C188.105 163 189 163.895 189 165V224H178V165Z",
                  fill: "#E33E58",
                },
                {
                  d: "M441 165C441 163.895 441.895 163 443 163H451C452.105 163 453 163.895 453 165V224H441V165Z",
                  fill: "#E33E58",
                },
                {
                  d: "M204 55C204 53.8954 204.895 53 206 53H213C214.105 53 215 53.8954 215 55V224H204V55Z",
                  fill: "#008AFF",
                },
                {
                  d: "M467 55C467 53.8954 467.895 53 469 53H477C478.105 53 479 53.8954 479 55V224H467V55Z",
                  fill: "#008AFF",
                },
                {
                  d: "M230 84C230 82.8954 230.895 82 232 82H240C241.105 82 242 82.8954 242 84V224H230V84Z",
                  fill: "#46D394",
                },
                {
                  d: "M494 84C494 82.8954 494.895 82 496 82H503C504.105 82 505 82.8954 505 84V224H494V84Z",
                  fill: "#46D394",
                },
                {
                  d: "M257 42C257 40.8954 257.895 40 259 40H266C267.105 40 268 40.8954 268 42V224H257V42Z",
                  fill: "#FFCA00",
                },
                {
                  d: "M520 42C520 40.8954 520.895 40 522 40H530C531.105 40 532 40.8954 532 42V224H520V42Z",
                  fill: "#FFCA00",
                },
              ].map((bar, i) => (
                <motion.path
                  key={i}
                  d={bar.d}
                  fill={bar.fill}
                  variants={barVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                />
              ))}
            </motion.svg>
          </TimelineContent>

          {/* Real Time Chat */}
          <TimelineContent
            as="div"
            animationNum={4}
            timelineRef={featuresRef}
            customVariants={revealVariants}
            className="lg:col-span-5 sm:col-span-6 col-span-12 relative border dark:border-neutral-800 border-neutral-200 p-4 rounded-xl overflow-hidden dark:bg-neutral-900/50 bg-white"
          >
            <div className="flex w-full max-w-md flex-col overflow-hidden rounded-xl dark:bg-neutral-900 bg-white shadow-lg">
              {/* Messages Area */}
              <div className="flex-1 space-y-4 p-4 overflow-hidden">
                {/* Agent Messages with staggered animation */}
                <motion.div
                  className="mr-auto relative max-w-[80%] rounded-lg dark:bg-neutral-800 bg-gray-100 p-3 dark:text-gray-200 text-gray-800"
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0}
                >
                  Hey! You've been in deep focus mode for 45 minutes now. 
                  Great job staying locked in! You've successfully blocked 
                  12 distraction attempts so far.
                </motion.div>

                <motion.div
                  className="mr-auto relative max-w-[80%] rounded-lg dark:bg-neutral-800 bg-gray-100 p-3 dark:text-gray-200 text-gray-800"
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                >
                  You're on a{" "}
                  <span className="font-semibold text-blue-500 border-b border-dashed border-blue-500">
                    7-day focus streak
                  </span>
                  ! Keep going to unlock the Productivity Master badge 
                  and reach your weekly goal.
                  <motion.button
                    className="absolute -bottom-2 right-0 flex items-center gap-1 rounded-full bg-orange-500 px-2 py-1 text-xs text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1.0, duration: 0.375, type: "spring" }} // Moderately faster
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <PencilLine className="h-3 w-3" />
                    Adjust tone
                  </motion.button>
                </motion.div>
              </div>

              {/* Chat Input Area */}
              <motion.div
                className="flex items-center gap-2 border-t dark:border-neutral-700 border-gray-200 p-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.375 }} // Moderately faster
              >
                <motion.input
                  type="text"
                  placeholder="Can I extend my focus session?"
                  className="flex-1 rounded-lg border dark:border-neutral-600 border-gray-300 dark:bg-neutral-800 bg-gray-100 px-4 py-2 dark:text-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                  initial={{ width: "60%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.5, duration: 0.375 }} // Moderately faster
                />
                <motion.button
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.33, duration: 0.375, type: "spring" }} // Moderately faster
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </motion.div>
            </div>

            <article className="absolute right-0 top-0 left-0 w-full bg-gradient-to-b dark:from-neutral-900 from-white dark:via-neutral-900 via-white to-transparent p-6 pb-[100px]">
              <h3 className="px-1 pt-1 dark:text-white text-black text-2xl font-medium">
                Focus Reminders
              </h3>
              <p className="mt-1 px-1 pb-1 font-normal dark:text-gray-400 text-gray-600 text-sm w-full">
                Get gentle reminders and motivational messages to keep you on track
                during your focus sessions.
              </p>
            </article>
          </TimelineContent>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
