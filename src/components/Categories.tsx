"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { id: 1, name: "Hoodies", slug: "HOOD", img: "/hoodies/solidfront.png", color: "#b80000" },
  { id: 2, name: "Pants", slug: "TRSR", img: "/hoodies/solidfront.png", color: "#262626" },
  { id: 3, name: "T-Shirts", slug: "TEES", img: "/hoodies/solidfront.png", color: "#f5f5f5" },
];

export default function Categories() {
  return (
    <section className="section-padding bg-black overflow-hidden relative pt-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[42px] font-bold font-serif italic text-transparent bg-clip-text bg-linear-to-b from-white to-white/20"
          >
            Shop by <span className="text-white/80">Category</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-137.5">
          {categories.map((cat) => (
            <Link 
              href={`/shop/${cat.name.toLowerCase()}`} 
              key={cat.id} 
              className="relative flex-1 hover:flex-[1.8] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] 
              group overflow-hidden rounded-3xl border border-white/5 bg-[#0a0a0a]"
            >
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-black/1 z-10" />
              <span className="absolute -right-6 top-10 text-[140px] font-black text-white/2 italic leading-none 
              select-none group-hover:text-white/5 transition-colors duration-700 uppercase">
                {cat.slug}
              </span>

              <motion.div 
                className="absolute inset-0 w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={cat.img}
                  alt={cat.name}
                  fill
                  className="object-contain p-12 opacity-50 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>

              <div className="absolute inset-x-0 bottom-0 p-10 z-20">
                <div className="flex items-end justify-between">
                  <div>
                    <motion.div 
                      initial={{ width: 20 }}
                      whileInView={{ width: 60 }}
                      className="h-1 mb-4 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)]" 
                      style={{ backgroundColor: cat.color }}
                    />
                    <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">
                      {cat.name}
                    </h3>
                    <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Explore Collection
                    </p>
                  </div>
                  
                  <div className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all duration-500 -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
              </div>

              <div 
                className="z-10 absolute bottom-0 left-0 w-full h-1.5 opacity-0 group-hover:opacity-50 transition-opacity"
                style={{ 
                    backgroundColor: cat.color,
                    boxShadow: `0 0 40px ${cat.color}` 
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}