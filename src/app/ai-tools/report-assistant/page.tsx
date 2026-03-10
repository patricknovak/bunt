"use client";

import { useState } from "react";
import { FileText, Sparkles, Loader2, AlertCircle, Copy, Check } from "lucide-react";
import AIConfigPanel from "@/components/shared/AIConfigPanel";
import { callAI } from "@/lib/ai/claude";
import { REPORT_SYSTEM_PROMPT } from "@/lib/ai/prompts";

const reportTemplates = [
  { id: "tia-executive", name: "TIA - Executive Summary", description: "Executive summary for a Traffic Impact Assessment" },
  { id: "tia-existing", name: "TIA - Existing Conditions", description: "Existing transportation conditions analysis" },
  { id: "tia-analysis", name: "TIA - Traffic Analysis", description: "Traffic operations analysis section" },
  { id: "tia-recommendations", name: "TIA - Recommendations", description: "Recommendations and conclusions" },
  { id: "parking-study", name: "Parking Study Summary", description: "Parking demand analysis and recommendations" },
  { id: "safety-audit", name: "Road Safety Audit Report", description: "Road safety audit findings and countermeasures" },
  { id: "atp-summary", name: "Active Transportation Plan Summary", description: "Active transportation plan overview" },
];

export default function ReportAssistantPage() {
  const [template, setTemplate] = useState("tia-executive");
  const [context, setContext] = useState("Mixed-use development with 200 residential units and 5,000 sq ft of ground-floor retail in Vancouver, BC. The site is located at a signalized intersection on a major arterial with frequent transit service.");
  const [keyFindings, setKeyFindings] = useState("Traffic analysis shows LOS C at adjacent intersections during PM peak. Site-generated traffic is approximately 85 PM peak hour trips. Transit mode share is estimated at 35%. Parking demand is 180 spaces with 20% reduction for transit proximity.");
  const [generatedContent, setGeneratedContent] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setError(null);
    try {
      const templateInfo = reportTemplates.find((t) => t.id === template);
      const prompt = `Generate a professional ${templateInfo?.name} section for the following project:

Project Context: ${context}

Key Findings: ${keyFindings}

Please generate a complete, professional report section that is ready for review. Use proper headings, bullet points where appropriate, and include specific data references.`;

      const response = await callAI(REPORT_SYSTEM_PROMPT, [{ role: "user", content: prompt }]);
      setGeneratedContent(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Generation failed");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-20">
      <AIConfigPanel />

      <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8" />
            <h1 className="text-3xl sm:text-4xl font-bold">Report Writing Assistant</h1>
          </div>
          <p className="text-lg text-white/80 max-w-2xl">
            AI-powered report generation for transportation studies. Generate professional report sections in Bunt&apos;s style.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">Report Parameters</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Report Section Template</label>
                  <select value={template} onChange={(e) => setTemplate(e.target.value)} className="w-full px-3 py-2 border border-border rounded-lg text-sm">
                    {reportTemplates.map((t) => (
                      <option key={t.id} value={t.id}>{t.name}</option>
                    ))}
                  </select>
                  <p className="text-xs text-text-muted mt-1">
                    {reportTemplates.find((t) => t.id === template)?.description}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Project Context</label>
                  <textarea value={context} onChange={(e) => setContext(e.target.value)} rows={5} className="w-full px-3 py-2 border border-border rounded-lg text-sm resize-none" placeholder="Describe the project, site, and surrounding context..." />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Key Findings / Data</label>
                  <textarea value={keyFindings} onChange={(e) => setKeyFindings(e.target.value)} rows={5} className="w-full px-3 py-2 border border-border rounded-lg text-sm resize-none" placeholder="Enter key findings, analysis results, and data points to include..." />
                </div>

                <button onClick={handleGenerate} disabled={isGenerating} className="w-full py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 disabled:opacity-50 transition-colors flex items-center justify-center gap-2">
                  {isGenerating ? <><Loader2 className="w-4 h-4 animate-spin" /> Generating...</> : <><Sparkles className="w-4 h-4" /> Generate Report Section</>}
                </button>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />{error}
                  </div>
                )}
              </div>
            </div>

            <div>
              {generatedContent ? (
                <div className="bg-white rounded-2xl border border-border p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-foreground">Generated Report</h3>
                    <button onClick={handleCopy} className="flex items-center gap-1 px-3 py-1.5 text-sm bg-surface rounded-lg hover:bg-surface-dark transition-colors">
                      {copied ? <><Check className="w-4 h-4 text-secondary" /> Copied</> : <><Copy className="w-4 h-4" /> Copy</>}
                    </button>
                  </div>
                  <div className="prose prose-sm max-w-none">
                    <div className="whitespace-pre-wrap text-sm text-foreground leading-relaxed font-mono bg-surface p-4 rounded-lg max-h-[600px] overflow-y-auto">
                      {generatedContent}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-surface rounded-2xl border border-border p-12 text-center">
                  <FileText className="w-12 h-12 text-text-muted mx-auto mb-4" />
                  <p className="text-text-muted">Select a report template, provide project context and key findings, then generate a professional report section.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
