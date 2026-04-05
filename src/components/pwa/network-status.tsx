"use client";

import { useEffect, useState } from "react";
import { WifiOff } from "lucide-react";
import { flushQueuedActions } from "@/lib/offline-queue";
import { useToast } from "@/components/ui/toast";

export function NetworkStatus() {
  const [online, setOnline] = useState(() => {
    if (typeof navigator === "undefined") {
      return true;
    }
    return navigator.onLine;
  });
  const { pushToast } = useToast();

  useEffect(() => {
    const onOnline = async () => {
      setOnline(true);
      const flushed = await flushQueuedActions();
      if (flushed > 0) {
        pushToast({
          title: "Queued actions synced",
          description: `${flushed} pending action(s) were processed.`,
          variant: "success",
        });
      }
    };

    const onOffline = () => setOnline(false);

    window.addEventListener("online", onOnline);
    window.addEventListener("offline", onOffline);

    return () => {
      window.removeEventListener("online", onOnline);
      window.removeEventListener("offline", onOffline);
    };
  }, [pushToast]);

  if (online) {
    return null;
  }

  return (
    <div className="fixed left-1/2 top-20 z-[90] flex -translate-x-1/2 items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/15 px-4 py-2 text-sm text-amber-100">
      <WifiOff className="h-4 w-4" />
      You are offline. Actions will be queued and synced automatically.
    </div>
  );
}
