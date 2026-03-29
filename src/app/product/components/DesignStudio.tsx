import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import {DesignOption, ProductData} from "../types/product";

interface Props {
  productData: ProductData;
  selectedDesign: DesignOption | null;
  setSelectedDesign: (d: DesignOption | null) => void;
  customImage: string | null;
  setCustomImage: (v: string | null) => void;
  setCustomScale: (v: number) => void;
  inputKey: number;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function DesignStudio({
  productData,
  selectedDesign,
  setSelectedDesign,
  customImage,
  setCustomImage,
  setCustomScale,
  inputKey,
  fileInputRef,
  handleFileUpload,
}: Props) {
  const [emblaRef] = useEmblaCarousel({align: "start", containScroll: "trimSnaps", dragFree: true});

  if (!productData.availableDesigns || productData.availableDesigns.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4 bg-black-900 py-4 pl-4 border border-white/5">
      <div className="flex justify-between items-center pr-6">
        <h3 className="text-[10px] uppercase tracking-[0.3em] text-primary-600 font-black italic">
          Design Studio
        </h3>

        <div className="flex gap-4 items-center">
          {selectedDesign && (
            <button
              onClick={() => {
                setSelectedDesign(null);
                setCustomImage(null);
              }}
              className="text-[8px] uppercase text-white/40 hover:text-white underline tracking-tighter">
              Remove Design (Go Blank)
            </button>
          )}

          <span className="text-[8px] uppercase tracking-widest text-white/20 italic">
            Select or upload
          </span>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {/* Upload */}
          <div className="flex-[0_0_140px] md:flex-[0_0_180px] min-w-0">
            <button
              onClick={() => fileInputRef.current?.click()}
              className={`relative w-full aspect-square border-2 border-dashed flex flex-col items-center justify-center gap-2 ${
                selectedDesign?.isCustom
                  ? "border-primary-600 bg-primary-600/5"
                  : "border-white/10 hover:border-white/30 transition-all duration-400"
              }`}>
              <input
                key={inputKey}
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept=".png"
                onChange={handleFileUpload}
              />
              <span
                className={`text-2xl ${selectedDesign?.isCustom ? "text-primary-600" : "opacity-30"}`}>
                +
              </span>
              <span className="text-[8px] uppercase font-black tracking-widest">Upload PNG</span>
              {customImage && (
                <div className="absolute top-2 right-2 w-2 h-2 bg-primary-600 rounded-full" />
              )}
            </button>
          </div>

          {/* Designs */}
          {productData.availableDesigns.map((design) => (
            <div key={design.id} className="flex-[0_0_140px] md:flex-[0_0_180px] min-w-0">
              <button
                onClick={() => {
                  setSelectedDesign(design);
                  setCustomImage(null);
                  setCustomScale(1);
                }}
                className={`relative w-full aspect-square border bg-[#0a0a0a] overflow-hidden ${
                  selectedDesign?.id === design.id && !selectedDesign.isCustom
                    ? "border-primary-600"
                    : "border-white/5 opacity-40 hover:opacity-100 transition-all duration-400"
                }`}>
                <Image src={design.thumb} alt={design.name} fill className="object-cover" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
