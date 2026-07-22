"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";
import { NavBar } from "@/components/NavBar";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/components/AuthProvider";

export default function HotelsPage() {
  const [isSearching, setIsSearching] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState<any | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();

  const openHotelModal = (name: string, price: string, desc: string, img: string) => {
    setSelectedHotel({ name, price, desc, img });
  };

  const handleBookHotel = async () => {
    if (!user || !selectedHotel) return;
    try {
      const priceNumeric = parseFloat(selectedHotel.price.replace(/[^0-9.]/g, "")) || 0;
      const { error: stayError } = await supabase.from("stays").insert({
        user_id: user.id,
        hotel_name: selectedHotel.name,
        check_in: "2026-10-24",
        check_out: "2026-10-31",
        guests: 1,
        price_per_night: priceNumeric,
      });

      if (stayError) {
        console.error("Error booking stay:", stayError.message);
      } else {
        setBookingSuccess(true);
        setSelectedHotel(null);
        setTimeout(() => {
          setBookingSuccess(false);
        }, 4000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      cardsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 2000);
  };

  useEffect(() => {
    // Replicate the micro-interaction for liquid cards
    const cards = document.querySelectorAll(".glass-panel-interactive");
    cards.forEach((card: any) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
        card.style.borderColor = `rgba(137, 208, 237, ${0.2 + Math.random() * 0.1})`;
      };
      
      const handleMouseLeave = () => {
        card.style.borderColor = "rgba(255, 255, 255, 0.2)";
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <div className="flex pt-20 h-screen overflow-hidden bg-[var(--color-background)] font-inter text-[var(--color-on-surface)]">
      <NavBar />

      {/* Floating Atmosphere Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-[var(--color-secondary-container)] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-[var(--color-primary-container)] rounded-full blur-[150px]"></div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto no-scrollbar relative z-10">
        
        {/* Hero Section */}
        <section className="px-[var(--spacing-xl)] py-[var(--spacing-lg)] relative">
          <div className="max-w-4xl mx-auto text-center mb-[var(--spacing-xl)]">
            <h1 className="font-outfit text-5xl md:text-[56px] mb-[var(--spacing-md)] leading-tight text-[var(--color-secondary)] font-bold tracking-tight">
              Discover <span className="text-white">Extraordinary</span> Stays
            </h1>
            <p className="text-[var(--color-on-surface-variant)] font-inter text-[18px] max-w-2xl mx-auto">
              From lunar craters to atmospheric skylofts, find your sanctuary among the stars with AeroHub's curated orbital escapes.
            </p>
          </div>

          {/* Search Card */}
          <div className="w-full max-w-5xl bg-[rgba(255,255,255,0.08)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] shadow-[0_20px_40px_rgba(0,0,0,0.3)] rounded-[24px] p-[var(--spacing-md)] md:p-[var(--spacing-xl)] relative overflow-hidden group mb-20 liquid-panel-interactive">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-[var(--spacing-md)] relative z-10">
              {/* Destination */}
              <div className="flex flex-col gap-[var(--spacing-xs)]">
                <label className="font-inter text-[12px] font-semibold text-[var(--color-secondary)] uppercase tracking-[0.1em] px-[var(--spacing-xs)]">Destination</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-outline)]">location_on</span>
                  <input className="w-full bg-white/5 border border-white/20 rounded-xl py-3 pl-11 pr-4 text-on-surface placeholder:text-[var(--color-outline)] focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)]/30 backdrop-blur-md transition-all font-inter text-[16px]" placeholder="Shackleton Crater, Moon" type="text"/>
                </div>
              </div>
              {/* Check-in */}
              <div className="flex flex-col gap-[var(--spacing-xs)]">
                <label className="font-inter text-[12px] font-semibold text-[var(--color-secondary)] uppercase tracking-[0.1em] px-[var(--spacing-xs)]">Check-in</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-outline)]">calendar_month</span>
                  <input className="w-full bg-white/5 border border-white/20 rounded-xl py-3 pl-11 pr-4 text-on-surface placeholder:text-[var(--color-outline)] focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)]/30 backdrop-blur-md transition-all font-inter text-[16px]" placeholder="Oct 24, 2026" type="text"/>
                </div>
              </div>
              {/* Check-out */}
              <div className="flex flex-col gap-[var(--spacing-xs)]">
                <label className="font-inter text-[12px] font-semibold text-[var(--color-secondary)] uppercase tracking-[0.1em] px-[var(--spacing-xs)]">Check-out</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-outline)]">calendar_month</span>
                  <input className="w-full bg-white/5 border border-white/20 rounded-xl py-3 pl-11 pr-4 text-on-surface placeholder:text-[var(--color-outline)] focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)]/30 backdrop-blur-md transition-all font-inter text-[16px]" placeholder="Oct 31, 2026" type="text"/>
                </div>
              </div>
              {/* Guests */}
              <div className="flex flex-col gap-[var(--spacing-xs)]">
                <label className="font-inter text-[12px] font-semibold text-[var(--color-secondary)] uppercase tracking-[0.1em] px-[var(--spacing-xs)]">Guests</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-outline)]">group</span>
                  <select className="w-full bg-white/5 border border-white/20 rounded-xl py-3 pl-11 pr-4 text-on-surface focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)]/30 backdrop-blur-md transition-all font-inter text-[16px] appearance-none [&>option]:bg-[var(--color-surface)]">
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4+ Guests</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-[var(--spacing-xl)] flex flex-col md:flex-row items-center justify-between gap-[var(--spacing-md)] relative z-10">
              <div className="flex gap-[var(--spacing-sm)]">
                <div className="flex items-center gap-[var(--spacing-xs)] px-[var(--spacing-md)] py-[var(--spacing-xs)] rounded-full bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/30 text-[var(--color-secondary)] animate-pulse">
                  <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                  <span className="font-inter text-[14px] font-medium tracking-[0.05em]">AI Optimization Active</span>
                </div>
                <div className="hidden sm:flex items-center gap-[var(--spacing-xs)] px-[var(--spacing-md)] py-[var(--spacing-xs)] rounded-full bg-white/5 border border-white/10 text-[var(--color-on-surface-variant)]">
                  <span className="font-inter text-[14px] font-medium tracking-[0.05em]">Flexible Lodgings Selected</span>
                </div>
              </div>
              <button 
                onClick={handleSearch}
                disabled={isSearching}
                className="w-full md:w-auto bg-[var(--color-tertiary)] text-[var(--color-on-tertiary-fixed)] font-outfit text-[24px] font-bold px-[var(--spacing-xl)] py-3 rounded-xl shadow-[0_0_20px_rgba(251,188,0,0.3)] hover:shadow-[0_0_30px_rgba(251,188,0,0.5)] transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-[var(--spacing-md)] uppercase tracking-wider text-sm disabled:opacity-80 disabled:cursor-not-allowed"
              >
                {isSearching ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
                    Computing Escapes...
                  </>
                ) : (
                  <>
                    Search Escapes
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Filters Strip */}
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-[var(--spacing-sm)] mb-[var(--spacing-lg)]">
            <div className="px-[var(--spacing-md)] py-2 bg-[rgba(255,255,255,0.08)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] shadow-[0_20px_40px_rgba(0,0,0,0.3)] rounded-full flex items-center gap-2 cursor-pointer hover:bg-white/10 transition-all">
              <span className="font-inter text-[14px] font-medium tracking-[0.05em]">Atmosphere: Zero-G</span>
              <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </div>
            <div className="px-[var(--spacing-md)] py-2 bg-[rgba(255,255,255,0.08)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] shadow-[0_20px_40px_rgba(0,0,0,0.3)] rounded-full flex items-center gap-2 cursor-pointer hover:bg-white/10 transition-all">
              <span className="font-inter text-[14px] font-medium tracking-[0.05em]">Amenities: AI Butler</span>
              <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </div>
            <div className="px-[var(--spacing-md)] py-2 bg-[rgba(255,255,255,0.08)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] shadow-[0_20px_40px_rgba(0,0,0,0.3)] rounded-full flex items-center gap-2 cursor-pointer hover:bg-white/10 transition-all">
              <span className="font-inter text-[14px] font-medium tracking-[0.05em]">Price Range</span>
              <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </div>
            <div className="px-[var(--spacing-md)] py-2 bg-[var(--color-secondary)]/20 border border-[var(--color-secondary)]/40 rounded-full flex items-center gap-2 cursor-pointer transition-all">
              <span className="font-inter text-[14px] font-medium tracking-[0.05em] text-[var(--color-secondary)]">More Filters</span>
              <span className="material-symbols-outlined text-[18px] text-[var(--color-secondary)]">tune</span>
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="px-[var(--spacing-xl)] py-[var(--spacing-lg)] bg-[var(--color-surface-container-lowest)]/30 border-t border-white/5">
          <div className="max-w-[var(--spacing-container-max)] mx-auto">
            <h2 className="font-outfit text-[32px] font-bold mb-[var(--spacing-lg)] flex items-center gap-3">
              <span className="w-12 h-px bg-[var(--color-tertiary)]"></span> Featured Properties
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-lg)]" ref={cardsRef}>
              {/* Card 1 */}
              <GlassCard className="rounded-[24px] overflow-hidden group cursor-pointer !p-0 glass-panel-interactive border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.08)] hover:border-white/30 hover:shadow-[0_20px_40px_rgba(137,208,237,0.15)] transition-all">
                <div className="h-64 relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=600"
                    alt="Lunar Outposts"
                  />
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full font-inter text-[12px] font-bold border border-white/20 tracking-[0.1em]">
                    Low-G
                  </div>
                </div>
                <div className="p-[var(--spacing-md)]">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-outfit text-[24px] font-bold text-[var(--color-on-surface)]">Lunar Outposts</h3>
                    <span className="text-[var(--color-secondary)] font-bold">Ξ 2.4 / night</span>
                  </div>
                  <p className="text-[var(--color-on-surface-variant)] font-inter text-[16px] mb-[var(--spacing-md)]">
                    Experience the silent serenity of the Shackleton Crater with earth-rise views.
                  </p>
                  <button 
                    onClick={() => openHotelModal('Lunar Outposts', 'Ξ 2.4', 'Experience the silent serenity of the Shackleton Crater with earth-rise views.', 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=600')}
                    className="w-full py-3 bg-[var(--color-tertiary)] text-[var(--color-on-tertiary-fixed)] font-bold rounded-xl relative overflow-hidden group-hover:shadow-[0_0_15px_rgba(251,188,0,0.4)] transition-all uppercase tracking-widest text-xs"
                  >
                    View Details
                  </button>
                </div>
              </GlassCard>

              {/* Card 2 */}
              <GlassCard className="rounded-[24px] overflow-hidden group cursor-pointer !p-0 glass-panel-interactive border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.08)] hover:border-white/30 hover:shadow-[0_20px_40px_rgba(137,208,237,0.15)] transition-all">
                <div className="h-64 relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600"
                    alt="Orbital Suites"
                  />
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full font-inter text-[12px] font-bold border border-white/20 tracking-[0.1em]">
                    Zero-G
                  </div>
                </div>
                <div className="p-[var(--spacing-md)]">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-outfit text-[24px] font-bold text-[var(--color-on-surface)]">Orbital Suites</h3>
                    <span className="text-[var(--color-secondary)] font-bold">Ξ 4.1 / night</span>
                  </div>
                  <p className="text-[var(--color-on-surface-variant)] font-inter text-[16px] mb-[var(--spacing-md)]">
                    Suspended in the rings of Saturn, witness the cosmos in pure weightless luxury.
                  </p>
                  <button 
                    onClick={() => openHotelModal('Orbital Suites', 'Ξ 4.1', 'Suspended in the rings of Saturn, witness the cosmos in pure weightless luxury.', 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600')}
                    className="w-full py-3 bg-[var(--color-tertiary)] text-[var(--color-on-tertiary-fixed)] font-bold rounded-xl relative overflow-hidden group-hover:shadow-[0_0_15px_rgba(251,188,0,0.4)] transition-all uppercase tracking-widest text-xs"
                  >
                    View Details
                  </button>
                </div>
              </GlassCard>

              {/* Card 3 */}
              <GlassCard className="rounded-[24px] overflow-hidden group cursor-pointer !p-0 glass-panel-interactive border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.08)] hover:border-white/30 hover:shadow-[0_20px_40px_rgba(137,208,237,0.15)] transition-all">
                <div className="h-64 relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 animate-fade-in"
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600"
                    alt="Skyloft Penthouses"
                  />
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full font-inter text-[12px] font-bold border border-white/20 tracking-[0.1em]">
                    High-G
                  </div>
                </div>
                <div className="p-[var(--spacing-md)]">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-outfit text-[24px] font-bold text-[var(--color-on-surface)]">Skyloft Penthouses</h3>
                    <span className="text-[var(--color-secondary)] font-bold">Ξ 1.8 / night</span>
                  </div>
                  <p className="text-[var(--color-on-surface-variant)] font-inter text-[16px] mb-[var(--spacing-md)]">
                    Floating above Neo-Tokyo, these retreats offer the ultimate atmospheric height.
                  </p>
                  <button 
                    onClick={() => openHotelModal('Skyloft Penthouses', 'Ξ 1.8', 'Floating above Neo-Tokyo, these retreats offer the ultimate atmospheric height.', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600')}
                    className="w-full py-3 bg-[var(--color-tertiary)] text-[var(--color-on-tertiary-fixed)] font-bold rounded-xl relative overflow-hidden group-hover:shadow-[0_0_15px_rgba(251,188,0,0.4)] transition-all uppercase tracking-widest text-xs"
                  >
                    View Details
                  </button>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* AI Curation Section */}
        <section className="px-[var(--spacing-xl)] py-[var(--spacing-lg)]">
          <div className="max-w-[var(--spacing-container-max)] mx-auto">
            <div className="flex items-center justify-between mb-[var(--spacing-lg)]">
              <h2 className="font-outfit text-[32px] font-bold text-[var(--color-on-surface)]">Curated for Your Horizon</h2>
              <div className="flex items-center gap-2 text-[var(--color-secondary)] font-inter text-[14px] font-medium tracking-[0.05em]">
                <span className="material-symbols-outlined text-[20px] animate-pulse">auto_awesome</span>
                AI Personalized Selection
              </div>
            </div>
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-md)]">
              <GlassCard className="p-[var(--spacing-md)] rounded-xl border-l-4 border-[var(--color-secondary)] flex gap-[var(--spacing-md)] items-center animate-[pulse-sky_3s_infinite_ease-in-out]">
                <div className="w-32 h-32 rounded-lg bg-[var(--color-surface-container)] overflow-hidden flex-shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=400"
                    alt="Andromeda Observation Deck"
                  />
                </div>
                <div>
                  <div className="font-inter text-[12px] font-bold text-[var(--color-tertiary)] uppercase tracking-[0.1em] mb-1">
                    Top Match - 98% Compatibility
                  </div>
                  <h4 className="font-outfit text-[24px] font-bold text-[var(--color-on-surface)] mb-1">Andromeda Observation Deck</h4>
                  <p className="text-[var(--color-on-surface-variant)] font-inter text-[16px] mb-2">
                    Based on your interest in "Nebula Photography" and "Silent Retreats".
                  </p>
                  <button 
                    onClick={() => openHotelModal('Andromeda Observation Deck', 'Ξ 3.2', 'Based on your interest in "Nebula Photography" and "Silent Retreats".', 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=400')}
                    className="text-[var(--color-secondary)] font-bold text-[14px] flex items-center gap-1 hover:gap-3 transition-all"
                  >
                    Explore match <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </GlassCard>

              <GlassCard className="p-[var(--spacing-md)] rounded-xl border-l-4 border-[var(--color-secondary)] flex gap-[var(--spacing-md)] items-center animate-[pulse-sky_3s_infinite_ease-in-out]">
                <div className="w-32 h-32 rounded-lg bg-[var(--color-surface-container)] overflow-hidden flex-shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=400"
                    alt="Europa Sub-Ice Lodge"
                  />
                </div>
                <div>
                  <div className="font-inter text-[12px] font-bold text-[var(--color-tertiary)] uppercase tracking-[0.1em] mb-1">
                    Curated Gem
                  </div>
                  <h4 className="font-outfit text-[24px] font-bold text-[var(--color-on-surface)] mb-1">Europa Sub-Ice Lodge</h4>
                  <p className="text-[var(--color-on-surface-variant)] font-inter text-[16px] mb-2">
                    Fits your preference for "Extreme Environments" and "Bioluminescent Views".
                  </p>
                  <button 
                    onClick={() => openHotelModal('Europa Sub-Ice Lodge', 'Ξ 5.0', 'Fits your preference for "Extreme Environments" and "Bioluminescent Views".', 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=400')}
                    className="text-[var(--color-secondary)] font-bold text-[14px] flex items-center gap-1 hover:gap-3 transition-all"
                  >
                    Explore match <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full mt-auto bg-[var(--color-surface-container-lowest)]/40 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center px-[var(--spacing-xl)] py-[var(--spacing-lg)] max-w-[var(--spacing-container-max)] mx-auto">
            <div className="font-outfit text-[24px] font-bold text-[var(--color-tertiary)] mb-[var(--spacing-md)] md:mb-0">
              AeroHub
            </div>
            <div className="flex flex-wrap justify-center gap-[var(--spacing-lg)] mb-[var(--spacing-md)] md:mb-0">
              <Link href="#" className="font-inter text-[12px] font-bold tracking-[0.1em] text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-transform hover:-translate-y-0.5">Privacy Policy</Link>
              <Link href="#" className="font-inter text-[12px] font-bold tracking-[0.1em] text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-transform hover:-translate-y-0.5">Terms of Service</Link>
              <Link href="#" className="font-inter text-[12px] font-bold tracking-[0.1em] text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-transform hover:-translate-y-0.5">Sustainability</Link>
              <Link href="#" className="font-inter text-[12px] font-bold tracking-[0.1em] text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-transform hover:-translate-y-0.5">Global Lounges</Link>
            </div>
            <div className="text-[var(--color-on-surface-variant)] font-inter text-[16px] opacity-80">
              © 2026 AeroHub Galactic. All rights reserved.
            </div>
          </div>
        </footer>
        
        {/* Reservation Modal Overlay */}
        {selectedHotel && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <div className="bg-[rgba(17,20,21,0.95)] border border-[rgba(255,255,255,0.2)] rounded-[32px] p-6 max-w-lg w-full relative overflow-hidden shadow-2xl animate-fade-in">
              <button 
                onClick={() => setSelectedHotel(null)}
                className="absolute top-4 right-4 text-[var(--color-secondary)]/60 hover:text-[var(--color-secondary)] transition-colors"
              >
                <span className="material-symbols-outlined text-[28px]">close</span>
              </button>
              
              <div className="h-48 w-full rounded-2xl overflow-hidden mb-4">
                <img className="w-full h-full object-cover" src={selectedHotel.img} alt={selectedHotel.name} />
              </div>
              
              <h3 className="font-outfit text-[28px] font-bold text-[var(--color-secondary)] mb-1">{selectedHotel.name}</h3>
              <p className="font-inter text-sm text-[var(--color-tertiary)] font-bold mb-3">{selectedHotel.price} / night</p>
              <p className="font-inter text-[15px] text-[var(--color-on-surface-variant)] mb-5">{selectedHotel.desc}</p>
              
              <div className="space-y-3 mb-6">
                <div>
                  <label className="font-inter text-xs text-[var(--color-secondary)] uppercase tracking-wider block mb-1">Select Dates</label>
                  <input type="text" defaultValue="Oct 24 - Oct 31, 2026" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-on-surface focus:outline-none focus:border-[var(--color-secondary)]" />
                </div>
                <div>
                  <label className="font-inter text-xs text-[var(--color-secondary)] uppercase tracking-wider block mb-1">Guests</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-on-surface focus:outline-none focus:border-[var(--color-secondary)]">
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                  </select>
                </div>
              </div>
              
              <button 
                onClick={handleBookHotel}
                className="w-full py-4 bg-[var(--color-tertiary)] text-[var(--color-on-tertiary-fixed)] font-outfit text-md font-bold rounded-xl shadow-[0_0_20px_rgba(251,188,0,0.4)] hover:shadow-[0_0_30px_rgba(251,188,0,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-widest"
              >
                Confirm Stay Reservation
              </button>
            </div>
          </div>
        )}

        {/* Success Toast */}
        {bookingSuccess && (
          <div className="fixed bottom-8 right-8 z-[110] bg-[rgba(255,255,255,0.08)] border border-[rgba(251,188,0,0.4)] backdrop-blur-[20px] rounded-2xl p-4 shadow-2xl flex items-center gap-3 animate-float max-w-sm">
            <span className="material-symbols-outlined text-[var(--color-tertiary)] text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            <div>
              <h5 className="font-outfit text-[16px] font-bold text-[var(--color-secondary)]">Stay Reserved!</h5>
              <p className="font-inter text-xs text-[var(--color-on-surface-variant)]">Your cabin has been synced to your flight itinerary.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
