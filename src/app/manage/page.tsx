import React from "react";
import { GlassCard } from "@/components/GlassCard";

export default function ManagePage() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center p-[var(--spacing-md)]">
      <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-[var(--color-primary-container)] via-[var(--color-surface-container-lowest)] to-[var(--color-secondary-container)] pointer-events-none"></div>
      
      <GlassCard className="w-full max-w-2xl p-[var(--spacing-xl)] text-center relative z-10">
        <span className="material-symbols-outlined text-[64px] text-[var(--color-secondary)] mb-[var(--spacing-md)]">
          manage_accounts
        </span>
        <h1 className="font-outfit text-4xl font-bold text-[var(--color-on-surface)] mb-[var(--spacing-sm)]">
          Manage Itinerary
        </h1>
        <p className="font-inter text-lg text-[var(--color-on-surface-variant)]">
          The booking management console is currently offline. Your reservations are secure.
        </p>
      </GlassCard>
    </div>
  );
}
