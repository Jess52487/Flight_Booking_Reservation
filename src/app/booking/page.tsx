"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/Button";

export default function BookingSeatSelectionPage() {
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);

  const occupiedSeats = [3, 8, 12, 19, 24, 30, 31, 45, 52];

  const handleSeatClick = (seatId: string, isOccupied: boolean) => {
    if (isOccupied) return;
    if (selectedSeat === seatId) {
      setSelectedSeat(null);
    } else {
      setSelectedSeat(seatId);
    }
  };

  return (
    <div className="text-[var(--color-on-surface)] font-inter min-h-screen flex flex-col bg-[var(--color-background)]">
      <NavBar />

      {/* Background Environment */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[var(--color-primary-container)]/20 via-[var(--color-background)] to-transparent"></div>
      </div>

      <div className="flex flex-1 pt-20">
        {/* SideNavBar */}
        <aside className="hidden md:flex h-[calc(100vh-80px)] w-64 sticky top-20 bg-[var(--color-surface)]/10 backdrop-blur-2xl border-r border-white/20 flex-col py-[var(--spacing-md)] z-40">
          <div className="px-[var(--spacing-md)] mb-[var(--spacing-lg)]">
            <div className="flex items-center gap-[var(--spacing-sm)] mb-[var(--spacing-sm)]">
              <div className="w-10 h-10 rounded-full bg-[var(--color-secondary-container)] flex items-center justify-center border border-white/20 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100"
                  alt="Commander Profile"
                />
              </div>
              <div>
                <p className="font-outfit text-[var(--color-secondary)] text-[16px] font-bold leading-tight">Commander</p>
                <p className="font-inter text-xs font-semibold text-[var(--color-on-surface-variant)] uppercase tracking-widest">Elite Voyager</p>
              </div>
            </div>
          </div>
          <nav className="flex-1 space-y-[var(--spacing-xs)]">
            <Link href="/" className="text-[var(--color-on-surface-variant)] hover:bg-white/5 px-4 py-3 flex items-center gap-3 transition-all duration-500 ease-in-out">
              <span className="material-symbols-outlined">rocket_launch</span>
              <span className="font-inter text-sm font-medium">Expeditions</span>
            </Link>
            <Link href="/hotels" className="text-[var(--color-on-surface-variant)] hover:bg-white/5 px-4 py-3 flex items-center gap-3 transition-all duration-500 ease-in-out">
              <span className="material-symbols-outlined">bed</span>
              <span className="font-inter text-sm font-medium">Stay</span>
            </Link>
            <Link href="/booking" className="bg-[var(--color-secondary-container)]/30 text-[var(--color-secondary)] border-l-4 border-[var(--color-tertiary)] px-4 py-3 flex items-center gap-3 transition-all duration-500 ease-in-out">
              <span className="material-symbols-outlined">confirmation_number</span>
              <span className="font-inter text-sm font-medium">Bookings</span>
            </Link>
            <Link href="/assistant" className="text-[var(--color-on-surface-variant)] hover:bg-white/5 px-4 py-3 flex items-center gap-3 transition-all duration-500 ease-in-out">
              <span className="material-symbols-outlined">smart_toy</span>
              <span className="font-inter text-sm font-medium">Concierge</span>
            </Link>
          </nav>
          <div className="mt-auto px-[var(--spacing-md)]">
            <Button variant="primary" className="w-full uppercase tracking-widest text-xs py-3 shadow-[0_0_15px_rgba(251,188,0,0.5)]">
              Book New Flight
            </Button>
          </div>
        </aside>

        {/* Main Content Canvas */}
        <main className="flex-1 p-[var(--spacing-md)] md:p-[var(--spacing-lg)] overflow-y-auto no-scrollbar">
          {/* Header Section */}
          <div className="mb-[var(--spacing-lg)] animate-in slide-in-from-top duration-700">
            <h1 className="font-outfit text-3xl md:text-4xl font-bold text-[var(--color-secondary)] mb-[var(--spacing-xs)]">
              Flight AA242: London to New York
            </h1>
            <p className="font-inter text-base text-[var(--color-on-surface-variant)]">
              Experience the stratosphere in unparalleled luxury. Select your gateway to the horizon.
            </p>
          </div>

          {/* Bento Dashboard */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-[var(--spacing-lg)] h-auto">
            {/* Seat Map Selection (Left Side) */}
            <GlassCard className="xl:col-span-7 rounded-[24px] p-[var(--spacing-md)] flex flex-col border border-white/10">
              <div className="flex justify-between items-center mb-[var(--spacing-md)]">
                <h2 className="font-outfit text-xl font-bold text-[var(--color-secondary)]">Aether Liner 777</h2>
                <div className="flex flex-wrap gap-[var(--spacing-md)]">
                  <div className="flex items-center gap-[var(--spacing-xs)]">
                    <div className="w-3 h-3 rounded-full bg-[var(--color-secondary)] shadow-[0_0_10px_rgba(137,208,237,0.8)]"></div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-on-surface)]">Available</span>
                  </div>
                  <div className="flex items-center gap-[var(--spacing-xs)]">
                    <div className="w-3 h-3 rounded-full bg-[var(--color-tertiary)] shadow-[0_0_15px_rgba(251,188,0,0.8)]"></div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-on-surface)]">Selected</span>
                  </div>
                  <div className="flex items-center gap-[var(--spacing-xs)]">
                    <div className="w-3 h-3 rounded-full bg-[var(--color-outline-variant)]"></div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-on-surface)]">Occupied</span>
                  </div>
                </div>
              </div>

              {/* Seat Grid Container */}
              <div className="flex-1 flex justify-center py-[var(--spacing-md)] bg-black/20 rounded-xl overflow-hidden relative border border-white/5">
                {/* Plane Nose UI Decoration */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 border-x border-b border-white/10 rounded-b-[60px]"></div>
                
                <div className="grid grid-cols-6 gap-2 md:gap-3 pt-20 pb-4">
                  {/* Rows 1 to 10 (60 seats) */}
                  {Array.from({ length: 60 }).map((_, idx) => {
                    const i = idx + 1;
                    const isOccupied = occupiedSeats.includes(i);
                    const col = String.fromCharCode(65 + ((i - 1) % 6));
                    const row = Math.ceil(i / 6);
                    const seatId = `${row}${col}`;
                    const isSelected = selectedSeat === seatId;
                    
                    const addAisle = i % 6 === 3;

                    return (
                      <React.Fragment key={seatId}>
                        <button
                          onClick={() => handleSeatClick(seatId, isOccupied)}
                          disabled={isOccupied}
                          className={`w-8 h-10 md:w-10 md:h-12 rounded-lg border flex items-center justify-center text-[10px] font-bold transition-all duration-300 ${
                            isOccupied
                              ? 'bg-[var(--color-outline-variant)]/30 border-[var(--color-outline-variant)] text-[var(--color-on-surface)]/30 cursor-not-allowed'
                              : isSelected
                              ? 'bg-[var(--color-tertiary)] border-[var(--color-tertiary)] text-[var(--color-on-tertiary)] shadow-[0_0_15px_rgba(251,188,0,0.6)] hover:scale-110'
                              : 'bg-white/5 border-[var(--color-secondary)]/40 text-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/20 hover:scale-110 shadow-[0_0_10px_rgba(137,208,237,0.2)]'
                          }`}
                        >
                          {seatId}
                        </button>
                        {addAisle && <div className="w-2 md:w-4"></div>}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </GlassCard>

            {/* Price Chart & Trends (Right Side) */}
            <div className="xl:col-span-5 flex flex-col gap-[var(--spacing-lg)]">
              {/* Price Trend Panel */}
              <GlassCard className="rounded-[24px] p-[var(--spacing-md)] flex-1 border border-white/10">
                <div className="flex justify-between items-center mb-[var(--spacing-md)]">
                  <h2 className="font-outfit text-xl font-bold text-[var(--color-secondary)]">Fare Dynamics</h2>
                  <div className="bg-[var(--color-secondary-container)]/20 px-[var(--spacing-sm)] py-1 rounded-full border border-[var(--color-secondary)]/30">
                    <span className="font-inter text-xs text-[var(--color-secondary)] uppercase tracking-widest font-semibold">A.I. Optimized</span>
                  </div>
                </div>
                <div className="relative h-48 w-full mt-[var(--spacing-lg)]">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 400 150" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="var(--color-secondary)" />
                        <stop offset="100%" stopColor="var(--color-tertiary)" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur result="blur" stdDeviation="3" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>
                    {/* Grid Lines */}
                    <line x1="0" x2="400" y1="30" y2="30" stroke="rgba(255,255,255,0.05)" />
                    <line x1="0" x2="400" y1="75" y2="75" stroke="rgba(255,255,255,0.05)" />
                    <line x1="0" x2="400" y1="120" y2="120" stroke="rgba(255,255,255,0.05)" />
                    {/* Dynamic Path */}
                    <path
                      d="M0,120 Q50,110 100,60 T200,90 T300,30 T400,10"
                      fill="none"
                      stroke="url(#lineGrad)"
                      strokeWidth="4"
                      filter="url(#glow)"
                    />
                    {/* Marker */}
                    <circle cx="300" cy="30" r="6" fill="var(--color-tertiary)" className="animate-pulse shadow-lg">
                      <title>Current: $1,240</title>
                    </circle>
                  </svg>
                  <div className="flex justify-between mt-4 font-inter text-[10px] font-semibold uppercase tracking-widest text-[var(--color-on-surface-variant)]">
                    <span>Departure -30d</span>
                    <span>-15d</span>
                    <span className="text-[var(--color-tertiary)]">Today</span>
                    <span>Arrival</span>
                  </div>
                </div>
              </GlassCard>

              {/* Summary & Confirmation */}
              <GlassCard className="rounded-[24px] p-[var(--spacing-md)] flex-1 flex flex-col justify-between border border-white/10">
                <div>
                  <h3 className="font-inter text-sm font-semibold text-[var(--color-secondary)] uppercase mb-[var(--spacing-sm)] tracking-widest">
                    Selected Itinerary
                  </h3>
                  <div className="space-y-[var(--spacing-md)]">
                    <div className="flex justify-between border-b border-white/10 pb-[var(--spacing-xs)]">
                      <span className="font-inter text-sm text-[var(--color-on-surface-variant)]">Seat</span>
                      <span className="font-outfit text-xl font-bold text-[var(--color-tertiary)]">{selectedSeat || "None"}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-[var(--spacing-xs)]">
                      <span className="font-inter text-sm text-[var(--color-on-surface-variant)]">Class</span>
                      <span className="font-inter text-sm text-[var(--color-secondary)] font-bold">Ether Business</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-[var(--spacing-xs)]">
                      <span className="font-inter text-sm text-[var(--color-on-surface-variant)]">Baggage</span>
                      <span className="font-inter text-sm text-[var(--color-secondary)] font-bold">3 x 32kg</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-[var(--spacing-xs)]">
                      <span className="font-inter text-sm text-[var(--color-on-surface-variant)]">Lounge Access</span>
                      <span className="font-inter text-sm text-[var(--color-secondary)] font-bold">LHR T5 Skyway</span>
                    </div>
                    <div className="flex justify-between items-end mt-[var(--spacing-lg)] pt-4">
                      <span className="font-inter text-sm text-[var(--color-on-surface-variant)] uppercase tracking-widest font-semibold">Total Fare</span>
                      <span className="font-outfit text-4xl text-[var(--color-tertiary)] font-bold">$4,820.00</span>
                    </div>
                  </div>
                </div>
                <Button 
                  variant="primary" 
                  disabled={!selectedSeat}
                  className={`w-full mt-[var(--spacing-lg)] py-4 rounded-xl font-outfit text-xl tracking-wide transition-all duration-300 ${
                    !selectedSeat ? "opacity-50 cursor-not-allowed" : "shadow-[0_20px_40px_rgba(251,188,0,0.3)] hover:scale-[1.02]"
                  }`}
                >
                  {selectedSeat ? "Confirm Selection" : "Select a Seat"}
                </Button>
              </GlassCard>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-[var(--color-surface-container-lowest)]/40 backdrop-blur-md border-t border-white/10 w-full mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-[var(--spacing-xl)] py-[var(--spacing-md)] max-w-[var(--spacing-container-max)] mx-auto gap-[var(--spacing-md)]">
          <span className="font-outfit text-2xl font-bold text-[var(--color-tertiary)]">AetherAir</span>
          <p className="font-inter text-xs text-[var(--color-on-surface-variant)]">© 2026 AetherAir Galactic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
