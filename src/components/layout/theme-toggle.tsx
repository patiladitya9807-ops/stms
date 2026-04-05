"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useMemo } from "react";

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const activeTheme = useMemo(() => {
    const current = theme === "system" ? resolvedTheme : theme;
    return current ?? "light";
  }, [theme, resolvedTheme]);

  return (
    <button
      type="button"
      onClick={() => setTheme(activeTheme === "dark" ? "light" : "dark")}
      className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--border) bg-(--surface) text-(--text) transition hover:border-(--accent) hover:text-(--accent)"
      aria-label="Toggle theme"
    >
      {activeTheme === "dark" ? (
        <Sun className="h-4 w-4 transition group-hover:rotate-12" />
      ) : (
        <Moon className="h-4 w-4 transition group-hover:-rotate-12" />
      )}
    </button>
  );
}
