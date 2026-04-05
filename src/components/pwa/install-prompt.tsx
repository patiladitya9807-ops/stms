"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const onBeforeInstall = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstall);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
    };
  }, []);

  if (!deferredPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-24 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 rounded-2xl border border-(--border) bg-(--surface) p-3 shadow-2xl xl:bottom-6 xl:left-auto xl:right-6 xl:translate-x-0">
      <p className="text-sm font-semibold text-(--text)">Install SportSpot App</p>
      <p className="mt-1 text-xs text-(--text-muted)">Get offline access, quick launch, and push alerts.</p>
      <Button
        className="mt-3 w-full"
        onClick={async () => {
          await deferredPrompt.prompt();
          await deferredPrompt.userChoice;
          setDeferredPrompt(null);
        }}
      >
        <Download className="mr-2 h-4 w-4" />
        Add to Home Screen
      </Button>
    </div>
  );
}
