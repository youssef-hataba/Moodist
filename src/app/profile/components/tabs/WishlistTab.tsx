"use client";
import Image from "next/image";
import { ShoppingCart, Trash2, Heart } from "lucide-react";

const wishlistItems = [
  { id: 1, name: "Nomad Oversized Hoodie", price: 2400, image: "/hoodies/solidfront.png", color: "Deep Black" },
  { id: 2, name: "Vanguard Tech Jacket", price: 3200, image: "/hoodies/solidfront.png", color: "Slate Grey" },
  { id: 3, name: "Quantum Cargo Pants", price: 2100, image: "/hoodies/solidfront.png", color: "Stealth Black" },
  { id: 4, name: "Chrono Cyber Tee", price: 1100, image: "/hoodies/solidfront.png", color: "Hyper White" },
];

export default function WishlistTab() {
  return (
    <section className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end border-b border-white/5 pb-8">
        <div className="flex items-center gap-4">
          <Heart className="w-6 h-6 text-white/20" />
          <h2 className="text-[32px] font-black italic uppercase tracking-tighter leading-none">Wishlist</h2>
        </div>
        <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">{wishlistItems.length} Saved Items</span>
      </div>

      {/* التعديل هنا: شبكة بتعرض 2 منتج على الموبايل و 3 على الشاشات الكبيرة */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {wishlistItems.map((item) => (
          <div key={item.id} className="group bg-white/[0.02] border border-white/5 rounded-3xl p-3 flex flex-col transition-all hover:bg-white/[0.03] hover:border-white/10 hover:-translate-y-1">
            <div className="aspect-[10/11] bg-black rounded-2xl overflow-hidden mb-3 relative flex-shrink-0">
              <Image 
                src={item.image} 
                alt={item.name} 
                fill 
                sizes="(max-w-768px) 50vw, 33vw"
                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" 
              />
              <button className="absolute top-2.5 right-2.5 p-2 bg-black/60 backdrop-blur-md rounded-full text-white/30 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col justify-between px-1">
              <div className="space-y-1.5 mb-4">
                <h3 className="text-[12px] font-bold uppercase italic tracking-tight leading-tight line-clamp-2 min-h-[32px]">
                  {item.name}
                </h3>
                <p className="text-[9px] text-white/30 uppercase tracking-widest">{item.color}</p>
              </div>
              
              <div className="flex justify-between items-center gap-2 pt-2 border-t border-white/5">
                <p className="text-md font-black tracking-tighter italic whitespace-nowrap">{item.price} EGP</p>
                <button className="p-2.5 bg-white text-black rounded-lg hover:scale-110 transition-transform flex-shrink-0">
                  <ShoppingCart className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}