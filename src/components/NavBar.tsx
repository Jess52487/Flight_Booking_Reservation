"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "./AuthProvider";

export function NavBar() {
  const pathname = usePathname();
  const { user, profile, signOut } = useAuth();

  const navLinks = user
    ? [
        { name: "Flights", href: "/" },
        { name: "Hotels", href: "/hotels" },
        { name: "Manage", href: "/manage" },
        { name: "Support", href: "/support" },
      ]
    : [
        { name: "Flights", href: "/" },
        { name: "Support", href: "/support" },
      ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-xl border-b border-white/20 shadow-[0px_20px_40px_rgba(0,0,0,0.3)]">
      <div className="flex justify-between items-center px-[var(--spacing-md)] py-[var(--spacing-sm)] max-w-[1600px] mx-auto">
        <Link href="/" className="text-2xl font-outfit font-bold text-[var(--color-secondary)] tracking-tight">
          AeroHub
        </Link>
        <nav className="hidden md:flex gap-[var(--spacing-md)] items-center">
          {navLinks.map((link) => {
            const isActive = link.href === "/" 
              ? pathname === "/" || pathname === "/search" 
              : pathname?.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-inter text-sm font-medium tracking-widest uppercase transition-colors pb-1 border-b-2 ${
                  isActive
                    ? "text-[var(--color-tertiary)] border-[var(--color-tertiary)]"
                    : "text-white/80 border-transparent hover:text-[var(--color-secondary)]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-[var(--spacing-md)]">
          {user ? (
            <>
              <Link href="/notifications" className="text-[var(--color-secondary)] scale-95 active:scale-90 transition-transform">
                <span className="material-symbols-outlined">notifications</span>
              </Link>
              <Link href="/onboarding/welcome" className="text-[var(--color-secondary)] hover:text-[var(--color-secondary)]/80 transition-all flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[24px]">account_circle</span>
                <span className="font-inter text-xs font-semibold text-[var(--color-on-surface)] hidden sm:inline">{profile?.username || "Commander"}</span>
              </Link>
              <button 
                onClick={signOut} 
                className="text-red-400 hover:text-red-300 font-inter text-xs font-bold uppercase tracking-widest border border-red-500/30 px-3 py-1.5 rounded-lg bg-red-500/5 hover:bg-red-500/10 active:scale-95 transition-all cursor-pointer"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link href="/login" className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/90 text-black px-4 py-2 rounded-lg font-inter text-xs font-bold uppercase tracking-widest hover:-translate-y-0.5 active:scale-95 transition-all">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
