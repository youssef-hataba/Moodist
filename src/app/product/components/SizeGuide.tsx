"use client";

const sizeData = [
  { size: "S", range: "60-70kg • 165cm" },
  { size: "M", range: "70-85kg • 175cm" },
  { size: "L", range: "85-100kg • 185cm" },
  { size: "XL", range: "100-115kg • 190cm" },
];

export default function UltraSimpleSize() {
  return (
    <section className="py-10 border-t border-white/5">
      <div className="max-w-2xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {sizeData.map((item) => (
            <div key={item.size} className="flex items-center gap-3">
              <span className="text-sm font-black text-primary-600">{item.size}</span>
              <span className="text-[10px] uppercase tracking-tighter text-white/40 font-medium">
                {item.range}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-[8px] uppercase tracking-[0.4em] text-white/20">
          Standard Oversized Fit Guide
        </p>
      </div>
    </section>
  );
}