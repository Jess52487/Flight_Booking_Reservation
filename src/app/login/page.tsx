"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/Button";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center p-[var(--spacing-sm)]">
      {/* Decorative Background Elements */}
      <div className="fixed -bottom-32 -left-32 w-96 h-96 bg-[var(--color-primary)]/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed -top-32 -right-32 w-96 h-96 bg-[var(--color-tertiary)]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-lg z-10">
        <GlassCard className="p-[var(--spacing-lg)] flex flex-col gap-[var(--spacing-lg)]">
          {/* Branding/Icon */}
          <div className="flex flex-col items-center gap-[var(--spacing-xs)]">
            <div className="w-16 h-16 rounded-2xl bg-[var(--color-secondary-container)]/40 border border-white/20 flex items-center justify-center mb-[var(--spacing-sm)]">
              <span className="material-symbols-outlined text-[var(--color-secondary)] text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                rocket_launch
              </span>
            </div>
            <h1 className="font-outfit text-3xl font-bold text-[var(--color-on-surface)] text-center">
              Welcome Back, Voyager
            </h1>
            <p className="font-inter text-base text-[var(--color-on-surface-variant)] text-center px-[var(--spacing-md)]">
              Step back into the cockpit of your next stellar journey.
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-[var(--spacing-md)]" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-[var(--spacing-xs)]">
              <label className="font-inter text-sm font-medium text-[var(--color-on-surface)]/70 ml-1">
                Email Terminal
              </label>
              <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-[var(--spacing-sm)] transition-all duration-300 focus-within:border-[var(--color-secondary)] focus-within:bg-white/10">
                <span className="material-symbols-outlined text-[var(--color-on-surface-variant)]">alternate_email</span>
                <input
                  type="email"
                  className="bg-transparent border-none focus:ring-0 text-[var(--color-on-surface)] w-full py-[var(--spacing-md)] px-3 font-inter placeholder:text-white/20 outline-none"
                  placeholder="voyager@aetherair.galactic"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[var(--spacing-xs)]">
              <div className="flex justify-between items-center px-1">
                <label className="font-inter text-sm font-medium text-[var(--color-on-surface)]/70">
                  Access Key
                </label>
                <Link href="#" className="font-inter text-xs font-semibold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">
                  Forgot Password?
                </Link>
              </div>
              <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-[var(--spacing-sm)] transition-all duration-300 focus-within:border-[var(--color-secondary)] focus-within:bg-white/10">
                <span className="material-symbols-outlined text-[var(--color-on-surface-variant)]">lock</span>
                <input
                  type={showPassword ? "text" : "password"}
                  className="bg-transparent border-none focus:ring-0 text-[var(--color-on-surface)] w-full py-[var(--spacing-md)] px-3 font-inter placeholder:text-white/20 outline-none"
                  placeholder="••••••••••••"
                />
                <button
                  type="button"
                  className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span className="material-symbols-outlined">{showPassword ? "visibility_off" : "visibility"}</span>
                </button>
              </div>
            </div>

            <Button type="submit" variant="primary" className="w-full mt-2">
              Initiate Sign In
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-[var(--spacing-md)]">
            <div className="h-[1px] flex-1 bg-white/10"></div>
            <span className="font-inter text-xs font-semibold tracking-widest text-[var(--color-on-surface-variant)] uppercase">
              OR CONNECT VIA
            </span>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-[var(--spacing-md)]">
            <button className="flex items-center justify-center gap-[var(--spacing-xs)] py-[var(--spacing-sm)] bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all hover:-translate-y-1">
              <span className="font-inter text-sm font-medium">Google</span>
            </button>
            <button className="flex items-center justify-center gap-[var(--spacing-xs)] py-[var(--spacing-sm)] bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all hover:-translate-y-1">
              <span className="font-inter text-sm font-medium">Apple</span>
            </button>
          </div>

          <div className="text-center pt-[var(--spacing-md)]">
            <p className="font-inter text-base text-[var(--color-on-surface-variant)]">
              New to the fleet?{" "}
              <Link href="/signup" className="text-[var(--color-secondary)] font-bold hover:underline ml-1">
                Create Account
              </Link>
            </p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
