// Netlify serverless function: generate a fresh AI quote with Claude.
//
// Called by the "✨ Generate with AI" button. Returns JSON: { text, author }.
// Uses the Anthropic Messages REST API directly via fetch (Node 18+ on
// Netlify has global fetch), so the site stays dependency-free — no SDK or
// node_modules to bundle.
//
// Requires the ANTHROPIC_API_KEY environment variable to be set in the
// Netlify site settings (Site configuration → Environment variables).

const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";
const MODEL = "claude-opus-4-8"; // swap to "claude-haiku-4-5" for lower cost

// A little variety so repeated clicks don't converge on the same theme.
const THEMES = [
  "perseverance through hardship",
  "the value of deep focus",
  "courage to begin",
  "the quiet power of patience",
  "growth through discomfort",
  "living with intention",
  "the discipline of small daily habits",
  "finding meaning in work",
  "letting go of what you can't control",
  "the strength found in stillness",
  "curiosity as a way of life",
  "kindness as a form of strength",
  "creating rather than consuming",
  "the long game over the quick win",
  "gratitude and presence",
  "turning failure into wisdom",
];

const SYSTEM_PROMPT =
  "You are a writer of original, deep, and meaningful quotes in the spirit of " +
  "history's great philosophers, thinkers, and leaders. Write ORIGINAL wisdom " +
  "— never copy or paraphrase an existing famous quote, and never attribute it " +
  "to a real person. Each quote must be exactly two sentences: motivational, " +
  "inspiring, or productivity-minded, and genuinely thoughtful rather than " +
  "clichéd. Keep it concise and timeless.";

// Constrain the model to clean JSON. Structured outputs also keeps the
// (thinking-disabled) model from prepending any reasoning to the answer.
const OUTPUT_SCHEMA = {
  type: "object",
  properties: {
    text: { type: "string", description: "The two-sentence quote." },
  },
  required: ["text"],
  additionalProperties: false,
};

export const handler = async (event) => {
  const jsonHeaders = {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  };

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: jsonHeaders,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      headers: jsonHeaders,
      body: JSON.stringify({
        error:
          "ANTHROPIC_API_KEY is not configured. Set it in the Netlify site " +
          "environment variables to enable AI quotes.",
      }),
    };
  }

  const theme = THEMES[Math.floor(Math.random() * THEMES.length)];

  try {
    const res = await fetch(ANTHROPIC_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 512,
        system: SYSTEM_PROMPT,
        output_config: {
          format: { type: "json_schema", schema: OUTPUT_SCHEMA },
        },
        messages: [
          {
            role: "user",
            content:
              "Write one original two-sentence quote about " +
              theme +
              ". Surprise me with a fresh angle.",
          },
        ],
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Anthropic API error:", res.status, detail);
      return {
        statusCode: 502,
        headers: jsonHeaders,
        body: JSON.stringify({ error: "Upstream API error" }),
      };
    }

    const data = await res.json();
    const textBlock = (data.content || []).find((b) => b.type === "text");
    if (!textBlock) throw new Error("No text block in response");

    const parsed = JSON.parse(textBlock.text);
    const quote = (parsed.text || "").trim();
    if (!quote) throw new Error("Empty quote");

    return {
      statusCode: 200,
      headers: jsonHeaders,
      // AI quotes are original, so there's no author to attribute.
      body: JSON.stringify({ text: quote, author: null }),
    };
  } catch (err) {
    console.error("generate-quote failed:", err);
    return {
      statusCode: 500,
      headers: jsonHeaders,
      body: JSON.stringify({ error: "Failed to generate quote" }),
    };
  }
};
