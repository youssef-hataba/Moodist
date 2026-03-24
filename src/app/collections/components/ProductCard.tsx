"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: string;
  img: string;
}

interface ProductCardProps {
  product: Product;
  isFeatured?: boolean;
}

export default function ProductCard({ product, isFeatured }: ProductCardProps) {
  return (
    <Link href={`/product`} className="block w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`group cursor-pointer will-change-transform w-full overflow-hidden ${
          isFeatured ? "max-w-100" : "max-w-[320px]"
        }`}
      >
        <div 
          className={`relative overflow-hidden bg-[#111] mb-5 transition-all duration-700 ease-in-out
            ${isFeatured ? "aspect-[3/4.1]" : "aspect-3/4"}`}
        >
          <Image
            src={product.img}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-1000 ease-[0.16, 1, 0.3, 1] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
        </div>

        <div className="flex justify-between items-start px-1">
          <div className="transition-all duration-500 transform group-hover:-translate-y-1">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1 text-white/90">
              {product.name}
            </h3>
            <p className="text-[11px] text-white/50 font-serif italic tracking-wider">
              {product.price} EGP
            </p>
          </div>

          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
            <span className="text-[10px] uppercase tracking-tighter border-b border-primary-600 text-primary-600">
              Details
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}