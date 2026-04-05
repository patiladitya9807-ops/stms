import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OfflinePage() {
  return (
    <div className="mx-auto max-w-xl rounded-3xl border border-(--border) bg-(--surface) p-8 text-center">
      <h1 className="text-3xl font-black">You are offline</h1>
      <p className="mt-2 text-sm text-(--text-muted)">
        Cached pages remain available. Reconnect to sync booking actions and live updates.
      </p>
      <Link href="/" className="mt-4 inline-flex">
        <Button>Go Home</Button>
      </Link>
    </div>
  );
}
