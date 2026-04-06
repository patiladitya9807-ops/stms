"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Download } from "lucide-react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { useInstallPrompt } from "@/hooks/use-install-prompt";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/discover", label: "Discover" },
  { href: "/tournaments", label: "Tournaments" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/venue-portal", label: "Venue Portal" },
];

export function Navbar() {
  const pathname = usePathname();
  const { canInstall, handleInstall } = useInstallPrompt();

  return (
    <header className="sticky top-0 z-40 border-b border-(--border) bg-[var(--surface)/0.85] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-8xl items-center gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="inline-flex items-center gap-2">
          <span className="h-9 w-9 rounded-xl bg-linear-to-br from-(--accent) to-(--accent-2)" />
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-(--accent)">SportSpot</p>
            <p className="text-xs text-(--text-muted)">Find. Book. Play.</p>
          </div>
        </Link>

        <div className="ml-auto hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition",
                pathname === item.href
                  ? "bg-(--accent-soft) text-(--accent)"
                  : "text-(--text-muted) hover:bg-(--surface-soft) hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="hidden h-10 items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-4 text-sm font-medium text-(--text-muted) transition hover:text-foreground md:inline-flex"
        >
          <Search className="h-4 w-4" />
          Quick Search
        </button>

        {canInstall && (
          <button
            type="button"
            onClick={handleInstall}
            className="hidden h-10 items-center gap-2 rounded-full border border-(--accent) bg-(--accent-soft) px-4 text-sm font-medium text-(--accent) transition hover:bg-(--accent) hover:text-white md:inline-flex"
            title="Install SportSpot App"
          >
            <Download className="h-4 w-4" />
            <span className="hidden lg:inline">Install</span>
          </button>
        )}

        <ThemeToggle />
      </div>
    </header>
  );
}
