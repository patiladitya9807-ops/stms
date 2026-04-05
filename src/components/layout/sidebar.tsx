"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarClock, Compass, LayoutDashboard, Trophy, UserCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { href: "/discover", label: "Discover Venues", icon: Compass },
  { href: "/dashboard", label: "My Bookings", icon: CalendarClock },
  { href: "/tournaments", label: "Tournaments", icon: Trophy },
  { href: "/venue-portal", label: "Venue Portal", icon: LayoutDashboard },
  { href: "/profile", label: "Profile", icon: UserCircle2 },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-20 hidden h-[calc(100vh-6rem)] w-72 shrink-0 flex-col gap-3 rounded-3xl border border-(--border) bg-(--surface) p-4 xl:flex">
      <p className="px-3 text-xs font-semibold uppercase tracking-[0.2em] text-(--text-muted)">Navigation</p>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition",
              pathname === item.href
                ? "bg-(--accent-soft) text-(--accent)"
                : "text-(--text-muted) hover:bg-(--surface-soft) hover:text-(--text)",
            )}
          >
            <Icon className="h-4 w-4 transition group-hover:scale-110" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </aside>
  );
}
