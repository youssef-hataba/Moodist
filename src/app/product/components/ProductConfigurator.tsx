"use client";

import { useState, useMemo, useRef, ChangeEvent } from "react";
import { ColorOption, DesignOption } from "../types/product";
import ConfigPanel from "./ConfigPanel";
import ProductPreview from "./ProductPreview";
import DesignStudio from "./DesignStudio";
import { productData } from "../data/productData";

export default function ProductConfigurator() {
  const [selectedColor, setSelectedColor] = useState<ColorOption>(productData.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedDesign, setSelectedDesign] = useState<DesignOption | null>(null);
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [customScale, setCustomScale] = useState<number>(1);
  const [inputKey, setInputKey] = useState<number>(0);
  const [isAdding, setIsAdding] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "image/png") {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setCustomImage(result);
        setSelectedDesign({ id: "custom", name: "Custom Graphic", thumb: "", isCustom: true });
        setCustomScale(1);
      };
      reader.readAsDataURL(file);
    } else if (file) {
      alert("Please upload a valid .png file");
    }
    setInputKey((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 2000);
    }, 1000);
  };

  const displayImage = useMemo(() => {
    if (selectedDesign?.isCustom) return selectedColor.backImage;
    if (selectedDesign?.fullRender) return selectedDesign.fullRender;
    return selectedColor.baseImage;
  }, [selectedDesign, selectedColor]);

  const hasAvailableDesigns = productData.availableDesigns && productData.availableDesigns.length > 0;

  return (
    <div className="px-4 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 section-padding">
      <section className="lg:col-span-8 space-y-8">
        <ProductPreview
          displayImage={displayImage}
          selectedDesign={selectedDesign}
          customImage={customImage}
          customScale={customScale}
          setCustomScale={setCustomScale}
        />

        {hasAvailableDesigns && (
          <DesignStudio
            productData={productData}
            selectedDesign={selectedDesign}
            setSelectedDesign={setSelectedDesign}
            customImage={customImage}
            setCustomImage={setCustomImage}
            setCustomScale={setCustomScale}
            inputKey={inputKey}
            fileInputRef={fileInputRef}
            handleFileUpload={handleFileUpload}
          />
        )}
      </section>

      <ConfigPanel
        productData={productData}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        selectedDesign={selectedDesign}
        isAdding={isAdding}
        isSuccess={isSuccess}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
}