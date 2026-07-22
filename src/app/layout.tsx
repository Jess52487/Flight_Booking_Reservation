import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AeroHub | Flight Booking",
  description: "Advanced flight booking system with Liquid Glass design",
};

import { AuthProvider } from "@/components/AuthProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased min-h-screen bg-[var(--color-background)] text-[var(--color-on-background)]`}
      >
        <AuthProvider>
          <NavBar />
          <main className="pt-[80px]">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
