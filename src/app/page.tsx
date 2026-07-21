"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/Button";

export default function LandingPage() {
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      router.push("/search");
    }, 1500);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center">
      {/* Background (simulating shader/glow) */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[var(--color-primary-container)]/30 via-transparent to-transparent"></div>

      <main className="w-full flex-1 flex flex-col items-center pb-[var(--spacing-xl)] px-[var(--spacing-sm)] md:px-[var(--spacing-xl)]">
        {/* Hero Heading */}
        <div className="text-center mb-[var(--spacing-xl)] max-w-4xl pt-16">
          <h1 className="font-outfit text-4xl md:text-6xl text-[var(--color-secondary)] text-glow tracking-tight leading-tight mb-[var(--spacing-md)] font-bold">
            Book Your Next Flight With Confidence
          </h1>
          <p className="font-inter text-lg text-[var(--color-on-surface-variant)] max-w-2xl mx-auto">
            Experience flight booking reimagined through liquid intelligence. Fast, fluid, and focused on your journey.
          </p>
        </div>

        {/* Central Flight Search Card */}
        <GlassCard className="w-full max-w-5xl p-[var(--spacing-md)] md:p-[var(--spacing-xl)] overflow-visible group">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[var(--spacing-md)] relative z-10">
            {/* Origin */}
            <div className="flex flex-col gap-[var(--spacing-xs)]">
              <label className="font-inter text-xs font-semibold text-[var(--color-secondary)] uppercase tracking-widest px-[var(--spacing-xs)]">
                Origin
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-outline)]">
                  flight_takeoff
                </span>
                <input
                  type="text"
                  placeholder="London (LHR)"
                  className="w-full bg-white/5 border border-white/20 rounded-xl py-3 pl-11 pr-4 text-[var(--color-on-surface)] placeholder:text-[var(--color-outline)] focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)]/30 backdrop-blur-md transition-all font-inter"
                />
              </div>
            </div>

            {/* Destination */}
            <div className="flex flex-col gap-[var(--spacing-xs)]">
              <label className="font-inter text-xs font-semibold text-[var(--color-secondary)] uppercase tracking-widest px-[var(--spacing-xs)]">
                Destination
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-outline)]">
                  flight_land
                </span>
                <input
                  type="text"
                  placeholder="Tokyo (NRT)"
                  className="w-full bg-white/5 border border-white/20 rounded-xl py-3 pl-11 pr-4 text-[var(--color-on-surface)] placeholder:text-[var(--color-outline)] focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)]/30 backdrop-blur-md transition-all font-inter"
                />
              </div>
            </div>

            {/* Dates */}
            <div className="flex flex-col gap-[var(--spacing-xs)]">
              <label className="font-inter text-xs font-semibold text-[var(--color-secondary)] uppercase tracking-widest px-[var(--spacing-xs)]">
                Dates
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-outline)]">
                  calendar_month
                </span>
                <input
                  type="text"
                  placeholder="Oct 24 - Oct 31"
                  className="w-full bg-white/5 border border-white/20 rounded-xl py-3 pl-11 pr-4 text-[var(--color-on-surface)] placeholder:text-[var(--color-outline)] focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)]/30 backdrop-blur-md transition-all font-inter"
                />
              </div>
            </div>

            {/* Passengers */}
            <div className="flex flex-col gap-[var(--spacing-xs)]">
              <label className="font-inter text-xs font-semibold text-[var(--color-secondary)] uppercase tracking-widest px-[var(--spacing-xs)]">
                Passengers
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-outline)]">
                  person
                </span>
                <select className="w-full bg-white/5 border border-white/20 rounded-xl py-3 pl-11 pr-4 text-[var(--color-on-surface)] focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)]/30 backdrop-blur-md transition-all font-inter appearance-none [&>option]:bg-[var(--color-surface)]">
                  <option value="1">1 Passenger</option>
                  <option value="2">2 Passengers</option>
                  <option value="3">3 Passengers</option>
                  <option value="4">4+ Passengers</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-[var(--spacing-xl)] flex flex-col md:flex-row items-center justify-between gap-[var(--spacing-md)] relative z-10">
            <div className="flex gap-[var(--spacing-sm)]">
              <div className="flex items-center gap-[var(--spacing-xs)] px-[var(--spacing-md)] py-[var(--spacing-xs)] rounded-full bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/30 text-[var(--color-secondary)] animate-pulse">
                <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                <span className="font-inter text-sm font-medium">AI Optimization Active</span>
              </div>
            </div>

            <Button onClick={handleSearch} disabled={isSearching} className="w-full md:w-auto">
              {isSearching ? (
                <>
                  <span className="material-symbols-outlined animate-spin mr-2">progress_activity</span>
                  Computing...
                </>
              ) : (
                <>
                  Explore Expeditions
                  <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </>
              )}
            </Button>
          </div>
        </GlassCard>

        {/* Featured Bento Grid */}
        <section className="w-full max-w-[var(--spacing-container-max)] mt-[var(--spacing-xl)] grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-md)]">
          {/* Large Promotion Card */}
          <GlassCard className="md:col-span-8 h-[400px] overflow-hidden group cursor-pointer !p-0">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-[var(--spacing-xl)]">
              <span className="font-inter text-xs font-semibold text-[var(--color-tertiary)] uppercase tracking-widest bg-[var(--color-tertiary)]/20 px-[var(--spacing-sm)] py-1 rounded-full mb-[var(--spacing-sm)] inline-block">
                Flash Expedition
              </span>
              <h2 className="font-outfit text-3xl font-bold text-white mb-[var(--spacing-xs)]">
                Neo-Tokyo Skyloft Suites
              </h2>
              <p className="font-inter text-base text-white/70 max-w-md">
                Limited time access to the sub-orbital transit corridor with 40% AI-yield discount.
              </p>
            </div>
          </GlassCard>

          {/* Small Interactive Cards */}
          <div className="md:col-span-4 flex flex-col gap-[var(--spacing-md)]">
            <GlassCard className="flex-1 flex flex-col justify-center items-center text-center cursor-pointer border-[var(--color-secondary)]/20 hover:border-[var(--color-secondary)]/50 transition-all group p-[var(--spacing-md)]">
              <span className="material-symbols-outlined text-[48px] text-[var(--color-secondary)] mb-[var(--spacing-sm)] group-hover:rotate-12 transition-transform">
                rocket_launch
              </span>
              <h3 className="font-outfit text-2xl font-bold text-[var(--color-secondary)]">AeroHub Elite</h3>
              <p className="font-inter text-sm text-[var(--color-on-surface-variant)] mt-2">
                Membership for the frequent star-voyager.
              </p>
            </GlassCard>

            <GlassCard className="flex-1 flex flex-col justify-center items-center text-center cursor-pointer border-[var(--color-tertiary)]/20 hover:border-[var(--color-tertiary)]/50 transition-all group p-[var(--spacing-md)]">
              <span className="material-symbols-outlined text-[48px] text-[var(--color-tertiary)] mb-[var(--spacing-sm)] group-hover:scale-110 transition-transform">
                smart_toy
              </span>
              <h3 className="font-outfit text-2xl font-bold text-[var(--color-tertiary)]">Concierge AI</h3>
              <p className="font-inter text-sm text-[var(--color-on-surface-variant)] mt-2">
                24/7 automated trip modification and support.
              </p>
            </GlassCard>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full mt-auto bg-[var(--color-surface-container-lowest)]/40 backdrop-blur-md border-t border-white/10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center px-[var(--spacing-xl)] py-[var(--spacing-lg)] max-w-[var(--spacing-container-max)] mx-auto">
          <div className="mb-[var(--spacing-md)] md:mb-0 text-center md:text-left">
            <div className="font-outfit text-2xl font-bold text-[var(--color-tertiary)] mb-[var(--spacing-xs)]">
              AeroHub
            </div>
            <p className="font-inter text-base text-[var(--color-on-surface-variant)] opacity-80">
              © 2026 AeroHub Galactic. All rights reserved.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-[var(--spacing-md)]">
            <a className="font-inter text-xs font-semibold text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] hover:-translate-y-0.5 transition-all uppercase tracking-widest" href="#">
              Privacy Policy
            </a>
            <a className="font-inter text-xs font-semibold text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] hover:-translate-y-0.5 transition-all uppercase tracking-widest" href="#">
              Terms of Service
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
