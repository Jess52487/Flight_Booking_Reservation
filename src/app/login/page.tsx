"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GlassCard } from "@/components/GlassCard";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError(signInError.message);
      } else {
        router.push("/onboarding/welcome");
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-[var(--spacing-sm)] select-none">
      {/* Ambient Liquid Background */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center animate-drift"
        style={{
          background: "radial-gradient(circle at 20% 30%, #002366 0%, #111415 50%), radial-gradient(circle at 80% 70%, #402d00 0%, #111415 40%)",
          backgroundSize: "200% 200%",
        }}
      ></div>

      {/* Decorative Orbs */}
      <div className="fixed -bottom-32 -left-32 w-96 h-96 bg-[var(--color-primary)]/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed -top-32 -right-32 w-96 h-96 bg-[var(--color-tertiary)]/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Simplified Header */}
      <header className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-[1600px] mx-auto w-full flex justify-between items-center px-[var(--spacing-md)] py-[var(--spacing-sm)]">
          <Link href="/" className="text-2xl font-outfit font-bold text-[var(--color-secondary)] tracking-tight">
            AeroHub
          </Link>
          <div className="hidden md:flex gap-[var(--spacing-md)]">
            <Link href="#" className="font-inter text-sm font-semibold text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">Support</Link>
            <Link href="#" className="font-inter text-sm font-semibold text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">Safety</Link>
          </div>
        </div>
      </header>

      {/* Glass Card */}
      <div className="w-full max-w-[560px] z-10 mt-16">
        <GlassCard className="p-[var(--spacing-lg)] rounded-[32px] flex flex-col gap-[var(--spacing-lg)] border-white/20 relative overflow-hidden bg-[rgba(255,255,255,0.08)] backdrop-blur-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
          
          {/* Branding/Icon */}
          <div className="flex flex-col items-center gap-[var(--spacing-xs)]">
            <div className="w-16 h-16 rounded-2xl bg-[var(--color-secondary-container)]/40 border border-white/20 flex items-center justify-center mb-[var(--spacing-sm)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
              <span className="material-symbols-outlined text-[var(--color-secondary)] text-4xl animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>
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
          <form className="flex flex-col gap-[var(--spacing-md)]" onSubmit={handleLogin}>
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-200 text-sm py-3 px-4 rounded-xl font-inter text-center">
                {error}
              </div>
            )}

            <div className="flex flex-col gap-[var(--spacing-xs)]">
              <label className="font-inter text-sm font-medium text-[var(--color-on-surface)]/70 ml-1">
                Email Terminal
              </label>
              <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-[var(--spacing-sm)] transition-all duration-300 focus-within:border-[var(--color-secondary)] focus-within:ring-1 focus-within:ring-[var(--color-secondary)]/30 focus-within:scale-[1.02]">
                <span className="material-symbols-outlined text-[var(--color-on-surface-variant)]">alternate_email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-transparent border-none focus:ring-0 text-[var(--color-on-surface)] w-full py-4 px-3 font-inter placeholder:text-white/20 outline-none"
                  placeholder="voyager@aerohub.galactic"
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
              <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-[var(--spacing-sm)] transition-all duration-300 focus-within:border-[var(--color-secondary)] focus-within:ring-1 focus-within:ring-[var(--color-secondary)]/30 focus-within:scale-[1.02]">
                <span className="material-symbols-outlined text-[var(--color-on-surface-variant)]">lock</span>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-transparent border-none focus:ring-0 text-[var(--color-on-surface)] w-full py-4 px-3 font-inter placeholder:text-white/20 outline-none"
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

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 bg-[var(--color-tertiary)] text-[var(--color-on-tertiary-fixed)] font-outfit text-xl font-bold rounded-xl shadow-[0_0_15px_rgba(251,188,0,0.3)] hover:shadow-[0_0_25px_rgba(251,188,0,0.6)] active:scale-95 transition-all uppercase tracking-widest relative overflow-hidden group disabled:opacity-50"
            >
              <span className="relative z-10">{loading ? "Logging in..." : "Initiate Sign In"}</span>
              <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
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
            <button className="flex items-center justify-center gap-[var(--spacing-xs)] py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all hover:-translate-y-1">
              <svg className="w-5 h-5 text-[var(--color-on-surface)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.152-1.928 4.176-1.224 1.224-3.136 2.592-7.104 2.592-6.272 0-11.232-5.088-11.232-11.36s4.96-11.36 11.232-11.36c3.424 0 5.856 1.32 7.6 2.992l2.312-2.312c-1.976-1.88-4.528-3.312-8.312-3.312-7.832 0-14.4 6.368-14.4 14.4s6.568 14.4 14.4 14.4c4.224 0 7.6-1.392 10.152-4.072 2.624-2.624 3.488-6.296 3.488-9.104 0-.872-.08-1.712-.224-2.52h-11.32z"></path>
              </svg>
              <span className="font-inter text-sm font-medium">Google</span>
            </button>
            <button className="flex items-center justify-center gap-[var(--spacing-xs)] py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all hover:-translate-y-1">
              <svg className="w-5 h-5 text-[var(--color-on-surface)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.96.95-2.04 1.43-3.24 1.43-1.15 0-2.15-.43-3-.43s-1.85.43-3 .43c-1.2 0-2.28-.48-3.24-1.43C2.5 18.25 1 15.35 1 12.35c0-2.9 1.25-5.3 3.15-7.1 1-.95 2.1-1.45 3.3-1.45 1.15 0 2 .45 2.85.45.85 0 1.7-.45 2.85-.45 1.2 0 2.3.5 3.3 1.45 1.45 1.4 2.45 3.3 2.55 3.45-.1.05-2.6 1.15-2.6 4.15 0 3.05 2.5 4.15 2.6 4.15-.1.35-.55 1.55-1.6 3.1zM12 3.1c0-2.3 1.9-4.1 4.2-4.1.1 0 .2 0 .3.05-.05 2.3-1.9 4.1-4.2 4.1-.1 0-.2 0-.3-.05z"></path>
              </svg>
              <span className="font-inter text-sm font-medium">Apple</span>
            </button>
          </div>

          <div className="text-center pt-[var(--spacing-md)]">
            <p className="font-inter text-sm text-[var(--color-on-surface-variant)]">
              New to the fleet?{" "}
              <Link href="/signup" className="text-[var(--color-secondary)] font-bold hover:underline ml-1">
                Create Account
              </Link>
            </p>
          </div>
        </GlassCard>

        {/* Footer Links */}
        <div className="mt-[var(--spacing-lg)] flex flex-wrap justify-center gap-[var(--spacing-md)] text-[var(--color-on-surface-variant)]/60 font-inter text-[12px] pb-8">
          <Link href="#" className="hover:text-[var(--color-secondary)] transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-[var(--color-secondary)] transition-colors">Stellar Terms</Link>
          <Link href="#" className="hover:text-[var(--color-secondary)] transition-colors">Help Center</Link>
          <span className="hidden md:inline">•</span>
          <span>© 2026 AeroHub Galactic</span>
        </div>
      </div>
    </div>
  );
}
