"use client";

import { useState } from "react";
import { ParkingCircle, Sparkles, Loader2, AlertCircle } from "lucide-react";
import AIConfigPanel from "@/components/shared/AIConfigPanel";
import { callAI } from "@/lib/ai/claude";
import { PARKING_SYSTEM_PROMPT } from "@/lib/ai/prompts";
import type { ParkingInputs, ParkingResult } from "@/lib/ai/types";

const landUseOptions = [
  { value: "residential-sf", label: "Single-Family Residential", unit: "dwelling units" },
  { value: "residential-mf", label: "Multi-Family Residential", unit: "dwelling units" },
  { value: "office", label: "Office", unit: "sq ft GFA" },
  { value: "retail", label: "Retail/Shopping", unit: "sq ft GFA" },
  { value: "restaurant", label: "Restaurant", unit: "sq ft GFA" },
  { value: "industrial", label: "Industrial", unit: "sq ft GFA" },
  { value: "medical", label: "Medical Office", unit: "sq ft GFA" },
  { value: "hotel", label: "Hotel", unit: "rooms" },
];

export default function ParkingAnalyzerPage() {
  const [inputs, setInputs] = useState<ParkingInputs>({
    landUseType: "residential-mf",
    size: 200,
    sizeUnit: "dwelling units",
    location: "Vancouver, BC - Urban",
    transitProximity: "high",
    sharedParking: false,
  });
  const [result, setResult] = useState<ParkingResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    setError(null);
    try {
      const prompt = `Analyze parking demand for the following development:
- Land Use: ${landUseOptions.find((o) => o.value === inputs.landUseType)?.label}
- Size: ${inputs.size} ${inputs.sizeUnit}
- Location: ${inputs.location}
- Transit Proximity: ${inputs.transitProximity}
- Shared Parking: ${inputs.sharedParking ? "Yes" : "No"}
${inputs.existingSupply ? `- Existing Supply: ${inputs.existingSupply} spaces` : ""}

Provide parking demand analysis with right-sizing recommendations.`;

      const response = await callAI(PARKING_SYSTEM_PROMPT, [
        { role: "user", content: prompt },
      ]);

      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        setResult(JSON.parse(jsonMatch[0]));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Analysis failed");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="py-20">
      <AIConfigPanel />

      <section className="bg-gradient-to-r from-primary-light to-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <ParkingCircle className="w-8 h-8" />
            <h1 className="text-3xl sm:text-4xl font-bold">Parking Demand Analyzer</h1>
          </div>
          <p className="text-lg text-white/80 max-w-2xl">
            AI-powered parking demand forecasting using ITE rates with intelligent right-sizing recommendations.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <div className="bg-white rounded-2xl border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">Development Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Land Use Type</label>
                  <select
                    value={inputs.landUseType}
                    onChange={(e) => {
                      const option = landUseOptions.find((o) => o.value === e.target.value);
                      setInputs({ ...inputs, landUseType: e.target.value, sizeUnit: option?.unit || "" });
                    }}
                    className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                  >
                    {landUseOptions.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Size ({inputs.sizeUnit})
                  </label>
                  <input
                    type="number"
                    value={inputs.size}
                    onChange={(e) => setInputs({ ...inputs, size: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Location</label>
                  <input
                    type="text"
                    value={inputs.location}
                    onChange={(e) => setInputs({ ...inputs, location: e.target.value })}
                    className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                    placeholder="e.g., Vancouver, BC - Urban"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Transit Proximity</label>
                  <select
                    value={inputs.transitProximity}
                    onChange={(e) => setInputs({ ...inputs, transitProximity: e.target.value as ParkingInputs["transitProximity"] })}
                    className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                  >
                    <option value="none">No Transit</option>
                    <option value="low">Low (Bus stop within 800m)</option>
                    <option value="moderate">Moderate (Frequent transit nearby)</option>
                    <option value="high">High (Rapid transit station within 400m)</option>
                  </select>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="sharedParking"
                    checked={inputs.sharedParking}
                    onChange={(e) => setInputs({ ...inputs, sharedParking: e.target.checked })}
                    className="rounded border-border"
                  />
                  <label htmlFor="sharedParking" className="text-sm text-foreground">
                    Consider shared parking with adjacent uses
                  </label>
                </div>

                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="w-full py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
                >
                  {isAnalyzing ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Analyzing...</>
                  ) : (
                    <><Sparkles className="w-4 h-4" /> Analyze Parking Demand</>
                  )}
                </button>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    {error}
                  </div>
                )}
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              {result ? (
                <>
                  <div className="bg-white rounded-2xl border border-border p-6">
                    <h3 className="font-semibold text-foreground mb-4">Demand Forecast</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 rounded-xl bg-surface">
                        <div className="text-2xl font-bold text-primary">{result.estimatedDemand}</div>
                        <div className="text-xs text-text-muted mt-1">Base Demand</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-surface">
                        <div className="text-2xl font-bold text-accent">{result.peakDemand}</div>
                        <div className="text-xs text-text-muted mt-1">Peak Demand</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-surface">
                        <div className="text-2xl font-bold text-secondary">{result.recommendedSupply}</div>
                        <div className="text-xs text-text-muted mt-1">Recommended</div>
                      </div>
                    </div>
                  </div>

                  {result.reductionFactors.length > 0 && (
                    <div className="bg-white rounded-2xl border border-border p-6">
                      <h3 className="font-semibold text-foreground mb-4">Reduction Factors</h3>
                      <div className="space-y-3">
                        {result.reductionFactors.map((f, i) => (
                          <div key={i} className="flex items-center justify-between p-3 bg-surface rounded-lg">
                            <span className="text-sm text-foreground">{f.factor}</span>
                            <span className="text-sm font-semibold text-secondary">-{f.reduction}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="bg-white rounded-2xl border border-border p-6">
                    <h3 className="font-semibold text-foreground mb-3">Analysis</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{result.analysis}</p>
                  </div>
                </>
              ) : (
                <div className="bg-surface rounded-2xl border border-border p-12 text-center">
                  <ParkingCircle className="w-12 h-12 text-text-muted mx-auto mb-4" />
                  <p className="text-text-muted">
                    Enter your development details and click &quot;Analyze&quot; to get AI-powered parking demand
                    forecasting.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
