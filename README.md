# AeroHub Galactic — Next-Gen Space Flight Booking & Reservation

AeroHub Galactic is a premium, futuristic web application designed to facilitate intergalactic voyager registrations, flights & hotel reservations, dynamic fare optimizations, and seat selection map interfaces. Built with a glassmorphic aesthetic using React, Next.js, and Supabase.

---

## 🚀 Key Features

* **Galactic Seat Map Selector**: Interactive seating chart tailored for intergalactic starships like the AeroHub Liner 777.
* **Fare Dynamics Analyzer**: View live algorithmic adjustments of ticket pricing over time.
* **Onboarding & Voyager Profiler**: Set custom cabin preferences, dietary requirements, and theme setups.
* **Galactic Hotel Bookings**: Secure rooms in luxury cosmic accommodations (e.g. Orbital Suites, Europa Sub-Ice Lodges).
* **AI Voyager Assistant & Help Center**: Cosmic chat assistant helping commanders plan journeys and troubleshoot flight modules.
* **Voyager Dashboard**: Manage active flight schedules, track loyalty credential balances, and edit avatar details.

---

## 🛠️ Technology Stack

* **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
* **Database & Auth**: [Supabase](https://supabase.com/)
* **Styling**: Tailwind CSS v4
* **Icons**: Google Material Symbols
* **Deployment**: Vercel

---

## 🗄️ Database Setup

AeroHub Galactic uses Supabase for User Auth, Voyager Profiles, Flight Bookings, and Stay Reservations.

1. Create a Supabase project at [Supabase Console](https://database.new).
2. Open the **SQL Editor** in your Supabase dashboard.
3. Paste and run the schema definitions found in [schema.sql](file:///c:/Users/U%20S%20E%20R/Drips/Devfoma/Flight_Booking_Reservation/schema.sql). This will set up:
   * `profiles` (Voyager details & stats)
   * `bookings` (Active spaceflights)
   * `stays` (Reserved cosmic accommodations)
   * Automated profile creation trigger upon user signup.

---

## ⚙️ Configuration

Configure your local environment variables. Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_public_key
```

---

## 📦 Getting Started

First, install dependencies:

```bash
npm install
```

To run the app locally in development mode:

```bash
npm run dev
```

To compile and verify code with TypeScript checks and production builds:

```bash
npm run build
```

To run the built production bundle:

```bash
npm run start
```
