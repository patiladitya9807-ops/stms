"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Building2, CalendarClock, Sparkles, Trophy } from "lucide-react";
import { useRef } from "react";
import { ReviewSummarizer } from "@/components/ai/review-summarizer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCountUp } from "@/hooks/use-count-up";

function CountUpStat({ value, label }: { value: number; label: string }) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(targetRef, { once: true, amount: 0.7 });
  const count = useCountUp(inView ? value : 0, 1200);

  return (
    <div ref={targetRef}>
      <Card className="p-4 text-center">
        <p className="text-3xl font-black text-(--accent)">{count.toLocaleString()}</p>
        <p className="mt-1 text-sm text-(--text-muted)">{label}</p>
      </Card>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="space-y-8 pb-10">
      <section className="relative overflow-hidden rounded-4xl border border-(--border) bg-(--surface) p-6 sm:p-10">
        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[var(--accent)/0.12] blur-3xl" />
        <div className="absolute bottom-0 left-20 h-48 w-48 rounded-full bg-[var(--accent-2)/0.14] blur-3xl" />

        <Badge>SportSpot Mumbai</Badge>
        <h1 className="mt-4 max-w-2xl text-4xl font-black leading-tight text-(--text) sm:text-5xl">
          Find venues. Book slots. Run tournaments. All in one city-ready platform.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-(--text-muted) sm:text-lg">
          A complete sports operations stack for players, venue owners, and organizers across Mumbai zones.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/discover">
            <Button size="lg">
              Explore Venues
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/tournaments/create">
            <Button variant="secondary" size="lg">
              Create Tournament
            </Button>
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <CountUpStat value={100} label="Venues Listed" />
        <CountUpStat value={12450} label="Bookings Completed" />
        <CountUpStat value={730} label="Tournaments Hosted" />
        <CountUpStat value={96} label="Avg Fill Rate %" />
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {[
          {
            icon: Building2,
            title: "Smart Venue Discovery",
            body: "Filter by sport, zone, budget, ratings, amenities, and real-time slot status.",
          },
          {
            icon: CalendarClock,
            title: "Fast Booking Workflow",
            body: "Pick sport, slot, team size, and confirm payment flow in under two minutes.",
          },
          {
            icon: Trophy,
            title: "Tournament Engine",
            body: "Auto fixtures, live score updates, brackets, and standings for every format.",
          },
        ].map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Card className="sport-card h-full p-5">
                <Icon className="h-8 w-8 text-(--accent)" />
                <h2 className="mt-3 text-lg font-bold">{feature.title}</h2>
                <p className="mt-2 text-sm text-(--text-muted)">{feature.body}</p>
              </Card>
            </motion.div>
          );
        })}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <ReviewSummarizer />
        <Card className="p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-(--accent)">AI Match Commentary</p>
          <h3 className="mt-1 text-xl font-bold">Live narrative for tournament momentum</h3>
          <div className="mt-4 rounded-2xl border border-(--border) bg-(--surface-soft) p-4 text-sm text-(--text-muted)">
            <p className="font-semibold text-(--text)">Semi-final Insight</p>
            <p className="mt-2">
              RedWolves enter with high xG conversion from wide channels, while City Kicks rely on compact transitions.
              Expect a high-intensity midfield press in the opening 20 minutes.
            </p>
          </div>
          <Link href="/tournaments" className="mt-4 inline-flex">
            <Button variant="secondary">
              Open Tournament Hub
              <Sparkles className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </Card>
      </section>
    </div>
  );
}
