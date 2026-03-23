import {ColorOption, DesignOption, ProductData} from "../types/product";
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
        <h1 className="text-[42px] font-black uppercase italic">{productData.name}</h1>
        <p className="text-2xl text-white/60">{productData.price} EGP</p>
      </header>

      <div className="space-y-8 border-t border-white/10 pt-10">
        {/* Colors */}
        <div className="space-y-6">
          <h3 className="text-[10px] uppercase text-white/30">01. Select Hue</h3>
          <div className="flex gap-4">
            {productData.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                className={`w-12 h-12 rounded-full border flex items-center justify-center ${
                  selectedColor.name === color.name
                    ? "border-primary-600 scale-110"
                    : "border-white/10"
                }`}>
                <div className="w-8 h-8 rounded-full" style={{backgroundColor: color.hex}} />
              </button>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="space-y-6">
          <h3 className="text-[10px] uppercase text-white/30">02. Select Fit</h3>
          <div className="grid grid-cols-5 gap-2">
            {productData.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`py-4 text-[11px] font-black border cursor-pointer ${
                  selectedSize === size
                    ? "bg-white text-black border-white"
                    : "bg-white/5 border-white/5 text-white/80"
                }`}>
                {size}
              </button>
            ))}
          </div>
        </div>
        <SizeGuide />
        <AddToCartButton
          selectedSize={selectedSize}
          selectedDesign={selectedDesign}
          isAdding={isAdding}
          isSuccess={isSuccess}
          handleAddToCart={handleAddToCart}
        />
      </div>
    </section>
  );
}
