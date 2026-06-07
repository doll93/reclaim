"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Award, Calculator, TrendingUp, Sparkles } from "lucide-react";

interface CounterProps {
  value: number;
  duration?: number;
  suffix?: string;
}

function StatCounter({ value, duration = 1.5, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const totalMiliseconds = duration * 1000;
      const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
      
      const timer = setInterval(() => {
        start += Math.ceil(end / (totalMiliseconds / incrementTime));
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-extrabold tracking-tight">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function ImpactDashboard() {
  const [plasticInput, setPlasticInput] = useState<number>(30); // Default to 30 tons

  // Impact factor calculations:
  // 1 Ton Recycled Plastic = ~1.6 Tons CO2 saved
  // 1 Ton Recycled Plastic = ~5.7 MWh energy saved
  // 1 Ton Recycled Plastic = ~720 Paving tiles created
  // 1 Ton Recycled Plastic = ~25 Mature Trees equivalent (CO2 absorb rate over 10 years)
  const co2Saved = Math.round(plasticInput * 1.6 * 10) / 10;
  const energySaved = Math.round(plasticInput * 5.7 * 10) / 10;
  const paversCreated = Math.round(plasticInput * 720);
  const treesEquivalent = Math.round(plasticInput * 25);

  return (
    <section id="impact" className="py-24 bg-foreground/[0.02] border-y border-foreground/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/5 dark:bg-accent/10 text-accent font-semibold text-xs tracking-wider uppercase">
            <TrendingUp className="h-3.5 w-3.5" />
            Empirical Results
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Our Environmental <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Impact Dashboard</span>
          </h2>
          <p className="text-base text-foreground/60 max-w-2xl font-light">
            Real-time verification of plastics diverted, carbon offsets realized, and local circular economy progress.
          </p>
        </div>

        {/* Top: 4 Stat Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {[
            { label: "Plastic Diverted (Tons)", val: 12500, suffix: "+", color: "text-accent" },
            { label: "CO₂ Reduced (Tons)", val: 8400, suffix: "+", color: "text-secondary" },
            { label: "Infrastructure Created (Sq Ft)", val: 45000, suffix: "+", color: "text-highlight" },
            { label: "Local Jobs Empowered", val: 150, suffix: "+", color: "text-accent" }
          ].map((stat, i) => (
            <div key={i} className="glass-panel p-6 sm:p-8 rounded-3xl border border-foreground/5 flex flex-col justify-between text-left glow-card">
              <span className="text-xs font-semibold text-foreground/40 uppercase tracking-widest">{stat.label}</span>
              <div className={`text-3xl sm:text-4xl lg:text-5xl mt-4 ${stat.color}`}>
                <StatCounter value={stat.val} suffix={stat.suffix} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom: Interactive Impact Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-background rounded-3xl border border-foreground/5 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Left panel: input slider */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 dark:bg-accent/10 text-accent font-semibold text-xs tracking-wider uppercase self-start">
              <Calculator className="h-3.5 w-3.5" />
              Circular Offset Calculator
            </div>
            <h3 className="text-2xl font-extrabold text-foreground">
              Calculate Your Organization&apos;s Offset Potential
            </h3>
            <p className="text-sm text-foreground/60 leading-relaxed font-light">
              Slide to select your estimated annual plastic waste or compounding requirements (in Tons). See your environmental offset metrics in real-time.
            </p>

            <div className="mt-6">
              <div className="flex justify-between items-center text-sm font-bold text-foreground mb-3 font-mono">
                <span>ANNUAL PLASTIC:</span>
                <span className="text-accent text-lg">{plasticInput} TONS</span>
              </div>
              <input
                type="range"
                min="5"
                max="250"
                step="5"
                value={plasticInput}
                onChange={(e) => setPlasticInput(parseInt(e.target.value))}
                className="w-full h-2 rounded-lg bg-foreground/10 accent-accent cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-foreground/40 font-mono mt-2">
                <span>5 TONS</span>
                <span>125 TONS</span>
                <span>250 TONS</span>
              </div>
            </div>
          </div>

          {/* Right panel: outputs */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "CO₂ Offset",
                value: `${co2Saved} Tons`,
                desc: "Net carbon equivalent prevented from entering the atmosphere.",
                icon: <Leaf className="h-5 w-5 text-accent" />
              },
              {
                title: "Energy Saved",
                value: `${energySaved} MWh`,
                desc: "Equivalent thermal/coal energy saved in refining raw polymers.",
                icon: <Sparkles className="h-5 w-5 text-secondary" />
              },
              {
                title: "Eco-Pavers Created",
                value: `${paversCreated.toLocaleString()}`,
                desc: "Number of highly durable paving tiles manufactured.",
                icon: <Award className="h-5 w-5 text-highlight" />
              },
              {
                title: "Mature Tree Equivalent",
                value: `${treesEquivalent} Trees`,
                desc: "Carbon absorption equivalence of planting mature trees.",
                icon: <Leaf className="h-5 w-5 text-accent" />
              }
            ].map((card, idx) => (
              <div key={idx} className="p-5 rounded-2xl glass-panel border border-foreground/5 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-foreground/[0.03] border border-foreground/5">
                    {card.icon}
                  </div>
                  <h4 className="font-bold text-sm text-foreground">{card.title}</h4>
                </div>
                <div className="text-2xl font-black text-foreground tracking-tight">{card.value}</div>
                <p className="text-[11px] text-foreground/50 leading-relaxed font-light">{card.desc}</p>
              </div>
            ))}
          </div>
          
        </div>

      </div>
    </section>
  );
}
