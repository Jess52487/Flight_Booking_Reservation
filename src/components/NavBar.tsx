import React from "react";
import Link from "next/link";

export function NavBar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-xl border-b border-white/20 shadow-[0px_20px_40px_rgba(0,0,0,0.3)]">
      <div className="flex justify-between items-center px-[var(--spacing-md)] py-[var(--spacing-sm)] max-w-[var(--spacing-container-max)] mx-auto">
        <Link href="/" className="text-2xl font-outfit font-bold text-[var(--color-secondary)] tracking-tight">
          AetherAir
        </Link>
        <nav className="hidden md:flex gap-[var(--spacing-md)] items-center">
          <Link
            className="font-inter text-sm font-medium tracking-widest uppercase text-[var(--color-tertiary)] border-b-2 border-[var(--color-tertiary)] pb-1"
            href="/"
          >
            Flights
          </Link>
          <Link
            className="font-inter text-sm font-medium tracking-widest uppercase text-white/80 hover:text-[var(--color-secondary)] transition-colors"
            href="#"
          >
            Hotels
          </Link>
          <Link
            className="font-inter text-sm font-medium tracking-widest uppercase text-white/80 hover:text-[var(--color-secondary)] transition-colors"
            href="/manage"
          >
            Manage
          </Link>
          <Link
            className="font-inter text-sm font-medium tracking-widest uppercase text-white/80 hover:text-[var(--color-secondary)] transition-colors"
            href="/support"
          >
            Support
          </Link>
        </nav>
        <div className="flex items-center gap-[var(--spacing-md)]">
          <button className="text-[var(--color-secondary)] scale-95 active:scale-90 transition-transform">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <Link href="/login" className="text-[var(--color-secondary)] scale-95 active:scale-90 transition-transform flex items-center">
            <span className="material-symbols-outlined">account_circle</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
