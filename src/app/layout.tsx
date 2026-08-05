import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { AuthProvider } from "@/components/AuthProvider";

export const metadata: Metadata = {
  title: "AeroHub | Flight Booking",
  description: "Advanced flight booking system with Liquid Glass design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body
        className="antialiased min-h-screen bg-[var(--color-background)] text-[var(--color-on-background)] font-sans"
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
