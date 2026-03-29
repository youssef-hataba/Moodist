"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Package, Settings, MapPin, Heart, LogOut, Box, ChevronRight, User } from "lucide-react";
import OrdersTab from "./components/tabs/Orders";
import DesignsTab from "./components/tabs/Designs";
import AddressesTab from "./components/tabs/Addresses";
import SettingsTab from "./components/tabs/SettingsTab";
import WishlistTab from "./components/tabs/WishlistTab";

const menuItems = [
  { id: "orders", label: "My Orders", icon: Package },
  { id: "designs", label: "My Custom Lab", icon: Box },
  { id: "wishlist", label: "Wishlist", icon: Heart },
  { id: "addresses", label: "Addresses", icon: MapPin },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("orders");

  const renderContent = () => {
    switch (activeTab) {
      case "orders": return <OrdersTab />;
      case "designs": return <DesignsTab />;
      case "addresses": return <AddressesTab />;
      case "wishlist": return <WishlistTab />; 
    case "settings": return <SettingsTab />;
      default: return (
        <div className="flex flex-col items-center justify-center h-full text-white/10 italic font-black text-4xl uppercase">
          Coming Soon
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        <aside className="w-full lg:w-80 space-y-10">
          <header className="space-y-4">
            <div className="relative w-24 h-24">
              <div className="relative w-full h-full rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                <User className="w-10 h-10 text-white/20" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-black italic uppercase tracking-tighter leading-none">Youssef J.</h1>
              <p className="text-white/40 text-xs mt-2 font-medium tracking-[0.2em] uppercase">Member since 2024</p>
            </div>
          </header>

          <nav className="flex flex-col gap-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={cn(
                    "flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 group",
                    activeTab === item.id 
                      ? "bg-white text-black scale-[1.02]" 
                      : "hover:bg-white/5 text-white/40 hover:text-white"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <Icon className={cn("w-5 h-5", activeTab === item.id ? "text-black" : "text-white/20")} />
                    <span className="text-[11px] font-black uppercase tracking-widest">{item.label}</span>
                  </div>
                  <ChevronRight className={cn("w-4 h-4 transition-transform group-hover:translate-x-1", activeTab === item.id ? "text-black" : "text-white/10")} />
                </button>
              );
            })}
            <button className="flex items-center gap-4 px-6 py-4 text-red-500/60 hover:text-red-500 transition-colors mt-8 group">
              <LogOut className="w-5 h-5" />
              <span className="text-[11px] font-black uppercase tracking-widest">Logout Account</span>
            </button>
          </nav>
        </aside>

        <main className="flex-1 bg-white/[0.02] border border-white/5 rounded-[40px] p-8 md:p-12 min-h-[700px] backdrop-blur-sm">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}