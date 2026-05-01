"use client";

import { Check, Heart } from "lucide-react";
import { IoMdCart } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { DesignOption } from "../types/product";

interface Props {
  product: any;
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

      {/* ADD TO CART */}
      <button
        disabled={!selectedSize || isAdding}
        onClick={handleAddToCart}
        className={`
          group relative flex-1 py-6 overflow-hidden transition-all duration-500 cursor-pointer
          ${
            !selectedSize
              ? "bg-white/10 cursor-not-allowed text-white/30"
              : isSuccess
              ? "bg-green-600 text-white"
              : "bg-white text-black active:scale-[0.96]"
          }
        `}
      >
        <div className="absolute inset-0 bg-primary-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

        <div className="relative z-10 flex items-center justify-center gap-2">
          <span className="text-[11px] font-black uppercase tracking-[0.3em]">
            {isAdding
              ? "Processing..."
              : isSuccess
              ? "Added"
              : !selectedSize
              ? "Select Fit"
              : selectedDesign
              ? "Add to Cart"
              : "Add Item"}
          </span>

          <AnimatePresence mode="wait">
            {isAdding ? (
              <motion.div
                key="loading"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
              />
            ) : isSuccess ? (
              <motion.div key="success" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                <Check size={18} />
              </motion.div>
            ) : (
              <motion.div key="cart" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <IoMdCart size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>

      {/* FAVORITE */}
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className="group relative px-6 py-6 border border-white/20"
      >
        <Heart
          className={`transition ${
            isFavorite ? "fill-red-500 text-red-500" : "text-white"
          }`}
        />
      </button>
    </div>
  );
}