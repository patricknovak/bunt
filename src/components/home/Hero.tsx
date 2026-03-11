"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const vehicles: Array<{
      x: number;
      y: number;
      speed: number;
      lane: number;
      direction: number;
      color: string;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const colors = ["#0f4c75", "#3282b8", "#1b998b", "#2ec4b6", "#e8630a"];

    const initVehicles = () => {
      vehicles.length = 0;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      for (let i = 0; i < 30; i++) {
        vehicles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          speed: 0.5 + Math.random() * 1.5,
          lane: Math.floor(Math.random() * 4),
          direction: Math.random() > 0.5 ? 1 : -1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      ctx.strokeStyle = "rgba(15, 76, 117, 0.08)";
      ctx.lineWidth = 2;
      for (let y = 0; y < h; y += 80) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      for (let x = 0; x < w; x += 80) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      vehicles.forEach((v) => {
        if (v.lane % 2 === 0) {
          v.x += v.speed * v.direction;
          if (v.x > w + 20) v.x = -20;
          if (v.x < -20) v.x = w + 20;
        } else {
          v.y += v.speed * v.direction;
          if (v.y > h + 20) v.y = -20;
          if (v.y < -20) v.y = h + 20;
        }

        ctx.beginPath();
        ctx.arc(v.x, v.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = v.color + "40";
        ctx.fill();

        ctx.beginPath();
        if (v.lane % 2 === 0) {
          ctx.moveTo(v.x - v.direction * 15, v.y);
          ctx.lineTo(v.x, v.y);
        } else {
          ctx.moveTo(v.x, v.y - v.direction * 15);
          ctx.lineTo(v.x, v.y);
        }
        ctx.strokeStyle = v.color + "30";
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    initVehicles();
    draw();

    window.addEventListener("resize", () => {
      resize();
      initVehicles();
    });

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-surface to-blue-50">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src={`${basePath}/images/bunt-logo.svg`}
              alt="Bunt & Associates"
              width={200}
              height={60}
              className="h-14 w-auto invert"
              priority
            />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Now with AI-Powered Transportation Tools
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Healthy & Connected{" "}
            <span className="text-primary">Communities</span>
          </h1>

          <p className="text-xl text-text-muted leading-relaxed mb-4 max-w-2xl">
            We envision a future where all communities are healthy and
            connected in equitable and sustainable ways.
          </p>

          <p className="text-lg text-text-muted leading-relaxed mb-8 max-w-2xl">
            Western Canada&apos;s leading transportation planning and engineering
            firm. Over 30 years of expertise prioritizing people, integrity,
            and teamwork.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
            >
              Our Services
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/ai-tools"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-colors"
            >
              Try Our AI Tools
              <Sparkles className="w-4 h-4" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border">
            {[
              { value: "30+", label: "Years Experience" },
              { value: "50+", label: "Team Members" },
              { value: "5", label: "Offices" },
              { value: "1000+", label: "Projects Since 2017" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service images floating */}
      <div className="hidden xl:block absolute right-12 top-1/2 -translate-y-1/2 space-y-4">
        <div className="w-48 h-32 rounded-xl overflow-hidden shadow-lg border border-border opacity-80 hover:opacity-100 transition-opacity">
          <Image
            src={`${basePath}/images/services/transportation-engineering.png`}
            alt="Transportation Engineering"
            width={192}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-48 h-32 rounded-xl overflow-hidden shadow-lg border border-border opacity-80 hover:opacity-100 transition-opacity ml-8">
          <Image
            src={`${basePath}/images/services/sustainable-planning.png`}
            alt="Sustainable Planning"
            width={192}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-48 h-32 rounded-xl overflow-hidden shadow-lg border border-border opacity-80 hover:opacity-100 transition-opacity">
          <Image
            src={`${basePath}/images/services/safety.png`}
            alt="Safety"
            width={192}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
