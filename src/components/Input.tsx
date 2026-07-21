import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = "", ...props }: InputProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label className="text-[var(--color-on-surface-variant)] text-sm font-medium tracking-widest uppercase">
          {label}
        </label>
      )}
      <input
        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 backdrop-blur-md outline-none transition-all duration-300 focus:border-[var(--color-secondary)] focus:backdrop-blur-xl focus:shadow-[0_0_15px_rgba(137,208,237,0.2)]"
        {...props}
      />
      {error && <span className="text-[var(--color-error)] text-xs">{error}</span>}
    </div>
  );
}
