"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";

export function ReviewForm() {
  const { pushToast } = useToast();
  const [review, setReview] = useState("");

  return (
    <div className="rounded-2xl border border-(--border) bg-(--surface) p-4">
      <label className="text-sm font-semibold text-(--text)">Leave a review</label>
      <textarea
        value={review}
        onChange={(event) => setReview(event.target.value)}
        rows={4}
        className="mt-2 w-full rounded-xl border border-(--border) bg-(--surface-soft) p-3 text-sm outline-none focus:border-(--accent)"
        placeholder="Share your experience"
      />
      <Button
        className="mt-3"
        onClick={() => {
          if (!review.trim()) {
            pushToast({
              title: "Review cannot be empty",
              description: "Write at least one sentence before submitting.",
              variant: "warning",
            });
            return;
          }

          pushToast({
            title: "Review submitted",
            description: "Thanks for helping the community.",
            variant: "success",
          });
          setReview("");
        }}
      >
        Submit Review
      </Button>
    </div>
  );
}
