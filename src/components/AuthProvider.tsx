"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signOut: async () => {},
});

const PUBLIC_ROUTES = ["/", "/login", "/signup"];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // 1. Get initial session
    const getInitialSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user ?? null);
      } catch (error) {
        console.error("Error getting session:", error);
      } finally {
        setLoading(false);
      }
    };
    getInitialSession();

    // 2. Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);

        if (event === "SIGNED_IN") {
          // If on login/signup, redirect to dashboard
          if (pathname === "/login" || pathname === "/signup") {
            router.push("/onboarding/welcome");
          }
        } else if (event === "SIGNED_OUT") {
          // If on a protected route, redirect to login
          if (!PUBLIC_ROUTES.includes(pathname)) {
            router.push("/login");
          }
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [pathname, router]);

  // 3. Route Guard Redirection
  useEffect(() => {
    if (!loading) {
      const isPublic = PUBLIC_ROUTES.includes(pathname);
      if (!user && !isPublic) {
        router.push("/login");
      }
    }
  }, [user, loading, pathname, router]);

  const signOut = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
