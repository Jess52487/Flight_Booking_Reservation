"use client";

import React from "react";
import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/Button";
import { NavBar } from "@/components/NavBar";

export default function OnboardingWelcomePage() {
  return (
    <div className="relative min-h-screen bg-[var(--color-background)] overflow-hidden">
      <NavBar />
      
      {/* Background Environment */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--color-primary-container)_0%,_var(--color-background)_100%)] opacity-50"></div>
      </div>

      {/* Content Canvas */}
      <main className="relative z-10 flex-grow flex items-center justify-center px-[var(--spacing-sm)] md:px-[var(--spacing-xl)] py-[var(--spacing-lg)] min-h-[calc(100vh-80px)] mt-20">
        <div className="max-w-[var(--spacing-container-max)] w-full grid grid-cols-1 lg:grid-cols-12 gap-[var(--spacing-lg)] items-center">
          
          {/* Left Content: Welcome */}
          <div className="lg:col-span-7 flex flex-col gap-[var(--spacing-md)] text-center lg:text-left">
            <div className="inline-flex items-center gap-[var(--spacing-xs)] px-[var(--spacing-sm)] py-1 bg-[var(--color-secondary-container)]/20 border border-[var(--color-secondary)]/30 rounded-full w-fit mx-auto lg:mx-0">
              <span className="material-symbols-outlined text-[var(--color-secondary)] text-[18px]">verified</span>
              <span className="font-inter text-sm text-[var(--color-secondary)] uppercase tracking-widest font-semibold">Enabling Galactic Protocol</span>
            </div>
            
            <h1 className="font-outfit text-5xl md:text-6xl text-[var(--color-secondary)] leading-tight font-bold">
              Welcome Home,<br />
              <span className="text-[var(--color-tertiary)]">Commander.</span>
            </h1>
            
            <p className="font-inter text-lg text-[var(--color-on-surface-variant)] max-w-xl mx-auto lg:mx-0">
              Your journey through the aerohub is ready. We've synchronized your preferences and calibrated the vessel for your upcoming expedition to the outer rims.
            </p>
            
            <div className="mt-[var(--spacing-md)] flex flex-col sm:flex-row gap-[var(--spacing-sm)] justify-center lg:justify-start">
              <Link href="/booking">
                <Button variant="primary" className="px-[var(--spacing-lg)] py-[var(--spacing-md)] uppercase tracking-widest text-sm w-full sm:w-auto shadow-[0_0_20px_rgba(251,188,0,0.4)] hover:shadow-[0_0_35px_rgba(251,188,0,0.6)]">
                  <span className="relative z-10 flex items-center gap-2">
                    BOOK NEW FLIGHT
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </span>
                </Button>
              </Link>
              
              <Link href="/onboarding/preferences">
                <Button variant="secondary" className="px-[var(--spacing-lg)] py-[var(--spacing-md)] uppercase tracking-widest text-sm w-full sm:w-auto">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="material-symbols-outlined">rocket_launch</span>
                    VIEW PREFERENCES
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content: Identity Card */}
          <div className="lg:col-span-5 relative mt-10 lg:mt-0">
            {/* Floating Decor Elements */}
            <div className="absolute -top-12 -right-8 w-32 h-32 bg-[var(--color-secondary)]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-8 w-40 h-40 bg-[var(--color-tertiary)]/10 rounded-full blur-3xl"></div>
            
            {/* The "Liquid Glass" Identity Card */}
            <GlassCard className="rounded-[32px] p-[var(--spacing-md)] md:p-[var(--spacing-lg)] relative overflow-hidden shadow-2xl hover:-translate-y-2 transition-transform duration-500 border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
              
              {/* Card Header */}
              <div className="flex justify-between items-start mb-[var(--spacing-lg)] relative z-10">
                <div className="flex items-center gap-[var(--spacing-md)]">
                  <div className="w-16 h-16 rounded-full border-2 border-[var(--color-tertiary)] p-1">
                    <img 
                      alt="User Profile" 
                      className="w-full h-full rounded-full object-cover" 
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100" 
                    />
                  </div>
                  <div>
                    <h3 className="font-outfit text-2xl font-bold text-[var(--color-secondary)]">Commander</h3>
                    <p className="font-inter text-sm font-semibold text-[var(--color-tertiary)] flex items-center gap-1 uppercase tracking-widest">
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                      Elite Voyager
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-inter text-xs text-[var(--color-on-surface-variant)] uppercase tracking-tighter font-semibold">Identity Hash</span>
                  <p className="font-inter text-sm text-[var(--color-secondary)]/60 font-bold">AE-992-QX</p>
                </div>
              </div>

              {/* Card Content / Stats Bento */}
              <div className="grid grid-cols-2 gap-[var(--spacing-sm)] relative z-10">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-[var(--spacing-sm)] border border-white/10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                  <p className="font-inter text-xs text-[var(--color-on-surface-variant)] uppercase mb-1 font-semibold">Status</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-tertiary)] animate-pulse"></div>
                    <p className="font-inter text-sm font-bold text-[var(--color-secondary)]">Ready for Launch</p>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-[var(--spacing-sm)] border border-white/10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                  <p className="font-inter text-xs text-[var(--color-on-surface-variant)] uppercase mb-1 font-semibold">Loyalty</p>
                  <p className="font-inter text-sm font-bold text-[var(--color-secondary)]">42.5k AeroHub Creds</p>
                </div>
                
                <div className="col-span-2 bg-white/5 backdrop-blur-md rounded-2xl p-[var(--spacing-sm)] flex items-center justify-between border border-white/10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                  <div>
                    <p className="font-inter text-xs text-[var(--color-on-surface-variant)] uppercase mb-1 font-semibold">Primary Destination</p>
                    <p className="font-outfit text-2xl font-bold text-[var(--color-tertiary)]">Neo-Tokyo Skyport</p>
                  </div>
                  <span className="material-symbols-outlined text-[var(--color-secondary)]/40 text-[40px]">flight_takeoff</span>
                </div>
              </div>

              {/* Progress Path Visualization */}
              <div className="mt-[var(--spacing-lg)] relative z-10">
                <div className="flex justify-between font-inter text-xs font-semibold text-[var(--color-on-surface-variant)] mb-[var(--spacing-xs)] uppercase tracking-widest">
                  <span>Syncing Data</span>
                  <span>100%</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--color-secondary)] w-full relative">
                    <div className="absolute top-0 right-0 h-full w-24 bg-[var(--color-tertiary)] blur-sm"></div>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Decorative "Rocket Launch" Icon */}
            <div className="absolute -bottom-6 -right-6 bg-white/5 backdrop-blur-xl rounded-full p-[var(--spacing-md)] shadow-xl border border-[var(--color-secondary)]/40 text-[var(--color-secondary)] hover:-translate-y-2 transition-transform duration-700 delay-100 z-20">
              <span className="material-symbols-outlined text-[32px]">rocket_launch</span>
            </div>
          </div>

        </div>
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 w-full bg-[var(--color-surface-container-lowest)]/40 backdrop-blur-md border-t border-white/10 mt-auto">
        <div className="max-w-[var(--spacing-container-max)] mx-auto flex flex-col md:flex-row justify-between items-center px-[var(--spacing-xl)] py-[var(--spacing-lg)] gap-[var(--spacing-md)]">
          <div className="flex flex-col gap-[var(--spacing-xs)] items-center md:items-start">
            <span className="font-outfit text-2xl text-[var(--color-tertiary)] font-bold tracking-tight">AeroHub</span>
            <p className="font-inter text-xs text-[var(--color-on-surface-variant)]">© 2026 AeroHub Galactic. All rights reserved.</p>
          </div>
          <div className="flex gap-[var(--spacing-md)]">
            <Link href="#" className="font-inter text-xs font-semibold text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-transform hover:-translate-y-[2px] uppercase tracking-widest">Privacy Policy</Link>
            <Link href="#" className="font-inter text-xs font-semibold text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-transform hover:-translate-y-[2px] uppercase tracking-widest">Terms of Service</Link>
            <Link href="#" className="font-inter text-xs font-semibold text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-transform hover:-translate-y-[2px] uppercase tracking-widest">Sustainability</Link>
            <Link href="#" className="font-inter text-xs font-semibold text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-transform hover:-translate-y-[2px] uppercase tracking-widest">Global Lounges</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
