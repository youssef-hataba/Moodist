"use client";
import Image from "next/image";

const orders = [
  { id: "MDST-9920", name: "Nomad Oversized Hoodie", size: "XL", color: "Deep Black", status: "In Transit", price: 2400 },
  { id: "MDST-8815", name: "Classic Heavy Tee", size: "L", color: "Slate Grey", status: "Delivered", price: 1200 },
];

export default function OrdersTab() {
  return (
    <section className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end border-b border-white/5 pb-8">
        <h2 className="text-[32px] font-black italic uppercase tracking-tighter leading-none">Recent Orders</h2>
        <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">{orders.length} Active Items</span>
      </div>
      
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="group bg-white/[0.02] border border-white/5 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-8 hover:bg-white/[0.04] transition-all">
            <div className="w-24 h-24 bg-black rounded-2xl overflow-hidden flex-shrink-0">
              <Image src="/hoodies/solidfront.png" alt="Product" width={100} height={100} className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex-1 space-y-2 text-center md:text-left">
              <h3 className="text-lg font-bold uppercase italic tracking-tight">{order.name}</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-[10px] text-white/40 font-bold uppercase tracking-widest">
                <span>Size: {order.size}</span>
                <span>Color: {order.color}</span>
                <span>ID: #{order.id}</span>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end gap-3">
              <span className={`px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] rounded-full border ${
                order.status === "Delivered" ? "bg-green-500/10 text-green-500 border-green-500/20" : "bg-primary-600/10 text-primary-500 border-primary-500/20"
              }`}>
                {order.status}
              </span>
              <p className="text-xl font-black tracking-tighter italic">{order.price} EGP</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}