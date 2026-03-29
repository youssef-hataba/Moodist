"use client";

import { ColorOption, DesignOption, ProductData } from "../types/product";
import AddToCartButton from "./AddToCartButton";
import SizeGuide from "./SizeGuide";

interface Props {
  productData: ProductData;
  selectedColor: ColorOption;
  setSelectedColor: (c: ColorOption) => void;
  selectedSize: string;
  setSelectedSize: (s: string) => void;
  selectedDesign: DesignOption | null;
  isAdding: boolean;
  isSuccess: boolean;
  handleAddToCart: () => void;
}

export default function ConfigPanel({
  productData,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
  selectedDesign,
  isAdding,
  isSuccess,
  handleAddToCart,
}: Props) {
  return (
    <section className="lg:col-span-4 space-y-12">
      <header className="space-y-4">
        <h1 className="text-[42px] font-black uppercase italic tracking-tighter leading-none">
          {productData.name}
        </h1>
        <p className="text-2xl text-white/60">{productData.price} EGP</p>
        
        <div className="pt-2">
          <p className="text-sm text-white/50 leading-relaxed max-w-md">
            {productData.description || "Premium heavyweight fabric engineered for the perfect oversized fit. Crafted with 100% high-grade Egyptian cotton for maximum comfort and durability."}
          </p>
        </div>
      </header>

      <div className="space-y-8 border-t border-white/10 pt-10">
        <div className="space-y-6">
          <div className="flex justify-between items-end">
            <h3 className="text-[10px] uppercase text-white/30 tracking-widest">01. Select Hue</h3>
            <span className="text-[11px] font-bold text-white/90 uppercase italic">
              {selectedColor.name}
            </span>
          </div>
          <div className="flex gap-4">
            {productData.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  selectedColor.name === color.name
                    ? "border-white scale-110 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    : "border-white/10 hover:border-white/40"
                }`}
              >
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: color.hex }} />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-[10px] uppercase text-white/30 tracking-widest">02. Select Fit</h3>
          <div className="grid grid-cols-5 gap-2">
            {productData.sizes.map((size) => {
              const isOutOfStock = selectedColor.outOfStockSizes?.includes(size);
              
              return (
                <button
                  key={size}
                  disabled={isOutOfStock}
                  onClick={() => setSelectedSize(size)}
                  className={`relative py-4 text-[11px] font-black border transition-all duration-200 overflow-hidden ${
                    isOutOfStock 
                      ? "opacity-20 cursor-not-allowed border-white/5" 
                      : selectedSize === size
                        ? "bg-white text-black border-white scale-[1.02]"
                        : "bg-white/5 border-white/5 text-white/80 hover:border-white/40"
                  }`}
                >
                  {size}
                  {isOutOfStock && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[120%] h-[1px] bg-white/40 rotate-45" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          <SizeGuide />
          <AddToCartButton
            selectedSize={selectedSize}
            selectedDesign={selectedDesign}
            isAdding={isAdding}
            isSuccess={isSuccess}
            handleAddToCart={handleAddToCart}
          />
          <p className="text-[9px] text-center text-white/20 uppercase tracking-[0.2em] pt-2">
            Ships within 3-5 business days • Limited Edition
          </p>
        </div>
      </div>
    </section>
  );
}