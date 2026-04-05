import { withRetry } from "@/lib/api";

function localSummary(text: string): string {
  const sentences = text
    .split(/[.!?]\s+/)
    .map((part) => part.trim())
    .filter(Boolean);

  if (sentences.length === 0) {
    return "1) Overall sentiment is unclear.\n2) No clear strengths mentioned.\n3) No clear weaknesses mentioned.";
  }

  const topLines = sentences.slice(0, 3).map((line, index) => `${index + 1}) ${line}`);
  return topLines.join("\n");
}

export async function summarizeWithGemini(text: string) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return localSummary(text);
  }

  const endpoint =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

  return withRetry(async () => {
    const response = await fetch(`${endpoint}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              {
                text: [
                  "You are an assistant for sports venue reviews.",
                  "Summarize this review block in exactly 3 short bullet points:",
                  text,
                ].join("\n"),
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.2,
          maxOutputTokens: 220,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Gemini request failed with status ${response.status}`);
    }

    const data = (await response.json()) as {
      candidates?: Array<{
        content?: {
          parts?: Array<{ text?: string }>;
        };
      }>;
    };

    const summary = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    if (!summary) {
      return localSummary(text);
    }

    return summary;
  });
}
