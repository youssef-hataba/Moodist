"use client";

import { useState, useMemo, useRef, ChangeEvent } from "react";
import axios from "axios";
import api from "@/src/lib/api";
import ConfigPanel from "./ConfigPanel";
import ProductPreview from "./ProductPreview";
import DesignStudio from "./DesignStudio";
import { ColorOption, DesignOption } from "../types/product";

type Props = {
  productData: any;
};

export default function ProductConfigurator({ productData }: Props) {
  const [selectedColor, setSelectedColor] = useState<ColorOption | null>(
    productData.colors?.[0] || null
  );

  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedDesign, setSelectedDesign] = useState<DesignOption | null>(null);
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [customScale, setCustomScale] = useState<number>(1);
  const [inputKey, setInputKey] = useState<number>(0);

  const [isAdding, setIsAdding] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // =========================
  // FILE UPLOAD
  // =========================
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file && file.type === "image/png") {
      const reader = new FileReader();

      reader.onload = (event) => {
        const result = event.target?.result as string;

        setCustomImage(result);
        setSelectedDesign({
          id: "custom",
          name: "Custom Graphic",
          thumb: "",
          isCustom: true,
        });

        setCustomScale(1);
      };

      reader.readAsDataURL(file);
    } else if (file) {
      alert("Please upload a valid .png file");
    }

    setInputKey((prev) => prev + 1);
  };

  // =========================
  // ADD TO CART (ONLY PLACE)
  // =========================
  const handleAddToCart = async () => {
    if (!selectedSize || !selectedColor) return;

    try {
      setIsAdding(true);
      setIsSuccess(false);

      // Find the correct variant ID
      const variant = productData.variants.find(
        (v: any) => v.size === selectedSize && v.color === selectedColor.name
      );

      if (!variant) {
        console.error("Variant not found");
        return;
      }

      await api.post("/cart/add", {
        productId: productData.id,
        variantId: variant.id,
        quantity: 1,
        customDesignUrl: customImage, // Sending the base64/url of the custom design
        customText: "", // Add field for custom text if needed
      });

      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 2000);
    } catch (err) {
      console.error("Add to cart failed", err);
    } finally {
      setIsAdding(false);
    }
  };

  // =========================
  // DISPLAY IMAGE LOGIC
  // =========================
  const displayImage = useMemo(() => {
    if (!selectedColor) return "";

    if (selectedDesign?.isCustom) return selectedColor.backImage;
    if (selectedDesign?.fullRender) return selectedDesign.fullRender;

    return selectedColor.baseImage;
  }, [selectedDesign, selectedColor]);

  const hasAvailableDesigns = productData?.availableDesigns?.length > 0;

  if (!selectedColor) return null;

  return (
    <div className="px-4 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 section-padding">
      
      {/* LEFT */}
      <section className="lg:col-span-8 space-y-8">
        <ProductPreview
          displayImage={displayImage}
          selectedDesign={selectedDesign}
          customImage={customImage}
          customScale={customScale}
          setCustomScale={setCustomScale}
          tag={productData?.tag}
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

      {/* RIGHT */}
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