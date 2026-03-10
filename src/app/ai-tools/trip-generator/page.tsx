"use client";

import { useState } from "react";
import { Calculator, Sparkles, Loader2, AlertCircle } from "lucide-react";
import AIConfigPanel from "@/components/shared/AIConfigPanel";
import { callAI } from "@/lib/ai/claude";
import { TRIP_GEN_SYSTEM_PROMPT } from "@/lib/ai/prompts";
import type { TripGenInputs, TripGenResult } from "@/lib/ai/types";

const landUseCodes = [
  { code: "210", name: "Single-Family Residential", unit: "dwelling units" },
  { code: "220", name: "Multi-Family Residential (Low-Rise)", unit: "dwelling units" },
  { code: "221", name: "Multi-Family Residential (Mid-Rise)", unit: "dwelling units" },
  { code: "222", name: "Multi-Family Residential (High-Rise)", unit: "dwelling units" },
  { code: "710", name: "General Office Building", unit: "1000 sq ft GFA" },
  { code: "720", name: "Medical-Dental Office", unit: "1000 sq ft GFA" },
  { code: "820", name: "Shopping Center", unit: "1000 sq ft GLA" },
  { code: "932", name: "High-Turnover Restaurant", unit: "1000 sq ft GFA" },
  { code: "110", name: "Light Industrial", unit: "1000 sq ft GFA" },
  { code: "140", name: "Manufacturing", unit: "1000 sq ft GFA" },
  { code: "310", name: "Hotel", unit: "rooms" },
  { code: "520", name: "Elementary School", unit: "students" },
  { code: "550", name: "University/College", unit: "students" },
  { code: "610", name: "Hospital", unit: "1000 sq ft GFA" },
];

const tdmOptions = [
  "Transit pass subsidy",
  "Bike parking/end-of-trip facilities",
  "Carpool matching program",
  "Flexible work schedules",
  "Compressed work week",
  "Remote work program",
  "Paid parking / parking cash-out",
  "Car-share on-site",
];

export default function TripGeneratorPage() {
  const [inputs, setInputs] = useState<TripGenInputs>({
    landUseCode: "220",
    landUseName: "Multi-Family Residential (Low-Rise)",
    size: 150,
    sizeUnit: "dwelling units",
    timePeriod: "pm-peak",
    transitAccess: true,
    tdmMeasures: [],
  });
  const [result, setResult] = useState<TripGenResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    setError(null);
    try {
      const prompt = `Calculate trip generation for the following development:
- ITE Land Use Code: ${inputs.landUseCode} (${inputs.landUseName})
- Size: ${inputs.size} ${inputs.sizeUnit}
- Time Period: ${inputs.timePeriod === "am-peak" ? "AM Peak Hour" : inputs.timePeriod === "pm-peak" ? "PM Peak Hour" : "Daily"}
- Transit Access: ${inputs.transitAccess ? "Yes - frequent transit within 400m" : "No / limited"}
- TDM Measures: ${inputs.tdmMeasures.length > 0 ? inputs.tdmMeasures.join(", ") : "None"}

Provide trip generation analysis with mode split recommendations.`;

      const response = await callAI(TRIP_GEN_SYSTEM_PROMPT, [{ role: "user", content: prompt }]);
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

      <section className="bg-gradient-to-r from-secondary to-secondary-light text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-8 h-8" />
            <h1 className="text-3xl sm:text-4xl font-bold">Trip Generation Calculator</h1>
          </div>
          <p className="text-lg text-white/80 max-w-2xl">
            ITE Trip Generation Manual rates with AI-powered context analysis and TDM adjustment recommendations.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">Development Parameters</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">ITE Land Use Code</label>
                  <select
                    value={inputs.landUseCode}
                    onChange={(e) => {
                      const lu = landUseCodes.find((l) => l.code === e.target.value);
                      if (lu) setInputs({ ...inputs, landUseCode: lu.code, landUseName: lu.name, sizeUnit: lu.unit });
                    }}
                    className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                  >
                    {landUseCodes.map((lu) => (
                      <option key={lu.code} value={lu.code}>{lu.code} - {lu.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Size ({inputs.sizeUnit})</label>
                  <input type="number" value={inputs.size} onChange={(e) => setInputs({ ...inputs, size: parseInt(e.target.value) || 0 })} className="w-full px-3 py-2 border border-border rounded-lg text-sm" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Time Period</label>
                  <select value={inputs.timePeriod} onChange={(e) => setInputs({ ...inputs, timePeriod: e.target.value as TripGenInputs["timePeriod"] })} className="w-full px-3 py-2 border border-border rounded-lg text-sm">
                    <option value="am-peak">AM Peak Hour</option>
                    <option value="pm-peak">PM Peak Hour</option>
                    <option value="daily">Daily</option>
                  </select>
                </div>

                <div className="flex items-center gap-3">
                  <input type="checkbox" id="transitAccess" checked={inputs.transitAccess} onChange={(e) => setInputs({ ...inputs, transitAccess: e.target.checked })} className="rounded border-border" />
                  <label htmlFor="transitAccess" className="text-sm text-foreground">Frequent transit access within 400m</label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">TDM Measures</label>
                  <div className="space-y-2">
                    {tdmOptions.map((tdm) => (
                      <label key={tdm} className="flex items-center gap-2 text-sm text-foreground">
                        <input
                          type="checkbox"
                          checked={inputs.tdmMeasures.includes(tdm)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setInputs({ ...inputs, tdmMeasures: [...inputs.tdmMeasures, tdm] });
                            } else {
                              setInputs({ ...inputs, tdmMeasures: inputs.tdmMeasures.filter((m) => m !== tdm) });
                            }
                          }}
                          className="rounded border-border"
                        />
                        {tdm}
                      </label>
                    ))}
                  </div>
                </div>

                <button onClick={handleAnalyze} disabled={isAnalyzing} className="w-full py-2.5 bg-secondary text-white rounded-lg font-medium hover:opacity-90 disabled:opacity-50 transition-all flex items-center justify-center gap-2">
                  {isAnalyzing ? <><Loader2 className="w-4 h-4 animate-spin" /> Calculating...</> : <><Sparkles className="w-4 h-4" /> Calculate Trip Generation</>}
                </button>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />{error}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6">
              {result ? (
                <>
                  <div className="bg-white rounded-2xl border border-border p-6">
                    <h3 className="font-semibold text-foreground mb-4">Trip Generation Results</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 rounded-xl bg-surface">
                        <div className="text-2xl font-bold text-primary">{result.totalTrips}</div>
                        <div className="text-xs text-text-muted mt-1">Total Trips</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-surface">
                        <div className="text-2xl font-bold text-secondary">{result.adjustedTrips}</div>
                        <div className="text-xs text-text-muted mt-1">Adjusted Trips</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-surface">
                        <div className="text-2xl font-bold text-primary-light">{result.enteringTrips}</div>
                        <div className="text-xs text-text-muted mt-1">Entering</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-surface">
                        <div className="text-2xl font-bold text-accent">{result.exitingTrips}</div>
                        <div className="text-xs text-text-muted mt-1">Exiting</div>
                      </div>
                    </div>
                    {/* Trip reduction visualization */}
                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-text-muted">Base: {result.totalTrips}</span>
                        <span className="text-secondary font-medium">Adjusted: {result.adjustedTrips}</span>
                      </div>
                      <div className="w-full bg-surface-dark rounded-full h-4">
                        <div className="h-4 rounded-full bg-gradient-to-r from-primary to-secondary transition-all" style={{ width: `${(result.adjustedTrips / result.totalTrips) * 100}%` }} />
                      </div>
                      <div className="text-xs text-text-muted mt-1 text-right">
                        {Math.round((1 - result.adjustedTrips / result.totalTrips) * 100)}% reduction
                      </div>
                    </div>
                  </div>

                  {result.reductionFactors.length > 0 && (
                    <div className="bg-white rounded-2xl border border-border p-6">
                      <h3 className="font-semibold text-foreground mb-4">Reduction Factors Applied</h3>
                      <div className="space-y-2">
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
                  <Calculator className="w-12 h-12 text-text-muted mx-auto mb-4" />
                  <p className="text-text-muted">Enter development parameters to calculate AI-powered trip generation with TDM adjustments.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
