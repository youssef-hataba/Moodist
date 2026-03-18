"use client";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import FeatureCard from "./FeatureCard";

type Feature = {
  title: string;
  desc: string;
  icon: string;
};

const features: Feature[] = [
  {
    title: "Vivid Graphics",
    desc: "Ultra-sharp 4K printing technology. Colors that don't just stay—they scream.",
    icon: "/icons/printer2.gif",
  },
  {
    title: "Raw Luxury",
    desc: "Heavyweight Egyptian cotton. Engineered for the streets, crafted for the soul.",
    icon: "/icons/premium.gif",
  },
  {
    title: "Cyber Fit",
    desc: "The perfect drop-shoulder silhouette. Designed to move with the urban rhythm.",
    icon: "/icons/hoodi.gif",
  },
  {
    title: "48H Genesis",
    desc: "From concept to reality in 48 hours. Speed is our only constant.",
    icon: "/icons/setting2.gif",
  },
];

export default function StoryFeatures() {
  const containerRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax effect for background text
  const yText = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section
      ref={containerRef}
      className="max-w-360 mx-auto relative section-padding bg-black overflow-hidden px-6 lg:px-20">
      {/* Background text with parallax motion */}
      <motion.div
        style={{y: yText}}
        className="absolute top-20 left-1/2 -translate-x-1/2 w-full text-center opacity-[0.03] pointer-events-none select-none">
        <h1 className="text-[30vw] font-black tracking-tighter leading-none text-white">LEGACY</h1>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-32">
          <motion.div
            initial={{width: 0, opacity: 0}}
            whileInView={{width: "fit-content", opacity: 1}}
            transition={{duration: 1, ease: "circOut"}}
            className="mx-auto overflow-hidden whitespace-nowrap border-b border-primary-500/50 mb-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-primary-500 pb-2 block">
              Behind the craft
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{y: "120%"}}
              whileInView={{y: 0}}
              transition={{duration: 1}}
              className="text-6xl md:text-[6rem] font-black text-white leading-[0.75] tracking-[-0.06em] mb-12 uppercase">
              CODE YOUR <br />
              <span className="font-serif italic font-light text-[0.85em] text-transparent bg-clip-text bg-radial from-white to-white/20">
                Identity.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.4, duration: 1}}
            className="text-gray-500 text-xl md:text-2xl max-w-2xl mx-auto font-light">
            We don’t follow trends. <span className="text-white">We engineer emotions</span> into
            every fiber.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {features.map((f, i) => (
            <FeatureCard key={i} f={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
