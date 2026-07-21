"use client";

import React from "react";
import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";

export default function HotelsPage() {
  return (
    <div className="flex pt-20 h-[calc(100vh-80px)] overflow-hidden bg-[var(--color-background)]">
      {/* SideNavBar */}
      <aside className="hidden md:flex flex-col h-full py-[var(--spacing-md)] bg-[var(--color-surface)]/10 backdrop-blur-2xl border-r border-white/20 w-64 flex-shrink-0 z-40">
        <div className="px-[var(--spacing-md)] mb-[var(--spacing-lg)]">
          <div className="flex items-center gap-3 mb-[var(--spacing-xs)]">
            <div className="w-10 h-10 rounded-full bg-[var(--color-secondary-container)]/30 flex items-center justify-center border border-white/20 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Profile"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100"
              />
            </div>
            <div>
              <div className="font-inter text-sm font-medium text-[var(--color-secondary)]">Commander</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-tertiary)]">Elite Voyager</div>
            </div>
          </div>
        </div>

        <nav className="flex-grow">
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="text-[var(--color-on-surface-variant)] hover:bg-white/5 px-4 py-3 flex items-center gap-3 transition-all duration-500 ease-in-out"
              >
                <span className="material-symbols-outlined">rocket_launch</span>
                <span className="font-inter text-sm font-medium">Expeditions</span>
              </Link>
            </li>
            <li>
              <Link
                href="/hotels"
                className="bg-[var(--color-secondary-container)]/30 text-[var(--color-secondary)] border-l-4 border-[var(--color-tertiary)] px-4 py-3 flex items-center gap-3 transition-all duration-500 ease-in-out"
              >
                <span className="material-symbols-outlined">bed</span>
                <span className="font-inter text-sm font-medium">Stay</span>
              </Link>
            </li>
            <li>
              <Link
                href="/manage"
                className="text-[var(--color-on-surface-variant)] hover:bg-white/5 px-4 py-3 flex items-center gap-3 transition-all duration-500 ease-in-out"
              >
                <span className="material-symbols-outlined">confirmation_number</span>
                <span className="font-inter text-sm font-medium">Bookings</span>
              </Link>
            </li>
            <li>
              <Link
                href="/assistant"
                className="text-[var(--color-on-surface-variant)] hover:bg-white/5 px-4 py-3 flex items-center gap-3 transition-all duration-500 ease-in-out"
              >
                <span className="material-symbols-outlined">smart_toy</span>
                <span className="font-inter text-sm font-medium">Concierge</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="px-[var(--spacing-md)] mt-auto">
          <button className="w-full py-4 bg-[var(--color-tertiary)] text-[var(--color-on-tertiary-fixed)] font-bold rounded-xl shadow-[0_0_15px_rgba(251,188,0,0.4)] hover:shadow-[0_0_25px_rgba(251,188,0,0.7)] hover:-translate-y-0.5 scale-95 active:scale-90 transition-all uppercase tracking-tighter text-xs">
            Book New Flight
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto no-scrollbar relative">
        <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[var(--color-primary-container)]/20 via-transparent to-transparent"></div>

        {/* Hero Section */}
        <section className="px-[var(--spacing-md)] md:px-[var(--spacing-xl)] py-[var(--spacing-lg)] relative">
          <div className="max-w-4xl mx-auto text-center mb-[var(--spacing-xl)]">
            <h1 className="font-outfit text-5xl md:text-6xl mb-[var(--spacing-md)] leading-tight text-[var(--color-secondary)] font-bold">
              Discover <span className="text-white">Extraordinary</span> Stays
            </h1>
            <p className="text-[var(--color-on-surface-variant)] font-inter text-lg max-w-2xl mx-auto">
              From lunar craters to atmospheric skylofts, find your sanctuary among the stars with AetherAir's curated orbital escapes.
            </p>
          </div>

          {/* Search Bar */}
          <GlassCard className="max-w-5xl mx-auto p-2 rounded-full flex flex-wrap md:flex-nowrap items-center gap-2 mb-20 !overflow-visible relative z-10 border-white/20">
            <div className="flex-1 flex items-center px-[var(--spacing-sm)] gap-2">
              <span className="material-symbols-outlined text-[var(--color-secondary)]">location_on</span>
              <input
                className="bg-transparent border-none focus:ring-0 text-[var(--color-on-surface)] w-full placeholder:text-[var(--color-on-surface-variant)]/50 font-inter outline-none"
                placeholder="Where to?"
                type="text"
              />
            </div>
            <div className="w-px h-8 bg-white/20 hidden md:block"></div>
            <div className="flex-1 flex items-center px-[var(--spacing-sm)] gap-2">
              <span className="material-symbols-outlined text-[var(--color-secondary)]">calendar_month</span>
              <input
                className="bg-transparent border-none focus:ring-0 text-[var(--color-on-surface)] w-full placeholder:text-[var(--color-on-surface-variant)]/50 font-inter outline-none"
                placeholder="Dates"
                type="text"
              />
            </div>
            <div className="w-px h-8 bg-white/20 hidden md:block"></div>
            <div className="flex-1 flex items-center px-[var(--spacing-sm)] gap-2">
              <span className="material-symbols-outlined text-[var(--color-secondary)]">group</span>
              <input
                className="bg-transparent border-none focus:ring-0 text-[var(--color-on-surface)] w-full placeholder:text-[var(--color-on-surface-variant)]/50 font-inter outline-none"
                placeholder="Guests"
                type="text"
              />
            </div>
            <button className="bg-[var(--color-secondary)] text-[var(--color-on-secondary)] px-[var(--spacing-lg)] py-3 rounded-full font-bold uppercase tracking-tight text-xs hover:brightness-110 transition-all shadow-[0_0_15px_rgba(137,208,237,0.4)]">
              Search
            </button>
          </GlassCard>

          {/* Filters Strip */}
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-[var(--spacing-sm)] mb-[var(--spacing-lg)]">
            <div className="px-[var(--spacing-md)] py-2 bg-white/5 backdrop-blur-md border border-white/20 rounded-full flex items-center gap-2 cursor-pointer hover:bg-white/10 transition-all">
              <span className="font-inter text-sm font-medium">Atmosphere: Zero-G</span>
              <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </div>
            <div className="px-[var(--spacing-md)] py-2 bg-white/5 backdrop-blur-md border border-white/20 rounded-full flex items-center gap-2 cursor-pointer hover:bg-white/10 transition-all">
              <span className="font-inter text-sm font-medium">Amenities: AI Butler</span>
              <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </div>
            <div className="px-[var(--spacing-md)] py-2 bg-[var(--color-secondary)]/20 border border-[var(--color-secondary)]/40 rounded-full flex items-center gap-2 cursor-pointer transition-all hover:bg-[var(--color-secondary)]/30">
              <span className="font-inter text-sm font-medium text-[var(--color-secondary)]">More Filters</span>
              <span className="material-symbols-outlined text-[18px] text-[var(--color-secondary)]">tune</span>
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="px-[var(--spacing-md)] md:px-[var(--spacing-xl)] py-[var(--spacing-lg)] bg-[var(--color-surface-container-lowest)]/30 border-t border-white/5">
          <div className="max-w-[var(--spacing-container-max)] mx-auto">
            <h2 className="font-outfit text-3xl font-bold mb-[var(--spacing-lg)] flex items-center gap-3">
              <span className="w-12 h-px bg-[var(--color-tertiary)]"></span> Featured Properties
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-lg)]">
              {/* Card 1 */}
              <GlassCard className="rounded-[24px] overflow-hidden group cursor-pointer !p-0">
                <div className="h-64 relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=600"
                    alt="Lunar Outposts"
                  />
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full font-inter text-xs font-bold border border-white/20">
                    Low-G
                  </div>
                </div>
                <div className="p-[var(--spacing-md)]">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-outfit text-2xl font-bold text-[var(--color-on-surface)]">Lunar Outposts</h3>
                    <span className="text-[var(--color-secondary)] font-bold">Ξ 2.4 / night</span>
                  </div>
                  <p className="text-[var(--color-on-surface-variant)] font-inter text-base mb-[var(--spacing-md)]">
                    Experience the silent serenity of the Shackleton Crater with earth-rise views.
                  </p>
                  <button className="w-full py-3 bg-[var(--color-tertiary)] text-[var(--color-on-tertiary-fixed)] font-bold rounded-xl hover:shadow-[0_0_20px_rgba(251,188,0,0.5)] transition-all uppercase tracking-widest text-xs">
                    View Details
                  </button>
                </div>
              </GlassCard>

              {/* Card 2 */}
              <GlassCard className="rounded-[24px] overflow-hidden group cursor-pointer !p-0">
                <div className="h-64 relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600"
                    alt="Orbital Suites"
                  />
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full font-inter text-xs font-bold border border-white/20">
                    Zero-G
                  </div>
                </div>
                <div className="p-[var(--spacing-md)]">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-outfit text-2xl font-bold text-[var(--color-on-surface)]">Orbital Suites</h3>
                    <span className="text-[var(--color-secondary)] font-bold">Ξ 4.1 / night</span>
                  </div>
                  <p className="text-[var(--color-on-surface-variant)] font-inter text-base mb-[var(--spacing-md)]">
                    Suspended in the rings of Saturn, witness the cosmos in pure weightless luxury.
                  </p>
                  <button className="w-full py-3 bg-[var(--color-tertiary)] text-[var(--color-on-tertiary-fixed)] font-bold rounded-xl hover:shadow-[0_0_20px_rgba(251,188,0,0.5)] transition-all uppercase tracking-widest text-xs">
                    View Details
                  </button>
                </div>
              </GlassCard>

              {/* Card 3 */}
              <GlassCard className="rounded-[24px] overflow-hidden group cursor-pointer !p-0">
                <div className="h-64 relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1542314831-c6a4d27ce66b?auto=format&fit=crop&q=80&w=600"
                    alt="Skyloft Penthouses"
                  />
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full font-inter text-xs font-bold border border-white/20">
                    High-G
                  </div>
                </div>
                <div className="p-[var(--spacing-md)]">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-outfit text-2xl font-bold text-[var(--color-on-surface)]">Skyloft Penthouses</h3>
                    <span className="text-[var(--color-secondary)] font-bold">Ξ 1.8 / night</span>
                  </div>
                  <p className="text-[var(--color-on-surface-variant)] font-inter text-base mb-[var(--spacing-md)]">
                    Floating above Neo-Tokyo, these retreats offer the ultimate atmospheric height.
                  </p>
                  <button className="w-full py-3 bg-[var(--color-tertiary)] text-[var(--color-on-tertiary-fixed)] font-bold rounded-xl hover:shadow-[0_0_20px_rgba(251,188,0,0.5)] transition-all uppercase tracking-widest text-xs">
                    View Details
                  </button>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full mt-auto bg-[var(--color-surface-container-lowest)]/40 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center px-[var(--spacing-xl)] py-[var(--spacing-lg)] max-w-[var(--spacing-container-max)] mx-auto">
            <div className="mb-[var(--spacing-md)] md:mb-0 text-center md:text-left">
              <div className="font-outfit text-2xl font-bold text-[var(--color-tertiary)] mb-[var(--spacing-xs)]">
                AetherAir
              </div>
              <p className="font-inter text-base text-[var(--color-on-surface-variant)] opacity-80">
                © 2026 AetherAir Galactic. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
