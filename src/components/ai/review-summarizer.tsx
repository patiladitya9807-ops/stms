"use client";

import { useState } from "react";
import { LoaderCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/toast";

export function ReviewSummarizer() {
  const [reviewText, setReviewText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const { pushToast } = useToast();

  return (
    <Card className="p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-(--accent)">AI Review Summarizer</p>
      <h3 className="mt-1 text-xl font-bold">Gemini-powered 3-point summary</h3>
      <textarea
        value={reviewText}
        onChange={(event) => setReviewText(event.target.value)}
        rows={7}
        className="mt-4 w-full rounded-2xl border border-(--border) bg-(--surface-soft) p-3 text-sm outline-none focus:border-(--accent)"
        placeholder="Paste multiple reviews and get concise strengths + weaknesses + recommendation"
      />
      <Button
        className="mt-3"
        onClick={async () => {
          if (!reviewText.trim()) {
            pushToast({
              title: "Add reviews first",
              description: "Paste review text before generating summary.",
              variant: "warning",
            });
            return;
          }

          try {
            setLoading(true);
            const response = await fetch("/api/gemini", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ mode: "review-summary", text: reviewText }),
            });

            if (!response.ok) {
              throw new Error("AI request failed");
            }

            const data = (await response.json()) as { summary: string };
            setSummary(data.summary);
          } catch {
            pushToast({
              title: "Unable to generate summary",
              description: "Please retry in a moment.",
              variant: "error",
            });
          } finally {
            setLoading(false);
          }
        }}
      >
        {loading ? <LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
        Summarize with Gemini
      </Button>

      {summary ? (
        <div className="mt-4 rounded-2xl border border-(--border) bg-(--surface-soft) p-4 text-sm text-(--text-muted)">
          <p className="font-semibold text-(--text)">Summary</p>
          <p className="mt-2 whitespace-pre-line">{summary}</p>
        </div>
      ) : null}
    </Card>
  );
}
