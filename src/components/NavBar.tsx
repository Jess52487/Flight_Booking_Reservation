"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Flights", href: "/" },
    { name: "Hotels", href: "/hotels" },
    { name: "Manage", href: "/manage" },
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
            // Check if the current pathname matches the link's href. 
            // For root ("/") we want exact match, otherwise we check startsWith so nested routes still highlight
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
          <Link href="/notifications" className="text-[var(--color-secondary)] scale-95 active:scale-90 transition-transform">
            <span className="material-symbols-outlined">notifications</span>
          </Link>
          <Link href="/login" className="text-[var(--color-secondary)] scale-95 active:scale-90 transition-transform flex items-center">
            <span className="material-symbols-outlined">account_circle</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
