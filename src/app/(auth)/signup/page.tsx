"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Eye, EyeOff, Loader2, UserPlus, ChevronRight } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { Button } from "@/src/components/Button";

// الـ Schema الموحدة مع Password قوي
const signupSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^0?1[0125]\d{8}$/, "Enter a valid Egyptian phone number"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Include at least one uppercase letter")
    .regex(/[a-z]/, "Include at least one lowercase letter")
    .regex(/[0-9]/, "Include at least one number")
    .regex(/[^A-Za-z0-9]/, "Include at least one special character"),
});

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const shakeVariants = {
    error: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.4 },
    },
  };

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Registered Data:", data);
    setIsLoading(false);
  };

  return (
    <div className="relative w-full">
      {/* Dynamic Background Glows - الموحدة */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary-500/30 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500/30 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-[#050505]/60 backdrop-blur-3xl border border-white/5 p-10 rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
      >
        {/* Top Icon Area */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
            <UserPlus className="text-primary-500" size={32} strokeWidth={1.5} />
          </div>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-white text-3xl font-bold tracking-tighter uppercase mb-2">
            Create Account
          </h2>
          <p className="text-white/20 text-[10px] tracking-[0.2em] uppercase">
            Join the exclusive world of studio
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name */}
          <div className="group space-y-2">
            <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold ml-1 group-focus-within:text-primary-500 transition-colors">
              Full Name
            </label>
            <input
              {...register("fullName")}
              placeholder="Enter Your Name"
              className={`w-full bg-white/2 border rounded-2xl py-4 px-6 text-white text-sm outline-none transition-all duration-500 placeholder:text-white/10
                ${errors.fullName ? "border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.05)]" : "border-white/5 focus:border-white/20 focus:bg-white/4"}`}
            />
            {errors.fullName && (
              <motion.p variants={shakeVariants} animate="error" className="text-red-500 text-[9px] ml-1 uppercase tracking-widest font-medium">
                {errors.fullName.message}
              </motion.p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <div className="group space-y-2">
              <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold ml-1 group-focus-within:text-primary-500 transition-colors">
                Email Address
              </label>
              <input
                {...register("email")}
                placeholder="name@studio.com"
                className={`w-full bg-white/2 border rounded-2xl py-4 px-6 text-white text-sm outline-none transition-all duration-500 placeholder:text-white/10
                  ${errors.email ? "border-red-500/50" : "border-white/5 focus:border-white/20 focus:bg-white/4"}`}
              />
              {errors.email && (
                <motion.p variants={shakeVariants} animate="error" className="text-red-500 text-[9px] ml-1 uppercase tracking-widest font-medium">
                  {errors.email.message}
                </motion.p>
              )}
            </div>

            {/* WhatsApp Number */}
            <div className="group space-y-2">
              <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold ml-1 group-focus-within:text-primary-500 transition-colors">
                WhatsApp
              </label>
              <input
                {...register("phone")}
                placeholder="01xxxxxxxxx"
                className={`w-full bg-white/2 border rounded-2xl py-4 px-6 text-white text-sm outline-none transition-all duration-500 placeholder:text-white/10
                  ${errors.phone ? "border-red-500/50" : "border-white/5 focus:border-white/20 focus:bg-white/4"}`}
              />
              {errors.phone && (
                <motion.p variants={shakeVariants} animate="error" className="text-red-500 text-[9px] ml-1 uppercase tracking-widest font-medium">
                  {errors.phone.message}
                </motion.p>
              )}
            </div>
          </div>

          {/* Password */}
          <div className="group space-y-2 relative">
            <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold ml-1 group-focus-within:text-primary-500 transition-colors">
              Password
            </label>
            <div className="relative">
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Set secure password"
                className={`w-full bg-white/2 border rounded-2xl py-4 px-6 text-white text-sm outline-none transition-all duration-500 placeholder:text-white/10
                  ${errors.password ? "border-red-500/50" : "border-white/5 focus:border-white/20 focus:bg-white/4"}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-white/10 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.password && (
              <motion.p variants={shakeVariants} animate="error" className="text-red-500 text-[9px] ml-1 uppercase tracking-widest font-medium">
                {errors.password.message}
              </motion.p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              variant="secondary"
              type="submit"
              disabled={isLoading}
              className="group w-full py-4"
            >
              {isLoading ? (
                <Loader2 size={20} className="animate-spin text-primary-600" />
              ) : (
                <div className="flex items-center gap-2">
                  <span className="uppercase tracking-[0.15em] text-sm text-primary-600 font-bold ml-2">
                    Create Account
                  </span>
                  <span className="flex items-center justify-center pt-0.5">
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform text-primary-600" />
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform text-primary-600 -mx-2" />
                  </span>
                </div>
              )}
            </Button>
          </div>
        </form>

        {/* Divider & Google */}
        <div className="mt-12 flex items-center justify-center gap-8">
          <div className="flex-1 h-px bg-linear-to-r from-transparent to-white/10" />
          <button
            type="button"
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all duration-500 group"
          >
            <FcGoogle size={22} className="group-hover:scale-110 transition-transform" />
          </button>
          <div className="flex-1 h-px bg-linear-to-l from-transparent to-white/10" />
        </div>

        <div className="mt-10 text-center">
          <p className="text-[10px] tracking-[0.3em] font-medium uppercase text-white/20">
            Already have an Account?
            <Link
              href="/login"
              className="text-primary-500 hover:text-white transition-colors ml-1 underline underline-offset-4"
            >
              Access Now
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}