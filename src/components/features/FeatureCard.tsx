import Image from "next/image";
import {motion} from "framer-motion";

type Feature = {
  title: string;
  desc: string;
  icon: string;
};

export default function FeatureCard({f, i}: {f: Feature; i: number}) {
  return (
    <motion.div
      // Entry animation: fades in from bottom with subtle scale
      initial={{opacity: 0, y: 250, scale: 0.9}}
      whileInView={{opacity: 1, y: 0, scale: 1}}
      transition={{
        duration: 2,
        delay: i * 0.25,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{once: true}}
      whileHover={{y: -12, transition: {duration: 0.4}}}
      className="group relative p-8 rounded-[2.5rem] bg-white/2 border border-white/15 
      hover:border-primary-500/40 transition-colors duration-500 overflow-hidden">
      <motion.span
        initial={{x: 20, opacity: 0}}
        whileInView={{x: 0, opacity: 0.03}}
        transition={{duration: 1, delay: 0.5}}
        className="absolute -right-2 -top-2 text-9xl font-serif italic font-black 
        select-none pointer-events-none group-hover:text-primary-500 transition-all duration-700">
        {i + 1}
      </motion.span>

      <div className="relative z-10">
        <motion.div className="mb-8 inline-block relative">
          {/* Glow effect behind the icon */}
          <div className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div
            className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-white/3 border border-white/10
            group-hover:border-primary-500/30 transition-all">
            <Image
              src={f.icon}
              alt={f.title}
              width={35}
              height={35}
              className="object-contain filter brightness-150 group-hover:brightness-250 transition-all"
            />
          </div>
        </motion.div>

        <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-primary-500/70 mb-5">
          {f.title}
        </h3>

        <p
          className="text-gray-400 font-serif italic text-lg leading-relaxed group-hover:text-white 
        transition-colors duration-500">
          {f.desc}
        </p>
      </div>

      {/* Shine effect sweeps across the card on hover */}
      <div
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform 
      duration-1000 bg-linear-to-r from-transparent via-white/3 to-transparent pointer-events-none"
      />
    </motion.div>
  );
}
