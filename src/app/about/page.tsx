"use client";
import ContactNewsletter from "@/src/components/ContactNewsletter";
import {motion, useScroll, useTransform, useSpring} from "framer-motion";
import Image from "next/image";
import {useRef} from "react";

export default function AboutPage() {
  const containerRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const xBg = useTransform(smoothProgress, [0, 1], ["0%", "-30%"]);
  const opacityHero = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const scaleHero = useTransform(smoothProgress, [0, 0.15], [1, 0.95]);

  return (
    <main
      ref={containerRef}
      className="relative text-[#f5f5f5] selection:bg-primary-600 selection:text-white">
      {/* 1. Hero Section - The Intro */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
        <motion.div style={{opacity: opacityHero, scale: scaleHero}} className="z-10 text-center">
          <motion.span
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 0.5}}
            className="text-[10px] md:text-xs uppercase tracking-[1em] text-white/40 block mb-8">
            Established 2026 / Cairo
          </motion.span>
          <motion.h1
            initial={{clipPath: "inset(0 0 100% 0)", y: 50}}
            animate={{clipPath: "inset(0 0 0% 0)", y: 0}}
            transition={{duration: 1.5, ease: [0.19, 1, 0.22, 1]}}
            className="text-7xl md:text-[12vw] font-black uppercase leading-[0.8] tracking-tighter">
            MooDist
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
              Studio
            </span>
            <span className="text-primary-600">.</span>
          </motion.h1>
        </motion.div>

        {/* Background Moving Text */}
        <motion.div
          style={{x: xBg}}
          className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none">
          <span className="text-[35vw] font-black uppercase text-white/5 leading-none inline-block">
            IDENTITY IDENTITY IDENTITY
          </span>
        </motion.div>
      </section>

      {/* 2. Philosophy Section */}
      <section className="min-h-screen flex items-center px-6 md:px-24 py-40">
        <div className="max-w-6xl">
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true, margin: "-10%"}}
            className="space-y-4">
            <span className="text-primary-600 font-mono text-sm tracking-widest uppercase mb-4 block">
              // Philosophy
            </span>
            <motion.p
              initial={{y: 60, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: 1.2, ease: [0.16, 1, 0.3, 1]}}
              className="text-4xl md:text-7xl font-light leading-[1.1] tracking-tight">
              We believe that <span className="italic text-white/30">clothing</span> is the first
              layer of your <span className="font-semibold text-white">personality</span>. MooDist
              was born to bridge the gap between{" "}
              <span className="text-primary-500 relative inline-block">
                Utility
                <span className="absolute bottom-2 left-0 w-full h-[2px] bg-primary-600/30"></span>
              </span>{" "}
              and <span className="italic font-serif">Art</span>.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 3. Image Reveal - Parallax Style */}
      <section className="px-6 py-40 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{clipPath: "inset(100% 0 0 0)"}}
          whileInView={{clipPath: "inset(0% 0 0 0)"}}
          transition={{duration: 1.5, ease: [0.19, 1, 0.22, 1]}}
          viewport={{once: true}}
          className="md:col-start-2 md:col-span-6 relative aspect-[3/4] md:aspect-[16/10] bg-[#111] overflow-hidden group">
          <Image
            src="/about/studio.jpg"
            alt="Process"
            fill
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
          />
        </motion.div>

        <div className="md:col-span-4 flex flex-col justify-center space-y-10">
          <motion.div
            initial={{opacity: 0, x: 20}}
            whileInView={{opacity: 1, x: 0}}
            transition={{delay: 0.6, duration: 0.8}}
            viewport={{once: true}}>
            <h3 className="text-xs uppercase tracking-[0.5em] mb-6 text-primary-600 font-bold">
              The Process
            </h3>
            <p className="text-lg leading-relaxed text-white/50 font-light">
              Each drop is a limited exploration of silhouette and texture. We don&apos;t mass
              produce; <span className="text-white">we curate</span>. Every piece is numbered, every
              detail is intentional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. Marquee - Infinite Stats */}
      <section className="py-32 overflow-hidden border-y border-white/5 bg-white/[0.01] flex">
        <motion.div
          animate={{x: ["0%", "-50%"]}} // بيتحرك لنص عرض المحتوى الكلي فقط
          transition={{
            repeat: Infinity,
            duration: 130,
            ease: "linear",
          }}
          className="flex gap-20 whitespace-nowrap pr-20"
        >
          {[1, 2].map((group) => (
            <div key={group} className="flex gap-20 items-center">
              <span className="text-7xl md:text-9xl font-black uppercase tracking-tighter outline-text">
                Premium Quality
              </span>
              <span className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-white">
                Limited Edition
              </span>
              <span className="text-7xl md:text-9xl font-black uppercase tracking-tighter italic text-primary-600">
                High-End Finish
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* 5. The Architects Section */}
      <section className="px-6 py-60">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-40">
            {/* Founder */}
            <motion.div
              initial={{opacity: 0, y: 40}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              className="group">
              <div className="relative aspect-[4/5] mb-10 overflow-hidden bg-[#151515]">
                <Image
                  src="/team/founder.jpg"
                  alt="Founder"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
              </div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-primary-600 font-bold block mb-4">
                Founder
              </span>
              <h4 className="text-5xl font-bold uppercase tracking-tighter mb-6 text-white">
                MooDist<span className="text-primary-600">.</span>
              </h4>
              <p className="text-white/40 leading-relaxed font-light max-w-sm text-sm uppercase tracking-wider">
                Blending Egyptian heritage with futuristic street silhouettes.
              </p>
            </motion.div>

            {/* Developer */}
            <motion.div
              initial={{opacity: 0, y: 40}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.2}}
              className="group md:mt-48">
              <div className="relative aspect-[4/5] mb-10 overflow-hidden bg-[#151515]">
                <Image
                  src="/team/dev.jpg"
                  alt="Developer"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
              </div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-primary-600 font-bold block mb-4">
                Digital Architect
              </span>
              <h4 className="text-5xl font-bold uppercase tracking-tighter mb-6 text-white">
                Your Name<span className="text-primary-600">.</span>
              </h4>
              <p className="text-white/40 leading-relaxed font-light max-w-sm text-sm uppercase tracking-wider">
                Engineering immersive digital experiences for the next era.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactNewsletter />

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.15);
          color: transparent;
        }
      `}</style>
    </main>
  );
}
