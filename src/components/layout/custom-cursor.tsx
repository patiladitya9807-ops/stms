"use client";

import { useEffect, useState } from "react";

type CursorState = {
  x: number;
  y: number;
  visible: boolean;
};

const sportCursorMap: Record<string, string> = {
  football: "⚽",
  cricket: "🏏",
  badminton: "🏸",
  basketball: "🏀",
  tennis: "🎾",
  swimming: "🏊",
};

export function CustomCursor() {
  const [cursor, setCursor] = useState<CursorState>({ x: 0, y: 0, visible: false });
  const [emoji, setEmoji] = useState<string>("");

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const onMove = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const sport = target?.closest("[data-sport]")?.getAttribute("data-sport") ?? "";
      setEmoji(sportCursorMap[sport] ?? "");
      setCursor({ x: event.clientX, y: event.clientY, visible: true });
    };

    const onLeave = () => {
      setCursor((previous) => ({ ...previous, visible: false }));
    };

    window.addEventListener("mousemove", onMove);
    document.body.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.body.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  if (!cursor.visible) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed z-120 hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-(--accent) bg-(--accent-soft) text-base shadow-[0_0_20px_color-mix(in_oklab,var(--accent),transparent_70%)] lg:flex"
      style={{ left: cursor.x, top: cursor.y }}
    >
      {emoji || <span className="h-2 w-2 rounded-full bg-(--accent)" />}
    </div>
  );
}
