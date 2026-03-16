"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFAB() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Trigger visibility after 400px of scrolling
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-10 right-10 z-100">
      <AnimatePresence>
        {isVisible && (
          <motion.a
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/201234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-16 h-16 bg-primary-500 rounded-full shadow-[0_20px_40px_rgba(239,68,68,0.3)] group"
          >
            {/* Elegant Luxury Ripples - Runs 3 times only */}
            {[...Array(2)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ 
                  opacity: [0, 0.3, 0], 
                  scale: [1, 1.5, 2] 
                }}
                transition={{ 
                  duration: 2,
                  repeat: 2, 
                  delay: i * 0.4, 
                  ease: "easeOut" 
                }}
                className="absolute inset-0 rounded-full bg-primary-500 pointer-events-none"
              />
            ))}

            {/* Main Icon with subtle depth */}
            <FaWhatsapp size={28} className="text-white relative z-10 drop-shadow-md" />

            {/* Premium Internal Shine */}
            <div className="absolute inset-0 rounded-full bg-linear-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Tooltip Label */}
            <span className="absolute right-[120%] bg-white text-black text-[12px] font-bold py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-2xl translate-x-4 group-hover:translate-x-0">
              Order via WhatsApp
            </span>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}