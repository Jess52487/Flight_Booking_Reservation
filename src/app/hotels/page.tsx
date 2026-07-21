"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";
import { NavBar } from "@/components/NavBar";

export default function HotelsPage() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Replicate the micro-interaction for liquid cards
    const cards = document.querySelectorAll(".glass-panel-interactive");
    cards.forEach((card: any) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
        card.style.borderColor = `rgba(137, 208, 237, ${0.2 + Math.random() * 0.1})`;
      };
      
      const handleMouseLeave = () => {
        card.style.borderColor = "rgba(255, 255, 255, 0.2)";
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <div className="flex pt-20 h-screen overflow-hidden bg-[var(--color-background)] font-inter text-[var(--color-on-surface)]">
      <NavBar />

      {/* Floating Atmosphere Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-[var(--color-secondary-container)] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-[var(--color-primary-container)] rounded-full blur-[150px]"></div>
      </div>

      {/* SideNavBar */}
      <aside className="hidden md:flex flex-col h-full py-[var(--spacing-md)] bg-[var(--color-surface)]/10 backdrop-blur-2xl border-r border-white/20 w-64 fixed left-0 top-0 pt-24 z-40">
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
              <div className="font-inter text-[14px] font-medium text-[var(--color-secondary)]">Commander</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-tertiary)]">Elite Voyager</div>
            </div>
          </div>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-[var(--color-on-surface-variant)] hover:bg-white/5 px-4 py-3 flex items-center gap-3 transition-all duration-500 ease-in-out">
                <span className="material-symbols-outlined">rocket_launch</span>
                <span className="font-inter text-[14px] font-medium">Expeditions</span>
              </Link>
            </li>
            <li>
              <Link href="/hotels" className="bg-[var(--color-secondary-container)]/30 text-[var(--color-secondary)] border-l-4 border-[var(--color-tertiary)] px-4 py-3 flex items-center gap-3 transition-all duration-500 ease-in-out">
                <span className="material-symbols-outlined">bed</span>
                <span className="font-inter text-[14px] font-medium">Stay</span>
              </Link>
            </li>
            <li>
              <Link href="/manage" className="text-[var(--color-on-surface-variant)] hover:bg-white/5 px-4 py-3 flex items-center gap-3 transition-all duration-500 ease-in-out">
                <span className="material-symbols-outlined">confirmation_number</span>
                <span className="font-inter text-[14px] font-medium">Bookings</span>
              </Link>
            </li>
            <li>
              <Link href="/assistant" className="text-[var(--color-on-surface-variant)] hover:bg-white/5 px-4 py-3 flex items-center gap-3 transition-all duration-500 ease-in-out">
                <span className="material-symbols-outlined">smart_toy</span>
                <span className="font-inter text-[14px] font-medium">Concierge</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="px-[var(--spacing-md)] mt-auto">
          <button className="w-full py-4 bg-[var(--color-tertiary)] text-[var(--color-on-tertiary-fixed)] font-bold rounded-xl shadow-[0_0_15px_rgba(251,188,0,0.4)] hover:shadow-[0_0_25px_rgba(251,188,0,0.7)] scale-95 active:scale-90 transition-all uppercase tracking-tighter text-[12px]">
            Book New Flight
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 overflow-y-auto no-scrollbar relative z-10">
        
        {/* Hero Section */}
        <section className="px-[var(--spacing-xl)] py-[var(--spacing-lg)] relative">
          <div className="max-w-4xl mx-auto text-center mb-[var(--spacing-xl)]">
            <h1 className="font-outfit text-5xl md:text-[56px] mb-[var(--spacing-md)] leading-tight text-[var(--color-secondary)] font-bold tracking-tight">
              Discover <span className="text-white">Extraordinary</span> Stays
            </h1>
            <p className="text-[var(--color-on-surface-variant)] font-inter text-[18px] max-w-2xl mx-auto">
              From lunar craters to atmospheric skylofts, find your sanctuary among the stars with AeroHub's curated orbital escapes.
            </p>
          </div>

          {/* Search Bar */}
          <GlassCard className="max-w-5xl mx-auto p-2 rounded-full flex flex-wrap md:flex-nowrap items-center gap-2 mb-20 !bg-[rgba(255,255,255,0.08)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
            <div className="flex-1 flex items-center px-[var(--spacing-sm)] gap-2 group focus-within:ring-1 focus-within:ring-[var(--color-secondary)] rounded-full py-2">
              <span className="material-symbols-outlined text-[var(--color-secondary)]">location_on</span>
              <input className="bg-transparent border-none focus:ring-0 text-[var(--color-on-surface)] w-full placeholder:text-[var(--color-on-surface-variant)]/50 font-inter text-[16px] outline-none" placeholder="Where to?" type="text" />
            </div>
            <div className="w-px h-8 bg-white/20 hidden md:block"></div>
            <div className="flex-1 flex items-center px-[var(--spacing-sm)] gap-2 group focus-within:ring-1 focus-within:ring-[var(--color-secondary)] rounded-full py-2">
              <span className="material-symbols-outlined text-[var(--color-secondary)]">calendar_month</span>
              <input className="bg-transparent border-none focus:ring-0 text-[var(--color-on-surface)] w-full placeholder:text-[var(--color-on-surface-variant)]/50 font-inter text-[16px] outline-none" placeholder="Dates" type="text" />
            </div>
            <div className="w-px h-8 bg-white/20 hidden md:block"></div>
            <div className="flex-1 flex items-center px-[var(--spacing-sm)] gap-2 group focus-within:ring-1 focus-within:ring-[var(--color-secondary)] rounded-full py-2">
              <span className="material-symbols-outlined text-[var(--color-secondary)]">group</span>
              <input className="bg-transparent border-none focus:ring-0 text-[var(--color-on-surface)] w-full placeholder:text-[var(--color-on-surface-variant)]/50 font-inter text-[16px] outline-none" placeholder="Guests" type="text" />
            </div>
            <button className="bg-[var(--color-secondary)] text-[var(--color-on-secondary)] px-[var(--spacing-lg)] py-3 rounded-full font-bold uppercase tracking-tight text-[12px] hover:brightness-110 transition-all">
              Search
            </button>
          </GlassCard>

          {/* Filters Strip */}
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-[var(--spacing-sm)] mb-[var(--spacing-lg)]">
            <div className="px-[var(--spacing-md)] py-2 bg-[rgba(255,255,255,0.08)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] shadow-[0_20px_40px_rgba(0,0,0,0.3)] rounded-full flex items-center gap-2 cursor-pointer hover:bg-white/10 transition-all">
              <span className="font-inter text-[14px] font-medium tracking-[0.05em]">Atmosphere: Zero-G</span>
              <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </div>
            <div className="px-[var(--spacing-md)] py-2 bg-[rgba(255,255,255,0.08)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] shadow-[0_20px_40px_rgba(0,0,0,0.3)] rounded-full flex items-center gap-2 cursor-pointer hover:bg-white/10 transition-all">
              <span className="font-inter text-[14px] font-medium tracking-[0.05em]">Amenities: AI Butler</span>
              <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </div>
            <div className="px-[var(--spacing-md)] py-2 bg-[rgba(255,255,255,0.08)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] shadow-[0_20px_40px_rgba(0,0,0,0.3)] rounded-full flex items-center gap-2 cursor-pointer hover:bg-white/10 transition-all">
              <span className="font-inter text-[14px] font-medium tracking-[0.05em]">Price Range</span>
              <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </div>
            <div className="px-[var(--spacing-md)] py-2 bg-[var(--color-secondary)]/20 border border-[var(--color-secondary)]/40 rounded-full flex items-center gap-2 cursor-pointer transition-all">
              <span className="font-inter text-[14px] font-medium tracking-[0.05em] text-[var(--color-secondary)]">More Filters</span>
              <span className="material-symbols-outlined text-[18px] text-[var(--color-secondary)]">tune</span>
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="px-[var(--spacing-xl)] py-[var(--spacing-lg)] bg-[var(--color-surface-container-lowest)]/30 border-t border-white/5">
          <div className="max-w-[var(--spacing-container-max)] mx-auto">
            <h2 className="font-outfit text-[32px] font-bold mb-[var(--spacing-lg)] flex items-center gap-3">
              <span className="w-12 h-px bg-[var(--color-tertiary)]"></span> Featured Properties
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-lg)]" ref={cardsRef}>
              {/* Card 1 */}
              <GlassCard className="rounded-[24px] overflow-hidden group cursor-pointer !p-0 glass-panel-interactive border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.08)] hover:border-white/30 hover:shadow-[0_20px_40px_rgba(137,208,237,0.15)] transition-all">
                <div className="h-64 relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=600"
                    alt="Lunar Outposts"
                  />
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full font-inter text-[12px] font-bold border border-white/20 tracking-[0.1em]">
                    Low-G
                  </div>
                </div>
                <div className="p-[var(--spacing-md)]">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-outfit text-[24px] font-bold text-[var(--color-on-surface)]">Lunar Outposts</h3>
                    <span className="text-[var(--color-secondary)] font-bold">Ξ 2.4 / night</span>
                  </div>
                  <p className="text-[var(--color-on-surface-variant)] font-inter text-[16px] mb-[var(--spacing-md)]">
                    Experience the silent serenity of the Shackleton Crater with earth-rise views.
                  </p>
                  <button className="w-full py-3 bg-[var(--color-tertiary)] text-[var(--color-on-tertiary-fixed)] font-bold rounded-xl relative overflow-hidden group-hover:shadow-[0_0_15px_rgba(251,188,0,0.4)] transition-all uppercase tracking-widest text-xs">
                    View Details
                  </button>
                </div>
              </GlassCard>

              {/* Card 2 */}
              <GlassCard className="rounded-[24px] overflow-hidden group cursor-pointer !p-0 glass-panel-interactive border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.08)] hover:border-white/30 hover:shadow-[0_20px_40px_rgba(137,208,237,0.15)] transition-all">
                <div className="h-64 relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600"
                    alt="Orbital Suites"
                  />
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full font-inter text-[12px] font-bold border border-white/20 tracking-[0.1em]">
                    Zero-G
                  </div>
                </div>
                <div className="p-[var(--spacing-md)]">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-outfit text-[24px] font-bold text-[var(--color-on-surface)]">Orbital Suites</h3>
                    <span className="text-[var(--color-secondary)] font-bold">Ξ 4.1 / night</span>
                  </div>
                  <p className="text-[var(--color-on-surface-variant)] font-inter text-[16px] mb-[var(--spacing-md)]">
                    Suspended in the rings of Saturn, witness the cosmos in pure weightless luxury.
                  </p>
                  <button className="w-full py-3 bg-[var(--color-tertiary)] text-[var(--color-on-tertiary-fixed)] font-bold rounded-xl relative overflow-hidden group-hover:shadow-[0_0_15px_rgba(251,188,0,0.4)] transition-all uppercase tracking-widest text-xs">
                    View Details
                  </button>
                </div>
              </GlassCard>

              {/* Card 3 */}
              <GlassCard className="rounded-[24px] overflow-hidden group cursor-pointer !p-0 glass-panel-interactive border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.08)] hover:border-white/30 hover:shadow-[0_20px_40px_rgba(137,208,237,0.15)] transition-all">
                <div className="h-64 relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1542314831-c6a4d27ce66b?auto=format&fit=crop&q=80&w=600"
                    alt="Skyloft Penthouses"
                  />
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full font-inter text-[12px] font-bold border border-white/20 tracking-[0.1em]">
                    High-G
                  </div>
                </div>
                <div className="p-[var(--spacing-md)]">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-outfit text-[24px] font-bold text-[var(--color-on-surface)]">Skyloft Penthouses</h3>
                    <span className="text-[var(--color-secondary)] font-bold">Ξ 1.8 / night</span>
                  </div>
                  <p className="text-[var(--color-on-surface-variant)] font-inter text-[16px] mb-[var(--spacing-md)]">
                    Floating above Neo-Tokyo, these retreats offer the ultimate atmospheric height.
                  </p>
                  <button className="w-full py-3 bg-[var(--color-tertiary)] text-[var(--color-on-tertiary-fixed)] font-bold rounded-xl relative overflow-hidden group-hover:shadow-[0_0_15px_rgba(251,188,0,0.4)] transition-all uppercase tracking-widest text-xs">
                    View Details
                  </button>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* AI Curation Section */}
        <section className="px-[var(--spacing-xl)] py-[var(--spacing-lg)]">
          <div className="max-w-[var(--spacing-container-max)] mx-auto">
            <div className="flex items-center justify-between mb-[var(--spacing-lg)]">
              <h2 className="font-outfit text-[32px] font-bold text-[var(--color-on-surface)]">Curated for Your Horizon</h2>
              <div className="flex items-center gap-2 text-[var(--color-secondary)] font-inter text-[14px] font-medium tracking-[0.05em]">
                <span className="material-symbols-outlined text-[20px] animate-pulse">auto_awesome</span>
                AI Personalized Selection
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-md)]">
              <GlassCard className="p-[var(--spacing-md)] rounded-xl border-l-4 border-[var(--color-secondary)] flex gap-[var(--spacing-md)] items-center animate-[pulse-sky_3s_infinite_ease-in-out]">
                <div className="w-32 h-32 rounded-lg bg-[var(--color-surface-container)] overflow-hidden flex-shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=400"
                    alt="Andromeda Observation Deck"
                  />
                </div>
                <div>
                  <div className="font-inter text-[12px] font-bold text-[var(--color-tertiary)] uppercase tracking-[0.1em] mb-1">
                    Top Match - 98% Compatibility
                  </div>
                  <h4 className="font-outfit text-[24px] font-bold text-[var(--color-on-surface)] mb-1">Andromeda Observation Deck</h4>
                  <p className="text-[var(--color-on-surface-variant)] font-inter text-[16px] mb-2">
                    Based on your interest in "Nebula Photography" and "Silent Retreats".
                  </p>
                  <button className="text-[var(--color-secondary)] font-bold text-[14px] flex items-center gap-1 hover:gap-3 transition-all">
                    Explore match <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </GlassCard>

              <GlassCard className="p-[var(--spacing-md)] rounded-xl border-l-4 border-[var(--color-secondary)] flex gap-[var(--spacing-md)] items-center animate-[pulse-sky_3s_infinite_ease-in-out]">
                <div className="w-32 h-32 rounded-lg bg-[var(--color-surface-container)] overflow-hidden flex-shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=400"
                    alt="Europa Sub-Ice Lodge"
                  />
                </div>
                <div>
                  <div className="font-inter text-[12px] font-bold text-[var(--color-tertiary)] uppercase tracking-[0.1em] mb-1">
                    Curated Gem
                  </div>
                  <h4 className="font-outfit text-[24px] font-bold text-[var(--color-on-surface)] mb-1">Europa Sub-Ice Lodge</h4>
                  <p className="text-[var(--color-on-surface-variant)] font-inter text-[16px] mb-2">
                    Fits your preference for "Extreme Environments" and "Bioluminescent Views".
                  </p>
                  <button className="text-[var(--color-secondary)] font-bold text-[14px] flex items-center gap-1 hover:gap-3 transition-all">
                    Explore match <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full mt-auto bg-[var(--color-surface-container-lowest)]/40 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center px-[var(--spacing-xl)] py-[var(--spacing-lg)] max-w-[var(--spacing-container-max)] mx-auto">
            <div className="font-outfit text-[24px] font-bold text-[var(--color-tertiary)] mb-[var(--spacing-md)] md:mb-0">
              AeroHub
            </div>
            <div className="flex flex-wrap justify-center gap-[var(--spacing-lg)] mb-[var(--spacing-md)] md:mb-0">
              <Link href="#" className="font-inter text-[12px] font-bold tracking-[0.1em] text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-transform hover:-translate-y-0.5">Privacy Policy</Link>
              <Link href="#" className="font-inter text-[12px] font-bold tracking-[0.1em] text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-transform hover:-translate-y-0.5">Terms of Service</Link>
              <Link href="#" className="font-inter text-[12px] font-bold tracking-[0.1em] text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-transform hover:-translate-y-0.5">Sustainability</Link>
              <Link href="#" className="font-inter text-[12px] font-bold tracking-[0.1em] text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-transform hover:-translate-y-0.5">Global Lounges</Link>
            </div>
            <div className="text-[var(--color-on-surface-variant)] font-inter text-[16px] opacity-80">
              © 2026 AeroHub Galactic. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
