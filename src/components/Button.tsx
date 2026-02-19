"use client";

import {cn} from "@/lib/utils";
import {motion, HTMLMotionProps} from "framer-motion";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: ButtonVariant;
  children?: React.ReactNode;
}

export function Button({variant = "primary", className, children, ...props}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center overflow-hidden rounded-full " +
    "px-6 py-4 font-black uppercase tracking-[0.07em] " +
    "transition-all duration-800 focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-white text-black shadow-xl shadow-white/15 text-[16px]",
    secondary: "bg-white/7 text-gray-400 border border-white/12 backdrop-blur-md hover:text-white",
  };

  return (
    <motion.button
      whileHover="hover"
      initial="initial"
      className={cn(baseStyles, variants[variant], className)}
      {...props}>
      {variant === "primary" && (
        <>
          <motion.div
            variants={{
              initial: {y: "100%"},
              hover: {y: 0},
            }}
            transition={{duration: 0.4, ease: [0.22, 1, 0.36, 1]}}
            className="absolute inset-0 z-0 bg-linear-to-t from-primary-300/70 to-primary-300/10 pointer-events-none"
          />
          <motion.div
            variants={{
              initial: {x: "-100%"},
              hover: {x: "100%"},
            }}
            transition={{duration: 0.8, ease: "easeInOut"}}
            className="absolute inset-0 z-10 bg-linear-to-r from-transparent via-white/50 to-transparent pointer-events-none"
          />
        </>
      )}

      {variant === "secondary" && (
        <motion.div
          variants={{
            initial: {y: "100%"},
            hover: {y: 0},
          }}
          transition={{duration: 0.4, ease: [0.22, 1, 0.36, 1]}}
          className="absolute inset-0 z-0 bg-linear-to-t from-primary-600/30 via-primary-600/10 to-transparent pointer-events-none"
        />
      )}

      <span className="relative z-20 flex items-center gap-3">{children}</span>
    </motion.button>
  );
}
