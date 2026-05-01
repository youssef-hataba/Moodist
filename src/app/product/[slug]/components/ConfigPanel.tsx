"use client";

import { ColorOption, DesignOption, ProductData } from "../../types/product";
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
      
      {/* HEADER */}
      <header className="space-y-4">
        <h1 className="text-[42px] font-black uppercase italic tracking-tighter leading-none">
          {productData.name}
        </h1>

        <p className="text-2xl text-white/60">
          {productData.price} EGP
        </p>

        <p className="text-sm text-white/50 leading-relaxed max-w-md">
          {productData.description}
        </p>
      </header>

      {/* COLOR */}
      <div className="space-y-6 border-t border-white/10 pt-10">
        <div className="flex justify-between items-end">
          <h3 className="text-[10px] uppercase text-white/30 tracking-widest">
            01. Select Hue
          </h3>
          <span className="text-[11px] font-bold uppercase italic">
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
                  ? "border-white scale-110"
                  : "border-white/10 hover:border-white/40"
              }`}
            >
              <div
                className="w-8 h-8 rounded-full"
                style={{ backgroundColor: color.hex }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* SIZE */}
      <div className="space-y-6">
        <h3 className="text-[10px] uppercase text-white/30 tracking-widest">
          02. Select Fit
        </h3>

        <div className="grid grid-cols-5 gap-2">
          {productData.sizes.map((size) => {
            const isOutOfStock =
              selectedColor.outOfStockSizes?.includes(size);

            return (
              <button
                key={size}
                disabled={isOutOfStock}
                onClick={() => setSelectedSize(size)}
                className={`py-4 text-[11px] font-black border transition-all duration-200 ${
                  isOutOfStock
                    ? "opacity-20 cursor-not-allowed"
                    : selectedSize === size
                    ? "bg-white text-black"
                    : "bg-white/5 hover:border-white/40"
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* ACTIONS */}
      <div className="space-y-4">
        <SizeGuide />

        <AddToCartButton
          product={productData}
          selectedSize={selectedSize}
          selectedDesign={selectedDesign}
          isAdding={isAdding}
          isSuccess={isSuccess}
          handleAddToCart={handleAddToCart}
        />

        <p className="text-[9px] text-center text-white/20 uppercase tracking-[0.2em]">
          Ships within 3-5 business days • Limited Edition
        </p>
      </div>
    </section>
  );
}