"use client";

import React, { useEffect, useRef } from "react";
import { GlassCard } from "@/components/GlassCard";

export default function AssistantPage() {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex justify-center items-center p-[var(--spacing-md)] bg-[var(--color-background)] overflow-hidden">
      {/* Global Background Shader Simulation */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[var(--color-primary-container)]/20 via-transparent to-transparent"></div>

      <div className="max-w-5xl w-full h-[80vh] min-h-[600px] rounded-[24px] flex flex-col overflow-hidden relative z-10">
        <GlassCard className="flex flex-col h-full !p-0">
          {/* Chat Header */}
          <div className="px-[var(--spacing-xl)] py-[var(--spacing-md)] border-b border-white/10 flex items-center justify-between bg-white/5">
            <div className="flex items-center gap-[var(--spacing-md)]">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary-container)]/30 flex items-center justify-center relative overflow-hidden border border-[var(--color-secondary)]/30">
                <span className="material-symbols-outlined text-[var(--color-secondary)] text-2xl animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>
                  smart_toy
                </span>
              </div>
              <div>
                <h2 className="font-outfit text-2xl font-bold text-[var(--color-secondary)] leading-tight">Aether</h2>
                <p className="font-inter text-xs font-semibold text-[var(--color-on-surface-variant)] flex items-center gap-1 uppercase tracking-widest mt-1">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-tertiary)] animate-pulse"></span>
                  Quantum Reasoning Active
                </p>
              </div>
            </div>
            <div className="flex gap-[var(--spacing-xs)]">
              <button className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all text-[var(--color-secondary)]">
                <span className="material-symbols-outlined">history</span>
              </button>
              <button className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all text-[var(--color-secondary)]">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-[var(--spacing-xl)] space-y-[var(--spacing-md)] no-scrollbar" ref={chatContainerRef}>
            {/* User Message */}
            <div className="flex justify-end animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="max-w-[70%] bg-[var(--color-surface-bright)]/80 backdrop-blur-md rounded-t-[20px] rounded-bl-[20px] px-[var(--spacing-md)] py-[var(--spacing-sm)] border border-white/10">
                <p className="font-inter text-base text-[var(--color-on-surface)]">
                  Can you track my flight AA204 from London to New York? I'm also looking for better prices next week.
                </p>
                <span className="block text-right font-inter text-[10px] text-[var(--color-on-surface-variant)] mt-1">14:22</span>
              </div>
            </div>

            {/* AI Message */}
            <div className="flex justify-start animate-in fade-in slide-in-from-left-4 duration-500 delay-300">
              <div className="max-w-[85%] bg-[var(--color-secondary-container)]/20 backdrop-blur-md rounded-t-[20px] rounded-br-[20px] px-[var(--spacing-md)] py-[var(--spacing-sm)] border border-[var(--color-secondary)]/20">
                <p className="font-inter text-base text-[var(--color-on-surface)]">
                  Tracking Flight <span className="text-[var(--color-secondary)] font-bold">AA204</span>. Status: <span className="text-[var(--color-tertiary)] font-bold">On Time</span>. Estimated arrival at JFK is 18:45 EDT.
                </p>

                {/* Dynamic Pricing Card */}
                <div className="mt-[var(--spacing-md)] bg-white/5 border border-[var(--color-secondary)]/30 p-[var(--spacing-md)] rounded-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                  <div className="flex justify-between items-start mb-[var(--spacing-sm)] relative z-10">
                    <div>
                      <span className="font-inter text-xs text-[var(--color-secondary)] uppercase tracking-widest font-semibold">Pricing Analysis</span>
                      <h4 className="font-outfit text-xl font-bold text-[var(--color-on-surface)]">Dynamic Insight</h4>
                    </div>
                    <div className="bg-[var(--color-tertiary)] text-[var(--color-on-tertiary)] font-inter text-xs font-bold px-2 py-1 rounded">SAVE 22%</div>
                  </div>
                  <p className="text-[var(--color-on-surface-variant)] font-inter text-base mb-[var(--spacing-md)] relative z-10">
                    I've detected a significant price drop for next Tuesday. The current trend suggests this is the optimal window.
                  </p>
                  
                  <div className="flex items-center gap-[var(--spacing-md)] mb-[var(--spacing-md)] relative z-10">
                    <div className="flex-grow h-1 bg-white/10 rounded-full relative">
                      <div className="absolute left-0 top-0 h-full w-[65%] bg-[var(--color-secondary)] shadow-[0_0_8px_rgba(137,208,237,0.5)]"></div>
                      <div className="absolute left-[65%] -top-1.5 w-4 h-4 bg-[var(--color-tertiary)] rounded-full shadow-[0_0_12px_rgba(251,188,0,0.6)]"></div>
                    </div>
                    <span className="text-[var(--color-tertiary)] font-inter text-sm font-bold">$742.00</span>
                  </div>

                  <button className="w-full bg-[var(--color-tertiary)] text-[var(--color-on-tertiary-fixed)] font-inter text-sm font-bold py-[var(--spacing-sm)] rounded-lg hover:shadow-[0_0_20px_rgba(251,188,0,0.4)] transition-all flex items-center justify-center gap-2 relative z-10 uppercase tracking-widest">
                    <span className="material-symbols-outlined text-sm">rocket_launch</span>
                    Book Lower Fare
                  </button>
                </div>
                <span className="block text-left font-inter text-[10px] text-[var(--color-on-surface-variant)] mt-2">14:23</span>
              </div>
            </div>

            {/* Suggestion Chips */}
            <div className="flex flex-wrap gap-[var(--spacing-sm)] pt-[var(--spacing-md)] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <button className="px-[var(--spacing-md)] py-[var(--spacing-xs)] bg-white/5 border border-[var(--color-secondary)]/20 rounded-full hover:border-[var(--color-secondary)]/60 hover:bg-[var(--color-secondary)]/10 transition-all font-inter text-sm text-[var(--color-secondary)] animate-pulse">
                Show alternative dates
              </button>
              <button className="px-[var(--spacing-md)] py-[var(--spacing-xs)] bg-white/5 border border-[var(--color-secondary)]/20 rounded-full hover:border-[var(--color-secondary)]/60 hover:bg-[var(--color-secondary)]/10 transition-all font-inter text-sm text-[var(--color-secondary)]">
                Upgrade to Polaris
              </button>
              <button className="px-[var(--spacing-md)] py-[var(--spacing-xs)] bg-white/5 border border-[var(--color-secondary)]/20 rounded-full hover:border-[var(--color-secondary)]/60 hover:bg-[var(--color-secondary)]/10 transition-all font-inter text-sm text-[var(--color-secondary)]">
                Nearby lounge status
              </button>
            </div>
          </div>

          {/* Input Bar */}
          <div className="p-[var(--spacing-xl)] border-t border-white/10 bg-white/5 mt-auto">
            <div className="relative flex items-center group">
              <div className="absolute left-4 flex items-center gap-2 z-10">
                <button className="material-symbols-outlined text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">attach_file</button>
                <button className="material-symbols-outlined text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">mic</button>
              </div>
              <input
                type="text"
                className="w-full h-16 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full pl-24 pr-20 text-[var(--color-on-surface)] focus:ring-2 focus:ring-[var(--color-secondary)]/50 focus:border-[var(--color-secondary)]/50 outline-none transition-all placeholder:text-[var(--color-on-surface-variant)]/40 group-focus-within:scale-[1.01]"
                placeholder="Command Aether to find your next horizon..."
              />
              <button className="absolute right-2 w-12 h-12 bg-[var(--color-secondary)] text-[var(--color-on-secondary)] rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[var(--color-secondary)]/20 z-10">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
            <div className="mt-[var(--spacing-sm)] flex justify-center">
              <p className="font-inter text-[10px] font-semibold text-[var(--color-on-surface-variant)]/50 uppercase tracking-[0.2em]">
                Aether Intelligence v4.0.2 - Real-time Orbital Processing
              </p>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Side Decoration (Ambient) */}
      <div className="fixed right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-[var(--spacing-md)] pointer-events-none">
        <GlassCard className="p-[var(--spacing-md)] rounded-2xl w-48 border-white/10">
          <h5 className="text-[var(--color-tertiary)] font-inter text-xs font-semibold uppercase mb-[var(--spacing-xs)] tracking-widest">Next Connection</h5>
          <p className="text-[var(--color-on-surface)] font-outfit text-2xl font-bold">LHR → JFK</p>
          <p className="text-[var(--color-on-surface-variant)] font-inter text-xs">Boarding in 42m</p>
        </GlassCard>
        
        <GlassCard className="p-[var(--spacing-md)] rounded-2xl w-48 border-white/10">
          <h5 className="text-[var(--color-secondary)] font-inter text-xs font-semibold uppercase mb-[var(--spacing-xs)] tracking-widest">Weather Alert</h5>
          <p className="text-[var(--color-on-surface)] font-outfit text-2xl font-bold">NYC 72°F</p>
          <p className="text-[var(--color-on-surface-variant)] font-inter text-xs">Clear skies</p>
        </GlassCard>
      </div>
    </div>
  );
}
