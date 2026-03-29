"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon, Heart, ShoppingCart } from "lucide-react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import Image from "next/image";

const navItems = [
  { title: "Home", href: "/", id: "home" },
  { title: "Custom Lab", href: "/#make-hoodie", id: "make-hoodie" },
  { title: "Collections", href: "/collections", id: "collections" },
  { title: "Our Story", href: "/about", id: "about" },
  { title: "Contact", href: "/#contact", id: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        } else if (entry.target.id === activeSection && !entry.isIntersecting) {
          setActiveSection("home");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const targetIds = ["make-hoodie", "contact"];
    targetIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname, activeSection]);

  return (
    <header
      className={cn(
        "sticky top-12 z-50 backdrop-blur-md text-white transition-colors duration-300",
        "w-[80%] mx-auto rounded-full mt-3",
        "border border-red-500/20 shadow-[0_4px_30px_rgba(255,0,0,0.1)]"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <nav className="hidden md:flex items-center justify-between w-full gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.webp" alt="Logo" width={40} height={40} />
            <span className="text-2xl font-bold tracking-tight">MOODIST.eg</span>
          </Link>

          <div className="flex justify-between w-[45%]">
            {navItems.map((item) => {
              const isHashLink = item.href.includes("#");
              const targetId = item.id;
              
              const isActive = isHashLink 
                ? activeSection === targetId 
                : pathname === item.href && (activeSection === "home" || activeSection === "");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative group text-lg font-semibold transition-colors duration-200",
                    isActive ? "text-primary-500" : "text-white",
                    "hover:text-primary-500"
                  )}
                >
                  {item.title}
                  <span
                    className={cn(
                      "absolute left-0 -bottom-1 h-0.5 w-0 transition-all duration-500 rounded-full",
                      "group-hover:w-full group-hover:animate-underlineLoop",
                      isActive && "w-full"
                    )}
                    style={{
                      background:
                        "linear-gradient(to right, rgba(255,0,0,0.1) 10%, rgba(255,0,0,0.7) 100%)",
                    }}
                  ></span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-6 mx-4">
            <div className="cursor-pointer group">
              <FaHeart className="w-5 h-5 group-hover:scale-110 group-hover:text-primary-500 transition-all duration-300" />
            </div>
            <div className="cursor-pointer group">
              <FaShoppingCart className="w-5 h-5 group-hover:scale-110 group-hover:text-primary-500 transition-all duration-300" />
            </div>
            <Link href="/login" className="cursor-pointer group">
              <FaUser className="w-5 h-5 group-hover:scale-110 group-hover:text-primary-500 transition-all duration-300" />
            </Link>
          </div>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <Button variant="ghost" className="p-2 text-white">
            <Heart className="w-5 h-5" />
          </Button>
          <Button variant="ghost" className="p-2 text-white">
            <Link href="/profile">
              <ShoppingCart className="w-5 h-5" />
            </Link>
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
              </div>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  const isHashLink = item.href.includes("#");
                  const isActive = isHashLink 
                    ? activeSection === item.id 
                    : pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "text-lg transition-colors duration-200",
                        isActive ? "text-primary-500" : "text-white",
                        "hover:text-primary-500"
                      )}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}