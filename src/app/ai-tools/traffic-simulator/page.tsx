"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Activity,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Loader2,
  AlertCircle,
} from "lucide-react";
import AIConfigPanel from "@/components/shared/AIConfigPanel";
import { callAI } from "@/lib/ai/claude";
import { TRAFFIC_SYSTEM_PROMPT } from "@/lib/ai/prompts";
import {
  createDefaultConfig,
  createVehicle,
  updateSignal,
  shouldStop,
  drawIntersection,
} from "@/lib/simulation/traffic-engine";
import type { Vehicle, IntersectionConfig } from "@/lib/simulation/traffic-engine";
import type { TrafficAnalysisResult } from "@/lib/ai/types";

export default function TrafficSimulatorPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [config, setConfig] = useState<IntersectionConfig>(createDefaultConfig());
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [scenario, setScenario] = useState(
    "4-leg signalized intersection with 600 vph on the main street (eastbound/westbound) and 250 vph on the side street (northbound/southbound). Speed limit is 50 km/h with moderate pedestrian activity."
  );
  const [analysis, setAnalysis] = useState<TrafficAnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const configRef = useRef(config);
  const vehiclesRef = useRef(vehicles);

  configRef.current = config;
  vehiclesRef.current = vehicles;

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Update signal
    const newConfig = updateSignal(configRef.current);
    configRef.current = newConfig;
    setConfig(newConfig);

    // Spawn vehicles
    const spawnRate = 0.02;
    if (Math.random() < spawnRate * (newConfig.mainStreetVolume / 500)) {
      vehiclesRef.current.push(
        createVehicle(newConfig, Math.random() > 0.5 ? "E" : "W")
      );
    }
    if (Math.random() < spawnRate * (newConfig.sideStreetVolume / 500)) {
      vehiclesRef.current.push(
        createVehicle(newConfig, Math.random() > 0.5 ? "N" : "S")
      );
    }

    // Update vehicles
    const updatedVehicles = vehiclesRef.current
      .map((v) => {
        const stop = shouldStop(v, newConfig);
        if (stop) {
          return { ...v, waiting: true };
        }
        return {
          ...v,
          x: v.x + v.vx,
          y: v.y + v.vy,
          waiting: false,
        };
      })
      .filter(
        (v) =>
          v.x > -50 &&
          v.x < newConfig.width + 50 &&
          v.y > -50 &&
          v.y < newConfig.height + 50
      );

    vehiclesRef.current = updatedVehicles;
    setVehicles(updatedVehicles);

    // Draw
    drawIntersection(ctx, newConfig, updatedVehicles);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(animate, 1000 / 30);
    return () => clearInterval(interval);
  }, [isPlaying, animate]);

  // Initial draw
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    drawIntersection(ctx, config, []);
  }, []);

  const handleReset = () => {
    setIsPlaying(false);
    setVehicles([]);
    vehiclesRef.current = [];
    const newConfig = createDefaultConfig();
    setConfig(newConfig);
    configRef.current = newConfig;
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) drawIntersection(ctx, newConfig, []);
    }
  };

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    setError(null);
    try {
      const result = await callAI(TRAFFIC_SYSTEM_PROMPT, [
        { role: "user", content: scenario },
      ]);

      const jsonMatch = result.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]) as TrafficAnalysisResult;
        setAnalysis(parsed);

        // Update sim params from analysis
        setConfig((prev) => ({
          ...prev,
          mainStreetVolume: 600,
          sideStreetVolume: 250,
        }));
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to analyze scenario"
      );
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getLOSColor = (los: string) => {
    const colors: Record<string, string> = {
      A: "#00b894",
      B: "#00cec9",
      C: "#ffeaa7",
      D: "#fdcb6e",
      E: "#e17055",
      F: "#d63031",
    };
    return colors[los] || "#999";
  };

  return (
    <div className="py-20">
      <AIConfigPanel />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Activity className="w-8 h-8" />
            <h1 className="text-3xl sm:text-4xl font-bold">
              Traffic Simulator
            </h1>
          </div>
          <p className="text-lg text-white/80 max-w-2xl">
            Describe an intersection scenario in natural language and get
            AI-powered Level of Service analysis with real-time traffic
            visualization.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Simulation Canvas */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-border p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold text-foreground">
                    Intersection Visualization
                  </h2>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-2 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5" />
                      ) : (
                        <Play className="w-5 h-5" />
                      )}
                    </button>
                    <button
                      onClick={handleReset}
                      className="p-2 rounded-lg bg-surface text-foreground hover:bg-surface-dark transition-colors"
                    >
                      <RotateCcw className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <canvas
                  ref={canvasRef}
                  width={800}
                  height={600}
                  className="w-full rounded-xl border border-border bg-gray-50"
                />
                <div className="flex items-center justify-between mt-3 text-sm text-text-muted">
                  <span>
                    Vehicles: {vehicles.length} | Signal:{" "}
                    {config.signalState.replace("-", " ")}
                  </span>
                  <span>
                    Main: {config.mainStreetVolume} vph | Side:{" "}
                    {config.sideStreetVolume} vph
                  </span>
                </div>
              </div>

              {/* Controls */}
              <div className="mt-6 bg-white rounded-2xl border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  Simulation Controls
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-text-muted mb-1">
                      Main Street Volume (vph)
                    </label>
                    <input
                      type="range"
                      min={100}
                      max={2000}
                      value={config.mainStreetVolume}
                      onChange={(e) =>
                        setConfig({
                          ...config,
                          mainStreetVolume: parseInt(e.target.value),
                        })
                      }
                      className="w-full"
                    />
                    <span className="text-sm font-medium">
                      {config.mainStreetVolume}
                    </span>
                  </div>
                  <div>
                    <label className="block text-sm text-text-muted mb-1">
                      Side Street Volume (vph)
                    </label>
                    <input
                      type="range"
                      min={50}
                      max={1000}
                      value={config.sideStreetVolume}
                      onChange={(e) =>
                        setConfig({
                          ...config,
                          sideStreetVolume: parseInt(e.target.value),
                        })
                      }
                      className="w-full"
                    />
                    <span className="text-sm font-medium">
                      {config.sideStreetVolume}
                    </span>
                  </div>
                  <div>
                    <label className="block text-sm text-text-muted mb-1">
                      Green Time - Main (sec)
                    </label>
                    <input
                      type="range"
                      min={10}
                      max={60}
                      value={config.greenTimeMain}
                      onChange={(e) =>
                        setConfig({
                          ...config,
                          greenTimeMain: parseInt(e.target.value),
                        })
                      }
                      className="w-full"
                    />
                    <span className="text-sm font-medium">
                      {config.greenTimeMain}s
                    </span>
                  </div>
                  <div>
                    <label className="block text-sm text-text-muted mb-1">
                      Green Time - Side (sec)
                    </label>
                    <input
                      type="range"
                      min={10}
                      max={60}
                      value={config.greenTimeSide}
                      onChange={(e) =>
                        setConfig({
                          ...config,
                          greenTimeSide: parseInt(e.target.value),
                        })
                      }
                      className="w-full"
                    />
                    <span className="text-sm font-medium">
                      {config.greenTimeSide}s
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Analysis Panel */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  AI Analysis
                </h3>
                <textarea
                  value={scenario}
                  onChange={(e) => setScenario(e.target.value)}
                  rows={5}
                  className="w-full px-3 py-2 border border-border rounded-lg text-sm resize-none"
                  placeholder="Describe your intersection scenario..."
                />
                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="w-full mt-3 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      Analyze with AI
                    </>
                  )}
                </button>

                {error && (
                  <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    {error}
                  </div>
                )}
              </div>

              {analysis && (
                <>
                  <div className="bg-white rounded-2xl border border-border p-6">
                    <h3 className="font-semibold text-foreground mb-4">
                      Results
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 rounded-xl bg-surface">
                        <div
                          className="text-3xl font-bold"
                          style={{
                            color: getLOSColor(analysis.levelOfService),
                          }}
                        >
                          {analysis.levelOfService}
                        </div>
                        <div className="text-xs text-text-muted mt-1">
                          Level of Service
                        </div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-surface">
                        <div className="text-3xl font-bold text-primary">
                          {analysis.averageDelay}
                        </div>
                        <div className="text-xs text-text-muted mt-1">
                          Avg Delay (sec)
                        </div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-surface">
                        <div className="text-3xl font-bold text-secondary">
                          {analysis.v_c_ratio}
                        </div>
                        <div className="text-xs text-text-muted mt-1">
                          V/C Ratio
                        </div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-surface">
                        <div className="text-3xl font-bold text-accent">
                          {analysis.queueLength}m
                        </div>
                        <div className="text-xs text-text-muted mt-1">
                          Queue Length
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-border p-6">
                    <h3 className="font-semibold text-foreground mb-3">
                      Recommendations
                    </h3>
                    <ul className="space-y-2">
                      {analysis.recommendations.map((rec, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-text-muted"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-2xl border border-border p-6">
                    <h3 className="font-semibold text-foreground mb-3">
                      Detailed Analysis
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {analysis.analysis}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
