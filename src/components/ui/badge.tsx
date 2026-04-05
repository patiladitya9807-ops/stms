import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-(--accent-soft) bg-(--accent-soft) px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-(--accent)",
        className,
      )}
    >
      {children}
    </span>
  );
}
