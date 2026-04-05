import Link from "next/link";
import { CalendarClock, Medal, Wallet } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { demoUser, mockBookings, tournaments, venues } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-black">Player Dashboard</h1>

      <section className="grid gap-4 md:grid-cols-3">
        <Card className="p-4">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-(--text-muted)">
            <CalendarClock className="h-4 w-4 text-(--accent)" />
            Hours Played
          </p>
          <p className="mt-2 text-3xl font-black text-(--text)">{demoUser.stats.hoursPlayed}</p>
        </Card>

        <Card className="p-4">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-(--text-muted)">
            <Medal className="h-4 w-4 text-(--accent)" />
            Tournaments Won
          </p>
          <p className="mt-2 text-3xl font-black text-(--text)">{demoUser.stats.tournamentsWon}</p>
        </Card>

        <Card className="p-4">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-(--text-muted)">
            <Wallet className="h-4 w-4 text-(--accent)" />
            Wallet Credits
          </p>
          <p className="mt-2 text-3xl font-black text-(--text)">INR 1,250</p>
        </Card>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card className="p-5">
          <h2 className="text-xl font-bold">Upcoming Bookings</h2>
          <div className="mt-3 space-y-2">
            {mockBookings.map((booking) => (
              <div
                key={booking.id}
                className="rounded-xl border border-(--border) bg-(--surface-soft) px-3 py-2 text-sm text-(--text-muted)"
              >
                <p className="font-semibold text-(--text)">{booking.venueName}</p>
                <p>
                  {booking.date} • {booking.startTime} • {booking.sport}
                </p>
              </div>
            ))}
          </div>
          <Link href="/discover" className="mt-4 inline-flex">
            <Button variant="secondary">Book another slot</Button>
          </Link>
        </Card>

        <Card className="p-5">
          <h2 className="text-xl font-bold">Favorites + Tournament History</h2>
          <div className="mt-3 space-y-2 text-sm text-(--text-muted)">
            <p>Favorite venues:</p>
            <ul className="list-disc pl-4">
              {venues.slice(0, 3).map((venue) => (
                <li key={venue.id}>{venue.name}</li>
              ))}
            </ul>
            <p className="pt-2">Recent tournaments:</p>
            <ul className="list-disc pl-4">
              {tournaments.slice(0, 2).map((tournament) => (
                <li key={tournament.id}>{tournament.name}</li>
              ))}
            </ul>
          </div>
        </Card>
      </section>
    </div>
  );
}
