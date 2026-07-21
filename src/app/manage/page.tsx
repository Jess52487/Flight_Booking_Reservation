"use client";

import React, { useState } from "react";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/Button";
import { NavBar } from "@/components/NavBar";
import Link from "next/link";

export default function ManagePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");

  const bookings = [
    {
      id: 1,
      from: "LHR",
      to: "JFK",
      date: "Oct 12, 2026 • 09:30 AM",
      flightNo: "AA242",
      status: "Upcoming",
      class: "Ether Business",
    },
    {
      id: 2,
      from: "JFK",
      to: "HND",
      date: "Nov 04, 2026 • 11:15 PM",
      flightNo: "AA908",
      status: "Planned",
      class: "First",
    },
    {
      id: 3,
      from: "CDG",
      to: "SFO",
      date: "Dec 15, 2026 • 02:20 PM",
      flightNo: "AF301",
      status: "Past",
      class: "Economy",
    },
  ];

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.to.toLowerCase().includes(searchQuery.toLowerCase()) || booking.from.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === "all" || booking.status.toLowerCase() === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="relative min-h-screen bg-[var(--color-background)] overflow-x-hidden">
      <NavBar />
      
      {/* Background Atmospheric Shader */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[var(--color-primary-container)]/30 via-[var(--color-surface)] to-[var(--color-secondary-container)]/20"></div>

      <div className="max-w-[var(--spacing-container-max)] mx-auto flex flex-col lg:flex-row gap-[var(--spacing-lg)] pt-24 px-[var(--spacing-md)] md:px-[var(--spacing-xl)]">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-80 space-y-[var(--spacing-md)] shrink-0 z-10">
          <GlassCard className="p-[var(--spacing-md)] rounded-xl border border-white/10">
            <div className="flex items-center gap-[var(--spacing-xs)] mb-[var(--spacing-sm)]">
              <span className="material-symbols-outlined text-[var(--color-tertiary)]">tune</span>
              <h2 className="font-outfit text-xl font-bold text-[var(--color-on-surface)]">Filter Itineraries</h2>
            </div>

            <div className="space-y-[var(--spacing-sm)]">
              {/* Search */}
              <div>
                <label className="font-inter text-sm font-medium text-[var(--color-on-surface-variant)] mb-[var(--spacing-xs)] block">Search Destination</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-on-surface-variant)] text-sm">search</span>
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/5 border border-white/20 rounded-lg pl-10 pr-[var(--spacing-sm)] py-2 text-[var(--color-on-surface)] focus:border-[var(--color-secondary)] transition-all outline-none placeholder:text-white/30"
                    placeholder="E.g. JFK, HND"
                    type="text"
                  />
                </div>
              </div>

              {/* Status Filter */}
              <div>
                <label className="font-inter text-sm font-medium text-[var(--color-on-surface-variant)] mb-[var(--spacing-xs)] block">Booking Status</label>
                <select 
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-[var(--spacing-sm)] py-2 text-[var(--color-on-surface)] outline-none focus:border-[var(--color-secondary)] appearance-none cursor-pointer"
                >
                  <option value="all" className="bg-[var(--color-surface)] text-white">All Bookings</option>
                  <option value="upcoming" className="bg-[var(--color-surface)] text-white">Upcoming</option>
                  <option value="planned" className="bg-[var(--color-surface)] text-white">Planned</option>
                  <option value="past" className="bg-[var(--color-surface)] text-white">Past</option>
                </select>
              </div>

              <Button variant="primary" className="w-full py-[var(--spacing-sm)] mt-[var(--spacing-md)] uppercase tracking-widest text-xs">
                Apply Filters
              </Button>
            </div>
          </GlassCard>

          {/* Promotion/Action Card */}
          <GlassCard className="p-[var(--spacing-md)] rounded-xl relative overflow-hidden group border-white/10 !bg-transparent">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80')",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="font-outfit text-xl font-bold text-[var(--color-secondary)] mb-[var(--spacing-xs)]">Need to cancel?</h3>
              <p className="font-inter text-base text-[var(--color-on-surface-variant)] mb-[var(--spacing-sm)]">
                List your unused tickets on the Aether Marketplace to recover funds.
              </p>
              <Link href="/marketplace" className="text-[var(--color-tertiary)] font-inter text-sm font-bold flex items-center gap-[var(--spacing-xs)] hover:gap-[var(--spacing-md)] transition-all uppercase tracking-widest">
                Go to Marketplace <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </GlassCard>
        </aside>

        {/* Bookings Grid */}
        <section className="flex-grow space-y-[var(--spacing-md)] z-10 pb-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-[var(--spacing-sm)]">
            <div>
              <h1 className="font-outfit text-4xl font-bold text-[var(--color-on-surface)]">Manage Bookings</h1>
              <p className="font-inter text-base text-[var(--color-on-surface-variant)]">Review, modify, or cancel your upcoming itineraries.</p>
            </div>
            <div className="flex gap-[var(--spacing-xs)]">
              <span className="px-[var(--spacing-sm)] py-[var(--spacing-xs)] bg-white/5 border border-white/20 rounded-full font-inter text-xs text-[var(--color-secondary)] flex items-center gap-[var(--spacing-xs)] uppercase tracking-widest font-bold">
                {filteredBookings.length} Itineraries Found
              </span>
            </div>
          </div>

          {/* Grid Layout */}
          {filteredBookings.length === 0 ? (
            <GlassCard className="p-[var(--spacing-xl)] text-center">
              <span className="material-symbols-outlined text-[64px] text-[var(--color-on-surface-variant)] mb-[var(--spacing-sm)]">search_off</span>
              <h3 className="font-outfit text-2xl font-bold text-[var(--color-on-surface)] mb-2">No bookings found</h3>
              <p className="font-inter text-[var(--color-on-surface-variant)]">Try adjusting your filters to see more results.</p>
            </GlassCard>
          ) : (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-[var(--spacing-md)]">
              {filteredBookings.map((booking) => (
                <GlassCard
                  key={booking.id}
                  className={`p-[var(--spacing-md)] rounded-xl flex flex-col justify-between group transition-all hover:-translate-y-1 hover:shadow-lg ${
                    booking.status === "Upcoming" ? "border-[var(--color-tertiary)]/30" : "border-white/10"
                  }`}
                >
                  <div className="flex justify-between items-start mb-[var(--spacing-md)]">
                    <div className="flex items-center gap-[var(--spacing-sm)]">
                      <div className={`w-12 h-12 rounded-lg ${booking.status === "Upcoming" ? "bg-[var(--color-tertiary)]/10" : "bg-[var(--color-secondary)]/10"} flex items-center justify-center`}>
                        <span className={`material-symbols-outlined ${booking.status === "Upcoming" ? "text-[var(--color-tertiary)]" : "text-[var(--color-secondary)]"}`}>
                          flight_takeoff
                        </span>
                      </div>
                      <div>
                        <div className="font-outfit text-xl font-bold text-[var(--color-on-surface)] flex items-center gap-[var(--spacing-xs)]">
                          {booking.from} <span className="material-symbols-outlined text-[var(--color-secondary)] text-sm">arrow_forward</span> {booking.to}
                        </div>
                        <div className="font-inter text-xs text-[var(--color-on-surface-variant)] font-medium">{booking.date}</div>
                      </div>
                    </div>
                    <div className="bg-[var(--color-secondary-container)]/30 border border-[var(--color-secondary)]/20 px-[var(--spacing-sm)] py-1 rounded-full flex items-center gap-[var(--spacing-xs)]">
                      <span className="text-[10px] font-bold text-[var(--color-secondary)] uppercase tracking-widest">{booking.status}</span>
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-full my-[var(--spacing-sm)] relative">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[var(--color-surface)] border border-white/20 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <div className="font-inter text-sm text-[var(--color-on-surface)] font-semibold">{booking.class}</div>
                      <div className="font-inter text-xs text-[var(--color-on-surface-variant)]">Flight: {booking.flightNo}</div>
                    </div>
                    <button className="px-[var(--spacing-lg)] py-[var(--spacing-sm)] bg-[var(--color-tertiary)] text-[var(--color-on-tertiary-fixed)] font-inter text-sm font-bold rounded-lg shadow-[0_0_15px_rgba(251,188,0,0.3)] hover:shadow-[0_0_25px_rgba(251,188,0,0.6)] active:scale-95 transition-all uppercase tracking-widest">
                      Manage
                    </button>
                  </div>
                </GlassCard>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
