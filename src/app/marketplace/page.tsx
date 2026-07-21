"use client";

import React from "react";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/Button";

export default function MarketplacePage() {
  const listings = [
    {
      id: 1,
      from: "LHR",
      to: "JFK",
      date: "March 24, 2026 • 09:30 AM",
      origPrice: "$1,250",
      price: "$840",
      highlight: false,
    },
    {
      id: 2,
      from: "DXB",
      to: "HND",
      date: "April 02, 2026 • 11:15 PM",
      origPrice: "$2,100",
      price: "$1,450",
      highlight: true,
    },
    {
      id: 3,
      from: "CDG",
      to: "SFO",
      date: "May 15, 2026 • 02:20 PM",
      origPrice: "$1,800",
      price: "$1,100",
      highlight: false,
    },
    {
      id: 4,
      from: "SIN",
      to: "SYD",
      date: "June 10, 2026 • 08:00 AM",
      origPrice: "$980",
      price: "$750",
      highlight: true,
    },
  ];

  return (
    <div className="relative min-h-[calc(100vh-80px)] p-[var(--spacing-md)] md:p-[var(--spacing-xl)] bg-[var(--color-background)]">
      {/* Background Atmospheric Shader */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[var(--color-primary-container)]/30 via-[var(--color-surface)] to-[var(--color-secondary-container)]/20"></div>

      <div className="max-w-[var(--spacing-container-max)] mx-auto flex flex-col lg:flex-row gap-[var(--spacing-lg)] mt-[var(--spacing-md)]">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-80 space-y-[var(--spacing-md)] shrink-0 z-10">
          <GlassCard className="p-[var(--spacing-md)] rounded-xl border border-white/10">
            <div className="flex items-center gap-[var(--spacing-xs)] mb-[var(--spacing-sm)]">
              <span className="material-symbols-outlined text-[var(--color-tertiary)]">tune</span>
              <h2 className="font-outfit text-xl font-bold text-[var(--color-on-surface)]">Filters</h2>
            </div>

            <div className="space-y-[var(--spacing-sm)]">
              {/* Search */}
              <div>
                <label className="font-inter text-sm font-medium text-[var(--color-on-surface-variant)] mb-[var(--spacing-xs)] block">Destination</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-on-surface-variant)] text-sm">search</span>
                  <input
                    className="w-full bg-white/5 border border-white/20 rounded-lg pl-10 pr-[var(--spacing-sm)] py-2 text-[var(--color-on-surface)] focus:border-[var(--color-secondary)] transition-all outline-none placeholder:text-white/30"
                    placeholder="Where to?"
                    type="text"
                  />
                </div>
              </div>

              {/* Date Range */}
              <div>
                <label className="font-inter text-sm font-medium text-[var(--color-on-surface-variant)] mb-[var(--spacing-xs)] block">Date Range</label>
                <div className="grid grid-cols-2 gap-[var(--spacing-xs)]">
                  <input
                    className="bg-white/5 border border-white/20 rounded-lg px-[var(--spacing-xs)] py-2 text-xs text-[var(--color-on-surface)] outline-none focus:border-[var(--color-secondary)]"
                    type="date"
                  />
                  <input
                    className="bg-white/5 border border-white/20 rounded-lg px-[var(--spacing-xs)] py-2 text-xs text-[var(--color-on-surface)] outline-none focus:border-[var(--color-secondary)]"
                    type="date"
                  />
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="font-inter text-sm font-medium text-[var(--color-on-surface-variant)] mb-[var(--spacing-xs)] block">Max Price</label>
                <input className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[var(--color-tertiary)]" type="range" />
                <div className="flex justify-between font-inter text-xs text-[var(--color-on-surface-variant)] mt-1">
                  <span>$100</span>
                  <span>$5000</span>
                </div>
              </div>

              {/* Sort */}
              <div>
                <label className="font-inter text-sm font-medium text-[var(--color-on-surface-variant)] mb-[var(--spacing-xs)] block">Sort By</label>
                <select className="w-full bg-white/5 border border-white/20 rounded-lg px-[var(--spacing-sm)] py-2 text-[var(--color-on-surface)] outline-none focus:border-[var(--color-secondary)] appearance-none cursor-pointer">
                  <option className="bg-[var(--color-surface)]">Cheapest First</option>
                  <option className="bg-[var(--color-surface)]">Closest Date</option>
                  <option className="bg-[var(--color-surface)]">Trending</option>
                </select>
              </div>

              <Button variant="primary" className="w-full py-[var(--spacing-sm)] mt-[var(--spacing-md)] uppercase tracking-widest text-xs">
                Apply Filters
              </Button>
            </div>
          </GlassCard>

          {/* Promotion Card */}
          <GlassCard className="p-[var(--spacing-md)] rounded-xl relative overflow-hidden group border-white/10 !bg-transparent">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="font-outfit text-xl font-bold text-[var(--color-secondary)] mb-[var(--spacing-xs)]">Elite Voyager?</h3>
              <p className="font-inter text-base text-[var(--color-on-surface-variant)] mb-[var(--spacing-sm)]">
                Resell your tickets with 0% commission as a Gold Member.
              </p>
              <button className="text-[var(--color-tertiary)] font-inter text-sm font-bold flex items-center gap-[var(--spacing-xs)] hover:gap-[var(--spacing-md)] transition-all uppercase tracking-widest">
                Learn More <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </GlassCard>
        </aside>

        {/* Marketplace Listings */}
        <section className="flex-grow space-y-[var(--spacing-md)] z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-[var(--spacing-sm)]">
            <div>
              <h1 className="font-outfit text-4xl font-bold text-[var(--color-on-surface)]">Available Resales</h1>
              <p className="font-inter text-base text-[var(--color-on-surface-variant)]">Verified tickets from other AetherAir travelers.</p>
            </div>
            <div className="flex gap-[var(--spacing-xs)]">
              <span className="px-[var(--spacing-sm)] py-[var(--spacing-xs)] bg-white/5 border border-white/20 rounded-full font-inter text-xs text-[var(--color-secondary)] flex items-center gap-[var(--spacing-xs)] uppercase tracking-widest font-bold">
                <span className="w-2 h-2 bg-[var(--color-secondary)] rounded-full animate-pulse"></span> 242 Listings
              </span>
            </div>
          </div>

          {/* Bento-ish Grid for Listings */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-[var(--spacing-md)]">
            {listings.map((ticket) => (
              <GlassCard
                key={ticket.id}
                className={`p-[var(--spacing-md)] rounded-xl flex flex-col justify-between group transition-all hover:-translate-y-1 hover:shadow-lg ${
                  ticket.highlight ? "border-[var(--color-tertiary)]/30" : "border-white/10"
                }`}
              >
                <div className="flex justify-between items-start mb-[var(--spacing-md)]">
                  <div className="flex items-center gap-[var(--spacing-sm)]">
                    <div className={`w-12 h-12 rounded-lg ${ticket.highlight ? "bg-[var(--color-tertiary)]/10" : "bg-[var(--color-secondary)]/10"} flex items-center justify-center`}>
                      <span className={`material-symbols-outlined ${ticket.highlight ? "text-[var(--color-tertiary)]" : "text-[var(--color-secondary)]"}`}>
                        {ticket.highlight ? "rocket_launch" : "flight_takeoff"}
                      </span>
                    </div>
                    <div>
                      <div className="font-outfit text-xl font-bold text-[var(--color-on-surface)] flex items-center gap-[var(--spacing-xs)]">
                        {ticket.from} <span className="material-symbols-outlined text-[var(--color-secondary)] text-sm">arrow_forward</span> {ticket.to}
                      </div>
                      <div className="font-inter text-xs text-[var(--color-on-surface-variant)] font-medium">{ticket.date}</div>
                    </div>
                  </div>
                  <div className="bg-[var(--color-secondary-container)]/30 border border-[var(--color-secondary)]/20 px-[var(--spacing-sm)] py-1 rounded-full flex items-center gap-[var(--spacing-xs)]">
                    <span className="material-symbols-outlined text-[14px] text-[var(--color-secondary)]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      verified
                    </span>
                    <span className="text-[10px] font-bold text-[var(--color-secondary)] uppercase tracking-widest">Verified Seller</span>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-full my-[var(--spacing-sm)] relative">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[var(--color-surface)] border border-white/20 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full animate-pulse"></div>
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <div className="font-inter text-xs text-[var(--color-on-surface-variant)] line-through">Orig: {ticket.origPrice}</div>
                    <div className="font-outfit text-2xl font-bold text-[var(--color-tertiary)]">{ticket.price}</div>
                  </div>
                  <button className="px-[var(--spacing-lg)] py-[var(--spacing-sm)] bg-[var(--color-tertiary)] text-[var(--color-on-tertiary-fixed)] font-inter text-sm font-bold rounded-lg shadow-[0_0_15px_rgba(251,188,0,0.3)] hover:shadow-[0_0_25px_rgba(251,188,0,0.6)] active:scale-95 transition-all uppercase tracking-widest">
                    Buy Ticket
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="mt-[var(--spacing-lg)] flex justify-center">
            <button className="px-[var(--spacing-lg)] py-[var(--spacing-sm)] border border-white/20 bg-white/5 rounded-full text-[var(--color-on-surface)] font-inter text-sm font-medium hover:bg-white/10 transition-colors uppercase tracking-widest">
              Load More Listings
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
