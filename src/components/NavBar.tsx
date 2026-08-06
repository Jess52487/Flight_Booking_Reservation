"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "./AuthProvider";
import { supabase } from "@/lib/supabase";

export function NavBar() {
  const pathname = usePathname();
  const { user, profile, signOut } = useAuth();
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [avatarInput, setAvatarInput] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleOpenModal = () => {
    setNameInput(profile?.username || user?.user_metadata?.full_name || "");
    setAvatarInput(user?.user_metadata?.avatar_url || "https://lh3.googleusercontent.com/aida-public/AB6AXuABPluzZT45nJh2Stjb8yaK6oaFqCh2jmzdd8giITe0Jon-N2n0AlPF5mVmV2ffj4lww7FyG5geGLB5jlVrcLuTgedKjInyqwusq71sLlDBFKqEchA4ekIh1djQYxHeo_XLme5XxOujzeWkPNZlO1GYwVcGU7QO-zDb4dNAgXB3gVCd0jcD89or7EUnxkqMfvdqqajyjfz54Av1L4ekkmU_BnOWbRCntvU0KDaM80ws68evFL8goz2ya79aofSLiC3oEpTlhAFy3nOV");
    setShowProfileModal(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarInput(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = async () => {
    if (!user) return;
    setIsSaving(true);
    try {
      // 1. Update Auth metadata
      const { error: authError } = await supabase.auth.updateUser({
        data: { 
          avatar_url: avatarInput,
          full_name: nameInput
        }
      });
      // 2. Update Profiles database table
      const { error: profileError } = await supabase
        .from("profiles")
        .update({ username: nameInput })
        .eq("id", user.id);

      if (!authError && !profileError) {
        window.location.reload();
      }
    } catch (err) {
      console.error("Error saving profile:", err);
    } finally {
      setIsSaving(false);
      setIsEditing(false);
    }
  };

  const navLinks = user
    ? [
        { name: "Flights", href: "/flights" },
        { name: "Hotels", href: "/hotels" },
        { name: "Manage", href: "/manage" },
        { name: "Support", href: "/support" },
      ]
    : [
        { name: "Flights", href: "/flights" },
        { name: "Support", href: "/support" },
      ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-xl border-b border-white/20 shadow-[0px_20px_40px_rgba(0,0,0,0.3)]">
        <div className="flex justify-between items-center px-[var(--spacing-md)] py-[var(--spacing-sm)] max-w-[1600px] mx-auto">
          <Link href="/" className="flex items-center gap-2.5 text-2xl font-outfit font-bold text-[var(--color-secondary)] tracking-tight">
            <img src="/logo.png" alt="AeroHub Logo" className="w-8 h-8 object-contain rounded-lg" />
            <span>AeroHub</span>
          </Link>
          <nav className="hidden md:flex gap-[var(--spacing-md)] items-center">
            {navLinks.map((link) => {
              const isActive = link.href === "/flights" 
                ? pathname === "/flights" || pathname === "/search" || pathname === "/booking"
                : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-inter text-sm font-medium tracking-widest uppercase transition-colors pb-1 border-b-2 ${
                    isActive
                      ? "text-[var(--color-tertiary)] border-[var(--color-tertiary)]"
                      : "text-white/80 border-transparent hover:text-[var(--color-secondary)]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-[var(--spacing-md)]">
            {user ? (
              <>
                <Link href="/notifications" className="text-[var(--color-secondary)] scale-95 active:scale-90 transition-transform">
                  <span className="material-symbols-outlined">notifications</span>
                </Link>
                <button 
                  onClick={handleOpenModal} 
                  className="text-[var(--color-secondary)] hover:text-[var(--color-secondary)]/80 scale-95 active:scale-90 transition-all flex items-center gap-2 cursor-pointer outline-none max-w-[200px]"
                >
                  <img 
                    src={user?.user_metadata?.avatar_url || "https://lh3.googleusercontent.com/aida-public/AB6AXuABPluzZT45nJh2Stjb8yaK6oaFqCh2jmzdd8giITe0Jon-N2n0AlPF5mVmV2ffj4lww7FyG5geGLB5jlVrcLuTgedKjInyqwusq71sLlDBFKqEchA4ekIh1djQYxHeo_XLme5XxOujzeWkPNZlO1GYwVcGU7QO-zDb4dNAgXB3gVCd0jcD89or7EUnxkqMfvdqqajyjfz54Av1L4ekkmU_BnOWbRCntvU0KDaM80ws68evFL8goz2ya79aofSLiC3oEpTlhAFy3nOV"} 
                    alt="User profile" 
                    className="w-7 h-7 rounded-full object-cover border border-white/20 shrink-0" 
                  />
                  <span className="font-inter text-xs font-semibold text-[var(--color-on-surface)] hidden sm:inline truncate">
                    {profile?.username || user?.user_metadata?.full_name || "Friend"}
                  </span>
                </button>
                <button 
                  onClick={signOut} 
                  className="text-red-400 hover:text-red-300 font-inter text-xs font-bold uppercase tracking-widest border border-red-500/30 px-3 py-1.5 rounded-lg bg-red-500/5 hover:bg-red-500/10 active:scale-95 transition-all cursor-pointer shrink-0"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link href="/login" className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/90 text-black px-4 py-2 rounded-lg font-inter text-xs font-bold uppercase tracking-widest hover:-translate-y-0.5 active:scale-95 transition-all shrink-0">
                Sign In
              </Link>
            )}
          </div>
        </div>
      </header>
 
      {/* Profile Details Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/75 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-2xl my-8 bg-[var(--color-surface)] border border-white/20 rounded-[28px] p-8 md:p-10 shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto text-[var(--color-on-surface)]">
            {/* Ambient shader */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
            
            {/* Header */}
            <div className="flex justify-between items-center mb-8 relative z-10 shrink-0">
              <h3 className="font-outfit text-3xl font-bold text-[var(--color-secondary)]">Your Profile</h3>
              <button 
                onClick={() => {
                  setShowProfileModal(false);
                  setIsEditing(false);
                }}
                className="text-white/60 hover:text-white transition-colors cursor-pointer outline-none p-1.5 hover:bg-white/5 rounded-full"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>
 
            {/* Scrollable content container to prevent cutoff */}
            <div className="flex-1 overflow-y-auto pr-2 space-y-8 relative z-10">
              {/* Avatar & Basic Info */}
              <div className="flex items-center gap-6 pb-8 border-b border-white/10 min-w-0">
                <div className="w-20 h-20 rounded-full border-2 border-[var(--color-tertiary)] p-1 bg-white/5 flex items-center justify-center shrink-0">
                  <img 
                    src={avatarInput || "https://lh3.googleusercontent.com/aida-public/AB6AXuABPluzZT45nJh2Stjb8yaK6oaFqCh2jmzdd8giITe0Jon-N2n0AlPF5mVmV2ffj4lww7FyG5geGLB5jlVrcLuTgedKjInyqwusq71sLlDBFKqEchA4ekIh1djQYxHeo_XLme5XxOujzeWkPNZlO1GYwVcGU7QO-zDb4dNAgXB3gVCd0jcD89or7EUnxkqMfvdqqajyjfz54Av1L4ekkmU_BnOWbRCntvU0KDaM80ws68evFL8goz2ya79aofSLiC3oEpTlhAFy3nOV"} 
                    alt="User avatar" 
                    className="w-full h-full rounded-full object-cover" 
                  />
                </div>
                <div className="min-w-0 flex-1 space-y-2">
                  {isEditing ? (
                    <div className="space-y-3 w-full">
                      <div>
                        <label className="block text-[10px] font-bold text-[var(--color-secondary)] uppercase tracking-wider mb-1">Your Name</label>
                        <input 
                          type="text" 
                          value={nameInput} 
                          onChange={(e) => setNameInput(e.target.value)} 
                          className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-[var(--color-secondary)]" 
                          placeholder="Enter your name" 
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-[var(--color-secondary)] uppercase tracking-wider mb-1">Upload Profile Picture</label>
                        <div className="flex items-center gap-3">
                          <input 
                            type="file" 
                            accept="image/*" 
                            onChange={handleFileChange} 
                            className="hidden" 
                            id="profile-upload-input" 
                          />
                          <label 
                            htmlFor="profile-upload-input" 
                            className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl cursor-pointer active:scale-95 transition-all flex items-center gap-2 border border-white/20"
                          >
                            <span className="material-symbols-outlined text-sm">upload</span>
                            <span>Choose File</span>
                          </label>
                          <span className="text-xs text-[var(--color-on-surface-variant)] truncate max-w-[150px]">
                            {avatarInput.startsWith("data:") ? "Custom Image loaded" : "No file chosen"}
                          </span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-[var(--color-secondary)] uppercase tracking-wider mb-1">Or Paste Image URL</label>
                        <input 
                          type="text" 
                          value={avatarInput} 
                          onChange={(e) => setAvatarInput(e.target.value)} 
                          className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-[var(--color-secondary)]" 
                          placeholder="Image URL" 
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <h4 className="font-outfit text-2xl font-bold text-white break-words">
                        {profile?.username || user?.user_metadata?.full_name || "Friend"}
                      </h4>
                      <p className="font-inter text-sm text-[var(--color-on-surface-variant)] break-all">{user?.email}</p>
                    </>
                  )}
                  <div className="mt-2 flex items-center gap-2">
                    {isEditing ? (
                      <div className="flex gap-2">
                        <button 
                          onClick={handleSaveProfile} 
                          disabled={isSaving}
                          className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/90 text-black text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg active:scale-95 transition-all cursor-pointer"
                        >
                          {isSaving ? "Saving..." : "Save"}
                        </button>
                        <button 
                          onClick={() => setIsEditing(false)} 
                          className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg active:scale-95 transition-all cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button 
                        onClick={() => setIsEditing(true)} 
                        className="bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg active:scale-95 transition-all cursor-pointer"
                      >
                        Edit Profile
                      </button>
                    )}
                  </div>
                </div>
              </div>
 
              {/* Stats / Details */}
              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="font-inter text-xs text-[var(--color-on-surface-variant)] uppercase tracking-wider font-semibold">Loyalty Points</span>
                  <span className="font-outfit text-lg font-bold text-[var(--color-tertiary)]">{profile?.loyalty_creds?.toLocaleString() || "42,500"} Points</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="font-inter text-xs text-[var(--color-on-surface-variant)] uppercase tracking-wider font-semibold">Preferred Cabin</span>
                  <span className="font-inter text-sm font-semibold text-white capitalize">{profile?.cabin_class || "Economy"}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="font-inter text-xs text-[var(--color-on-surface-variant)] uppercase tracking-wider font-semibold">Dietary Choice</span>
                  <span className="font-inter text-sm font-semibold text-white capitalize">{profile?.dietary_pref || "Standard"}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-inter text-xs text-[var(--color-on-surface-variant)] uppercase tracking-wider font-semibold">Theme</span>
                  <span className="font-inter text-sm font-semibold text-white capitalize">{profile?.theme_pref || "Dark"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
