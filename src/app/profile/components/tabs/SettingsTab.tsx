"use client";
import { useState } from "react";
import { Bell, Lock, User, Eye, EyeOff } from "lucide-react";

export default function SettingsTab() {
  const [showPass, setShowPass] = useState(false);

  return (
    <section className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="border-b border-white/5 pb-8">
        <h2 className="text-[32px] font-black italic uppercase tracking-tighter leading-none">Account Settings</h2>
      </div>

      <div className="space-y-10">
        {/* Profile Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-white/30">
            <User className="w-4 h-4" />
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em]">Personal Information</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase text-white/20 ml-4">Full Name</label>
              <input type="text" defaultValue="Youssef J." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-white/20 transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase text-white/20 ml-4">Email Address</label>
              <input type="email" defaultValue="youssef@moodist.eg" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-white/20 transition-colors" />
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-white/30">
            <Lock className="w-4 h-4" />
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em]">Security & Password</h3>
          </div>
          <div className="relative max-w-md">
            <input 
              type={showPass ? "text" : "password"} 
              placeholder="Enter new password" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-white/20 transition-colors"
            />
            <button 
              onClick={() => setShowPass(!showPass)}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
            >
              {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-white/30">
            <Bell className="w-4 h-4" />
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em]">Notifications</h3>
          </div>
          <div className="flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
            <div className="space-y-1">
              <p className="text-sm font-bold uppercase italic tracking-tight">Order Status Updates</p>
              <p className="text-[10px] text-white/30 tracking-widest uppercase">Receive SMS and Email notifications</p>
            </div>
            <div className="w-12 h-6 bg-primary-600 rounded-full relative cursor-pointer">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
            </div>
          </div>
        </div>

        <div className="pt-6">
          <button className="w-full md:w-auto px-12 py-4 bg-white text-black text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl hover:scale-105 transition-transform">
            Save Changes
          </button>
        </div>
      </div>
    </section>
  );
}