"use client";

import {useState, useEffect, useRef} from "react";
import {motion, AnimatePresence, useInView} from "framer-motion";
import SpinnerHoodies from "./SpinnerHoodies";

const texts = [
  {id: 1, content: "Design Your Hoodie"},
  {id: 2, content: "Choose Your Style"},
];

export default function TextReveal() {
  const [currentText, setCurrentText] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [renderSpinner, setRenderSpinner] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {once: true, amount: 0.6});

  useEffect(() => {
    if (!isInView || isFinished) return;

    const timer = setTimeout(() => {
      if (currentText + 1 < texts.length) {
        setCurrentText((prev) => prev + 1);
      } else {
        setIsFinished(true);
      }
    }, 2800);

    return () => clearTimeout(timer);
  }, [currentText, isInView, isFinished]);

  const letterVariants = {
    initial: {opacity: 0, y: 20, filter: "blur(10px)"},
    animate: {opacity: 1, y: 0, filter: "blur(0px)"},
    exit: {opacity: 0, y: -20, filter: "blur(10px)"},
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden px-4">
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          if (isFinished) {
            setRenderSpinner(true);
          }
        }}>
        {isInView && !isFinished ? (
          <motion.div
            key={texts[currentText].id}
            className="flex flex-col items-center justify-center">
            <motion.h1
              className="text-5xl md:text-7xl font-black text-white uppercase tracking-[0.2em] 
            flex flex-wrap justify-center text-center">
              {texts[currentText].content.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{
                    duration: 0.8,
                    delay: index * 0.025,
                    ease: [0.2, 0, 0, 1],
                  }}
                  className={char === " " ? "mr-4" : ""}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div
              initial={{width: 0, opacity: 0}}
              animate={{width: "60%", opacity: 1}}
              exit={{width: 0, opacity: 0}}
              transition={{duration: 1.2, ease: "easeInOut"}}
              className="h-0.5 mt-8 bg-linear-to-r from-transparent via-primary-700 to-transparent shadow-[0_0_15px_#8f0000]"
            />
          </motion.div>
        ) : (
          renderSpinner && (
            <motion.div
              key="spinner-section"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.9}}
              className="w-full flex flex-col items-center justify-center">
              <SpinnerHoodies />
            </motion.div>
          )
        )}
      </AnimatePresence>
    </section>
  );
}
