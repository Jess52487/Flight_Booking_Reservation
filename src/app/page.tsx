"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { useAuth } from "@/components/AuthProvider";
import { FlightSearchConsole } from "@/components/FlightSearchConsole";

export default function LandingWelcomePage() {
  const { profile } = useAuth();
  const displayName = profile?.username ? `Commander ${profile.username}` : "Commander";

  // Animation variants for framer motion scroll
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
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

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-[var(--color-background)] text-[var(--color-on-background)] font-inter min-h-screen flex flex-col selection:bg-[var(--color-tertiary)]/30 overflow-x-hidden relative w-full pb-20">
      {/* Background Environment */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#1a2a44_0%,_#111415_100%)]"></div>
      </div>

      {/* Hero Content Canvas */}
      <section className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 md:px-12 pt-28 pb-16 w-full max-w-[1600px] mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content: Welcome & Pitch */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-center lg:text-left w-full min-w-0">
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
              }}
              className="font-outfit text-4xl md:text-6xl text-[var(--color-secondary)] leading-tight font-bold tracking-tight break-words"
            >
              Welcome Home,<br />
              <span className="text-[var(--color-tertiary)]">{displayName}.</span>
            </motion.h1>

            <motion.p 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: 0.3, duration: 0.6 } }
              }}
              className="font-inter text-lg md:text-xl text-[var(--color-on-surface-variant)] max-w-2xl mx-auto lg:mx-0 leading-relaxed break-normal"
            >
              AeroHub Galactic streamlines flight bookings and travel coordination across standard and interstellar flight paths. Experience a faster, localized way to navigate the horizon.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.6 } }
              }}
              className="flex flex-wrap gap-5 justify-center lg:justify-start mt-4"
            >
              <a 
                href="#booking-console"
                className="bg-[var(--color-secondary)] text-[var(--color-on-secondary)] hover:bg-[var(--color-secondary)]/90 font-outfit text-sm font-bold uppercase tracking-widest px-8 py-4.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                Launch Flight Console
              </a>
              <a 
                href="#problem-solution"
                className="bg-white/5 border border-white/20 text-white hover:bg-white/10 font-outfit text-sm font-bold uppercase tracking-widest px-8 py-4.5 rounded-xl transition-all"
              >
                Learn More
              </a>
            </motion.div>
          </div>

          {/* Right Content: Framer Motion Animated Card */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
            <div className="absolute -top-12 -right-8 w-32 h-32 bg-[var(--color-secondary)]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-8 w-40 h-40 bg-[var(--color-tertiary)]/10 rounded-full blur-3xl"></div>
            
            <motion.div 
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
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
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <p className="font-inter text-xs text-[var(--color-on-surface-variant)] uppercase mb-1">Status</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-tertiary)] animate-pulse"></div>
                      <p className="font-inter text-sm font-bold text-[var(--color-secondary)]">Ready for Launch</p>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <p className="font-inter text-xs text-[var(--color-on-surface-variant)] uppercase mb-1">Loyalty</p>
                    <p className="font-inter text-sm font-bold text-[var(--color-secondary)]">42.5k AeroHub Creds</p>
                  </div>
                  <div className="col-span-2 bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                    <div>
                      <p className="font-inter text-xs text-[var(--color-on-surface-variant)] uppercase mb-1">Primary Destination</p>
                      <p className="font-outfit text-lg font-bold text-[var(--color-tertiary)]">Abuja Skyport</p>
                    </div>
                    <span className="material-symbols-outlined text-[var(--color-secondary)]/40 text-[36px]">flight_takeoff</span>
                  </div>
                </div>

                {/* Progress Path Visualization */}
                <div className="mt-6 relative z-10">
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
            </motion.div>
          </div>

        </div>
      </section>

      {/* Problem & Solution Section */}
      <section id="problem-solution" className="relative z-10 px-6 md:px-12 py-24 w-full max-w-[1400px] mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* The Problem Card */}
          <motion.div 
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="flex w-full"
          >
            <GlassCard className="p-8 md:p-10 rounded-[28px] border border-white/10 flex flex-col justify-between w-full bg-red-950/10 hover:border-red-500/30 transition-all gap-8">
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20 text-red-400">
                  <span className="material-symbols-outlined text-3xl">warning</span>
                </div>
                <h3 className="font-outfit text-3xl font-bold text-red-200">The Problem</h3>
                <p className="font-inter text-base md:text-lg text-[var(--color-on-surface-variant)] leading-relaxed">
                  Booking flights today is slow and confusing. Travelers often face hidden fees, incorrect flight details, and lost bags due to outdated systems.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-red-400/80 font-semibold text-sm">
                <span>Core friction point identified</span>
                <span className="material-symbols-outlined text-sm">report_problem</span>
              </div>
            </GlassCard>
          </motion.div>

          {/* The Solution Card */}
          <motion.div 
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="flex w-full"
          >
            <GlassCard className="p-8 md:p-10 rounded-[28px] border border-white/10 flex flex-col justify-between w-full bg-emerald-950/10 hover:border-emerald-500/30 transition-all gap-8">
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
                  <span className="material-symbols-outlined text-3xl">verified_user</span>
                </div>
                <h3 className="font-outfit text-3xl font-bold text-emerald-200">The Solution</h3>
                <p className="font-inter text-base md:text-lg text-[var(--color-on-surface-variant)] leading-relaxed">
                  AeroHub makes booking simple and clear. We offer upfront pricing, interactive seat maps, automated bag tracking, and 24/7 support in one place.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-emerald-400/80 font-semibold text-sm">
                <span>Intelligent systems active</span>
                <span className="material-symbols-outlined text-sm">check_circle</span>
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </section>

      {/* Landing Page Features Showcase */}
      <section className="relative z-10 px-6 md:px-12 py-20 w-full max-w-[1400px] mx-auto border-t border-white/10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-outfit text-3xl md:text-5xl font-bold text-[var(--color-secondary)]">Why Choose AeroHub?</h2>
          <p className="font-inter text-lg text-[var(--color-on-surface-variant)] max-w-xl mx-auto">Modern technology designed to make flight management feel effortless.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <GlassCard className="p-8 border border-white/10 hover:scale-[1.03] transition-transform flex flex-col gap-5">
            <span className="material-symbols-outlined text-[var(--color-secondary)] text-4xl">notifications_active</span>
            <h4 className="font-outfit text-xl font-bold text-white">Real-time Updates</h4>
            <p className="font-inter text-sm text-[var(--color-on-surface-variant)] leading-relaxed">Instant flight updates and gate changes directly on your terminal dashboard.</p>
          </GlassCard>

          <GlassCard className="p-8 border border-white/10 hover:scale-[1.03] transition-transform flex flex-col gap-5">
            <span className="material-symbols-outlined text-[var(--color-tertiary)] text-4xl">luggage</span>
            <h4 className="font-outfit text-xl font-bold text-white">Bag Tracking</h4>
            <p className="font-inter text-sm text-[var(--color-on-surface-variant)] leading-relaxed">Trace baggage status 24/7. Know exactly when your luggage arrives at the carousel.</p>
          </GlassCard>

          <GlassCard className="p-8 border border-white/10 hover:scale-[1.03] transition-transform flex flex-col gap-5">
            <span className="material-symbols-outlined text-[var(--color-secondary)] text-4xl">payments</span>
            <h4 className="font-outfit text-xl font-bold text-white">Upfront Pricing</h4>
            <p className="font-inter text-sm text-[var(--color-on-surface-variant)] leading-relaxed">Complete price transparency with zero hidden fees. View fares instantly.</p>
          </GlassCard>

          <GlassCard className="p-8 border border-white/10 hover:scale-[1.03] transition-transform flex flex-col gap-5">
            <span className="material-symbols-outlined text-[var(--color-tertiary)] text-4xl">diversity_3</span>
            <h4 className="font-outfit text-xl font-bold text-white">24/7 Concierge</h4>
            <p className="font-inter text-sm text-[var(--color-on-surface-variant)] leading-relaxed">Get help immediately with our AI support agent or connect to a live assistant.</p>
          </GlassCard>
        </div>
      </section>

      {/* Booking Search Portal Console */}
      <section id="booking-console" className="relative z-10 px-6 md:px-12 py-20 w-full max-w-[1000px] mx-auto border-t border-white/10">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          className="space-y-10"
        >
          <div className="text-center space-y-4">
            <h2 className="font-outfit text-3xl md:text-4xl font-bold text-[var(--color-secondary)]">Launch Flight Terminal</h2>
            <p className="font-inter text-base text-[var(--color-on-surface-variant)]">Input your flight itinerary parameters to scan available spacecraft launches.</p>
          </div>
          
          {/* Modular Flight Search Console */}
          <FlightSearchConsole className="shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/20 p-8 md:p-10" />
        </motion.div>
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
