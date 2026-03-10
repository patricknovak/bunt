"use client";

import { useState, useEffect } from "react";
import { Settings, Key, X } from "lucide-react";
import { getStoredConfig, saveConfig } from "@/lib/ai/claude";
import type { AIConfig } from "@/lib/ai/types";

export default function AIConfigPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState<AIConfig>({
    apiKey: "",
    model: "claude-sonnet-4-20250514",
    provider: "anthropic",
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = getStoredConfig();
    if (stored) {
      setConfig(stored);
    }
  }, []);

  const handleSave = () => {
    saveConfig(config);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-colors"
        title="AI Settings"
      >
        <Settings className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Key className="w-5 h-5 text-primary" />
                AI Configuration
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-surface rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Provider
                </label>
                <select
                  value={config.provider}
                  onChange={(e) =>
                    setConfig({ ...config, provider: e.target.value as AIConfig["provider"] })
                  }
                  className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                >
                  <option value="anthropic">Anthropic (Claude)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  API Key
                </label>
                <input
                  type="password"
                  value={config.apiKey}
                  onChange={(e) =>
                    setConfig({ ...config, apiKey: e.target.value })
                  }
                  placeholder="sk-ant-..."
                  className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                />
                <p className="text-xs text-text-muted mt-1">
                  Your API key is stored locally in your browser and never sent to our servers.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Model
                </label>
                <select
                  value={config.model}
                  onChange={(e) =>
                    setConfig({ ...config, model: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                >
                  <option value="claude-sonnet-4-20250514">Claude Sonnet 4</option>
                  <option value="claude-haiku-4-5-20251001">Claude Haiku 4.5</option>
                </select>
              </div>

              <button
                onClick={handleSave}
                className="w-full py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
              >
                {saved ? "Saved!" : "Save Configuration"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
