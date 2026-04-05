"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Compass, House, Trophy, User } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { href: "/", label: "Home", icon: House },
  { href: "/discover", label: "Discover", icon: Compass },
  { href: "/dashboard", label: "Bookings", icon: Calendar },
  { href: "/tournaments", label: "Tournaments", icon: Trophy },
  { href: "/profile", label: "Profile", icon: User },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-3 left-1/2 z-50 flex w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 items-center justify-between rounded-2xl border border-(--border) bg-[color:var(--surface)/0.9] px-2 py-2 shadow-xl backdrop-blur-xl xl:hidden">
      {items.map((item) => {
        const Icon = item.icon;
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex min-w-14 flex-col items-center rounded-xl px-2 py-1 text-[11px] font-semibold transition",
              active ? "bg-(--accent-soft) text-(--accent)" : "text-(--text-muted)",
            )}
          >
            <Icon className="h-4 w-4" />
            <span className="mt-1">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
