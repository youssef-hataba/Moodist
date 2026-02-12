import Link from "next/link";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {MenuIcon, XIcon, Heart, ShoppingCart} from "lucide-react";
import {FaHeart, FaShoppingCart} from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import Image from "next/image";

const navItems = [
  {title: "Home", href: "/"},
  {title: "Shop", href: "/shop"},
  {title: "Collections", href: "/collections"},
  {title: "About", href: "/about"},
  {title: "Contact", href: "/contact"},
];

export default function Navbar() {
  return (
    <header
      className={cn(
        "sticky top-4 z-50 backdrop-blur-md text-white transition-colors duration-300",
        "w-[80%] mx-auto rounded-full mt-3",
        "border border-red-500/20 shadow-[0_4px_30px_rgba(255,0,0,0.1)]",
      )}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-between w-full gap-6">
          {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.webp" alt="Logo" width={40} height={40} />
              <span className="text-2xl font-bold tracking-tight">MOODIST.eg</span>
            </Link>
          <div className="flex justify-between w-[40%]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group text-lg font-semibold text-white transition-colors duration-200 hover:text-primary-500">
                {item.title}
                <span
                  className="absolute left-0 -bottom-1 h-0.5 w-0 transition-all duration-500 
                  group-hover:w-full group-hover:animate-underlineLoop rounded-full"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(255,0,0,0.1) 10%, rgba(255,0,0,0.7) 100%)",
                  }}></span>
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-6 mx-4">
            <div className="cursor-pointer group">
              <FaHeart className="w-5 h-5 group-hover:scale-115 group-hover:text-primary-500 transition-all duration-300" />
            </div>
            <div className="cursor-pointer group">
              <FaShoppingCart className="w-5 h-5 group-hover:scale-115 group-hover:text-primary-500 transition-all duration-300" />
            </div>
            <Link href="/login" className="cursor-pointer group">
              <FaUser className="w-5 h-5 group-hover:scale-115 group-hover:text-primary-500 transition-all duration-300" />
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Right Icons */}
          <Button variant="ghost" className="p-2 text-white">
            <Heart className="w-5 h-5" />
          </Button>
          <Button variant="ghost" className="p-2 text-white">
            <ShoppingCart className="w-5 h-5" />
          </Button>
          <Button asChild variant="ghost" className="p-2 text-white">
            <Link href="/login">
              <FaUser className="w-5 h-5" />
            </Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="p-2 text-white">
                <MenuIcon className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6 bg-gray-900 text-white">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-bold">Menu</span>
                <SheetTrigger asChild>
                  <Button variant="ghost" className="p-2 text-white">
                    <XIcon className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
              </div>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg hover:text-indigo-400 transition-colors duration-200">
                    {item.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
