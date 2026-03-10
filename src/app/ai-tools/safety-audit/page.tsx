"use client";

import { useState } from "react";
import { Shield, Sparkles, Loader2, AlertCircle } from "lucide-react";
import AIConfigPanel from "@/components/shared/AIConfigPanel";
import { callAI } from "@/lib/ai/claude";
import { SAFETY_SYSTEM_PROMPT } from "@/lib/ai/prompts";
import type { SafetyInputs, SafetyResult } from "@/lib/ai/types";

export default function SafetyAuditPage() {
  const [inputs, setInputs] = useState<SafetyInputs>({
    roadType: "urban-arterial",
    speedLimit: 50,
    pedestrianActivity: "moderate",
    cyclingInfrastructure: "none",
    lighting: "good",
    intersectionType: "signalized-4-leg",
    crashHistory: "",
    description: "Urban arterial intersection with 4 legs, moderate pedestrian crossings, no cycling infrastructure, and a history of rear-end and pedestrian conflicts.",
  });
  const [result, setResult] = useState<SafetyResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    setError(null);
    try {
      const prompt = `Perform a preliminary road safety assessment for the following location:
- Road Type: ${inputs.roadType}
- Speed Limit: ${inputs.speedLimit} km/h
- Pedestrian Activity: ${inputs.pedestrianActivity}
- Cycling Infrastructure: ${inputs.cyclingInfrastructure}
- Lighting: ${inputs.lighting}
- Intersection Type: ${inputs.intersectionType}
${inputs.crashHistory ? `- Crash History: ${inputs.crashHistory}` : ""}
- Description: ${inputs.description}`;

      const response = await callAI(SAFETY_SYSTEM_PROMPT, [{ role: "user", content: prompt }]);
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

  const getRiskColor = (level: string) => {
    const colors: Record<string, string> = { low: "#00b894", moderate: "#fdcb6e", high: "#e17055", critical: "#d63031" };
    return colors[level] || "#999";
  };

  return (
    <div className="py-20">
      <AIConfigPanel />

      <section className="bg-gradient-to-r from-accent to-accent-light text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8" />
            <h1 className="text-3xl sm:text-4xl font-bold">Road Safety Assessment</h1>
          </div>
          <p className="text-lg text-white/80 max-w-2xl">
            AI-powered preliminary safety screening using FHWA/TAC methodologies with evidence-based countermeasure recommendations.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">Location Details</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Road Type</label>
                    <select value={inputs.roadType} onChange={(e) => setInputs({ ...inputs, roadType: e.target.value })} className="w-full px-3 py-2 border border-border rounded-lg text-sm">
                      <option value="urban-arterial">Urban Arterial</option>
                      <option value="urban-collector">Urban Collector</option>
                      <option value="urban-local">Urban Local</option>
                      <option value="rural-highway">Rural Highway</option>
                      <option value="rural-road">Rural Road</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Speed Limit (km/h)</label>
                    <input type="number" value={inputs.speedLimit} onChange={(e) => setInputs({ ...inputs, speedLimit: parseInt(e.target.value) || 0 })} className="w-full px-3 py-2 border border-border rounded-lg text-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Pedestrian Activity</label>
                    <select value={inputs.pedestrianActivity} onChange={(e) => setInputs({ ...inputs, pedestrianActivity: e.target.value as SafetyInputs["pedestrianActivity"] })} className="w-full px-3 py-2 border border-border rounded-lg text-sm">
                      <option value="low">Low</option>
                      <option value="moderate">Moderate</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Lighting</label>
                    <select value={inputs.lighting} onChange={(e) => setInputs({ ...inputs, lighting: e.target.value as SafetyInputs["lighting"] })} className="w-full px-3 py-2 border border-border rounded-lg text-sm">
                      <option value="good">Good</option>
                      <option value="moderate">Moderate</option>
                      <option value="poor">Poor</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Cycling Infrastructure</label>
                  <select value={inputs.cyclingInfrastructure} onChange={(e) => setInputs({ ...inputs, cyclingInfrastructure: e.target.value })} className="w-full px-3 py-2 border border-border rounded-lg text-sm">
                    <option value="none">None</option>
                    <option value="shared-lane">Shared Lane Markings</option>
                    <option value="bike-lane">Painted Bike Lane</option>
                    <option value="protected">Protected Bike Lane</option>
                    <option value="multi-use-path">Multi-Use Path</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Description</label>
                  <textarea value={inputs.description} onChange={(e) => setInputs({ ...inputs, description: e.target.value })} rows={4} className="w-full px-3 py-2 border border-border rounded-lg text-sm resize-none" placeholder="Describe the location, known issues, and any safety concerns..." />
                </div>

                <button onClick={handleAnalyze} disabled={isAnalyzing} className="w-full py-2.5 bg-accent text-white rounded-lg font-medium hover:opacity-90 disabled:opacity-50 transition-all flex items-center justify-center gap-2">
                  {isAnalyzing ? <><Loader2 className="w-4 h-4 animate-spin" /> Analyzing...</> : <><Sparkles className="w-4 h-4" /> Run Safety Assessment</>}
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
                    <h3 className="font-semibold text-foreground mb-4">Risk Assessment</h3>
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-bold" style={{ backgroundColor: getRiskColor(result.riskLevel) }}>
                        {result.riskScore}
                      </div>
                      <div>
                        <div className="text-2xl font-bold capitalize" style={{ color: getRiskColor(result.riskLevel) }}>{result.riskLevel} Risk</div>
                        <div className="text-sm text-text-muted">Score: {result.riskScore}/100</div>
                      </div>
                    </div>
                    <div className="w-full bg-surface-dark rounded-full h-3">
                      <div className="h-3 rounded-full transition-all" style={{ width: `${result.riskScore}%`, backgroundColor: getRiskColor(result.riskLevel) }} />
                    </div>
                  </div>

                  {result.concerns.length > 0 && (
                    <div className="bg-white rounded-2xl border border-border p-6">
                      <h3 className="font-semibold text-foreground mb-4">Identified Concerns</h3>
                      <div className="space-y-2">
                        {result.concerns.map((c, i) => (
                          <div key={i} className="flex items-center justify-between p-3 bg-surface rounded-lg">
                            <span className="text-sm text-foreground">{c.concern}</span>
                            <span className="text-xs font-medium px-2 py-1 rounded-full" style={{ backgroundColor: getRiskColor(c.severity) + "20", color: getRiskColor(c.severity) }}>{c.severity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {result.countermeasures.length > 0 && (
                    <div className="bg-white rounded-2xl border border-border p-6">
                      <h3 className="font-semibold text-foreground mb-4">Recommended Countermeasures</h3>
                      <div className="space-y-3">
                        {result.countermeasures.map((cm, i) => (
                          <div key={i} className="p-4 bg-surface rounded-lg">
                            <div className="font-medium text-foreground text-sm">{cm.measure}</div>
                            <div className="flex gap-4 mt-2 text-xs text-text-muted">
                              <span>Effectiveness: {cm.effectiveness}</span>
                              <span>Cost: {cm.cost}</span>
                            </div>
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
                  <Shield className="w-12 h-12 text-text-muted mx-auto mb-4" />
                  <p className="text-text-muted">Enter location details and run the safety assessment to get AI-powered risk analysis and countermeasure recommendations.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
