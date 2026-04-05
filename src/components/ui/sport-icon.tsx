"use client";

import { motion } from "framer-motion";
import type { SportKind } from "@/types/venue";

type SportIconProps = {
  sport: SportKind;
  className?: string;
};

const labelMap: Record<SportKind, string> = {
  football: "Football",
  cricket: "Cricket",
  badminton: "Badminton",
  basketball: "Basketball",
  tennis: "Tennis",
  swimming: "Swimming",
};

export function SportIcon({ sport, className }: SportIconProps) {
  if (sport === "football") {
    return (
      <motion.svg
        className={className}
        viewBox="0 0 48 48"
        fill="none"
        initial={{ y: 0 }}
        whileHover={{ y: [-1, 1, -1], transition: { duration: 0.45 } }}
        aria-label={labelMap[sport]}
      >
        <circle cx="24" cy="24" r="20" fill="currentColor" opacity="0.14" />
        <circle cx="24" cy="24" r="11" stroke="currentColor" strokeWidth="2" />
        <path d="M24 17L28 20L26.5 25H21.5L20 20L24 17Z" stroke="currentColor" strokeWidth="2" />
      </motion.svg>
    );
  }

  if (sport === "cricket") {
    return (
      <motion.svg
        className={className}
        viewBox="0 0 48 48"
        fill="none"
        whileHover={{ rotate: -8, scale: 1.05 }}
        aria-label={labelMap[sport]}
      >
        <rect x="14" y="10" width="8" height="26" rx="4" fill="currentColor" opacity="0.18" />
        <rect x="24" y="15" width="10" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      </motion.svg>
    );
  }

  return (
    <motion.svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      whileHover={{ scale: 1.06 }}
      aria-label={labelMap[sport]}
    >
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
      <path d="M12 24H36" stroke="currentColor" strokeWidth="2" />
      <path d="M24 8C28 14 30 20 30 24C30 28 28 34 24 40" stroke="currentColor" strokeWidth="2" />
      <path d="M24 8C20 14 18 20 18 24C18 28 20 34 24 40" stroke="currentColor" strokeWidth="2" />
    </motion.svg>
  );
}
