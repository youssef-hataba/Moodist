"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/src/hooks/useCart";
import { useAuth } from "@/src/hooks/useAuth";
import api from "@/src/lib/api";
import { Button } from "@/src/components/Button";
import { CreditCard, Truck, CheckCircle2, ChevronLeft, MapPin, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const { isLoggedIn, loading: authLoading } = useAuth();
  const { cartItems, totalAmount, loading: cartLoading } = useCart();
  
  const [addresses, setAddresses] = useState<any[]>([]);
  const [selectedAddressId, setSelectedAddressId] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"COD" | "CARD">("COD");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState<any>(null);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const res = await api.get("/addresses");
        setAddresses(res.data);
        if (res.data.length > 0) {
          const defaultAddr = res.data.find((a: any) => a.isDefault) || res.data[0];
          setSelectedAddressId(defaultAddr.id);
        }
      } catch (err) {
        console.error("Failed to fetch addresses", err);
      }
    };
    fetchAddresses();
  }, []);

  // Auth Protection
  useEffect(() => {
    if (!authLoading && !isLoggedIn) {
      router.push("/login?redirect=/checkout");
    }
  }, [isLoggedIn, authLoading, router]);

  if (authLoading || cartLoading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <Loader2 className="text-primary-500 animate-spin" size={48} />
      </div>
    );
  }

  const handlePlaceOrder = async () => {
    if (!selectedAddressId) {
      alert("Please select a shipping address");
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await api.post("/orders", {
        addressId: selectedAddressId,
        paymentMethod: paymentMethod,
      });
      setOrderSuccess(res.data);
    } catch (err) {
      console.error("Order failed", err);
      alert("Failed to place order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderSuccess) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6 pt-32">
        <div className="max-w-md w-full bg-white/5 border border-white/10 rounded-3xl p-10 text-center space-y-6">
          <div className="w-20 h-20 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="text-primary-500" size={40} />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold uppercase tracking-tighter">Order Confirmed!</h1>
            <p className="text-white/40 text-sm">Your order #{orderSuccess.orderNumber} has been placed successfully.</p>
          </div>
          <div className="pt-4">
            <Link href="/">
              <Button variant="secondary" className="w-full py-6">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 pt-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Forms */}
        <div className="lg:col-span-7 space-y-10">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 hover:bg-white/5 rounded-full transition-colors">
              <ChevronLeft size={20} />
            </Link>
            <h1 className="text-4xl font-bold uppercase tracking-tighter">Checkout</h1>
          </div>

          {/* Shipping Address */}
          <section className="space-y-6">
            <div className="flex justify-between items-end px-2">
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">Shipping Address</h2>
              <button className="text-[9px] uppercase tracking-widest text-primary-500 hover:text-white transition-colors">+ Add New</button>
            </div>
            
            <div className="grid gap-4">
              {addresses.length === 0 ? (
                <div className="bg-white/5 border border-dashed border-white/10 rounded-2xl p-8 text-center space-y-3">
                  <MapPin className="mx-auto text-white/20" size={24} />
                  <p className="text-xs text-white/40 uppercase tracking-widest">No addresses found</p>
                </div>
              ) : (
                addresses.map((addr) => (
                  <div 
                    key={addr.id}
                    onClick={() => setSelectedAddressId(addr.id)}
                    className={`p-6 rounded-2xl border transition-all cursor-pointer flex gap-4 ${
                      selectedAddressId === addr.id ? 'bg-primary-500/10 border-primary-500/50 shadow-[0_0_20px_rgba(239,68,68,0.1)]' : 'bg-white/5 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      selectedAddressId === addr.id ? 'border-primary-500 bg-primary-500' : 'border-white/20'
                    }`}>
                      {selectedAddressId === addr.id && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold uppercase">{addr.title}</span>
                        {addr.isDefault && <span className="text-[8px] bg-white/10 px-2 py-0.5 rounded text-white/60 uppercase">Default</span>}
                      </div>
                      <p className="text-xs text-white/40 mt-1">{addr.street}, {addr.city}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>

          {/* Payment Method */}
          <section className="space-y-6">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold px-2">Payment Method</h2>
            <div className="grid grid-cols-2 gap-4">
              <div 
                onClick={() => setPaymentMethod("COD")}
                className={`p-6 rounded-2xl border transition-all cursor-pointer space-y-4 ${
                  paymentMethod === "COD" ? 'bg-primary-500/10 border-primary-500/50' : 'bg-white/5 border-white/5 hover:border-white/20'
                }`}
              >
                <Truck className={paymentMethod === "COD" ? "text-primary-500" : "text-white/20"} />
                <div>
                  <p className="text-sm font-bold uppercase">Cash on Delivery</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Pay when you receive</p>
                </div>
              </div>
              
              <div 
                onClick={() => setPaymentMethod("CARD")}
                className={`p-6 rounded-2xl border transition-all cursor-pointer space-y-4 ${
                  paymentMethod === "CARD" ? 'bg-primary-500/10 border-primary-500/50' : 'bg-white/5 border-white/5 hover:border-white/20'
                }`}
              >
                <CreditCard className={paymentMethod === "CARD" ? "text-primary-500" : "text-white/20"} />
                <div>
                  <p className="text-sm font-bold uppercase">Online Payment</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Credit / Debit Card</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Side: Order Summary */}
        <div className="lg:col-span-5">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sticky top-32 space-y-8">
            <h3 className="text-xl font-bold uppercase tracking-tighter">Order Summary</h3>
            
            <div className="space-y-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative w-16 h-20 bg-white/5 rounded-xl overflow-hidden border border-white/5 flex-shrink-0">
                    <Image src={item.product.images[0]?.url} alt={item.product.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className="text-xs font-bold uppercase">{item.product.title}</h4>
                    <p className="text-[9px] text-white/40 uppercase mt-1">{item.variant?.size} / {item.variant?.color} × {item.quantity}</p>
                    <p className="text-xs font-bold mt-1">{(item.variant?.price || item.product.basePrice) * item.quantity} EGP</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex justify-between text-xs uppercase tracking-widest">
                <span className="text-white/40">Subtotal</span>
                <span>{totalAmount} EGP</span>
              </div>
              <div className="flex justify-between text-xs uppercase tracking-widest">
                <span className="text-white/40">Shipping</span>
                <span className="text-primary-500">Free</span>
              </div>
              <div className="flex justify-between items-end pt-2">
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">Total Amount</span>
                <span className="text-2xl font-bold tracking-tighter">{totalAmount} EGP</span>
              </div>
            </div>

            <Button 
              variant="secondary" 
              className="w-full py-8 text-sm group"
              onClick={handlePlaceOrder}
              disabled={isSubmitting || cartItems.length === 0}
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin" size={24} />
              ) : (
                <span className="uppercase tracking-[0.3em] font-bold">Place Order</span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
