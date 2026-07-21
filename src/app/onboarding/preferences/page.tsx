"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";
import { NavBar } from "@/components/NavBar";
import { Button } from "@/components/Button";

export default function OnboardingPreferencesPage() {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [aiLevel, setAiLevel] = useState(50);

  const toggleCard = (index: number) => {
    setSelectedCards(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--color-background)] overflow-x-hidden">
      <NavBar />
      
      {/* Background Environment */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--color-primary-container)_0%,_var(--color-background)_100%)] opacity-30"></div>
      </div>

      <main className="flex-grow flex items-center justify-center pt-[var(--spacing-xl)] pb-[var(--spacing-lg)] px-[var(--spacing-sm)] md:px-[var(--spacing-xl)] mt-16">
        <div className="w-full max-w-4xl space-y-[var(--spacing-lg)]">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between gap-[var(--spacing-xs)] max-w-md mx-auto mb-[var(--spacing-lg)] mt-8">
            <div className="h-1.5 flex-1 rounded-full bg-[var(--color-secondary)] shadow-[0_0_10px_rgba(137,208,237,0.3)]"></div>
            <div className="h-1.5 flex-1 rounded-full bg-[var(--color-secondary)] shadow-[0_0_15px_rgba(137,208,237,0.5)]"></div>
            <div className="h-1.5 flex-1 rounded-full bg-white/20"></div>
            <div className="h-1.5 flex-1 rounded-full bg-white/20"></div>
          </div>

          {/* Hero Section */}
          <div className="text-center space-y-[var(--spacing-xs)]">
            <h1 className="font-outfit text-4xl md:text-5xl text-[var(--color-secondary)] tracking-tight font-bold">Customize Your Horizon</h1>
            <p className="font-inter text-lg text-[var(--color-on-surface-variant)] max-w-2xl mx-auto">
              Tell us how you prefer to traverse the cosmos. Our AI will curate your galactic itinerary based on your spirit of adventure.
            </p>
          </div>

          {/* Content Grid: Travel Preferences */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-md)]">
            {/* Card 1: Orbital Suites */}
            <button 
              onClick={() => toggleCard(0)}
              className={`bg-white/5 backdrop-blur-md group p-[var(--spacing-md)] rounded-[24px] text-left transition-all duration-300 hover:scale-[1.02] border focus:outline-none relative overflow-hidden ${
                selectedCards.includes(0) 
                  ? "border-[var(--color-tertiary)] shadow-[0_0_20px_rgba(251,188,0,0.2)]" 
                  : "border-white/10 hover:border-white/30"
              }`}
            >
              <div className="w-full aspect-[4/3] rounded-xl mb-[var(--spacing-md)] bg-[var(--color-surface-container-highest)] overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600" 
                  alt="Orbital Suites" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/80 to-transparent"></div>
                <span className="absolute bottom-3 left-3 material-symbols-outlined text-[var(--color-tertiary)] text-[32px]">hotel_class</span>
              </div>
              <h3 className="font-outfit text-xl font-bold text-[var(--color-secondary)] mb-[var(--spacing-xs)]">Orbital Suites</h3>
              <p className="font-inter text-sm text-[var(--color-on-surface-variant)]">Luxury in zero-gravity. Pure serenity with unmatched planetary views.</p>
            </button>

            {/* Card 2: Hypersonic Expeditions */}
            <button 
              onClick={() => toggleCard(1)}
              className={`bg-white/5 backdrop-blur-md group p-[var(--spacing-md)] rounded-[24px] text-left transition-all duration-300 hover:scale-[1.02] border focus:outline-none relative overflow-hidden ${
                selectedCards.includes(1) 
                  ? "border-[var(--color-tertiary)] shadow-[0_0_20px_rgba(251,188,0,0.2)]" 
                  : "border-white/10 hover:border-white/30"
              }`}
            >
              <div className="w-full aspect-[4/3] rounded-xl mb-[var(--spacing-md)] bg-[var(--color-surface-container-highest)] overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                  src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=600" 
                  alt="Hypersonic Expeditions" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/80 to-transparent"></div>
                <span className="absolute bottom-3 left-3 material-symbols-outlined text-[var(--color-tertiary)] text-[32px]">rocket_launch</span>
              </div>
              <h3 className="font-outfit text-xl font-bold text-[var(--color-secondary)] mb-[var(--spacing-xs)]">Hypersonic Expeditions</h3>
              <p className="font-inter text-sm text-[var(--color-on-surface-variant)]">High-speed point-to-point travel for the modern, time-conscious voyager.</p>
            </button>

            {/* Card 3: Lunar Escapes */}
            <button 
              onClick={() => toggleCard(2)}
              className={`bg-white/5 backdrop-blur-md group p-[var(--spacing-md)] rounded-[24px] text-left transition-all duration-300 hover:scale-[1.02] border focus:outline-none relative overflow-hidden ${
                selectedCards.includes(2) 
                  ? "border-[var(--color-tertiary)] shadow-[0_0_20px_rgba(251,188,0,0.2)]" 
                  : "border-white/10 hover:border-white/30"
              }`}
            >
              <div className="w-full aspect-[4/3] rounded-xl mb-[var(--spacing-md)] bg-[var(--color-surface-container-highest)] overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                  src="https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?auto=format&fit=crop&q=80&w=600" 
                  alt="Lunar Escapes" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/80 to-transparent"></div>
                <span className="absolute bottom-3 left-3 material-symbols-outlined text-[var(--color-tertiary)] text-[32px]">nights_stay</span>
              </div>
              <h3 className="font-outfit text-xl font-bold text-[var(--color-secondary)] mb-[var(--spacing-xs)]">Lunar Escapes</h3>
              <p className="font-inter text-sm text-[var(--color-on-surface-variant)]">A weekend on the Moon. Explore the craters and silent valleys of our satellite.</p>
            </button>
          </div>

          {/* AI Assistance Section */}
          <GlassCard className="p-[var(--spacing-lg)] rounded-[24px] space-y-[var(--spacing-md)] border border-white/10">
            <div className="flex items-center gap-[var(--spacing-sm)]">
              <span className="material-symbols-outlined text-[var(--color-tertiary)] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
              <h2 className="font-outfit text-2xl font-bold text-[var(--color-secondary)]">AI Assistance Level</h2>
            </div>
            
            <div className="space-y-[var(--spacing-sm)]">
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={aiLevel}
                onChange={(e) => setAiLevel(Number(e.target.value))}
                className="w-full cursor-pointer accent-[var(--color-tertiary)] h-1 bg-white/20 rounded-lg appearance-none"
              />
              <div className="flex justify-between font-inter text-sm text-white/60 px-[var(--spacing-xs)]">
                <div className="text-left w-1/3">
                  <span className={`block font-semibold ${aiLevel < 33 ? 'text-[var(--color-tertiary)]' : 'text-[var(--color-on-surface)]'}`}>Minimal</span>
                  <span className="text-xs">Manual controls only</span>
                </div>
                <div className="text-center w-1/3">
                  <span className={`block font-semibold ${aiLevel >= 33 && aiLevel <= 66 ? 'text-[var(--color-tertiary)]' : 'text-[var(--color-on-surface)]'}`}>Co-Pilot</span>
                  <span className="text-xs">Guided suggestions</span>
                </div>
                <div className="text-right w-1/3">
                  <span className={`block font-semibold ${aiLevel > 66 ? 'text-[var(--color-tertiary)]' : 'text-[var(--color-on-surface)]'}`}>Full Concierge</span>
                  <span className="text-xs">Autonomous management</span>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Navigation Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-[var(--spacing-md)] pt-[var(--spacing-md)]">
            <Link href="/onboarding/welcome" className="font-inter text-sm font-semibold text-[var(--color-tertiary)] flex items-center gap-[var(--spacing-xs)] uppercase tracking-widest hover:opacity-80 transition-opacity">
              <span className="material-symbols-outlined">chevron_left</span>
              Back to Core Profile
            </Link>
            
            <div className="flex flex-col sm:flex-row items-center gap-[var(--spacing-md)] w-full md:w-auto">
              <Link href="/booking" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full sm:w-auto px-[var(--spacing-xl)] py-3 uppercase tracking-widest text-xs">
                  Skip
                </Button>
              </Link>
              <Link href="/booking" className="w-full sm:w-auto">
                <Button variant="primary" className="w-full sm:w-auto px-[var(--spacing-xl)] py-3 shadow-[0_10px_20px_rgba(251,188,0,0.3)] hover:shadow-[0_15px_30px_rgba(251,188,0,0.5)] uppercase tracking-widest text-xs">
                  Continue to Lodging
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="w-full mt-auto bg-[var(--color-surface-container-lowest)]/40 backdrop-blur-md border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center px-[var(--spacing-xl)] py-[var(--spacing-lg)] max-w-[var(--spacing-container-max)] mx-auto gap-[var(--spacing-sm)]">
          <div className="font-outfit text-xl font-bold text-[var(--color-tertiary)]">AetherAir</div>
          <p className="font-inter text-xs text-[var(--color-on-surface-variant)]">© 2026 AetherAir Galactic. All rights reserved.</p>
          <div className="flex gap-[var(--spacing-md)]">
            <Link href="#" className="font-inter text-xs font-semibold text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors uppercase tracking-widest">Privacy Policy</Link>
            <Link href="#" className="font-inter text-xs font-semibold text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors uppercase tracking-widest">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
