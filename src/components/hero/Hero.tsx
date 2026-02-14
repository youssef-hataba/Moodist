"use client";

import {useState, useEffect} from "react";
import {motion} from "framer-motion";
import { Button } from "../Button";
import Image from "next/image";

const texts = ["Elevate Your Style", "Discover Modern Apparel", "Customize Your Hoodie"];

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Stop if last text finished
    if (textIndex === texts.length - 1 && charIndex === texts[textIndex].length) {
      // Fade out after a short delay
      const hideTimeout = setTimeout(() => setIsVisible(false), 1000);
      return () => clearTimeout(hideTimeout);
    }

    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      if (textIndex < texts.length - 1) {
        const timeout = setTimeout(() => {
          setDisplayedText("");
          setCharIndex(0);
          setTextIndex(textIndex + 1);
        }, 3000);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, textIndex]);

  return (
    <section className="relative w-full flex items-center justify-end bg-black">
      <div className="absolute top-0 right-0 z-10 flex flex-col justify-center w-full px-8 lg:pl-20 h-full">
        <motion.h1
          key={textIndex}
          className="text-white text-4xl lg:text-6xl font-bold mb-10 flex items-center"
          initial={{opacity: 1, y: 0}}
          animate={{opacity: 1, y: 0}}>
          {displayedText}
          {charIndex < texts[textIndex].length && (
            <motion.span
              className="ml-2 inline-block w-1.5 h-full bg-primary-700 rounded-full"
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{repeat: Infinity, duration: 1}}>
            </motion.span>
          )}
        </motion.h1>

        <motion.p
          className="text-black-400 text-lg lg:text-xl mb-8 max-w-xl"
          initial={{opacity: 0 , x:-50}}
          animate={{opacity: displayedText ? 1 : 0, x: displayedText ? 0 : -50}}
          transition={{delay: 0.5, duration: 0.5}}>
          Discover our modern apparel collection – hoodies, tees, and more – designed for comfort,
          style, and individuality. Personalize your look with your own custom designs.
        </motion.p>

        <motion.div
          className="flex gap-4"
          initial={{opacity: 0, y: 10}}
          animate={{
            opacity: displayedText ? 1 : 0,
            y: displayedText ? 0 : 10,
          }}
          transition={{delay: 1, duration: 0.5}}>
          <Button>Shop Now</Button>
          <Button variant="secondary" className="py-0">
            <span>Customize Your Hoodie </span>
            <Image alt="Swipe up Arrows" src="/icons/SwipeArrow.gif" width={40} height={40} className="rotate-90 invert mt-1" />
          </Button>
        </motion.div>
      </div>

      <div className="flex items-center justify-center w-full lg:w-1/2 my-auto ">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full object-contain opacity-90 overflow-hidden">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
