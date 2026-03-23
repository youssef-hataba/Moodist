"use client";
import React, {useCallback, useEffect, useState} from "react";
import useEmblaCarousel from "embla-carousel-react";
import {EmblaCarouselType} from "embla-carousel";
import {motion} from "framer-motion";
import Image from "next/image";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {Button} from "../Button";
import ProductCard, { Product } from "./ProductCard";

interface ProductCarouselProps {
  title: string;
  highlightText?: string;
  products: Product[];
  viewAllLink?: string;
}

export default function ProductCarousel({ 
  title, 
  highlightText = "Core", 
  products, 
  viewAllLink = "/shop" 
}: ProductCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({align: "start", loop: false, dragFree: true});
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const updateState = () => {
      onSelect(emblaApi);
    };
    updateState();

    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("reInit", updateState);
      emblaApi.off("select", updateState);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="section-padding bg-black overflow-hidden relative pb-10">
      <div className="container mx-auto px-4">
        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
          <div className="w-full">
            <motion.h2
              initial={{opacity: 0, x: -20}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              className="text-[42px] font-bold font-serif italic text-transparent bg-clip-text  bg-radial from-white to-white/10">
              {title} <span className="text-white/70">{highlightText}</span>
            </motion.h2>
          </div>

          {/* Carousel Arrows */}
          {(prevBtnEnabled || nextBtnEnabled) && (
            <div className="flex gap-3 justify-end w-full">
              <button
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
                className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all ${
                  prevBtnEnabled
                    ? "hover:border-primary-500 hover:text-primary-500 text-white"
                    : "opacity-20 text-white cursor-not-allowed"
                }`}>
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
                className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all ${
                  nextBtnEnabled
                    ? "hover:border-primary-500 hover:text-primary-500 text-white"
                    : "opacity-20 text-white cursor-not-allowed"
                }`}>
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Embla Viewport */}
        <div className="overflow-hidden cursor-pointer active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="mt-18 text-center">
          <Button variant="secondary" className="text-white py-3 tracking-widest text-sm">
            View All Products
            <Image
              alt="Arrow"
              src="/icons/SwipeArrow.gif"
              width={24}
              height={24}
              className="rotate-90 invert grayscale group-hover:grayscale-0 group-hover:opacity-100 opacity-40 transition-all duration-500"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
