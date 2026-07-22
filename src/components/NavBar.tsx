"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "./AuthProvider";
import { useState } from "react";

export function NavBar() {
  const pathname = usePathname();
  const { user, profile, signOut } = useAuth();
  const [showProfileModal, setShowProfileModal] = useState(false);

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
    <>
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
                <button 
                  onClick={() => setShowProfileModal(true)} 
                  className="text-[var(--color-secondary)] hover:text-[var(--color-secondary)]/80 scale-95 active:scale-90 transition-all flex items-center gap-1.5 cursor-pointer outline-none"
                >
                  <span className="material-symbols-outlined text-[24px]">account_circle</span>
                  <span className="font-inter text-xs font-semibold text-[var(--color-on-surface)] hidden sm:inline">{profile?.username || "Commander"}</span>
                </button>
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

      {/* Profile Details Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-[var(--color-surface)] border border-white/20 rounded-[24px] p-6 shadow-2xl overflow-hidden text-[var(--color-on-surface)]">
            {/* Ambient shader */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
            
            {/* Header */}
            <div className="flex justify-between items-center mb-6 relative z-10">
              <h3 className="font-outfit text-2xl font-bold text-[var(--color-secondary)]">Voyager Profile</h3>
              <button 
                onClick={() => setShowProfileModal(false)}
                className="text-white/60 hover:text-white transition-colors cursor-pointer outline-none"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Avatar & Basic Info */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10 relative z-10">
              <div className="w-16 h-16 rounded-full border-2 border-[var(--color-tertiary)] p-1 bg-white/5 flex items-center justify-center">
                <span className="material-symbols-outlined text-[var(--color-secondary)] text-[48px]">account_circle</span>
              </div>
              <div>
                <h4 className="font-outfit text-xl font-bold text-white">{profile?.username || "Commander"}</h4>
                <p className="font-inter text-xs text-[var(--color-on-surface-variant)]">{user?.email}</p>
                <div className="mt-1 flex items-center gap-1.5 bg-[var(--color-tertiary)]/10 border border-[var(--color-tertiary)]/20 px-2.5 py-0.5 rounded-full w-fit">
                  <span className="material-symbols-outlined text-[var(--color-tertiary)] text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                  <span className="font-inter text-[10px] font-bold text-[var(--color-tertiary)] uppercase tracking-wider">Elite Voyager</span>
                </div>
              </div>
            </div>

            {/* Stats / Details */}
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="font-inter text-xs text-[var(--color-on-surface-variant)] uppercase tracking-wider font-semibold">Loyalty Balance</span>
                <span className="font-outfit text-base font-bold text-[var(--color-tertiary)]">{profile?.loyalty_creds?.toLocaleString() || "42,500"} Creds</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="font-inter text-xs text-[var(--color-on-surface-variant)] uppercase tracking-wider font-semibold">Preferred Cabin</span>
                <span className="font-inter text-sm font-semibold text-white capitalize">{profile?.cabin_class || "Economy"}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="font-inter text-xs text-[var(--color-on-surface-variant)] uppercase tracking-wider font-semibold">Dietary Profile</span>
                <span className="font-inter text-sm font-semibold text-white capitalize">{profile?.dietary_pref || "Standard"}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-inter text-xs text-[var(--color-on-surface-variant)] uppercase tracking-wider font-semibold">System Theme</span>
                <span className="font-inter text-sm font-semibold text-white capitalize">{profile?.theme_pref || "Dark"}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
