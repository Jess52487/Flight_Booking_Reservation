"use client";

import React, { useState } from "react";

interface FlightSearchConsoleProps {
  className?: string;
}

export function FlightSearchConsole({ className = "" }: FlightSearchConsoleProps) {
  const [origin, setOrigin] = useState("Lagos (LOS)");
  const [destination, setDestination] = useState("Abuja (ABV)");
  const [departureDate, setDepartureDate] = useState("2026-10-24");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/search?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&date=${encodeURIComponent(departureDate)}`;
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`flex flex-col gap-4 w-full bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 ${className}`}
    >
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
  );
}
