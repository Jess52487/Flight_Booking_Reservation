"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GlassCard } from "@/components/GlassCard";
import { useAuth } from "@/components/AuthProvider";
import { supabase } from "@/lib/supabase";

export default function PreferencesOnboardingPage() {
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [sliderValue, setSliderValue] = useState(50);
  const { user } = useAuth();
  const router = useRouter();

  const handleCompleteSetup = async () => {
    if (!user) return;
    try {
      const { error } = await supabase
        .from("profiles")
        .update({ onboarding_complete: true })
        .eq("id", user.id);
      if (!error) {
        router.push("/manage");
      } else {
        console.error("Error setting onboarding status:", error.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const toggleCard = (cardName: string) => {
    if (selectedCards.includes(cardName)) {
      setSelectedCards(prev => prev.filter(c => c !== cardName));
    } else {
      setSelectedCards(prev => [...prev, cardName]);
    }
  };

  const getSliderLabel = () => {
    if (sliderValue < 33) return "Minimal (Manual controls)";
    if (sliderValue < 66) return "Co-Pilot (Guided suggestions)";
    return "Full Concierge (Autonomous management)";
  };

  return (
    <div className="bg-[var(--color-background)] text-[var(--color-on-background)] font-inter min-h-screen flex flex-col selection:bg-[var(--color-tertiary)]/30 overflow-x-hidden relative">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-xl border-b border-white/20 shadow-[0px_20px_40px_rgba(0,0,0,0.3)]">
        <div className="flex justify-between items-center px-[var(--spacing-md)] py-[var(--spacing-sm)] max-w-[var(--spacing-container-max)] mx-auto">
          <Link href="/" className="font-outfit text-2xl text-[var(--color-secondary)] font-bold tracking-tight">
            AeroHub
          </Link>
          <div className="flex items-center gap-[var(--spacing-md)]">
            <span className="font-inter text-sm font-semibold text-[var(--color-on-surface-variant)]/60">Step 2 of 4</span>
            <Link href="/" className="text-on-surface/80 hover:text-[var(--color-secondary)] transition-colors font-inter text-sm font-semibold">Save & Exit</Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center pt-28 pb-10 px-4 md:px-8 z-10 w-full">
        <div className="w-full max-w-4xl space-y-[var(--spacing-lg)]">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between gap-[var(--spacing-xs)] max-w-md mx-auto mb-[var(--spacing-lg)]">
            <div className="h-1.5 flex-1 rounded-full bg-[var(--color-secondary)] shadow-[0_0_10px_rgba(137,208,237,0.3)]"></div>
            <div className="h-1.5 flex-1 rounded-full bg-[var(--color-secondary)] shadow-[0_0_10px_rgba(137,208,237,0.3)]"></div>
            <div className="h-1.5 flex-1 rounded-full bg-white/20"></div>
            <div className="h-1.5 flex-1 rounded-full bg-white/20"></div>
          </div>

          {/* Hero Section */}
          <div className="text-center space-y-[var(--spacing-xs)]">
            <h1 className="font-outfit text-4xl md:text-[56px] text-[var(--color-secondary)] tracking-tight font-bold">Customize Your Horizon</h1>
            <p className="font-inter text-lg text-[var(--color-on-surface-variant)] max-w-2xl mx-auto">
              Tell us how you prefer to traverse the cosmos. Our AI will curate your galactic itinerary based on your spirit of adventure.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-gutter)]">
            {/* Card 1 */}
            <button 
              onClick={() => toggleCard("suites")}
              className={`glass-panel group p-[var(--spacing-md)] rounded-[24px] text-left transition-all duration-300 hover:scale-[1.02] border focus:outline-none bg-[rgba(255,255,255,0.08)] backdrop-blur-[20px] ${
                selectedCards.includes("suites") ? "border-[var(--color-tertiary)] shadow-[0_0_20px_rgba(251,188,0,0.2)]" : "border-white/10"
              }`}
            >
              <div className="w-full aspect-[4/3] rounded-xl mb-[var(--spacing-md)] bg-white/5 overflow-hidden relative">
                <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1542314831-c6a4d27ce66b?auto=format&fit=crop&q=80&w=400" alt="Suites" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/80 to-transparent"></div>
                <span className="absolute bottom-3 left-3 material-symbols-outlined text-[var(--color-tertiary)] text-[32px]">hotel_class</span>
              </div>
              <h3 className="font-outfit text-[24px] font-bold text-[var(--color-secondary)] mb-[var(--spacing-xs)]">Orbital Suites</h3>
              <p className="font-inter text-sm text-[var(--color-on-surface-variant)]">Luxury in zero-gravity. Pure serenity with unmatched planetary views.</p>
            </button>

            {/* Card 2 */}
            <button 
              onClick={() => toggleCard("hypersonic")}
              className={`glass-panel group p-[var(--spacing-md)] rounded-[24px] text-left transition-all duration-300 hover:scale-[1.02] border focus:outline-none bg-[rgba(255,255,255,0.08)] backdrop-blur-[20px] ${
                selectedCards.includes("hypersonic") ? "border-[var(--color-tertiary)] shadow-[0_0_20px_rgba(251,188,0,0.2)]" : "border-white/10"
              }`}
            >
              <div className="w-full aspect-[4/3] rounded-xl mb-[var(--spacing-md)] bg-white/5 overflow-hidden relative">
                <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=400" alt="Hypersonic" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/80 to-transparent"></div>
                <span className="absolute bottom-3 left-3 material-symbols-outlined text-[var(--color-tertiary)] text-[32px]">rocket_launch</span>
              </div>
              <h3 className="font-outfit text-[24px] font-bold text-[var(--color-secondary)] mb-[var(--spacing-xs)]">Hypersonic Expeditions</h3>
              <p className="font-inter text-sm text-[var(--color-on-surface-variant)]">High-speed point-to-point travel for the modern, time-conscious voyager.</p>
            </button>

            {/* Card 3 */}
            <button 
              onClick={() => toggleCard("escapes")}
              className={`glass-panel group p-[var(--spacing-md)] rounded-[24px] text-left transition-all duration-300 hover:scale-[1.02] border focus:outline-none bg-[rgba(255,255,255,0.08)] backdrop-blur-[20px] ${
                selectedCards.includes("escapes") ? "border-[var(--color-tertiary)] shadow-[0_0_20px_rgba(251,188,0,0.2)]" : "border-white/10"
              }`}
            >
              <div className="w-full aspect-[4/3] rounded-xl mb-[var(--spacing-md)] bg-white/5 overflow-hidden relative">
                <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&q=80&w=400" alt="Escapes" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/80 to-transparent"></div>
                <span className="absolute bottom-3 left-3 material-symbols-outlined text-[var(--color-tertiary)] text-[32px]">nights_stay</span>
              </div>
              <h3 className="font-outfit text-[24px] font-bold text-[var(--color-secondary)] mb-[var(--spacing-xs)]">Lunar Escapes</h3>
              <p className="font-inter text-sm text-[var(--color-on-surface-variant)]">A weekend on the Moon. Explore the craters and silent valleys of our satellite.</p>
            </button>
          </div>

          {/* AI Assistance Section */}
          <GlassCard className="p-[var(--spacing-lg)] rounded-[24px] flex flex-col gap-[var(--spacing-md)] border-white/10">
            <div className="flex items-center gap-[var(--spacing-sm)]">
              <span className="material-symbols-outlined text-[var(--color-tertiary)]" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
              <h2 className="font-outfit text-[24px] font-bold text-[var(--color-secondary)]">AI Assistance Level</h2>
            </div>
            <div className="space-y-[var(--spacing-sm)]">
              <input 
                className="w-full cursor-pointer accent-[var(--color-tertiary)] h-1 bg-white/10 rounded-full" 
                max="100" 
                min="0" 
                type="range" 
                value={sliderValue}
                onChange={(e) => setSliderValue(Number(e.target.value))}
              />
              <div className="flex justify-between font-inter text-xs text-[var(--color-on-surface-variant)]/60 px-1">
                <div className="text-left">
                  <span className={`block font-semibold ${sliderValue < 33 ? "text-[var(--color-secondary)]" : "text-[var(--color-on-surface)]"}`}>Minimal</span>
                  <span>Manual controls only</span>
                </div>
                <div className="text-center">
                  <span className={`block font-semibold ${(sliderValue >= 33 && sliderValue < 66) ? "text-[var(--color-secondary)]" : "text-[var(--color-on-surface)]"}`}>Co-Pilot</span>
                  <span>Guided suggestions</span>
                </div>
                <div className="text-right">
                  <span className={`block font-semibold ${sliderValue >= 66 ? "text-[var(--color-tertiary)]" : "text-[var(--color-on-surface)]"}`}>Full Concierge</span>
                  <span>Autonomous management</span>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Navigation Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-[var(--spacing-md)] pt-[var(--spacing-md)]">
            <Link href="/onboarding/welcome" className="font-inter text-sm font-bold text-[var(--color-tertiary)] flex items-center gap-1 uppercase tracking-widest hover:opacity-80 transition-opacity">
              <span className="material-symbols-outlined">chevron_left</span>
              Back to Core Profile
            </Link>
            <div className="flex items-center gap-[var(--spacing-md)] w-full md:w-auto">
              <Link href="/manage" className="flex-1 md:flex-none text-center px-[var(--spacing-xl)] py-3 rounded-full bg-white/10 border border-white/20 font-inter text-sm font-semibold text-[var(--color-secondary)] hover:bg-white/15 transition-all">Skip</Link>
              <button 
                onClick={handleCompleteSetup}
                className="flex-1 md:flex-none text-center px-[var(--spacing-xl)] py-3 rounded-full bg-[var(--color-tertiary)] text-[var(--color-on-tertiary-fixed)] font-inter text-sm font-bold shadow-[0_10px_20px_rgba(251,188,0,0.3)] hover:shadow-[0_15px_30px_rgba(251,188,0,0.5)] transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer outline-none"
              >
                Complete Setup
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full mt-auto bg-[var(--color-surface-container-lowest)]/40 backdrop-blur-md border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center px-[var(--spacing-xl)] py-[var(--spacing-lg)] max-w-[var(--spacing-container-max)] mx-auto gap-[var(--spacing-sm)]">
          <div className="font-outfit text-2xl font-bold text-[var(--color-tertiary)]">AeroHub</div>
          <p className="font-inter text-xs text-[var(--color-on-surface-variant)]">© 2026 AeroHub Galactic. All rights reserved.</p>
          <div className="flex gap-[var(--spacing-md)]">
            <Link className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] text-xs transition-colors" href="#">Privacy Policy</Link>
            <Link className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] text-xs transition-colors" href="#">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
