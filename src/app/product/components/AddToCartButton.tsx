"use client";

import {Check, Heart} from "lucide-react"; // استيراد Heart
import {IoMdCart} from "react-icons/io";
import {motion, AnimatePresence} from "framer-motion";
import {DesignOption} from "../types/product";
import {useState} from "react";

interface Props {
  selectedSize: string;
  selectedDesign: DesignOption | null;
  isAdding: boolean;
  isSuccess: boolean;
  handleAddToCart: () => void;
}

export default function AddToCartButton({
  selectedSize,
  selectedDesign,
  isAdding,
  isSuccess,
  handleAddToCart,
}: Props) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="flex gap-2 w-full">
      {/* Add to Cart Button */}
      <button
        disabled={!selectedSize || isAdding}
        onClick={handleAddToCart}
        className={`
          group relative flex-1 py-6 overflow-hidden transition-all duration-500
          ${
            !selectedSize
              ? "bg-white/10 cursor-not-allowed grayscale text-white/30"
              : isSuccess
                ? "bg-green-600 text-white"
                : "bg-white text-black active:scale-[0.96]"
          }
        `}>
        {/* Background Slide Effect */}
        <div className="absolute inset-0 bg-primary-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

        <div className="relative z-10 flex items-center justify-center gap-2">
          <span className="text-[11px] font-black uppercase tracking-[0.3em] transition-colors duration-500 group-hover:text-black">
            {isAdding
              ? "Processing..."
              : isSuccess
                ? "Added to Cart"
                : !selectedSize
                  ? "Select Fit"
                  : selectedDesign
                    ? "Add to Syndicate"
                    : "Add Blank Hoodie"}
          </span>

          <AnimatePresence mode="wait">
            {isAdding ? (
              <motion.div
                key="loading"
                animate={{rotate: 360}}
                transition={{repeat: Infinity, duration: 1, ease: "linear"}}
                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
              />
            ) : isSuccess ? (
              <motion.div key="success" initial={{scale: 0}} animate={{scale: 1}}>
                <Check size={18} strokeWidth={3} />
              </motion.div>
            ) : (
              <motion.div key="cart-icon" initial={{opacity: 0}} animate={{opacity: 1}}>
                <IoMdCart size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>

      {/* Favorite Button */}
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className="group relative px-6 py-6 border border-white/20 bg-transparent overflow-hidden transition-all duration-500 hover:border-primary-600">
        {/* Background Hover Effect for Favorite */}
        <div className="absolute inset-0 bg-primary-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

        <div className="relative z-10">
          <Heart
            size={20}
            className={`transition-colors duration-500 ${isFavorite ? "fill-primary-500 text-primary-500 group-hover:fill-white group-hover:text-white" : "text-white group-hover:text-white"}`}
          />
        </div>
      </button>
    </div>
  );
}
