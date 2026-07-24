"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/Button";
import Link from "next/link";

function SearchResults() {
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin") || "London (LHR)";
  const destination = searchParams.get("destination") || "New York (JFK)";
  const date = searchParams.get("date") || "2026-10-24";

  // Mock list of matching flights based on the route
  const mockFlights = [
    {
      flightNo: "AA-102",
      departureTime: "08:30 AM",
      arrivalTime: "11:45 AM",
      duration: "8h 15m",
      class: "Eco Explorer",
      price: 650,
      icon: "rocket",
    },
    {
      flightNo: "AA-242",
      departureTime: "01:15 PM",
      arrivalTime: "04:30 PM",
      duration: "8h 15m",
      class: "Ether Business",
      price: 2480,
      icon: "rocket_launch",
    },
    {
      flightNo: "AA-992",
      departureTime: "09:00 PM",
      arrivalTime: "12:15 AM",
      duration: "8h 15m",
      class: "Celestial First",
      price: 4820,
      icon: "star",
    },
  ];

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-start p-[var(--spacing-md)] md:p-[var(--spacing-xl)]">
      {/* Background Shader */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_50%,_#1a2a44_0%,_#111415_100%)] pointer-events-none -z-10"></div>

      <div className="w-full max-w-4xl z-10 space-y-6">
        {/* Header Summary */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="font-outfit text-3xl font-bold text-[var(--color-secondary)]">
              Expedition Search Results
            </h1>
            <p className="font-inter text-sm text-[var(--color-on-surface-variant)] mt-1">
              Showing flights from <span className="text-white font-semibold">{origin}</span> to <span className="text-white font-semibold">{destination}</span> on <span className="text-white font-semibold">{date}</span>
            </p>
          </div>
          <Link href="/">
            <Button variant="secondary" className="text-xs uppercase tracking-widest px-4 py-2">
              <span className="material-symbols-outlined text-sm mr-1">arrow_back</span> Change Search
            </Button>
          </Link>
        </div>

        {/* Flight Cards Grid */}
        <div className="grid grid-cols-1 gap-4">
          {mockFlights.map((flight) => {
            const bookingUrl = `/booking?flightNo=${encodeURIComponent(
              flight.flightNo
            )}&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(
              destination
            )}&date=${encodeURIComponent(date)}&price=${flight.price}&class=${encodeURIComponent(
              flight.class
            )}`;

            return (
              <GlassCard
                key={flight.flightNo}
                className="p-6 rounded-2xl border border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 hover:border-[var(--color-secondary)]/50 transition-all hover:-translate-y-0.5"
              >
                {/* Flight Times & Info */}
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <span className="material-symbols-outlined text-[var(--color-secondary)] text-[28px]">
                      {flight.icon}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[var(--color-tertiary)] uppercase tracking-wider">
                      {flight.flightNo}
                    </span>
                    <div className="font-outfit text-xl font-bold text-white flex items-center gap-2">
                      {flight.departureTime}
                      <span className="material-symbols-outlined text-sm text-[var(--color-secondary)]">
                        arrow_forward
                      </span>
                      {flight.arrivalTime}
                    </div>
                    <span className="text-xs text-[var(--color-on-surface-variant)]">
                      Non-stop • {flight.duration}
                    </span>
                  </div>
                </div>

                {/* Route Representation */}
                <div className="hidden lg:flex items-center gap-3 text-[var(--color-on-surface-variant)]/40">
                  <span className="text-xs font-semibold">{origin.split(" ")[0]}</span>
                  <div className="w-24 h-px border-t-2 border-dashed border-white/10 relative">
                    <span className="material-symbols-outlined absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-[var(--color-secondary)]">
                      flight_takeoff
                    </span>
                  </div>
                  <span className="text-xs font-semibold">{destination.split(" ")[0]}</span>
                </div>

                {/* Class and Pricing */}
                <div className="flex items-center justify-between md:justify-end gap-8 w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0 border-white/10">
                  <div className="text-left md:text-right">
                    <span className="block text-xs font-medium text-[var(--color-on-surface-variant)] uppercase tracking-widest">
                      {flight.class}
                    </span>
                    <span className="font-outfit text-3xl font-bold text-[var(--color-tertiary)]">
                      ${flight.price}
                    </span>
                  </div>
                  <Link href={bookingUrl}>
                    <Button variant="primary" className="text-xs uppercase tracking-widest px-6 py-3 font-bold shadow-[0_0_15px_rgba(251,188,0,0.3)] hover:shadow-[0_0_25px_rgba(251,188,0,0.5)]">
                      Select
                    </Button>
                  </Link>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center h-[calc(100vh-80px)]">
        <div className="w-8 h-8 border-4 border-[var(--color-secondary)] border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}
