"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/Button";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/components/AuthProvider";

function BookingSeatSelection() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user } = useAuth();

  // Read URL query params
  const flightNo = searchParams.get("flightNo") || "AA-242";
  const origin = searchParams.get("origin") || "London (LHR)";
  const destination = searchParams.get("destination") || "New York (JFK)";
  const departureDateRaw = searchParams.get("date") || "2026-10-24";
  const rawPrice = searchParams.get("price") || "4820";
  const cabinClass = searchParams.get("class") || "Ether Business";

  const price = parseFloat(rawPrice);

  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
  const [occupiedSeats, setOccupiedSeats] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [bookingInProgress, setBookingInProgress] = useState(false);

  // Fetch occupied seats for this flight and date from Supabase
  useEffect(() => {
    const fetchOccupiedSeats = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("bookings")
          .select("seat_number")
          .eq("flight_number", flightNo)
          .eq("departure_date", departureDateRaw);

        if (!error && data) {
          const seats = data.map((b: any) => b.seat_number).filter(Boolean);
          setOccupiedSeats(seats);
        }
      } catch (err) {
        console.error("Error fetching occupied seats:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchOccupiedSeats();
  }, [flightNo, departureDateRaw]);

  const handleSeatClick = (seatId: string, isOccupied: boolean) => {
    if (isOccupied) return;
    if (selectedSeat === seatId) {
      setSelectedSeat(null);
    } else {
      setSelectedSeat(seatId);
    }
  };

  const handleConfirmBooking = async () => {
    if (!user || !selectedSeat || bookingInProgress) return;
    try {
      setBookingInProgress(true);
      const { error } = await supabase.from("bookings").insert({
        user_id: user.id,
        flight_number: flightNo,
        origin,
        destination,
        departure_date: departureDateRaw,
        status: "Upcoming",
        seat_number: selectedSeat,
        cabin_class: cabinClass,
        price: price,
      });

      if (error) {
        console.error("Error creating booking:", error.message);
      } else {
        router.push("/manage");
      }
    } catch (err) {
      console.error("Error booking flight:", err);
    } finally {
      setBookingInProgress(false);
    }
  };

  return (
    <div className="text-[var(--color-on-surface)] font-inter min-h-screen flex flex-col bg-[var(--color-background)]">
      {/* Background Environment */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[var(--color-primary-container)]/20 via-[var(--color-background)] to-transparent"></div>
      </div>

      <div className="flex flex-1 pt-4">
        {/* Main Content Canvas */}
        <main className="flex-1 p-[var(--spacing-md)] md:p-[var(--spacing-lg)] overflow-y-auto no-scrollbar">
          {/* Header Section */}
          <div className="mb-[var(--spacing-lg)] animate-in slide-in-from-top duration-700">
            <h1 className="font-outfit text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-secondary)] mb-[var(--spacing-xs)] break-words leading-tight">
              Flight {flightNo}: {origin} to {destination}
            </h1>
            <p className="font-inter text-base text-[var(--color-on-surface-variant)]">
              Experience the stratosphere in unparalleled luxury. Select your gateway to the horizon.
            </p>
          </div>

          {/* Bento Dashboard */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 h-auto">
            {/* Seat Map Selection (Left Side) */}
            <GlassCard className="xl:col-span-7 rounded-[24px] p-8 md:p-10 flex flex-col border border-white/10">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-outfit text-2xl font-bold text-[var(--color-secondary)]">AeroHub Liner 777</h2>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-[var(--color-secondary)] shadow-[0_0_10px_rgba(137,208,237,0.8)]"></div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-on-surface)]">Available</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-[var(--color-tertiary)] shadow-[0_0_15px_rgba(251,188,0,0.8)]"></div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-on-surface)]">Selected</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-[var(--color-outline-variant)]"></div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-on-surface)]">Occupied</span>
                  </div>
                </div>
              </div>

              {/* Seat Grid Container */}
              <div className="flex-1 flex justify-center py-8 bg-black/20 rounded-xl overflow-hidden relative border border-white/5 min-h-[300px]">
                {/* Plane Nose UI Decoration */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 border-x border-b border-white/10 rounded-b-[60px]"></div>
                
                {loading ? (
                  <div className="flex items-center justify-center h-full w-full pt-20">
                    <div className="w-8 h-8 border-4 border-[var(--color-secondary)] border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : (
                  <div className="grid grid-cols-6 gap-2 md:gap-3 pt-20 pb-4">
                    {/* Rows 1 to 10 (60 seats) */}
                    {Array.from({ length: 60 }).map((_, idx) => {
                      const i = idx + 1;
                      const col = String.fromCharCode(65 + ((i - 1) % 6));
                      const row = Math.ceil(i / 6);
                      const seatId = `${row}${col}`;
                      const isOccupied = occupiedSeats.includes(seatId);
                      const isSelected = selectedSeat === seatId;
                      
                      const addAisle = i % 6 === 3;

                      return (
                        <React.Fragment key={seatId}>
                          <button
                            onClick={() => handleSeatClick(seatId, isOccupied)}
                            disabled={isOccupied}
                            className={`w-8 h-10 md:w-10 md:h-12 rounded-lg border flex items-center justify-center text-[10px] font-bold transition-all duration-300 ${
                              isOccupied
                                ? 'bg-[var(--color-outline-variant)]/30 border-[var(--color-outline-variant)] text-[var(--color-on-surface)]/30 cursor-not-allowed'
                                : isSelected
                                ? 'bg-[var(--color-tertiary)] border-[var(--color-tertiary)] text-[var(--color-on-tertiary)] shadow-[0_0_15px_rgba(251,188,0,0.6)] hover:scale-110'
                                : 'bg-white/5 border-[var(--color-secondary)]/40 text-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/20 hover:scale-110 shadow-[0_0_10px_rgba(137,208,237,0.2)]'
                            }`}
                          >
                            {seatId}
                          </button>
                          {addAisle && <div className="w-2 md:w-4"></div>}
                        </React.Fragment>
                      );
                    })}
                  </div>
                )}
              </div>
            </GlassCard>

            {/* Price Chart & Trends (Right Side) */}
            <div className="xl:col-span-5 flex flex-col gap-8">
              {/* Price Trend Panel */}
              <GlassCard className="rounded-[24px] p-8 md:p-10 flex-1 border border-white/10">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-outfit text-xl font-bold text-[var(--color-secondary)]">Fare Dynamics</h2>
                  <div className="bg-[var(--color-secondary-container)]/20 px-4 py-1.5 rounded-full border border-[var(--color-secondary)]/30">
                    <span className="font-inter text-xs text-[var(--color-secondary)] uppercase tracking-widest font-semibold">A.I. Optimized</span>
                  </div>
                </div>
                <div className="relative h-48 w-full mt-8">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 400 150" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="var(--color-secondary)" />
                        <stop offset="100%" stopColor="var(--color-tertiary)" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur result="blur" stdDeviation="3" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>
                    {/* Grid Lines */}
                    <line x1="0" x2="400" y1="30" y2="30" stroke="rgba(255,255,255,0.05)" />
                    <line x1="0" x2="400" y1="75" y2="75" stroke="rgba(255,255,255,0.05)" />
                    <line x1="0" x2="400" y1="120" y2="120" stroke="rgba(255,255,255,0.05)" />
                    {/* Dynamic Path */}
                    <path
                      d="M0,120 Q50,110 100,60 T200,90 T300,30 T400,10"
                      fill="none"
                      stroke="url(#lineGrad)"
                      strokeWidth="4"
                      filter="url(#glow)"
                    />
                    {/* Marker */}
                    <circle cx="300" cy="30" r="6" fill="var(--color-tertiary)" className="animate-pulse shadow-lg">
                      <title>Current: ${price}</title>
                    </circle>
                  </svg>
                  <div className="flex justify-between mt-4 font-inter text-[10px] font-semibold uppercase tracking-widest text-[var(--color-on-surface-variant)]">
                    <span>Departure -30d</span>
                    <span>-15d</span>
                    <span className="text-[var(--color-tertiary)]">Today</span>
                    <span>Arrival</span>
                  </div>
                </div>
              </GlassCard>

              {/* Summary & Confirmation */}
              <GlassCard className="rounded-[24px] p-8 md:p-10 flex-1 flex flex-col justify-between border border-white/10">
                <div>
                  <h3 className="font-inter text-sm font-semibold text-[var(--color-secondary)] uppercase mb-6 tracking-widest">
                    Selected Itinerary
                  </h3>
                  <div className="space-y-6 max-h-[250px] overflow-y-auto pr-1">
                    <div className="flex justify-between border-b border-white/10 pb-3 gap-2">
                      <span className="font-inter text-sm text-[var(--color-on-surface-variant)] shrink-0">Seat</span>
                      <span className="font-outfit text-xl font-bold text-[var(--color-tertiary)]">{selectedSeat || "None"}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-3 gap-2">
                      <span className="font-inter text-sm text-[var(--color-on-surface-variant)] shrink-0">Class</span>
                      <span className="font-inter text-sm text-[var(--color-secondary)] font-bold truncate max-w-[150px]">{cabinClass}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-3 gap-2">
                      <span className="font-inter text-sm text-[var(--color-on-surface-variant)] shrink-0">Departure</span>
                      <span className="font-inter text-sm text-[var(--color-secondary)] font-bold truncate max-w-[150px]">{departureDateRaw}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span className="font-inter text-sm text-[var(--color-on-surface-variant)]">Baggage</span>
                      <span className="font-inter text-sm text-[var(--color-secondary)] font-bold">3 x 32kg</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span className="font-inter text-sm text-[var(--color-on-surface-variant)]">Lounge Access</span>
                      <span className="font-inter text-sm text-[var(--color-secondary)] font-bold">LHR T5 Skyway</span>
                    </div>
                    <div className="flex justify-between items-end mt-8 pt-4">
                      <span className="font-inter text-sm text-[var(--color-on-surface-variant)] uppercase tracking-widest font-semibold">Total Fare</span>
                      <span className="font-outfit text-4xl text-[var(--color-tertiary)] font-bold">${price.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={handleConfirmBooking}
                  variant="primary" 
                  disabled={!selectedSeat || bookingInProgress}
                  className={`w-full mt-8 py-4.5 rounded-xl font-outfit text-xl tracking-wide transition-all duration-300 cursor-pointer ${
                    !selectedSeat || bookingInProgress ? "opacity-50 cursor-not-allowed" : "shadow-[0_20px_40px_rgba(251,188,0,0.3)] hover:scale-[1.02]"
                  }`}
                >
                  {bookingInProgress ? "Syncing Reservation..." : selectedSeat ? "Confirm Selection" : "Select a Seat"}
                </Button>
              </GlassCard>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-[var(--color-surface-container-lowest)]/40 backdrop-blur-md border-t border-white/10 w-full mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-[var(--spacing-xl)] py-[var(--spacing-md)] max-w-[var(--spacing-container-max)] mx-auto gap-[var(--spacing-md)]">
          <span className="font-outfit text-2xl font-bold text-[var(--color-tertiary)]">AeroHub</span>
          <p className="font-inter text-xs text-[var(--color-on-surface-variant)]">© 2026 AeroHub Galactic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default function BookingSeatSelectionPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-[var(--color-background)]">
        <div className="w-8 h-8 border-4 border-[var(--color-secondary)] border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <BookingSeatSelection />
    </Suspense>
  );
}
