"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // 1. استيراد Link
import { FaCartPlus } from "react-icons/fa6";
import AddToCart from "@/src/shared/assets/icons/Cart";
import { Star, Flame } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  price: string;
  currency: string;
  img: string;
  tag?: string | null;
  stock: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/`} className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_23%] min-w-0 group my-1 block">
      <motion.div
        whileHover="hover"
        initial="initial"
        className="w-full"
      >
        {/* Image Container */}
        <div className="relative aspect-[1/1.25] w-full overflow-hidden rounded-2xl bg-[#0a0a0a] ring-1 ring-white/5 transition-all duration-500 group-hover:ring-primary-500/20 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {product.tag && (
            <div className="absolute top-4 left-4 z-20">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full shadow-2xl transition-all duration-300 group-hover:border-primary-500/50 group-hover:bg-black/80">
                {product.tag === "BEST SELLER" && (
                  <>
                    <Star size={12} className="text-orange-400" fill="currentColor" />
                    <span className="text-white text-[10px] font-bold tracking-widest uppercase">
                      Best Seller
                    </span>
                  </>
                )}

                {product.tag === "NEW" && (
                  <>
                    <Flame size={12} className="text-red-500 " />
                    <span className="text-white text-[10px] font-bold tracking-widest uppercase">
                      New Drop
                    </span>
                  </>
                )}
              </div>
            </div>
          )}

          <Image
            src={product.img}
            alt={product.name}
            fill
            className="object-contain p-6 transition-transform duration-1000 ease-out group-hover:scale-110"
          />

          <motion.div
            variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }}
            className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[3px]">
            <AddToCart size={160} />
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="mt-6 px-1">
          <div className="flex justify-between items-center">
            <h3 className="text-white text-[14px] tracking-widest font-medium uppercase group-hover:text-primary-600 transition-colors">
              {product.name}
            </h3>
            
            {/* 3. منع انتشار الحدث (Propagation) عشان لو داس على السلة ميروحش لصفحة المنتج */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.preventDefault(); // بيمنع الـ Link إنه يشتغل
                e.stopPropagation(); // بيمنع وصول الضغطة للـ Link
                console.log("Added to cart!");
              }}
              className="text-white/40 hover:text-white transition-colors relative z-30">
              <FaCartPlus size={18} />
            </motion.button>
          </div>

          <div className="mt-4 flex justify-between items-end">
            <div className="flex items-baseline gap-1">
              <span className="text-white font-bold text-xl">{product.price}</span>
              <span className="text-[10px] text-white/30 uppercase">{product.currency}</span>
            </div>
            {product.stock <= 5 && (
              <p className="text-orange-500/80 text-[10px] font-bold tracking-tighter uppercase">
                Only {product.stock} Left
              </p>
            )}
          </div>

          <div className="mt-3 h-px w-full bg-white/5 relative overflow-hidden">
            <motion.div
              variants={{ initial: { x: "-101%" }, hover: { x: "0%" } }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-primary-500/40"
            />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}