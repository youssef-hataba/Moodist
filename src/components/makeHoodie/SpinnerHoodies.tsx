"use client";

import {useState, useEffect} from "react";
import {motion, useAnimationControls, AnimatePresence} from "framer-motion";
import Image from "next/image";

const hoodieDesigns = [
  {id: 1, thumb: "/hoodies/hoodie1.jpg", mockup: "/hoodies/mockup_with_design1.png"},
  {id: 2, thumb: "/hoodies/hoodie2.jpg", mockup: "/hoodies/mockup_with_design2.png"},
  {id: 3, thumb: "/hoodies/hoodie3.jpg", mockup: "/hoodies/mockup_with_design3.png"},
  {id: 4, thumb: "/hoodies/hoodie4.jpg", mockup: "/hoodies/mockup_with_design4.png"},
  {id: 5, thumb: "/hoodies/hoodie5.jpg", mockup: "/hoodies/mockup_with_design5.png"},
  {id: 6, thumb: "/hoodies/hoodie6.jpg", mockup: "/hoodies/mockup_with_design6.png"},
];

export default function SpinnerHoodies() {
  const [winnerIndex, setWinnerIndex] = useState<number | null>(null);
  const [isWaitPhase, setIsWaitPhase] = useState(false);
  const [currentMockup, setCurrentMockup] = useState("/hoodies/solidback.png");

  const controls = useAnimationControls();

  const ITEM_HEIGHT = 160;
  const GAP = 12;
  const TOTAL_ITEM_SIZE = ITEM_HEIGHT + GAP;
  const CONTAINER_HEIGHT = 500;

  useEffect(() => {
    let isMounted = true;

    const runSpinner = async () => {
      while (isMounted) {
        controls.set({y: 0});
        setWinnerIndex(null);
        setIsWaitPhase(false);

        const randomIndex = Math.floor(Math.random() * hoodieDesigns.length);
        const spins = 5;
        const finalPosition = (spins * hoodieDesigns.length + randomIndex) * TOTAL_ITEM_SIZE;
        const centerOffset = CONTAINER_HEIGHT / 2 - ITEM_HEIGHT / 2;

        await controls.start({
          y: -(finalPosition - centerOffset),
          transition: {
            duration: 6,
            ease: [0.16, 1, 0.3, 1],
          },
        });

        if (!isMounted) break;

        setWinnerIndex(randomIndex);
        setIsWaitPhase(true);
        setCurrentMockup(hoodieDesigns[randomIndex].mockup);

        await new Promise((resolve) => setTimeout(resolve, 8000));
      }
    };

    runSpinner();
    return () => {
      isMounted = false;
    };
  }, [controls, TOTAL_ITEM_SIZE]);

  const extendedHoodies = Array(15).fill(hoodieDesigns).flat();

  return (
    <div className="flex flex-row items-center justify-center gap-20 p-10 bg-black min-h-screen w-full">
      {/* 1. Vertical Spinner Section (Left Side) */}
      <div
        className="relative overflow-hidden rounded-2xl border border-white/10"
        style={{width: 180, height: CONTAINER_HEIGHT}}>
        {/* Selection Box (Centered in Vertical) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
          <div
            className={`w-36 h-44 border-4 rounded-xl transition-all duration-1000 ${
              isWaitPhase
                ? "border-primary-700 shadow-[0_0_50px_rgba(143,0,0,0.6)] scale-105"
                : "border-white/10 scale-100"
            }`}
          />
        </div>

        {/* Shadow Fades (Top & Bottom) */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-linear-to-b from-black/50 via-transparent to-black/50" />

        <motion.div
          className="flex flex-col items-center w-full"
          animate={controls}
          initial={{y: 0}}>
          {extendedHoodies.map((item, i) => {
            const isTarget = isWaitPhase && winnerIndex === i % hoodieDesigns.length;
            return (
              <motion.div
                key={i}
                style={{height: ITEM_HEIGHT, marginBottom: GAP}}
                animate={{
                  opacity: isWaitPhase ? (isTarget ? 1 : 0.2) : 0.6,
                  scale: isTarget ? 1 : 0.85,
                  filter: !isWaitPhase ? "blur(3px) grayscale(70%)" : "blur(0px) grayscale(0%)",
                }}
                className={`relative shrink-0 w-32 rounded-lg overflow-hidden border transition-all duration-700 ${
                  isTarget ? "border-primary-700/50" : "border-white/10"
                }`}>
                <Image src={item.thumb} fill alt="Design" className="object-cover" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* 2. Mockup Section (Right Side) */}
      <div className="flex flex-col items-center gap-7">
        <div className="w-125 h-125 relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMockup}
              initial={{opacity: 0, x: 50, scaleY: 0.8, filter: "brightness(2)"}}
              animate={{opacity: 1, x: 0, scaleY: 1, filter: "brightness(1)"}}
              exit={{opacity: 0, x: -50, scale: 0.9, filter: "blur(20px)"}}
              transition={{type: "spring", stiffness: 70, damping: 15}}
              className="w-full h-full relative">
              <motion.div
                animate={{y: [0, 15, 0]}}
                transition={{duration: 5, repeat: Infinity, ease: "easeInOut"}}
                className="w-full h-full relative">
                <Image
                  src={currentMockup}
                  fill
                  alt="Hoodie Mockup"
                  className="object-contain opacity-70 drop-shadow-[0_0_60px_rgba(143,0,0,0.3)]"
                  priority
                />

                {isWaitPhase && (
                  <motion.div
                    initial={{top: "0%", opacity: 0}}
                    animate={{top: "100%", opacity: [0, 1, 1, 0]}}
                    transition={{duration: 2, ease: "easeInOut", repeat: 1, repeatType: "reverse"}}
                    className="absolute left-0 right-0 h-0.5 bg-primary-700 z-30 shadow-[0_0_15px_#8f0000]"
                  />
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Text Details Under Hoodie */}
        <div className="h-20 flex flex-col items-center">
          <AnimatePresence>
            {isWaitPhase && (
              <motion.div
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                className="flex flex-col items-center">
                <div className="text-[10px] text-white/30 tracking-[0.8em] mb-2 uppercase font-bold">
                  Authenticated Design
                </div>
                <motion.p
                  animate={{opacity: [1, 0.5, 1]}}
                  transition={{duration: 2, repeat: Infinity}}
                  className="text-primary-700 font-black text-3xl uppercase tracking-[0.3em] drop-shadow-[0_0_10px_#8f0000]">
                  Premium Edition
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
