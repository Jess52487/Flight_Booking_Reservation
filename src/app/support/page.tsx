"use client";

import React, { useState, useRef, useEffect } from "react";
import { GlassCard } from "@/components/GlassCard";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  time: string;
  hasWidget?: boolean;
}

export default function SupportPage() {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState("");
  
  const [messages, setMessages] = useState<Message[]>([]);

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
    const userText = inputValue; // copy user query before clearing
    setTimeout(() => {
      const aiResponseTime = new Date();
      const aiTimeText = `${aiResponseTime.getHours().toString().padStart(2, '0')}:${aiResponseTime.getMinutes().toString().padStart(2, '0')}`;
      
      const query = userText.toLowerCase();
      let aiText = "I am routing your request to a specialized human concierge. Please hold while I establish the connection...";
      let hasWidget = false;

      if (query.includes("baggage") || query.includes("lost") || query.includes("item")) {
        aiText = "Trace protocol is active. Your baggage tag #AE9924X has been located at the sorting facility and is marked for priority dispatch.";
        hasWidget = true;
      } else if (query.includes("refund") || query.includes("cancel")) {
        aiText = "Refund protocols have been processed successfully. Since you hold Elite Voyager credentials, the ticket cost has been credited back to your Loyalty Credentials balance.";
      } else if (query.includes("lounge") || query.includes("access")) {
        aiText = "Your Elite Voyager clearance grants you entry to all AeroHub Starway Lounges (hubs include Neo-Tokyo, Europa, and Earth). Just scan your boarding badge at the entry gates.";
      } else if (query.includes("human") || query.includes("call") || query.includes("agent")) {
        aiText = "Establishing encrypted audio channel to our command center... A live agent will connect with your terminal shortly.";
      } else if (query.includes("hotel") || query.includes("stay") || query.includes("room")) {
        aiText = "Your stay details have been retrieved. The reservations are synchronized with your shuttle arrival, and early check-in is authorized.";
      } else {
        aiText = `Understood, Commander. Analyzing your request regarding "${userText}". I have logged these specifications into your voyager log files. Let me know if you need specific navigation support.`;
      }

      const newAiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: aiText,
        time: aiTimeText,
        hasWidget,
      };
      setMessages(prev => [...prev, newAiMsg]);
    }, 1200);
  };

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex justify-center items-center p-[var(--spacing-md)] bg-[var(--color-background)] overflow-y-auto">
      
      {/* Global Background Shader Simulation */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[var(--color-primary-container)]/20 via-transparent to-transparent"></div>

      <div className="max-w-5xl w-full h-[80vh] min-h-[500px] rounded-[24px] flex flex-col overflow-hidden relative z-10">
        <GlassCard className="flex flex-col h-full !p-0 shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/10 overflow-hidden">
          {/* Chat Header */}
          <div className="px-[var(--spacing-xl)] py-[var(--spacing-md)] border-b border-white/10 flex items-center justify-between bg-white/5 shrink-0">
            <div className="flex items-center gap-[var(--spacing-md)]">
              <div className="w-12 h-12 rounded-full bg-[var(--color-secondary-container)]/30 flex items-center justify-center relative overflow-hidden border border-[var(--color-secondary)]/30">
                <span className="material-symbols-outlined text-[var(--color-secondary)] text-2xl animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>
                  support_agent
                </span>
              </div>
              <div>
                <h2 className="font-outfit text-2xl font-bold text-[var(--color-secondary)] leading-tight">AeroHub Support</h2>
                <p className="font-inter text-xs font-semibold text-[var(--color-on-surface-variant)] flex items-center gap-1 uppercase tracking-widest mt-1">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-tertiary)] animate-pulse"></span>
                  Systems Online
                </p>
              </div>
            </div>
            <div className="flex gap-[var(--spacing-xs)]">
              <button 
                onClick={() => {
                  setInputValue("Connect with human agent");
                }}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all text-[var(--color-secondary)] font-inter text-xs font-bold uppercase tracking-widest flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">phone_in_talk</span>
                Call Human
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-[var(--spacing-xl)] space-y-[var(--spacing-md)] pr-4 scrollbar-thin scrollbar-thumb-white/10" ref={chatContainerRef}>
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-[var(--spacing-xl)] space-y-[var(--spacing-md)] my-auto select-none">
                <div className="w-20 h-20 rounded-full bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20 flex items-center justify-center mb-2 shadow-[0_0_20px_rgba(137,208,237,0.2)]">
                  <span className="material-symbols-outlined text-[var(--color-secondary)] text-4xl animate-pulse">support_agent</span>
                </div>
                <h3 className="font-outfit text-3xl font-bold text-white leading-tight">AeroHub Concierge Core</h3>
                <p className="font-inter text-base text-[var(--color-on-surface-variant)] max-w-md mx-auto">
                  Welcome back, Commander. If you have questions regarding lost baggage, ticket refunds, or lounge clearance, enter your query below or choose a quick prompt to begin.
                </p>
              </div>
            ) : (
              messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                  <div className={`max-w-[85%] md:max-w-[70%] backdrop-blur-md px-[var(--spacing-md)] py-[var(--spacing-sm)] border ${
                    msg.sender === "user" 
                      ? "bg-[var(--color-surface-bright)]/80 rounded-t-[20px] rounded-bl-[20px] border-white/10" 
                      : "bg-[var(--color-secondary-container)]/20 rounded-t-[20px] rounded-br-[20px] border-[var(--color-secondary)]/20"
                  }`}>
                    <p className="font-inter text-base text-[var(--color-on-surface)]">
                      {msg.text}
                    </p>

                    {/* Dynamic Support Widget */}
                    {msg.hasWidget && (
                      <div className="mt-[var(--spacing-md)] bg-white/5 border border-[var(--color-secondary)]/30 p-[var(--spacing-md)] rounded-xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                        <div className="flex justify-between items-start mb-[var(--spacing-sm)] relative z-10">
                          <div>
                            <span className="font-inter text-xs text-[var(--color-secondary)] uppercase tracking-widest font-semibold">Baggage Tracker</span>
                            <h4 className="font-outfit text-xl font-bold text-[var(--color-on-surface)]">Tag #AE9924X</h4>
                          </div>
                          <div className="bg-[var(--color-tertiary)] text-[var(--color-on-tertiary)] font-inter text-xs font-bold px-2 py-1 rounded">IN TRANSIT</div>
                        </div>
                        
                        <div className="flex items-center gap-[var(--spacing-md)] mb-[var(--spacing-md)] relative z-10 pt-4">
                          <div className="flex-grow h-1 bg-white/10 rounded-full relative">
                            <div className="absolute left-0 top-0 h-full w-[90%] bg-[var(--color-tertiary)] shadow-[0_0_8px_rgba(251,188,0,0.5)]"></div>
                            <div className="absolute left-[90%] -top-1.5 w-4 h-4 bg-[var(--color-secondary)] rounded-full shadow-[0_0_12px_rgba(137,208,237,0.6)]"></div>
                          </div>
                        </div>

                        <button className="w-full bg-[var(--color-secondary)] text-[var(--color-on-secondary-fixed)] font-inter text-sm font-bold py-[var(--spacing-sm)] rounded-lg hover:shadow-[0_0_20px_rgba(137,208,237,0.4)] transition-all flex items-center justify-center gap-2 relative z-10 uppercase tracking-widest">
                          <span className="material-symbols-outlined text-sm">location_on</span>
                          Track on Map
                        </button>
                      </div>
                    )}
                    <span className={`block font-inter text-[10px] text-[var(--color-on-surface-variant)] mt-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))
            )}

            {/* Suggestion Chips */}
            <div className="flex flex-wrap gap-[var(--spacing-sm)] pt-[var(--spacing-md)] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <button 
                onClick={() => setInputValue("Request a refund")}
                className="px-[var(--spacing-md)] py-[var(--spacing-xs)] bg-white/5 border border-[var(--color-error)]/40 rounded-full hover:border-[var(--color-error)]/60 hover:bg-[var(--color-error)]/10 transition-all font-inter text-sm text-[var(--color-error)] animate-pulse"
              >
                Request a refund
              </button>
              <button 
                onClick={() => setInputValue("Report a lost item")}
                className="px-[var(--spacing-md)] py-[var(--spacing-xs)] bg-white/5 border border-[var(--color-secondary)]/20 rounded-full hover:border-[var(--color-secondary)]/60 hover:bg-[var(--color-secondary)]/10 transition-all font-inter text-sm text-[var(--color-secondary)]"
              >
                Report a lost item
              </button>
              <button 
                onClick={() => setInputValue("Check lounge access")}
                className="px-[var(--spacing-md)] py-[var(--spacing-xs)] bg-white/5 border border-[var(--color-secondary)]/20 rounded-full hover:border-[var(--color-secondary)]/60 hover:bg-[var(--color-secondary)]/10 transition-all font-inter text-sm text-[var(--color-secondary)]"
              >
                Check lounge access
              </button>
            </div>
          </div>

          {/* Input Bar */}
          <form onSubmit={handleSendMessage} className="p-[var(--spacing-xl)] border-t border-white/10 bg-white/5 mt-auto">
            <div className="relative flex items-center group">
              <div className="absolute left-4 flex items-center gap-2 z-10">
                <button type="button" className="material-symbols-outlined text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors">attach_file</button>
              </div>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full h-16 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full pl-16 pr-20 text-[var(--color-on-surface)] focus:ring-2 focus:ring-[var(--color-secondary)]/50 focus:border-[var(--color-secondary)]/50 outline-none transition-all placeholder:text-[var(--color-on-surface-variant)]/40 group-focus-within:scale-[1.01]"
                placeholder="Describe your issue..."
              />
              <button type="submit" className="absolute right-2 w-12 h-12 bg-[var(--color-secondary)] text-[var(--color-on-secondary)] rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[var(--color-secondary)]/20 z-10">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
            <div className="mt-[var(--spacing-sm)] flex justify-center">
              <p className="font-inter text-[10px] font-semibold text-[var(--color-on-surface-variant)]/50 uppercase tracking-[0.2em]">
                AeroHub Support Systems - 24/7 Galactic Coverage
              </p>
            </div>
          </form>
        </GlassCard>
      </div>
    </div>
  );
}
