import type { AIConfig, AIMessage } from "./types";

const DEFAULT_MODEL = "claude-sonnet-4-20250514";

export function getStoredConfig(): AIConfig | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem("bunt-ai-config");
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function saveConfig(config: AIConfig): void {
  localStorage.setItem("bunt-ai-config", JSON.stringify(config));
}

export async function callAI(
  systemPrompt: string,
  messages: AIMessage[],
  config?: AIConfig | null
): Promise<string> {
  const aiConfig = config || getStoredConfig();

  if (!aiConfig?.apiKey) {
    throw new Error(
      "API key not configured. Please set your API key in the settings panel."
    );
  }

  if (aiConfig.provider === "anthropic") {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": aiConfig.apiKey,
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true",
      },
      body: JSON.stringify({
        model: aiConfig.model || DEFAULT_MODEL,
        max_tokens: 4096,
        system: systemPrompt,
        messages: messages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`API error: ${response.status} - ${error}`);
    }

    const data = await response.json();
    return data.content[0].text;
  }

  throw new Error(`Unsupported provider: ${aiConfig.provider}`);
}
