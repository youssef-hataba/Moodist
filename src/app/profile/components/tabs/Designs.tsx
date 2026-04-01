"use client";
import { Box, Plus } from "lucide-react";

export default function DesignsTab() {
  return (
    <section className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end border-b border-white/5 pb-8">
        <h2 className="text-[32px] font-black italic uppercase tracking-tighter leading-none">Your Lab Archive</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="aspect-4/5 bg-white/2 border border-white/5 border-dashed rounded-3xl flex flex-col items-center justify-center gap-4 group cursor-pointer hover:bg-white/[0.04] transition-all">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Plus className="w-5 h-5 text-white/40" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Start New Creation</span>
        </div>
      </div>
    </section>
  );
}