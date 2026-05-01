"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

type Category = {
  id: string;
  name: string;
  slug: string;
  image: string;
  description?: string;
};

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/categories");
        setCategories(res.data);
      } catch (err) {
        console.error("Failed to fetch categories", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="text-white text-center py-20">
        Loading categories...
      </div>
    );
  }

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
              href={`/shop/${cat.slug}`}
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
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-contain p-12 opacity-50 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>

              <div className="absolute inset-x-0 bottom-0 p-10 z-20">
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">
                  {cat.name}
                </h3>

                <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}