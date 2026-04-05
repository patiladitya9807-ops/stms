"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/toast";

const formSchema = z.object({
  name: z.string().min(4),
  sport: z.enum(["football", "cricket", "badminton", "basketball", "tennis", "swimming"]),
  location: z.string().min(2),
  format: z.enum(["knockout", "round-robin", "double-elimination", "league"]),
  maxTeams: z.number().int().min(2).max(64),
  entryFee: z.number().nonnegative(),
});

type FormValues = z.infer<typeof formSchema>;

export default function CreateTournamentPage() {
  const [fixturesPreviewCount, setFixturesPreviewCount] = useState<number | null>(null);
  const { pushToast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      sport: "football",
      location: "Andheri",
      format: "round-robin",
      maxTeams: 8,
      entryFee: 2000,
    },
  });

  const { register, handleSubmit, formState } = form;

  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-black">Create Tournament</h1>
      <Card className="max-w-2xl p-5">
        <form
          className="space-y-4"
          onSubmit={handleSubmit(async (values) => {
            pushToast({
              title: "Tournament created",
              description: `${values.name} has been saved successfully.`,
              variant: "success",
            });
          })}
        >
          <label className="grid gap-1 text-sm font-semibold">
            Tournament Name
            <input
              {...register("name")}
              className="h-11 rounded-xl border border-(--border) bg-(--surface) px-3"
              placeholder="Andheri Premier League"
            />
            {formState.errors.name ? <span className="text-xs text-red-300">Enter a valid name</span> : null}
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1 text-sm font-semibold">
              Sport
              <select {...register("sport")} className="h-11 rounded-xl border border-(--border) bg-(--surface) px-3">
                <option value="football">Football</option>
                <option value="cricket">Cricket</option>
                <option value="badminton">Badminton</option>
                <option value="basketball">Basketball</option>
                <option value="tennis">Tennis</option>
                <option value="swimming">Swimming</option>
              </select>
            </label>

            <label className="grid gap-1 text-sm font-semibold">
              Format
              <select {...register("format")} className="h-11 rounded-xl border border-(--border) bg-(--surface) px-3">
                <option value="round-robin">Round Robin</option>
                <option value="knockout">Knockout</option>
                <option value="double-elimination">Double Elimination</option>
                <option value="league">League</option>
              </select>
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1 text-sm font-semibold">
              Max Teams
              <input
                type="number"
                {...register("maxTeams", { valueAsNumber: true })}
                className="h-11 rounded-xl border border-(--border) bg-(--surface) px-3"
              />
            </label>

            <label className="grid gap-1 text-sm font-semibold">
              Entry Fee (INR)
              <input
                type="number"
                {...register("entryFee", { valueAsNumber: true })}
                className="h-11 rounded-xl border border-(--border) bg-(--surface) px-3"
              />
            </label>
          </div>

          <label className="grid gap-1 text-sm font-semibold">
            Location
            <input {...register("location")} className="h-11 rounded-xl border border-(--border) bg-(--surface) px-3" />
          </label>

          <div className="flex flex-wrap gap-3">
            <Button type="submit">Create Tournament</Button>
            <Button
              type="button"
              variant="secondary"
              onClick={async () => {
                const maxTeams = form.getValues("maxTeams");
                const format = form.getValues("format");
                const teams = Array.from({ length: maxTeams }, (_, index) => `Team ${index + 1}`);

                const response = await fetch("/api/tournaments/fixtures", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ teams, format }),
                });

                if (!response.ok) {
                  pushToast({
                    title: "Fixture preview failed",
                    description: "Try valid team count and format.",
                    variant: "error",
                  });
                  return;
                }

                const data = (await response.json()) as { fixtures: unknown[] };
                setFixturesPreviewCount(data.fixtures.length);
                pushToast({
                  title: "Fixture preview generated",
                  description: `${data.fixtures.length} matches generated.`,
                  variant: "success",
                });
              }}
            >
              Preview Fixtures
            </Button>
          </div>
        </form>

        {fixturesPreviewCount !== null ? (
          <div className="mt-4 rounded-2xl border border-(--border) bg-(--surface-soft) p-3 text-sm text-(--text-muted)">
            Estimated fixtures: <span className="font-semibold text-foreground">{fixturesPreviewCount}</span>
          </div>
        ) : null}
      </Card>
    </div>
  );
}
