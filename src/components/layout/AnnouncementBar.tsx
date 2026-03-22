"use client";
import {motion} from "framer-motion";

export default function AnnouncementBar() {
  return (
    <div className="overflow-hidden sticky top-0 z-50 h-10 bg-primary-800 flex items-center">
      {/* Moving Text Container */}
      <motion.div
        animate={{x: ["0%", "-50%"]}}
        transition={{
          repeat: Infinity,
          duration: 50, // Speed of movement
          ease: "linear",
        }}
        className="flex whitespace-nowrap items-center">
        {/* We repeat the text 4 times to ensure a smooth seamless loop */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            <p className="text-[11px] font-black uppercase tracking-[0.25em] text-white px-10">
              SALE IS LIVE <span className="mx-4 text-black/30">•</span>
              GET 20% OFF YOUR FIRST ORDER <span className="mx-4 text-black/30">•</span>
              USE CODE:{" "}
              <span className="bg-white text-primary-900 px-2 py-0.5 rounded-sm ml-1">MOOD20</span>
            </p>
          </div>
        ))}
      </motion.div>

      {/* Subtle Shadow on the edges to make it look premium */}
      <div className="absolute inset-y-0 left-0 w-35 bg-linear-to-r from-black via-black/50 to-transparent scale-105 z-10" />
      <div className="absolute inset-y-0 right-0 w-35 bg-linear-to-l from-black via-black/50 to-transparent scale-105 z-10" />
    </div>
  );
}
