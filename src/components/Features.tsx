"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type Feature = {
  title: string;
  desc: string;
  icon: string;
};

const features: Feature[] = [
  {
    title: "Vivid Precision",
    desc: "High-definition prints that capture every detail of your vision with sharp, vibrant colors.",
    icon: "/icons/printer2.gif",
  },
  {
    title: "Premium Fabric",
    desc: "Experience the luxurious embrace of high-quality Egyptian cotton, selected for its softness.",
    icon: "/icons/premium.gif",
  },
  {
    title: "Tailored Comfort",
    desc: "A modern, perfected fit designed to provide a sharp silhouette without compromising on cozy feel.",
    icon: "/icons/hoodi.gif",
  },
  {
    title: "Rapid Custom",
    desc: "Your vision, realized. Get your unique custom design ready and shipped within 48 hours.",
    icon: "/icons/setting2.gif",
  },
];

const FeatureCard = ({ f, i }: { f: Feature; i: number }) => {
  return (
    <motion.div
      // Entry animation: fades in from bottom with subtle scale
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: i * 0.15, // Professional stagger effect
        ease: [0.16, 1, 0.3, 1] // Custom cubic bezier for ultra smooth motion
      }}
      viewport={{ once: true }}
      whileHover={{ y: -12, transition: { duration: 0.4 } }}
      className="group relative p-10 rounded-[2.5rem] bg-white/2 border border-white/[0.15] hover:border-primary-500/40 transition-colors duration-500 overflow-hidden"
    >
      {/* Background index number animation reacts on hover */}
      <motion.span 
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.03 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute -right-2 -top-2 text-9xl font-serif italic font-black select-none pointer-events-none group-hover:text-primary-500 group-hover:opacity-[0.07] transition-all duration-700"
      >
        {i + 1}
      </motion.span>

      <div className="relative z-10">
        <motion.div 
          whileHover={{ rotate: [0, -10, 10, 0] }} // Subtle icon animation on hover
          transition={{ duration: 0.5 }}
          className="mb-12 inline-block relative"
        >
            {/* Glow effect behind the icon */}
            <div className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-white/[0.03] border border-white/10 group-hover:border-primary-500/30 transition-all">
                <Image src={f.icon} alt={f.title} width={35} height={35} className="object-contain filter brightness-110 group-hover:brightness-150 transition-all" />
            </div>
        </motion.div>

        <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-primary-500/70 mb-5">
          {f.title}
        </h3>
        
        <p className="text-gray-400 font-serif italic text-lg leading-relaxed group-hover:text-white transition-colors duration-500">
          {f.desc}
        </p>
      </div>
      
      {/* Shine effect sweeps across the card on hover */}
      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent pointer-events-none" />
    </motion.div>
  );
};

export default function StoryFeatures() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax effect for background text
  const yText = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section ref={containerRef} className="relative py-40 bg-[#050505] overflow-hidden px-6 lg:px-20">
      
      {/* Background text with parallax motion */}
      <motion.div style={{ y: yText }} className="absolute top-20 left-1/2 -translate-x-1/2 w-full text-center opacity-[0.02] pointer-events-none select-none">
        <h1 className="text-[30vw] font-black tracking-tighter leading-none text-white">
          LEGACY
        </h1>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-32">
          {/* Badge animation reveals like a scanner line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "fit-content", opacity: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="mx-auto overflow-hidden whitespace-nowrap border-b border-primary-500/50 mb-10"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-primary-500 pb-2 block">
              Behind the craft
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-[10rem] font-black text-white leading-[0.75] tracking-[-0.06em] mb-12"
            >
              NOT JUST <br /> 
              <span className="font-serif italic font-light text-[0.85em] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">
                Hoodies.
              </span>
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-gray-500 text-xl md:text-2xl max-w-2xl mx-auto font-light"
          >
            We don’t follow trends. <span className="text-white">We engineer emotions</span> into every fiber.
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