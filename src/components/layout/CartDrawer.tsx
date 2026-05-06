"use client";

import { useCart } from "@/src/hooks/useCart";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/src/components/Button";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cartItems, loading, totalAmount, updateQuantity, removeItem } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md bg-[#050505] border-white/5 text-white p-0 flex flex-col">
        <SheetHeader className="p-6 border-b border-white/5">
          <SheetTitle className="text-white flex items-center gap-2">
            <ShoppingBag size={20} />
            YOUR BAG ({cartItems.length})
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center space-y-4 opacity-40">
              <ShoppingBag size={48} strokeWidth={1} />
              <p className="uppercase tracking-[0.2em] text-xs">Bag is empty</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 group">
                <div className="relative w-20 h-24 bg-white/5 rounded-xl overflow-hidden border border-white/5">
                  <Image
                    src={item.product.images[0]?.url || "/placeholder.png"}
                    alt={item.product.title}
                    fill
                    className="object-cover"
                  />
                  {item.customDesignUrl && (
                    <div className="absolute inset-0 flex items-center justify-center p-2">
                      <Image 
                        src={item.customDesignUrl} 
                        alt="Custom" 
                        width={40} 
                        height={40} 
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>

                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-tight line-clamp-1">
                      {item.product.title}
                    </h4>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">
                      {item.variant?.size} / {item.variant?.color}
                    </p>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="flex items-center gap-3 bg-white/5 rounded-lg p-1 border border-white/5">
                      <button 
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="p-1 hover:text-primary-500 transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:text-primary-500 transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-white/20 hover:text-red-500 transition-colors p-1"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>

                <div className="text-sm font-bold pt-1">
                  {(item.variant?.price || item.product.basePrice) * item.quantity} EGP
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-white/5 bg-white/[0.02] space-y-4">
            <div className="flex justify-between items-end">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Subtotal</span>
              <span className="text-xl font-bold tracking-tighter">{totalAmount} EGP</span>
            </div>
            
            <Link href="/checkout" onClick={onClose}>
              <Button variant="secondary" className="w-full py-6 group">
                <span className="uppercase tracking-[0.2em] text-xs font-bold">Secure Checkout</span>
              </Button>
            </Link>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
