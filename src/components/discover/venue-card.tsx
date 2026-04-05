"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SportIcon } from "@/components/ui/sport-icon";
import type { Venue } from "@/types/venue";

type VenueCardProps = {
  venue: Venue;
};

export function VenueCard({ venue }: VenueCardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <Card className="sport-card group overflow-hidden p-5" data-sport={venue.sports[0]?.sport}>
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold leading-tight text-(--text)">{venue.name}</h3>
            <p className="mt-1 flex items-center gap-1 text-sm text-(--text-muted)">
              <MapPin className="h-4 w-4" />
              {venue.zone} • {venue.distanceKm} km
            </p>
          </div>
          <SportIcon sport={venue.sports[0].sport} className="h-10 w-10 text-(--accent)" />
        </div>

        <div className="mb-3 flex items-center gap-2 text-sm text-(--text-muted)">
          <Star className="h-4 w-4 fill-current text-amber-500" />
          <span className="font-semibold text-(--text)">{venue.rating.toFixed(1)}</span>
          <span>({venue.reviewCount} reviews)</span>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {venue.sports.map((sportInfo) => (
            <Badge key={sportInfo.sport}>
              {sportInfo.sport} • INR {sportInfo.pricePerHour}
            </Badge>
          ))}
        </div>

        <p className="line-clamp-2 text-sm text-(--text-muted)">{venue.description}</p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <Link href={`/venues/${venue.id}`}>
            <Button variant="secondary" className="w-full">
              Details
            </Button>
          </Link>
          <Link href={`/venues/${venue.id}/book`}>
            <Button className="w-full">Book Now</Button>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}
