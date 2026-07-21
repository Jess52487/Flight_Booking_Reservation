"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/Button";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col md:flex-row p-[var(--spacing-md)] md:p-0 gap-[var(--spacing-md)]">
      {/* Left Side: Visual Narrative */}
      <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full flex items-center justify-center overflow-hidden bg-black rounded-3xl md:rounded-none">
        <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-[var(--color-primary-container)] via-[var(--color-surface-container-lowest)] to-[var(--color-secondary-container)]"></div>
        <div className="absolute inset-0 z-10 border-[16px] md:border-[32px] border-[var(--color-surface-container-lowest)]/80 md:rounded-[48px] pointer-events-none hidden md:block"></div>
        <div
          className="w-full h-full scale-110 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80')",
          }}
        ></div>
        
        <div className="absolute bottom-[var(--spacing-xl)] left-[var(--spacing-xl)] z-20 hidden lg:block">
          <GlassCard className="p-[var(--spacing-md)] rounded-xl flex items-center gap-[var(--spacing-md)] border-white/20">
            <div className="w-12 h-12 rounded-full bg-[var(--color-secondary-container)] flex items-center justify-center">
              <span className="material-symbols-outlined text-[var(--color-secondary)]" style={{ fontVariationSettings: "'FILL' 1" }}>
                rocket_launch
              </span>
            </div>
            <div>
              <p className="font-inter text-sm font-medium text-[var(--color-secondary)]">Active Mission</p>
              <p className="font-outfit text-xl font-bold text-[var(--color-on-surface)]">Andromeda-9 Cluster</p>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Right Side: Signup Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-[var(--spacing-sm)] md:p-[var(--spacing-xl)] bg-[var(--color-surface)] relative">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[var(--color-tertiary)]/10 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="w-full max-w-[480px] z-10">
          <div className="mb-[var(--spacing-lg)] text-center md:text-left">
            <h1 className="font-outfit text-4xl font-bold text-[var(--color-on-surface)] mb-[var(--spacing-xs)] tracking-tight">
              Join the Future of Flight
            </h1>
            <p className="font-inter text-lg text-[var(--color-on-surface-variant)]">
              Step into the cockpit of the next generation. Secure your place among the stars.
            </p>
          </div>

          <GlassCard className="p-[var(--spacing-md)] md:p-[var(--spacing-lg)] rounded-[24px] flex flex-col gap-[var(--spacing-md)] border-white/10">
            <form className="flex flex-col gap-[var(--spacing-md)]" onSubmit={(e) => e.preventDefault()}>
              {/* Full Name */}
              <div className="flex flex-col gap-[var(--spacing-xs)]">
                <label className="font-inter text-sm font-medium text-[var(--color-on-surface-variant)] ml-1">
                  Full Name
                </label>
                <div className="flex items-center bg-white/5 border border-white/20 rounded-xl px-[var(--spacing-sm)] transition-all duration-300 focus-within:border-[var(--color-secondary)] focus-within:bg-white/10">
                  <span className="material-symbols-outlined text-[var(--color-on-surface-variant)]">person</span>
                  <input
                    type="text"
                    className="bg-transparent border-none focus:ring-0 text-[var(--color-on-surface)] w-full py-3 px-3 font-inter placeholder:text-white/20 outline-none"
                    placeholder="Commander Shepard"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-[var(--spacing-xs)]">
                <label className="font-inter text-sm font-medium text-[var(--color-on-surface-variant)] ml-1">
                  Email Address
                </label>
                <div className="flex items-center bg-white/5 border border-white/20 rounded-xl px-[var(--spacing-sm)] transition-all duration-300 focus-within:border-[var(--color-secondary)] focus-within:bg-white/10">
                  <span className="material-symbols-outlined text-[var(--color-on-surface-variant)]">alternate_email</span>
                  <input
                    type="email"
                    className="bg-transparent border-none focus:ring-0 text-[var(--color-on-surface)] w-full py-3 px-3 font-inter placeholder:text-white/20 outline-none"
                    placeholder="voyager@aerohub.galactic"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-[var(--spacing-xs)]">
                <label className="font-inter text-sm font-medium text-[var(--color-on-surface-variant)] ml-1">
                  Create Password
                </label>
                <div className="flex items-center bg-white/5 border border-white/20 rounded-xl px-[var(--spacing-sm)] transition-all duration-300 focus-within:border-[var(--color-secondary)] focus-within:bg-white/10">
                  <span className="material-symbols-outlined text-[var(--color-on-surface-variant)]">lock</span>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="bg-transparent border-none focus:ring-0 text-[var(--color-on-surface)] w-full py-3 px-3 font-inter placeholder:text-white/20 outline-none"
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

              {/* Terms Checkbox */}
              <div className="flex items-start gap-[var(--spacing-sm)] pt-[var(--spacing-xs)]">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-5 h-5 rounded bg-white/5 border-white/30 text-[var(--color-tertiary)] focus:ring-0 focus:ring-offset-0 transition-all cursor-pointer mt-0.5"
                />
                <label htmlFor="terms" className="font-inter text-sm text-[var(--color-on-surface-variant)] cursor-pointer">
                  I agree to the <Link href="#" className="text-[var(--color-secondary)] hover:underline">Galactic Terms of Service</Link> and <Link href="#" className="text-[var(--color-secondary)] hover:underline">Travel Protocols</Link>.
                </label>
              </div>

              {/* CTA Button */}
              <Button type="submit" variant="primary" className="w-full py-4 mt-2 font-inter text-sm tracking-widest uppercase">
                Create Account
              </Button>
              
              <div className="text-center pt-[var(--spacing-md)] border-t border-white/10 mt-2">
                <p className="font-inter text-sm text-[var(--color-on-surface-variant)]">
                  Already a voyager? <Link href="/login" className="text-[var(--color-secondary)] font-bold hover:underline">Sign In</Link>
                </p>
              </div>
            </form>
          </GlassCard>
          
          {/* Footer Links */}
          <footer className="mt-[var(--spacing-lg)] flex justify-between items-center px-[var(--spacing-xs)]">
            <span className="font-inter text-xs text-[var(--color-on-surface-variant)]/50">© 2026 AeroHub Galactic</span>
            <div className="flex gap-[var(--spacing-md)]">
              <Link href="#" className="font-inter text-xs text-[var(--color-on-surface-variant)]/50 hover:text-[var(--color-on-surface)] transition-colors">Privacy</Link>
              <Link href="#" className="font-inter text-xs text-[var(--color-on-surface-variant)]/50 hover:text-[var(--color-on-surface)] transition-colors">Security</Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
