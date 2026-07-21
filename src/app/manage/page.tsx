"use client";

import React, { useState, useRef, useEffect } from "react";
import { GlassCard } from "@/components/GlassCard";
import { NavBar } from "@/components/NavBar";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  time: string;
  hasFlightCard?: boolean;
}

export default function ManagePage() {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState("");
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "ai",
      text: "Welcome to Aether Booking Management. I see you have an upcoming flight (AA242) to New York. How can I assist you with your itinerary today?",
      time: "09:00",
    },
    {
      id: "2",
      sender: "user",
      text: "I need to upgrade my seat to Ether Business for my flight to JFK.",
      time: "09:01",
    },
    {
      id: "3",
      sender: "ai",
      text: "Checking availability for Flight AA242... I found 2 available seats in Ether Business. Upgrading will require an additional $450 or 15,000 Aether Creds. Would you like to proceed?",
      time: "09:01",
      hasFlightCard: true,
    }
  ]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim()) return;

    const now = new Date();
    const timeString = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

    const newUserMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: inputValue,
      time: timeString,
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponseTime = new Date();
      const aiTimeString = `${aiResponseTime.getHours().toString().padStart(2, '0')}:${aiResponseTime.getMinutes().toString().padStart(2, '0')}`;
      
      const newAiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: "I am processing your modification request now. Updating your galactic itinerary...",
        time: aiTimeString,
      };
      setMessages(prev => [...prev, newAiMsg]);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--color-background)] overflow-hidden">
      <NavBar />
      
      {/* Background Environment Shader Simulation */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--color-secondary-container)_0%,_transparent_40%)] opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--color-primary-container)_0%,_var(--color-background)_60%)] opacity-40"></div>
      </div>

      <main className="flex-1 flex justify-center items-center p-[var(--spacing-md)] md:p-[var(--spacing-xl)] mt-16 z-10">
        <div className="max-w-[var(--spacing-container-max)] w-full h-[80vh] min-h-[600px] flex flex-col xl:flex-row gap-[var(--spacing-lg)]">
          
          {/* Main AI Manage Area */}
          <GlassCard className="flex-1 flex flex-col rounded-[24px] overflow-hidden !p-0 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            {/* Header */}
            <div className="px-[var(--spacing-xl)] py-[var(--spacing-md)] border-b border-white/10 flex items-center justify-between bg-white/5 backdrop-blur-xl">
              <div className="flex items-center gap-[var(--spacing-md)]">
                <div className="w-12 h-12 rounded-full bg-[var(--color-secondary-container)]/30 flex items-center justify-center border border-[var(--color-secondary)]/30">
                  <span className="material-symbols-outlined text-[var(--color-secondary)] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    manage_accounts
                  </span>
                </div>
                <div>
                  <h2 className="font-outfit text-2xl font-bold text-[var(--color-secondary)] leading-tight">AI Concierge Manager</h2>
                  <p className="font-inter text-xs font-semibold text-[var(--color-on-surface-variant)] flex items-center gap-1 uppercase tracking-widest mt-1">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-tertiary)] animate-pulse"></span>
                    Ready to modify bookings
                  </p>
                </div>
              </div>
              <div className="flex gap-[var(--spacing-xs)]">
                <button className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all text-[var(--color-secondary)]">
                  <span className="material-symbols-outlined">receipt_long</span>
                </button>
              </div>
            </div>

            {/* Chat/Activity Area */}
            <div className="flex-grow overflow-y-auto p-[var(--spacing-xl)] space-y-[var(--spacing-md)] no-scrollbar" ref={chatContainerRef}>
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                  <div className={`max-w-[85%] md:max-w-[70%] backdrop-blur-md px-[var(--spacing-md)] py-[var(--spacing-sm)] border ${
                    msg.sender === "user" 
                      ? "bg-[var(--color-surface-bright)]/80 rounded-t-[20px] rounded-bl-[20px] border-white/10" 
                      : "bg-[var(--color-secondary-container)]/20 rounded-t-[20px] rounded-br-[20px] border-[var(--color-secondary)]/20"
                  }`}>
                    <p className="font-inter text-base text-[var(--color-on-surface)]">
                      {msg.text}
                    </p>

                    {/* Dynamic Flight Modification Card */}
                    {msg.hasFlightCard && (
                      <div className="mt-[var(--spacing-md)] bg-white/5 border border-[var(--color-tertiary)]/30 p-[var(--spacing-md)] rounded-xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                        <div className="flex justify-between items-start mb-[var(--spacing-sm)] relative z-10">
                          <div>
                            <span className="font-inter text-xs text-[var(--color-tertiary)] uppercase tracking-widest font-semibold">Upgrade Offer</span>
                            <h4 className="font-outfit text-xl font-bold text-[var(--color-on-surface)]">Ether Business Class</h4>
                          </div>
                          <div className="bg-white/10 text-[var(--color-on-surface)] border border-white/20 font-inter text-xs font-bold px-2 py-1 rounded">AA242</div>
                        </div>
                        
                        <div className="flex items-center gap-[var(--spacing-md)] mb-[var(--spacing-md)] relative z-10">
                          <div className="w-10 h-10 rounded-full bg-[var(--color-tertiary)]/20 flex items-center justify-center border border-[var(--color-tertiary)]/30">
                            <span className="material-symbols-outlined text-[var(--color-tertiary)] text-lg">workspace_premium</span>
                          </div>
                          <div>
                            <p className="font-outfit text-2xl font-bold text-[var(--color-tertiary)]">$450 <span className="text-sm text-[var(--color-on-surface-variant)]">or 15k Creds</span></p>
                          </div>
                        </div>

                        <div className="flex gap-3 relative z-10">
                          <button className="flex-1 bg-[var(--color-tertiary)] text-[var(--color-on-tertiary-fixed)] font-inter text-sm font-bold py-[var(--spacing-sm)] rounded-lg hover:shadow-[0_0_20px_rgba(251,188,0,0.4)] transition-all uppercase tracking-widest">
                            Confirm Upgrade
                          </button>
                          <button className="flex-1 bg-white/5 border border-white/20 text-[var(--color-on-surface)] font-inter text-sm font-bold py-[var(--spacing-sm)] rounded-lg hover:bg-white/10 transition-all uppercase tracking-widest">
                            Decline
                          </button>
                        </div>
                      </div>
                    )}
                    <span className={`block font-inter text-[10px] text-[var(--color-on-surface-variant)] mt-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-[var(--spacing-sm)] pt-[var(--spacing-md)]">
                <button 
                  onClick={() => setInputValue("Cancel my flight AA242")}
                  className="px-[var(--spacing-md)] py-[var(--spacing-xs)] bg-white/5 border border-[var(--color-error)]/40 rounded-full hover:border-[var(--color-error)] hover:bg-[var(--color-error)]/10 transition-all font-inter text-sm text-[var(--color-error)]"
                >
                  Cancel flight AA242
                </button>
                <button 
                  onClick={() => setInputValue("Change date to next week")}
                  className="px-[var(--spacing-md)] py-[var(--spacing-xs)] bg-white/5 border border-[var(--color-secondary)]/20 rounded-full hover:border-[var(--color-secondary)]/60 hover:bg-[var(--color-secondary)]/10 transition-all font-inter text-sm text-[var(--color-secondary)]"
                >
                  Change flight date
                </button>
                <button 
                  onClick={() => setInputValue("Add extra baggage")}
                  className="px-[var(--spacing-md)] py-[var(--spacing-xs)] bg-white/5 border border-[var(--color-secondary)]/20 rounded-full hover:border-[var(--color-secondary)]/60 hover:bg-[var(--color-secondary)]/10 transition-all font-inter text-sm text-[var(--color-secondary)]"
                >
                  Add extra baggage
                </button>
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="p-[var(--spacing-xl)] border-t border-white/10 bg-white/5 mt-auto backdrop-blur-xl">
              <div className="relative flex items-center group">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full h-16 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full pl-6 pr-20 text-[var(--color-on-surface)] focus:ring-2 focus:ring-[var(--color-secondary)]/50 focus:border-[var(--color-secondary)]/50 outline-none transition-all placeholder:text-[var(--color-on-surface-variant)]/40 group-focus-within:scale-[1.01]"
                  placeholder="Ask the AI Manager to modify your booking..."
                />
                <button type="submit" className="absolute right-2 w-12 h-12 bg-[var(--color-secondary)] text-[var(--color-on-secondary)] rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[var(--color-secondary)]/20 z-10">
                  <span className="material-symbols-outlined">auto_awesome</span>
                </button>
              </div>
            </form>
          </GlassCard>

          {/* Right Panel: Active Itineraries */}
          <div className="hidden xl:flex flex-col gap-[var(--spacing-md)] w-80 shrink-0">
            <h3 className="font-outfit text-xl font-bold text-[var(--color-on-surface)] mb-[var(--spacing-xs)]">Active Itineraries</h3>
            
            {/* Itinerary Card 1 */}
            <GlassCard className="p-[var(--spacing-md)] rounded-2xl border-white/10 hover:border-[var(--color-secondary)]/50 transition-colors group cursor-pointer">
              <div className="flex justify-between items-center mb-[var(--spacing-sm)]">
                <div className="bg-[var(--color-secondary-container)] text-[var(--color-on-secondary-container)] font-inter text-xs font-bold px-2 py-1 rounded">UPCOMING</div>
                <span className="material-symbols-outlined text-[var(--color-on-surface-variant)] group-hover:text-[var(--color-secondary)] transition-colors">more_horiz</span>
              </div>
              <h5 className="text-[var(--color-on-surface)] font-outfit text-2xl font-bold flex items-center gap-2">
                LHR <span className="material-symbols-outlined text-sm text-[var(--color-secondary)]">arrow_forward</span> JFK
              </h5>
              <p className="text-[var(--color-secondary)] font-inter text-sm font-semibold mb-[var(--spacing-md)]">Flight AA242</p>
              
              <div className="flex flex-col gap-1 text-sm font-inter text-[var(--color-on-surface-variant)]">
                <div className="flex justify-between">
                  <span>Date</span>
                  <span className="text-[var(--color-on-surface)] font-medium">Oct 12, 2026</span>
                </div>
                <div className="flex justify-between">
                  <span>Class</span>
                  <span className="text-[var(--color-on-surface)] font-medium">Economy</span>
                </div>
                <div className="flex justify-between">
                  <span>Status</span>
                  <span className="text-[var(--color-tertiary)] font-bold animate-pulse">On Time</span>
                </div>
              </div>
            </GlassCard>

            {/* Itinerary Card 2 */}
            <GlassCard className="p-[var(--spacing-md)] rounded-2xl border-white/10 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
              <div className="flex justify-between items-center mb-[var(--spacing-sm)]">
                <div className="bg-white/10 text-[var(--color-on-surface)] font-inter text-xs font-bold px-2 py-1 rounded">PLANNED</div>
              </div>
              <h5 className="text-[var(--color-on-surface)] font-outfit text-2xl font-bold flex items-center gap-2">
                JFK <span className="material-symbols-outlined text-sm text-[var(--color-secondary)]">arrow_forward</span> HND
              </h5>
              <p className="text-[var(--color-on-surface-variant)] font-inter text-sm font-semibold mb-[var(--spacing-md)]">Flight AA908</p>
              
              <div className="flex flex-col gap-1 text-sm font-inter text-[var(--color-on-surface-variant)]">
                <div className="flex justify-between">
                  <span>Date</span>
                  <span className="text-[var(--color-on-surface)] font-medium">Nov 04, 2026</span>
                </div>
                <div className="flex justify-between">
                  <span>Class</span>
                  <span className="text-[var(--color-on-surface)] font-medium">First</span>
                </div>
              </div>
            </GlassCard>
            
          </div>
        </div>
      </main>
    </div>
  );
}
