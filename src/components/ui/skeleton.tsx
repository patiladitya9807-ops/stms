import { cn } from "@/lib/utils";

type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-2xl bg-gradient-to-r from-[var(--surface-soft)] via-[var(--surface)] to-[var(--surface-soft)]",
        className,
      )}
      {...props}
    />
  );
}
