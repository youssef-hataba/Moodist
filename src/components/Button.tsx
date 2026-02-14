"use client";

import React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex text-center cursor-pointer items-center justify-center rounded-lg px-6 py-3 text-xl font-semibold transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-red-700/80 text-white hover:bg-red-700/70 active:scale-[0.98]",
    secondary:
      "text-white bg-white/15 hover:bg-white/10 active:scale-[0.98] backdrop-blur-2xl",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
