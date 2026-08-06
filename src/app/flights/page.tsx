"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { useAuth } from "@/components/AuthProvider";
import { FlightSearchConsole } from "@/components/FlightSearchConsole";
import { supabase } from "@/lib/supabase";

export default function FlightsSearchPage() {
  const { user, profile } = useAuth();
  const displayName = profile?.username || user?.user_metadata?.full_name || "Friend";
  const [lastDestination, setLastDestination] = useState<string>("");

  useEffect(() => {
    if (!profile) return;
    const fetchLastBooking = async () => {
      try {
        const { data, error } = await supabase
          .from("bookings")
          .select("destination")
          .eq("user_id", profile.id)
          .order("created_at", { ascending: false })
          .limit(1);
        if (!error && data && data.length > 0) {
          setLastDestination(data[0].destination);
        }
      } catch (err) {
        console.error("Error fetching last booking:", err);
      }
    };
    fetchLastBooking();
  }, [profile]);

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <div className="bg-[var(--color-background)] text-[var(--color-on-background)] font-inter min-h-screen flex flex-col selection:bg-[var(--color-tertiary)]/30 overflow-x-hidden relative w-full pb-20 pt-20">
      {/* Background Environment */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#1a2a44_0%,_#111415_100%)]"></div>
      </div>

      <section className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 md:px-12 py-10 w-full max-w-[1600px] mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content: Search console header & form */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left w-full min-w-0">
            <div className="space-y-4">
              <h1 className="font-outfit text-4xl md:text-5xl text-[var(--color-secondary)] leading-tight font-bold tracking-tight">
                Search for Flights
              </h1>
              <p className="font-inter text-base text-[var(--color-on-surface-variant)] leading-relaxed max-w-3xl mx-auto lg:mx-0">
                Choose where you want to go, pick your flight, and select your favorite seat.
              </p>
            </div>
            
            {/* Modular Flight Search Console */}
            <FlightSearchConsole className="shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/20 p-6 md:p-8" />
          </div>

          {/* Right Content: Identity Card */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
            <div className="absolute -top-12 -right-8 w-32 h-32 bg-[var(--color-secondary)]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-8 w-40 h-40 bg-[var(--color-tertiary)]/10 rounded-full blur-3xl"></div>
            
            <motion.div 
              initial="offscreen"
              animate="onscreen"
              variants={cardVariants}
              className="w-full max-w-[420px]"
            >
              {/* The "Liquid Glass" Identity Card */}
              <div className="bg-[rgba(255,255,255,0.08)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-[32px] p-8 relative overflow-hidden shadow-2xl min-h-[320px] flex flex-col justify-between">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                
                {/* Card Header */}
                <div className="flex justify-between items-start mb-8 relative z-10 gap-2">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-16 h-16 rounded-full border-2 border-[var(--color-tertiary)] p-1 shrink-0">
                      <img alt="User Profile" className="w-full h-full rounded-full object-cover" src={user?.user_metadata?.avatar_url || "https://lh3.googleusercontent.com/aida-public/AB6AXuABPluzZT45nJh2Stjb8yaK6oaFqCh2jmzdd8giITe0Jon-N2n0AlPF5mVmV2ffj4lww7FyG5geGLB5jlVrcLuTgedKjInyqwusq71sLlDBFKqEchA4ekIh1djQYxHeo_XLme5XxOujzeWkPNZlO1GYwVcGU7QO-zDb4dNAgXB3gVCd0jcD89or7EUnxkqMfvdqqajyjfz54Av1L4ekkmU_BnOWbRCntvU0KDaM80ws68evFL8goz2ya79aofSLiC3oEpTlhAFy3nOV"} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-outfit text-xl font-bold text-[var(--color-secondary)] truncate">{displayName}</h3>
                      <p className="font-inter text-sm font-semibold text-[var(--color-tertiary)] flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                        Elite Member
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-inter text-xs text-[var(--color-on-surface-variant)] uppercase tracking-tighter block">Account ID</span>
                    <p className="font-inter text-sm font-semibold text-[var(--color-secondary)]/60">AE-992-QX</p>
                  </div>
                </div>

                {/* Card Content / Stats Bento */}
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <p className="font-inter text-xs text-[var(--color-on-surface-variant)] uppercase mb-1">Status</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-tertiary)] animate-pulse"></div>
                      <p className="font-inter text-sm font-bold text-[var(--color-secondary)]">Ready to Fly</p>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <p className="font-inter text-xs text-[var(--color-on-surface-variant)] uppercase mb-1">Points</p>
                    <p className="font-inter text-sm font-bold text-[var(--color-secondary)]">
                      {profile?.loyalty_creds ? `${(profile.loyalty_creds / 1000).toFixed(1)}k Points` : "0.0k Points"}
                    </p>
                  </div>
                  <div className="col-span-2 bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                    <div>
                      <p className="font-inter text-xs text-[var(--color-on-surface-variant)] uppercase mb-1">Last Destination</p>
                      <p className="font-outfit text-lg font-bold text-[var(--color-tertiary)]">
                        {lastDestination || "None"}
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-[var(--color-secondary)]/40 text-[36px]">flight_takeoff</span>
                  </div>
                </div>

                {/* Progress Path Visualization */}
                <div className="mt-6 relative z-10">
                  <div className="flex justify-between font-inter text-xs text-[var(--color-on-surface-variant)] mb-1">
                    <span>Checking Status</span>
                    <span>100%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--color-secondary)] w-full relative">
                      <div className="absolute top-0 right-0 h-full w-24 bg-[var(--color-tertiary)] blur-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
