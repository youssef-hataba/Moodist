"use client";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import Image from "next/image";
import {ArrowRight, Zap} from "lucide-react";
import {IoMdCart} from "react-icons/io";


interface BundleItem {
  name: string;
  img: string;
  delay: number;
}

export default function MegaBundle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xTransform = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  const items: BundleItem[] = [
    {name: "Nomad Hoodie", img: "/hoodies/mockup_with_design1.png", delay: 0.1},
    {name: "Tactical Joggers", img: "/hoodies/mockup_with_design2.png", delay: 0.2},
    {name: "Syndicate Socks", img: "/hoodies/mockup_with_design5.png", delay: 0.3},
  ];

  return (
    <section
      ref={containerRef}
      className="section-padding bg-[#050505] border-y border-white/10 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        style={{x: xTransform}}
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
        <h2 className="text-[30vw] font-black italic uppercase tracking-tighter whitespace-nowrap">
          SYNDICATE
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 mb-10">
          <motion.div
            initial={{opacity: 0, scale: 0.8}}
            whileInView={{opacity: 1, scale: 1}}
            className="flex items-center gap-2 px-4 py-1.5 bg-primary-600/10 border border-primary-600/30 rounded-full backdrop-blur-sm">
            <Zap size={12} className="fill-primary-600 text-primary-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-600">
              Limited Offer
            </span>
          </motion.div>

          <motion.h2
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85]">
            All In One <span className="text-primary-600 inline-block text-glow-sm">Drop</span>
          </motion.h2>

          <motion.p
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.4}}
            className="text-white/40 text-[10px] md:text-[12px] uppercase tracking-[0.3em] max-w-xl">
            3 Best Sellers. 1 Big Bundle. Save Your Money.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-end mb-20">
          {items.map((item) => (
            <motion.div
              key={item.name}
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              transition={{delay: item.delay, duration: 0.8}}
              whileHover={{y: -15}}
              className="group relative flex flex-col items-center cursor-crosshair gap-4">
              <div className="relative w-full aspect-4/5 transition-all duration-700">
                <div className="absolute inset-0 bg-primary-600/5 blur-[80px] rounded-full group-hover:bg-primary-600/15 transition-colors duration-700" />
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  priority
                  className="object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.9)] z-10 transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col items-center gap-3">
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white/20 group-hover:text-primary-600 transition-colors">
                  {item.name}
                </span>
                <div className="h-0.5 w-0 group-hover:w-16 bg-primary-600 transition-all duration-500 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          className="max-w-4xl mx-auto relative">
          <div className="absolute inset-0 bg-primary-600/20 blur-[120px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" />

          <div className="relative overflow-hidden bg-[#0a0a0a] border border-white/10 backdrop-blur-xl">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-primary-600/20 to-transparent" />
            <div className="px-8 py-12 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="space-y-5 text-center md:text-left">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase text-white/20 tracking-[0.3em]">
                    Bundle Protocol Value
                  </span>
                  <div className="flex items-center gap-4 justify-center md:justify-start">
                    <span className="text-xl text-white/20 line-through">5,400 EGP</span>
                    <span className="bg-green-600 text-white text-[9px] font-bold px-2 py-0.5 uppercase">
                      Save 900 EGP
                    </span>
                  </div>
                </div>

                <div className="text-6xl md:text-7xl font-black italic tracking-[ -0.05em] flex items-end gap-3 justify-center md:justify-start">
                  4500
                  <span className="text-sm font-bold not-italic text-primary-600 mb-3 tracking-widest uppercase">
                    EGP
                  </span>
                </div>
              </div>

              <button className="group/btn relative h-24 w-full md:w-80 bg-white flex items-center justify-center gap-6 active:scale-95 transition-all duration-500">
                <div className="absolute inset-0 bg-primary-600 scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500" />

                <div className="relative z-10 flex items-center gap-4">
                  <IoMdCart
                    size={20}
                    className="text-black group-hover/btn:text-white transition-colors duration-300"
                  />
                  <span className="text-black font-black uppercase text-[13px] tracking-[0.2em] group-hover/btn:text-white transition-colors duration-300">
                    Add To Cart
                  </span>
                  <ArrowRight
                    size={20}
                    className="text-black group-hover/btn:text-white group-hover/btn:translate-x-2 transition-all duration-300"
                  />
                </div>
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-primary-600 rounded-full" />
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-primary-600 rounded-full" />
              <span>Fast Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-primary-600 rounded-full" />
              <span>Best Price</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
