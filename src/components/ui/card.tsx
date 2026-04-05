import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-(--border) bg-(--surface)/95 shadow-[0_16px_40px_rgba(8,20,40,0.08)]",
        className,
      )}
      {...props}
    />
  );
}
