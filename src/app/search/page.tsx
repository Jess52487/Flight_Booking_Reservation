import React from "react";
import { GlassCard } from "@/components/GlassCard";
import Link from "next/link";
import { Button } from "@/components/Button";

export default function SearchPage() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center p-[var(--spacing-md)]">
      <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-[var(--color-primary-container)] via-[var(--color-surface-container-lowest)] to-[var(--color-secondary-container)] pointer-events-none"></div>
      
      <GlassCard className="w-full max-w-2xl p-[var(--spacing-xl)] text-center relative z-10">
        <span className="material-symbols-outlined text-[64px] text-[var(--color-secondary)] mb-[var(--spacing-md)] animate-pulse">
          travel_explore
        </span>
        <h1 className="font-outfit text-4xl font-bold text-[var(--color-on-surface)] mb-[var(--spacing-sm)]">
          Expedition Search Results
        </h1>
        <p className="font-inter text-lg text-[var(--color-on-surface-variant)] mb-[var(--spacing-lg)]">
          The flight selection module and price charts are being configured for your stellar journey.
        </p>
        
        <Link href="/">
          <Button variant="secondary">Return to Radar</Button>
        </Link>
      </GlassCard>
    </div>
  );
}
