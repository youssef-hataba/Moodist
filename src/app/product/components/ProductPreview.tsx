"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { DesignOption } from "../types/product";
import { Star, Flame } from "lucide-react";

interface Props {
  displayImage: string;
  selectedDesign: DesignOption | null;
  customImage: string | null;
  customScale: number;
  setCustomScale: (val: number) => void;
  tag?: string | null;
}

export default function ProductPreview({
  displayImage,
  selectedDesign,
  customImage,
  customScale,
  setCustomScale,
  tag="NEW",
}: Props) {
  return (
    <div className="relative aspect-16/10 md:aspect-video bg-black-900 overflow-hidden border border-white/5">
    {tag && (
        <div className="absolute top-6 left-6 z-30">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center gap-2 bg-black-300/20 text-white font-black backdrop-blur-md 
            border border-white/10 px-4 py-2 rounded-full shadow-2xl"
          >
            {tag === "BEST SELLER" && (
              <>
                <Star size={16} className="text-orange-400" fill="currentColor" />
                <span className="text-[12px] tracking-[0.2em] uppercase">
                  Best Seller
                </span>
              </>
            )}

            {tag === "NEW" && (
              <>
                <Flame size={16} className="text-red-500 " />
                <span className="text-[12px] tracking-[0.2em] uppercase">
                  New Drop
                </span>
              </>
            )}
          </motion.div>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={displayImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="relative w-full h-full"
        >
          <Image src={displayImage} alt="Preview" fill className="object-contain" priority />

          {selectedDesign?.isCustom && customImage && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                style={{ scale: customScale }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: customScale, opacity: 1 }}
                className="w-[26%] aspect-square flex items-center justify-center mt-[-3%]"
              >
                <img src={customImage} className="max-w-full max-h-full object-contain" alt="Custom Graphic" />
              </motion.div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Control Panel (Size Slider) */}
      {selectedDesign?.isCustom && customImage && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center w-[90%] max-w-sm z-20">
          <div className="mb-4 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/5 rounded-sm">
            <p className="text-[9px] text-white/60 font-medium text-center uppercase tracking-wider">
              <span className="text-primary-600">Note:</span> Our studio will manually refine
              & optimize your graphic&apos;s quality and placement before production.
            </p>
          </div>

          <div className="bg-black/80 backdrop-blur-xl p-4 border border-white/10 rounded-full flex items-center gap-4 w-full shadow-2xl">
            <span className="text-[9px] uppercase font-bold text-white/40">Size</span>
            <input
              type="range"
              min="0.5"
              max="1.6"
              step="0.01"
              value={customScale}
              onChange={(e) => setCustomScale(parseFloat(e.target.value))}
              className="flex-1 accent-primary-600 h-1 cursor-pointer"
            />
            <span className="text-[9px] font-mono text-primary-600">
              {Math.round(customScale * 100)}%
            </span>
          </div>
        </div>
      )}
    </div>
  );
}