"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GlassCard } from "@/components/GlassCard";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullname,
          }
        }
      });

      if (signUpError) {
        setError(signUpError.message);
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
    <div className="relative min-h-screen bg-[var(--color-background)] overflow-x-hidden text-[var(--color-on-surface)] select-none">
      <header className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-xl border-b border-white/10 px-[var(--spacing-md)] py-[var(--spacing-sm)]">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-outfit font-bold text-[var(--color-secondary)] tracking-tight">
            AeroHub
          </Link>
          <nav className="hidden md:flex gap-[var(--spacing-md)] items-center">
            <Link href="/" className="font-inter text-sm font-semibold text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">Flights</Link>
            <Link href="/hotels" className="font-inter text-sm font-semibold text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">Expeditions</Link>
            <Link href="/support" className="font-inter text-sm font-semibold text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">Support</Link>
          </nav>
          <div className="flex items-center gap-xs">
            <span className="material-symbols-outlined text-[var(--color-secondary)] text-[24px]">account_circle</span>
          </div>
        </div>
      </header>

      <main className="min-h-screen flex flex-col md:flex-row pt-[64px]">
        {/* Left Side: Visual Narrative */}
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-0 flex items-center justify-center overflow-hidden bg-black">
          {/* Atmospheric Gradient Background */}
          <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-[var(--color-primary-container)] via-[var(--color-surface-container-lowest)] to-[var(--color-secondary-container)]"></div>
          {/* Spaceship Window Frame Effect */}
          <div className="absolute inset-0 z-10 border-[32px] md:border-[64px] border-[var(--color-surface-container-lowest)]/85 rounded-[48px] pointer-events-none"></div>
          {/* Hero Image: Nebula through window */}
          <div 
            className="w-full h-full scale-110 bg-cover bg-center transition-transform duration-300 hover:scale-105"
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBzcVV4pAKpoVs4W0bPPeLfMR2lqm4P0i50bs2Oy6xgIVC1rebtdOPzWygOB59vrGv2_Lsh5albdoZrEjGr84kI5QqOjlnxJsnKznFrVgb5iXz1bwOXfSz5QaUXk1dckXY3-WHUyLZWgh-5CYOfqm-zxN-5nyHHDgogGVNTvOeRe26aM7iv57ayVIycPB3Td9TZgoWWxAMk-92sRI_QsFomz0MQpto2pG8ZVZGCuaHgwNPYr5Bohk8SKzej7gwLUFYJiI4PtxOXuIm8')",
            }}
          ></div>
          {/* Floating Micro-Element */}
          <div className="absolute bottom-[var(--spacing-xl)] left-[var(--spacing-xl)] z-20 hidden lg:block">
            <GlassCard className="p-[var(--spacing-md)] rounded-xl flex items-center gap-[var(--spacing-md)] border-white/20">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary-container)] flex items-center justify-center">
                <span className="material-symbols-outlined text-[var(--color-secondary)]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  rocket_launch
                </span>
              </div>
              <div>
                <p className="font-inter text-xs font-semibold text-[var(--color-secondary)] tracking-widest uppercase">Active Mission</p>
                <p className="font-outfit text-xl font-bold text-[var(--color-on-surface)]">Andromeda-9 Cluster</p>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Right Side: Signup Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-[var(--spacing-md)] md:p-[var(--spacing-xl)] bg-[var(--color-surface)] relative">
          {/* Background Orbs for Depth */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[var(--color-tertiary)]/10 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="w-full max-w-[480px] z-10">
            <div className="mb-[var(--spacing-lg)]">
              <h1 className="font-outfit text-4xl font-bold text-[var(--color-on-surface)] mb-[var(--spacing-xs)] tracking-tight">Join the Future of Flight</h1>
              <p className="font-inter text-lg text-[var(--color-on-surface-variant)]">Step into the cockpit of the next generation. Secure your place among the stars.</p>
            </div>
            
            <GlassCard className="p-[var(--spacing-md)] md:p-[var(--spacing-lg)] rounded-[24px] border-white/10 flex flex-col gap-8">
              <form className="space-y-8" onSubmit={handleSignup}>
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-200 text-sm py-3 px-4 rounded-xl font-inter text-center">
                    {error}
                  </div>
                )}

                {/* Full Name */}
                <div className="space-y-3.5">
                  <label className="block font-inter text-sm font-semibold text-[var(--color-on-surface-variant)] ml-2" htmlFor="fullname">Full Name</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-on-surface-variant)] text-[20px]">person</span>
                    <input 
                      className="w-full bg-white/5 border border-white/20 rounded-xl py-3.5 pl-12 pr-4 text-[var(--color-on-surface)] placeholder:text-white/20 focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)]/50 backdrop-blur-sm transition-all font-inter text-[16px]" 
                      id="fullname" 
                      placeholder="Commander Shepard" 
                      type="text"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      required
                    />
                  </div>
                </div>
                {/* Email */}
                <div className="space-y-3.5">
                  <label className="block font-inter text-sm font-semibold text-[var(--color-on-surface-variant)] ml-2" htmlFor="email">Email Address</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-on-surface-variant)] text-[20px]">alternate_email</span>
                    <input 
                      className="w-full bg-white/5 border border-white/20 rounded-xl py-3.5 pl-12 pr-4 text-[var(--color-on-surface)] placeholder:text-white/20 focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)]/50 backdrop-blur-sm transition-all font-inter text-[16px]" 
                      id="email" 
                      placeholder="voyager@aerohub.galactic" 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                {/* Password */}
                <div className="space-y-3.5">
                  <label className="block font-inter text-sm font-semibold text-[var(--color-on-surface-variant)] ml-2" htmlFor="password">Create Password</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-on-surface-variant)] text-[20px]">lock</span>
                    <input 
                      className="w-full bg-white/5 border border-white/20 rounded-xl py-3.5 pl-12 pr-12 text-[var(--color-on-surface)] placeholder:text-white/20 focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)]/50 backdrop-blur-sm transition-all font-inter text-[16px]" 
                      id="password" 
                      placeholder="••••••••••••" 
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button 
                      type="button" 
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)]"
                    >
                      <span className="material-symbols-outlined">{showPassword ? "visibility_off" : "visibility"}</span>
                    </button>
                  </div>
                </div>
                {/* Terms Checkbox */}
                <div className="flex items-start gap-[var(--spacing-sm)] pt-4">
                  <div className="relative flex items-center">
                    <input className="custom-checkbox w-5 h-5 rounded bg-white/5 border-white/30 text-[var(--color-tertiary)] focus:ring-0 focus:ring-offset-0 transition-all cursor-pointer" id="terms" type="checkbox" required/>
                  </div>
                  <label className="font-inter text-sm text-[var(--color-on-surface-variant)] cursor-pointer" htmlFor="terms">
                    I agree to the <Link className="text-[var(--color-secondary)] hover:underline" href="#">Galactic Terms of Service</Link> and <Link className="text-[var(--color-secondary)] hover:underline" href="#">Travel Protocols</Link>.
                  </label>
                </div>
                {/* CTA Button */}
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[var(--color-tertiary)] text-[var(--color-on-tertiary-fixed)] font-inter text-sm font-bold py-4.5 mt-4 rounded-xl uppercase tracking-widest shadow-xl hover:shadow-[0_0_20px_rgba(251,188,0,0.5)] transition-all duration-300 transform active:scale-[0.98] relative overflow-hidden group disabled:opacity-50"
                >
                  <span className="relative z-10">{loading ? "Registering..." : "Create Account"}</span>
                  <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
                <div className="text-center pt-[var(--spacing-md)] mt-2 border-t border-white/10">
                  <p className="font-inter text-sm text-[var(--color-on-surface-variant)]">
                    Already a voyager? <Link className="text-[var(--color-secondary)] font-bold hover:underline" href="/login">Sign In</Link>
                  </p>
                </div>
              </form>
            </GlassCard>
            
            {/* Floating Bottom Links */}
            <footer className="mt-[var(--spacing-lg)] flex justify-between items-center px-[var(--spacing-xs)] font-inter text-[12px]">
              <span className="text-[var(--color-on-surface-variant)]/50">© 2026 AeroHub Galactic</span>
              <div className="flex gap-[var(--spacing-md)]">
                <Link className="text-[var(--color-on-surface-variant)]/50 hover:text-[var(--color-on-surface)] transition-colors" href="#">Privacy</Link>
                <Link className="text-[var(--color-on-surface-variant)]/50 hover:text-[var(--color-on-surface)] transition-colors" href="#">Security</Link>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}
