"use client";
import {motion} from "framer-motion";
import Image from "next/image";
import AddToCart from "../shared/assets/icons/Cart";
import {FaCartPlus} from "react-icons/fa6";
import {Button} from "./Button";

const products = [
  {
    id: 1,
    name: "Signature Hoodie",
    price: "1,200",
    currency: "EGP",
    img: "/hoodies/solidfront.png",
  },
  {id: 2, name: "Urban Sweatpants", price: "800", currency: "EGP", img: "/hoodies/solidfront.png"},
  {
    id: 3,
    name: "Essential Round Tee",
    price: "450",
    currency: "EGP",
    img: "/hoodies/solidfront.png",
  },
  {id: 4, name: "Box Fit Heavy", price: "600", currency: "EGP", img: "/hoodies/solidfront.png"},
];

export default function CleanProducts() {
  return (
    <section className="section-padding bg-black">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-18">
          <motion.h2
            initial={{opacity: 0, letterSpacing: "0.1em"}}
            whileInView={{opacity: 1, letterSpacing: "0.15em"}}
            transition={{duration: 1}}
            className="text-[38px] font-bold font-serif italic text-transparent bg-clip-text bg-radial
              from-white to-white/10">
            The <span className="">Core</span> Collection
          </motion.h2>
          <div className="h-px w-[20%] bg-black-800 mx-auto mt-4" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover="hover"
              initial="initial"
              className="group cursor-pointer">
              {/* Image Container with Cinematic Shadow */}
              <div className="relative aspect-[1/1.25] w-full overflow-hidden rounded-2xl bg-[#0a0a0a] ring-1 ring-white/5 transition-all duration-500 group-hover:ring-primary-500/20 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-contain p-6 transition-transform duration-1000 ease-out group-hover:scale-110"
                />

                {/* Overaly Lottie/Icon */}
                <motion.div
                  variants={{
                    initial: {y: 20, opacity: 0},
                    hover: {y: 0, opacity: 1},
                  }}
                  transition={{duration: 0.4, ease: "easeOut"}}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity">
                  <AddToCart size={160} />
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="mt-6 px-1">
                {/* Header: Name & Add Icon */}
                <div className="flex justify-between items-center">
                  <h3 className="text-white text-[15px] tracking-[0.12em] font-medium uppercase">
                    {product.name}
                  </h3>

                  {/* Small Interactive Add Icon */}
                  <motion.button
                    whileHover={{scale: 1.1, color: "#fff"}}
                    whileTap={{scale: 0.9}}
                    className="transition-all text-white cursor-pointer">
                    <FaCartPlus size={18} />
                  </motion.button>
                </div>

                {/* Price & Tagline - Lower Section */}
                <div className="mt-3 flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-white/30 text-[10px] font-light tracking-widest uppercase">
                      Premium Collection
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-white font-medium text-lg tracking-tighter">
                        {product.price}
                      </span>
                      <span className="text-[9px] text-white/30 uppercase tracking-tighter">
                        {product.currency}
                      </span>
                    </div>
                  </div>

                  {/* Optional: Subtle Detail */}
                  <span className="text-[9px] text-white/10 italic">In Stock</span>
                </div>

                {/* Modern Underline Decor */}
                <div className="mt-2 h-px w-full bg-white/5 relative overflow-hidden">
                  <motion.div
                    variants={{
                      initial: {x: "-100%"},
                      hover: {x: "0%"},
                    }}
                    className="absolute inset-0 bg-primary-500/20"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Action */}
        <div className="mt-20 text-center">
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
