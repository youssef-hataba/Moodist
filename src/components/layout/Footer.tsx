import {FaInstagram, FaFacebookF, FaWhatsapp} from "react-icons/fa";
import {SiVodafone} from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black section-padding pb-12 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Identity */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image src="/logo.webp" alt="Logo" width={40} height={40} />
              <span className="text-2xl font-bold tracking-tight text-white">MOODIST.eg</span>
            </Link>
            <p className="text-white/40 text-[15px] max-w-sm leading-relaxed mb-8">
              Premium customized hoodies crafted for your unique identity. Quality and comfort in
              every stitch.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-primary-500 hover:border-primary-500/50 transition-all duration-300">
                <FaInstagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-primary-500 hover:border-primary-500/50 transition-all duration-300">
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://wa.me/201234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-primary-500 hover:border-primary-500/50 transition-all duration-300">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Essentials */}
          <div>
            <h4 className="text-white text-[13px] font-bold uppercase tracking-widest mb-8 text-primary-500">
              Shop
            </h4>
            <ul className="space-y-4 text-[14px]">
              <li>
                <a href="#collection" className="text-white/40 hover:text-white transition-colors">
                  Our Collection
                </a>
              </li>
              <li>
                <a href="#custom" className="text-white/40 hover:text-white transition-colors">
                  Custom Order
                </a>
              </li>
              <li>
                <a href="#size-guide" className="text-white/40 hover:text-white transition-colors">
                  Size Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white text-[13px] font-bold uppercase tracking-widest mb-8 text-primary-500">
              Support
            </h4>
            <ul className="space-y-4 text-[14px]">
              <li>
                <a href="#shipping" className="text-white/40 hover:text-white transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/40 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-white/40 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Payments & Copyright */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="order-2 md:order-1 flex flex-col gap-1">
            <p className="text-white/20 text-[12px] font-light tracking-wide italic">
              © {currentYear} MOODIST.eg All Rights Reserved. Made with passion BY Youssef Hataba
            </p>
          </div>

          {/* Local Payment Methods */}
          <div className="flex items-center gap-6 order-1 md:order-2">
            <span className="text-white/20 text-[9px] uppercase tracking-[0.3em] font-bold">
              Payment Methods
            </span>
            <div className="flex items-center gap-4 text-white/20">
              <div className="px-3 py-1.5 border border-white/10 rounded-lg text-[10px] font-black italic tracking-tighter hover:border-primary-500/40 hover:text-primary-500 transition-all cursor-default">
                INSTAPAY
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 border border-white/10 rounded-lg hover:border-red-600/40 transition-all cursor-default">
                <SiVodafone className="text-red-600" size={16} />
                <span className="text-[10px] font-bold uppercase tracking-tighter">Cash</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
