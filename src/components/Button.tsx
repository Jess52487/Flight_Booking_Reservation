import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
}

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 font-outfit font-semibold rounded-full transition-all duration-300 outline-none";
  
  const variants = {
    primary: "bg-[var(--color-tertiary)] text-[var(--color-on-tertiary)] shadow-[0_0_15px_rgba(251,188,0,0.4)] hover:shadow-[0_0_25px_rgba(251,188,0,0.7)] hover:-translate-y-0.5",
    secondary: "bg-white/10 border border-white/20 text-white backdrop-blur-md hover:border-white/40 hover:shadow-[0_0_20px_rgba(137,208,237,0.4)] hover:-translate-y-0.5",
    tertiary: "bg-transparent text-[var(--color-secondary)] uppercase tracking-wider hover:bg-white/5",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {/* Gloss overlay for primary button */}
      {variant === "primary" && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
      )}
      {children}
    </button>
  );
}
