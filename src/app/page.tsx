"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";
import { useAuth } from "@/components/AuthProvider";

export default function LandingWelcomePage() {
  const { profile } = useAuth();
  const [origin, setOrigin] = useState("Lagos (LOS)");
  const [destination, setDestination] = useState("Abuja (ABV)");
  const [departureDate, setDepartureDate] = useState("2026-10-24");

  const displayName = profile?.username ? `Commander ${profile.username}` : "Commander";

  return (
    <div className="bg-[var(--color-background)] text-[var(--color-on-background)] font-inter min-h-screen flex flex-col selection:bg-[var(--color-tertiary)]/30 overflow-x-hidden relative w-full">
      {/* Background Environment */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#1a2a44_0%,_#111415_100%)]"></div>
      </div>

      {/* Nigerian Airports Datalist */}
      <datalist id="nigerian-airports">
        <option value="Lagos (LOS)" />
        <option value="Abuja (ABV)" />
        <option value="Port Harcourt (PHC)" />
        <option value="Kano (KAN)" />
        <option value="Enugu (ENU)" />
        <option value="Benin (BNI)" />
        <option value="Kaduna (KAD)" />
      </datalist>

      {/* Content Canvas */}
      <section className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 md:px-8 py-10 mt-16 w-full max-w-[1600px] mx-auto">
        <div className="w-full flex flex-col md:grid md:grid-cols-12 gap-10 items-center">
          {/* Left Content: Welcome*/}
          <div className="md:col-span-7 flex flex-col gap-6 text-center md:text-left w-full min-w-0">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-[var(--color-secondary-container)]/20 border border-[var(--color-secondary)]/30 rounded-full w-fit mx-auto lg:mx-0">
              <span className="material-symbols-outlined text-[var(--color-secondary)] text-[18px]">verified</span>
              <span className="font-inter text-[12px] font-bold text-[var(--color-secondary)] uppercase tracking-widest">Enabling Galactic Protocol</span>
            </div>
            <h1 className="font-outfit text-4xl md:text-[56px] text-[var(--color-secondary)] leading-tight font-bold tracking-tight break-words">
              Welcome Home,<br />
              <span className="text-[var(--color-tertiary)]">{displayName}.</span>
            </h1>
            <p className="font-inter text-lg text-[var(--color-on-surface-variant)] max-w-2xl mx-auto md:mx-0 break-normal whitespace-normal">
              Your destination starts here. Experience a faster, smarter way to book flights and plan unforgettable journeys.
            </p>
            <form onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `/search?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&date=${encodeURIComponent(departureDate)}`;
            }} className="mt-6 flex flex-col gap-4 w-full max-w-3xl bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="font-inter text-xs font-semibold text-[var(--color-secondary)] uppercase tracking-[0.1em] text-left">Origin</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-sm">flight_takeoff</span>
                    <input 
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      list="nigerian-airports"
                      className="w-full bg-white/5 border border-white/20 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-secondary)] transition-all font-inter text-sm" 
                      placeholder="E.g. Lagos (LOS)" 
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-inter text-xs font-semibold text-[var(--color-secondary)] uppercase tracking-[0.1em] text-left">Destination</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-sm">flight_land</span>
                    <input 
                      value={origin === "Lagos (LOS)" && destination === "Abuja (ABV)" ? "Abuja (ABV)" : destination}
                      onChange={(e) => setDestination(e.target.value)}
                      list="nigerian-airports"
                      className="w-full bg-white/5 border border-white/20 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-secondary)] transition-all font-inter text-sm" 
                      placeholder="E.g. Abuja (ABV)" 
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-end">
                <div className="flex flex-col gap-1">
                  <label className="font-inter text-xs font-semibold text-[var(--color-secondary)] uppercase tracking-[0.1em] text-left">Departure Date</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-sm">calendar_month</span>
                    <input 
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className="w-full bg-white/5 border border-white/20 rounded-xl py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-[var(--color-secondary)] transition-all font-inter text-sm" 
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="bg-[var(--color-tertiary)] text-[var(--color-on-tertiary-fixed)] font-inter text-sm font-bold h-[45px] rounded-xl shadow-[0_0_20px_rgba(251,188,0,0.4)] hover:shadow-[0_0_35px_rgba(251,188,0,0.6)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 uppercase tracking-widest w-full cursor-pointer">
                  <span>Search Flights</span>
                  <span className="material-symbols-outlined text-sm">search</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right*/}
          <div className="md:col-span-5 relative w-full">
            <div className="absolute -top-12 -right-8 w-32 h-32 bg-[var(--color-secondary)]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-8 w-40 h-40 bg-[var(--color-tertiary)]/10 rounded-full blur-3xl"></div>
            
            {/* The "Liquid Glass" Identity Card */}
            <div className="bg-[rgba(255,255,255,0.08)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-[32px] p-[var(--spacing-md)] md:p-[var(--spacing-lg)] relative overflow-hidden shadow-2xl animate-float min-h-[320px] flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              
              {/* Card Header */}
              <div className="flex justify-between items-start mb-[var(--spacing-lg)] relative z-10 gap-2">
                <div className="flex items-center gap-[var(--spacing-md)] min-w-0">
                  <div className="w-16 h-16 rounded-full border-2 border-[var(--color-tertiary)] p-1 shrink-0">
                    <img alt="User Profile" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABPluzZT45nJh2Stjb8yaK6oaFqCh2jmzdd8giITe0Jon-N2n0AlPF5mVmV2ffj4lww7FyG5geGLB5jlVrcLuTgedKjInyqwusq71sLlDBFKqEchA4ekIh1djQYxHeo_XLme5XxOujzeWkPNZlO1GYwVcGU7QO-zDb4dNAgXB3gVCd0jcD89or7EUnxkqMfvdqqajyjfz54Av1L4ekkmU_BnOWbRCntvU0KDaM80ws68evFL8goz2ya79aofSLiC3oEpTlhAFy3nOV" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-outfit text-xl font-bold text-[var(--color-secondary)] truncate">{displayName}</h3>
                    <p className="font-inter text-sm font-semibold text-[var(--color-tertiary)] flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                      Elite Voyager
                    </p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-inter text-xs text-[var(--color-on-surface-variant)] uppercase tracking-tighter block">Identity Hash</span>
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
                    <p className="font-outfit text-xl font-bold text-[var(--color-tertiary)]">Abuja Skyport</p>
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
      </section>

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
