"use client";
import {useState, useEffect, useRef} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Button} from "../Button";
import Image from "next/image";

const texts = [
  {main: "Elevate Your", highlight: "Style"},
  {main: "Modern", highlight: "Apparel"},
  {main: "Your Turn to", highlight: "Create"},
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (index >= texts.length - 1) {
      return;
    }
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section ref={containerRef} className="relative w-full flex items-center bg-black py-16">
      <div className="container mx-auto px-6 lg:px-20 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Content */}
        <div className="lg:col-span-7 pt-20 lg:pt-0">
          <motion.div
            initial={{opacity: 0, x: -30}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8}}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">
                New Collection Out Now
              </span>
            </div>

            <div className="h-45 md:h-60 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={index}
                  initial={{y: 40, opacity: 0}}
                  animate={{y: 0, opacity: 1}}
                  exit={{y: -40, opacity: 0}}
                  transition={{duration: 2, ease: [0.22, 1, 0.36, 1]}}
                  className="text-white text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
                  {texts[index].main} <br />
                  <span className="font-serif italic font-light text-primary-500 drop-shadow-[0_0_30px_rgba(139,0,0,0.8)]">
                    {texts[index].highlight}
                  </span>
                </motion.h1>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.4}}
              className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg font-light leading-relaxed">
              Beyond fashion. We engineer <span className="text-white">self-expression</span>{" "}
              through premium fabrics and artisan tailoring.
            </motion.p>

            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.6}}
              className="flex flex-wrap gap-5">
              <Button variant="primary">Shop Collection</Button>

              <Button variant="secondary" className="group">
                <span className="flex items-center gap-3">
                  Customize Your Piece
                  <Image
                    alt="Arrow"
                    src="/icons/SwipeArrow.gif"
                    width={24}
                    height={24}
                    className="rotate-90 invert grayscale group-hover:grayscale-0 group-hover:opacity-100 opacity-40 transition-all duration-500"
                  />
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side: Video with Stylized Frame */}
        <motion.div className="lg:col-span-5 relative h-[50vh] lg:h-[80vh] w-full">
          {/* Decorative Frame Elements */}
          <div className="absolute -inset-4 border border-white/8 rounded-[3rem] z-0" />
          <div className="absolute -inset-8 border border-white/5 rounded-[4rem] z-0" />

          <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border border-white/12 shadow-2xl shadow-primary-900/20">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover scale-110">
              <source src="/hero.mp4" type="video/mp4" />
            </video>

            {/* Video Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Floating Card Detail */}
          <motion.div
            animate={{y: [0, -10, 0]}}
            transition={{duration: 4, repeat: Infinity}}
            className="absolute bottom-10 -left-10 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl hidden md:block">
            <p className="text-[10px] text-primary-500 font-bold uppercase tracking-widest mb-1">
              Fabric Quality
            </p>
            <p className="text-white text-sm font-serif italic">100% Egyptian Cotton</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1}}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[9px] uppercase tracking-[0.3em] text-gray-500">Explore</span>
        <div className="w-px h-12 bg-linear-to-b from-primary-500 to-transparent" />
      </motion.div>
    </section>
  );
}
