import { NextResponse } from "next/server";
import { summarizeWithGemini } from "@/lib/gemini";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as {
      mode?: "review-summary" | "venue-search";
      text?: string;
    };

    if (!payload.text || payload.text.trim().length < 10) {
      return new NextResponse("Input text is too short", { status: 400 });
    }

    if (payload.mode === "venue-search") {
      return NextResponse.json({
        summary: [
          "1) KickOff Arena Andheri West - best for evening football under INR 800/hr.",
          "2) Suburban Smash Courts - budget indoor option with strong badminton access.",
          "3) AstroTurf Arena Vashi - top rated with premium facilities and high slot availability.",
        ].join("\n"),
      });
    }

    const summary = await summarizeWithGemini(payload.text);
    return NextResponse.json({ summary });
  } catch (error) {
    return new NextResponse(error instanceof Error ? error.message : "AI request failed", {
      status: 500,
    });
  }
}
