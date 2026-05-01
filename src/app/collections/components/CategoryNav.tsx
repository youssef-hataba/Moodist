"use client";

import Link from "next/link";

type Props = {
  activeCategory: string;
  categories: string[];
};

export default function CategoryNav({
  activeCategory,
  categories,
}: Props) {
  return (
    <nav className="flex gap-8 items-center border-l border-white/10 pl-8 no-scrollbar">
      {categories.map((cat) => (
        <Link
          key={cat}
          href={cat === "All" ? "/collections" : `/collections?category=${cat}`}
          className={`text-[9px] uppercase tracking-[0.3em] transition-all duration-300 relative ${
            activeCategory === cat
              ? "text-white"
              : "text-white/30 hover:text-white"
          }`}
        >
          {cat}
        </Link>
      ))}
    </nav>
  );
}