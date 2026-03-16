"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { FaInstagram ,FaWhatsapp ,FaFacebookF  } from "react-icons/fa";

export default function ContactNewsletter() {
  const [method, setMethod] = useState<"email" | "whatsapp">("whatsapp");
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
  setError("");
  if (method === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputValue)) {
      setError("Please enter a valid email address");
      return false;
    }
  } else {
    const cleanPhone = inputValue.trim();
    const phoneRegex = /^0?(10|11|12|15)[0-9]{8}$/;
    
    if (!phoneRegex.test(cleanPhone)) {
      setError("Enter a valid Egyptian number (e.g., 01123456789)");
      return false;
    }
  }
  return true;
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <section className="bg-black section-padding px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Side: Newsletter & WhatsApp Alerts */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-12 rounded-[3rem] bg-[#080808] border border-white/5 overflow-hidden group"
          >
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary-500/10 rounded-full blur-[100px] transition-opacity duration-700 group-hover:opacity-100 opacity-50" />
            
            <div className="relative z-10">
              <h2 className="text-primary-500 text-[12px] tracking-[0.3em] uppercase font-bold mb-6">Direct Updates</h2>
              <h3 className="text-white text-4xl font-light leading-tight mb-6">
                Be the <span className="italic font-bold">First to Know</span> <br /> via WhatsApp or Mail.
              </h3>
              
              <div className="flex bg-white/5 p-1 rounded-2xl w-fit mb-8 border border-white/5">
                <button 
                  type="button"
                  onClick={() => { setMethod("whatsapp"); setError(""); setInputValue(""); }}
                  className={`flex items-center gap-2 px-6 py-2 rounded-xl text-[13px] font-medium transition-all ${method === "whatsapp" ? "bg-primary-500 text-white shadow-lg" : "text-white/40 hover:text-white"}`}
                >
                  <FaWhatsapp size={16} /> WhatsApp
                </button>
                <button 
                  type="button"
                  onClick={() => { setMethod("email"); setError(""); setInputValue(""); }}
                  className={`flex items-center gap-2 px-6 py-2 rounded-xl text-[13px] font-medium transition-all ${method === "email" ? "bg-primary-500 text-white shadow-lg" : "text-white/40 hover:text-white"}`}
                >
                  <Send size={16} /> Email
                </button>
              </div>

              <form onSubmit={handleSubmit} className="relative max-w-md">
                <div className="relative flex items-center">
                  {method === "whatsapp" && (
                    <div className="absolute left-6 flex items-center gap-2 border-r border-white/10 pr-3 h-6">
                      <span className="text-white/40 text-[14px] font-medium">+20</span>
                    </div>
                  )}
                  <input 
                    type={method === "whatsapp" ? "tel" : "email"} 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={method === "whatsapp" ? "1x xxxx xxxx" : "Your Email Address"}
                    className={`w-full bg-white/5 border rounded-full py-5 px-8 text-white text-[14px] focus:outline-none transition-all placeholder:opacity-20 ${
                      method === "whatsapp" ? "pl-20" : "pl-8"
                    } ${error ? "border-primary-500/50" : "border-white/10 focus:border-primary-500/50"}`}
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-2 bottom-2 bg-primary-500 hover:bg-primary-600 text-white px-8 rounded-full transition-all flex items-center gap-2 group/btn"
                  >
                    <span className="text-[13px] font-bold uppercase tracking-wider italic">Join</span>
                  </button>
                </div>

                <AnimatePresence>
                  {error && (
                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute left-6 mt-2 text-primary-500 text-[12px] flex items-center gap-1">
                      <AlertCircle size={12} /> {error}
                    </motion.p>
                  )}
                  {isSuccess && (
                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="absolute left-6 mt-2 text-green-500 text-[12px] flex items-center gap-1">
                      <CheckCircle2 size={12} /> You&apos;re on the list!
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>

              <div className="mt-12 flex items-center gap-4 text-white/30 text-[12px]">
                <div className="flex items-center gap-1"><CheckCircle2 size={14} className="text-primary-500" /> Early Access</div>
                <div className="flex items-center gap-1"><CheckCircle2 size={14} className="text-primary-500" /> Secret Offers</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Info (Back & Improved) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-12">
              <h3 className="text-white text-3xl font-light mb-4">Get in Touch</h3>
              <div className="grid gap-8">
                {/* WhatsApp Support */}
                <a href="https://wa.me/201234567890" target="_blank" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-500 transition-all duration-500 group-hover:bg-primary-500/10 group-hover:border-primary-500/20 shadow-[0_0_20px_rgba(225,0,0,0)] group-hover:shadow-[0_0_20px_rgba(225,0,0,0.2)]">
                    <FaWhatsapp  size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-white/30 text-[11px] uppercase tracking-widest mb-1">WhatsApp Support</p>
                    <p className="text-white text-[18px] font-medium group-hover:text-primary-500 transition-colors">+20 123 456 7890</p>
                  </div>
                </a>

                {/* Instagram */}
                <a href="#" target="_blank" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-500 transition-all duration-500 group-hover:bg-primary-500/10 group-hover:border-primary-500/20 shadow-[0_0_20px_rgba(225,0,0,0)] group-hover:shadow-[0_0_20px_rgba(225,0,0,0.2)]">
                    <FaInstagram size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-white/30 text-[11px] uppercase tracking-widest mb-1">Instagram</p>
                    <p className="text-white text-[18px] font-medium group-hover:text-primary-500 transition-colors">@YourBrand.Official</p>
                  </div>
                </a>

                {/* Facebook */}
                <a href="#" target="_blank" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-500 transition-all duration-500 group-hover:bg-primary-500/10 group-hover:border-primary-500/20 shadow-[0_0_20px_rgba(225,0,0,0)] group-hover:shadow-[0_0_20px_rgba(225,0,0,0.2)]">
                    <FaFacebookF size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-white/30 text-[11px] uppercase tracking-widest mb-1">Facebook</p>
                    <p className="text-white text-[18px] font-medium group-hover:text-primary-500 transition-colors">Your Brand Name</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}