-- ==========================================
-- SUPABASE SCHEMA - AEROHUB FLIGHT SYSTEM
-- Paste this schema directly into the Supabase SQL Editor
-- ==========================================

-- 1. Profiles Table (Stores user preferences and commander stats)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, now()),
  username TEXT,
  loyalty_creds INTEGER DEFAULT 42500,
  cabin_class TEXT DEFAULT 'economy',
  dietary_pref TEXT DEFAULT 'standard',
  theme_pref TEXT DEFAULT 'dark',
  onboarding_complete BOOLEAN DEFAULT false
);

-- 2. Bookings Table (Stores flight bookings)
CREATE TABLE public.bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  flight_number TEXT NOT NULL,
  origin TEXT NOT NULL,
  destination TEXT NOT NULL,
  departure_date DATE NOT NULL,
  status TEXT DEFAULT 'Upcoming',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, now()) NOT NULL
);

-- 3. Stays Table (Stores hotel stayed/reserved cabins)
CREATE TABLE public.stays (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  hotel_name TEXT NOT NULL,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  guests INTEGER DEFAULT 1,
  price_per_night NUMERIC NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, now()) NOT NULL
);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.stays ENABLE ROW LEVEL SECURITY;

-- 5. Set up Security Policies
-- Profiles
CREATE POLICY "Allow public select profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Allow users update own profiles" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Allow users insert own profiles" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Bookings
CREATE POLICY "Allow users select own bookings" ON public.bookings FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Allow users insert own bookings" ON public.bookings FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Stays
CREATE POLICY "Allow users select own stays" ON public.stays FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Allow users insert own stays" ON public.stays FOR INSERT WITH CHECK (auth.uid() = user_id);

-- 6. Trigger: Automate Profile creation on new Auth signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username, loyalty_creds)
  VALUES (
    new.id, 
    COALESCE(new.raw_user_meta_data->>'full_name', SPLIT_PART(new.email, '@', 1)), 
    42500
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
