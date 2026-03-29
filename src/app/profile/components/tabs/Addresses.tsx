"use client";
import { MapPin, Plus } from "lucide-react";

export default function AddressesTab() {
  return (
    <section className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end border-b border-white/5 pb-8">
        <h2 className="text-[32px] font-black italic uppercase tracking-tighter leading-none">Shipping Addresses</h2>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl flex items-start gap-4">
          <MapPin className="w-5 h-5 text-primary-500 mt-1" />
          <div className="space-y-1">
            <p className="font-bold uppercase italic tracking-tight text-sm text-white/90">Main Residence</p>
            <p className="text-xs text-white/40 leading-relaxed">22 Al-Maadi Street, Cairo, Egypt</p>
          </div>
        </div>
        <button className="w-full py-4 border border-dashed border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white/20 hover:bg-white/5 transition-colors">
          Add New Address
        </button>
      </div>
    </section>
  );
}