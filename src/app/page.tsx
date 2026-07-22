"use client";

import React from "react";
import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";
import { NavBar } from "@/components/NavBar";

export default function LandingWelcomePage() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-on-background)] font-inter min-h-screen flex flex-col selection:bg-[var(--color-tertiary)]/30 overflow-x-hidden relative">
      <NavBar />

      {/* Background Environment */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#1a2a44_0%,_#111415_100%)]"></div>
      </div>

      {/* Content Canvas */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 md:px-8 py-10 mt-16 w-full">
        <div className="max-w-[var(--spacing-container-max)] w-full grid grid-cols-1 lg:grid-cols-12 gap-[var(--spacing-lg)] items-center">
          {/* Left Content: Welcome*/}
          <div className="lg:col-span-7 flex flex-col gap-[var(--spacing-md)] text-center lg:text-left w-full min-w-0">
            <div className="inline-flex items-center gap-[var(--spacing-xs)] px-[var(--spacing-sm)] py-1 bg-[var(--color-secondary-container)]/20 border border-[var(--color-secondary)]/30 rounded-full w-fit mx-auto lg:mx-0">
              <span className="material-symbols-outlined text-[var(--color-secondary)] text-[18px]">verified</span>
              <span className="font-inter text-[12px] font-bold text-[var(--color-secondary)] uppercase tracking-widest">Enabling Galactic Protocol</span>
            </div>
            <h1 className="font-outfit text-4xl md:text-[56px] text-[var(--color-secondary)] leading-tight font-bold tracking-tight">
              Welcome Home,<br />
              <span className="text-[var(--color-tertiary)]">Commander.</span>
            </h1>
            <p className="font-inter text-lg text-[var(--color-on-surface-variant)] max-w-xl mx-auto lg:mx-0">
              Your destination starts here. Experience a faster, smarter way to book flights and plan unforgettable journeys.
            </p>
            <div className="mt-[var(--spacing-md)] flex flex-col sm:flex-row gap-[var(--spacing-sm)] justify-center lg:justify-start">
              <Link href="/booking" className="bg-[var(--color-tertiary)] text-[var(--color-on-tertiary-fixed)] font-inter text-sm font-bold px-[var(--spacing-lg)] py-4 rounded-xl shadow-[0_0_20px_rgba(251,188,0,0.4)] hover:shadow-[0_0_35px_rgba(251,188,0,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-[var(--spacing-xs)] group relative overflow-hidden uppercase tracking-widest">
                <span className="relative z-10">BOOK NEW FLIGHT</span>
                <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <Link href="/hotels" className="bg-[rgba(255,255,255,0.08)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] text-[var(--color-secondary)] font-inter text-sm font-bold px-[var(--spacing-lg)] py-4 rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-[var(--spacing-xs)] uppercase tracking-widest">
                <span className="material-symbols-outlined">rocket_launch</span>
                <span className="">VIEW EXPEDITIONS</span>
              </Link>
            </div>
          </div>

          {/* Right*/}
          <div className="lg:col-span-5 relative w-full">
            <div className="absolute -top-12 -right-8 w-32 h-32 bg-[var(--color-secondary)]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-8 w-40 h-40 bg-[var(--color-tertiary)]/10 rounded-full blur-3xl"></div>
            
            {/* The "Liquid Glass" Identity Card */}
            <div className="bg-[rgba(255,255,255,0.08)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-[32px] p-[var(--spacing-md)] md:p-[var(--spacing-lg)] relative overflow-hidden shadow-2xl animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              
              {/* Card Header */}
              <div className="flex justify-between items-start mb-[var(--spacing-lg)] relative z-10">
                <div className="flex items-center gap-[var(--spacing-md)]">
                  <div className="w-16 h-16 rounded-full border-2 border-[var(--color-tertiary)] p-1">
                    <img alt="User Profile" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABPluzZT45nJh2Stjb8yaK6oaFqCh2jmzdd8giITe0Jon-N2n0AlPF5mVmV2ffj4lww7FyG5geGLB5jlVrcLuTgedKjInyqwusq71sLlDBFKqEchA4ekIh1djQYxHeo_XLme5XxOujzeWkPNZlO1GYwVcGU7QO-zDb4dNAgXB3gVCd0jcD89or7EUnxkqMfvdqqajyjfz54Av1L4ekkmU_BnOWbRCntvU0KDaM80ws68evFL8goz2ya79aofSLiC3oEpTlhAFy3nOV" />
                  </div>
                  <div>
                    <h3 className="font-outfit text-xl font-bold text-[var(--color-secondary)]">Commander</h3>
                    <p className="font-inter text-sm font-semibold text-[var(--color-tertiary)] flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                      Elite Voyager
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-inter text-xs text-[var(--color-on-surface-variant)] uppercase tracking-tighter">Identity Hash</span>
                  <p className="font-inter text-sm font-semibold text-[var(--color-secondary)]/60">AE-992-QX</p>
                </div>
              </div>

              {/* Card Content / Stats Bento */}
              <div className="grid grid-cols-2 gap-[var(--spacing-sm)] relative z-10">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-[var(--spacing-sm)]">
                  <p className="font-inter text-xs text-[var(--color-on-surface-variant)] uppercase mb-1">Status</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-tertiary)] animate-pulse"></div>
                    <p className="font-inter text-sm font-bold text-[var(--color-secondary)]">Ready for Launch</p>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-[var(--spacing-sm)]">
                  <p className="font-inter text-xs text-[var(--color-on-surface-variant)] uppercase mb-1">Loyalty</p>
                  <p className="font-inter text-sm font-bold text-[var(--color-secondary)]">42.5k AeroHub Creds</p>
                </div>
                <div className="col-span-2 bg-white/5 border border-white/10 rounded-2xl p-[var(--spacing-sm)] flex items-center justify-between">
                  <div>
                    <p className="font-inter text-xs text-[var(--color-on-surface-variant)] uppercase mb-1">Primary Destination</p>
                    <p className="font-outfit text-xl font-bold text-[var(--color-tertiary)]">Neo-Tokyo Skyport</p>
                  </div>
                  <span className="material-symbols-outlined text-[var(--color-secondary)]/40 text-[40px]">flight_takeoff</span>
                </div>
              </div>

              {/* Progress Path Visualization */}
              <div className="mt-[var(--spacing-lg)] relative z-10">
                <div className="flex justify-between font-inter text-xs text-[var(--color-on-surface-variant)] mb-1">
                  <span>Syncing Data</span>
                  <span>100%</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--color-secondary)] w-full relative">
                    <div className="absolute top-0 right-0 h-full w-24 bg-[var(--color-tertiary)] blur-sm"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative "Rocket Launch" Icon */}
            <div className="absolute -bottom-6 -right-6 bg-[rgba(255,255,255,0.08)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-full p-[var(--spacing-md)] shadow-xl z-20 animate-float" style={{ animationDelay: "1s" }}>
              <span className="material-symbols-outlined text-[32px] text-[var(--color-secondary)]">rocket_launch</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full bg-[var(--color-surface-container-lowest)]/40 backdrop-blur-md border-t border-white/10 mt-auto">
        <div className="max-w-[var(--spacing-container-max)] mx-auto flex flex-col md:flex-row justify-between items-center px-[var(--spacing-xl)] py-[var(--spacing-lg)] gap-[var(--spacing-md)]">
          <div className="flex flex-col gap-xs items-center md:items-start">
            <span className="font-outfit text-[24px] text-[var(--color-tertiary)] font-bold tracking-tight">AeroHub</span>
            <p className="font-inter text-xs text-[var(--color-on-surface-variant)]">© 2026 AeroHub Galactic. All rights reserved.</p>
          </div>
          <div className="flex gap-[var(--spacing-md)] font-inter text-xs text-[var(--color-on-surface-variant)]">
            <Link className="hover:text-[var(--color-secondary)] transition-transform hover:-translate-y-[2px]" href="#">Privacy Policy</Link>
            <Link className="hover:text-[var(--color-secondary)] transition-transform hover:-translate-y-[2px]" href="#">Terms of Service</Link>
            <Link className="hover:text-[var(--color-secondary)] transition-transform hover:-translate-y-[2px]" href="#">Sustainability</Link>
            <Link className="hover:text-[var(--color-secondary)] transition-transform hover:-translate-y-[2px]" href="#">Global Lounges</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
