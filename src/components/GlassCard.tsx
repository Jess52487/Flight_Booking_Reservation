import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlassCard({ children, className = "", ...props }: GlassCardProps) {
  const isFlex = className.includes("flex");
  return (
    <div
      className={`relative rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.3)] overflow-hidden ${className}`}
      {...props}
    >
      {/* Gloss Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      <div className={`relative z-10 ${isFlex ? "h-full flex flex-col" : ""}`}>{children}</div>
    </div>
  );
}
