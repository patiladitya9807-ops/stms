import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

type ReviewCardProps = {
  name: string;
  rating: number;
  review: string;
};

export function ReviewCard({ name, rating, review }: ReviewCardProps) {
  return (
    <Card className="p-4">
      <div className="mb-2 flex items-center justify-between">
        <p className="font-semibold text-(--text)">{name}</p>
        <p className="flex items-center gap-1 text-sm text-amber-500">
          <Star className="h-4 w-4 fill-current" />
          {rating.toFixed(1)}
        </p>
      </div>
      <p className="text-sm text-(--text-muted)">{review}</p>
    </Card>
  );
}
