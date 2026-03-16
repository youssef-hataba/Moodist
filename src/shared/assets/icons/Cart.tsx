"use client";
import Lottie from "lottie-react";
import animationData from "@/public/icons/animated/cart.json";

export default function AddToCart({ size = 150 }) {
  return (
    <div style={{ width: size}} className="border border-gray-500/50 rounded hover:scale-110 transition-transform duration-300">
      <Lottie 
        animationData={animationData} 
        loop={true} 
        autoplay={true}
        className="cursor-pointer"
      />
    </div>
  );
}