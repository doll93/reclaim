"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, TreePine, Droplets, Trash2, ShieldCheck } from "lucide-react";

type PolymerType = "hdpe" | "ldpe" | "pp" | "pet";

interface Multipliers {
  co2: number;    // Tonnes of CO2 saved per Tonne of recycled plastic
  oil: number;    // Liters of oil saved per Tonne of recycled plastic
  landfill: number; // Cubic meters of landfill space saved per Tonne
}

export default function ImpactDashboard() {
  const [tonnes, setTonnes] = useState<number>(50);
  const [polymerType, setPolymerType] = useState<PolymerType>("hdpe");

  // Scientific estimates for offsets per polymer type
  const multipliers: Record<PolymerType, Multipliers> = {
    hdpe: { co2: 1.62, oil: 1540, landfill: 3.1 },
    ldpe: { co2: 1.55, oil: 1480, landfill: 3.4 },
    pp: { co2: 1.70, oil: 1620, landfill: 3.2 },
    pet: { co2: 1.85, oil: 1780, landfill: 2.8 }
  };

  const current = multipliers[polymerType];

  // Calculations
  const co2Saved = (tonnes * current.co2).toFixed(1);
  const oilSaved = Math.round(tonnes * current.oil).toLocaleString();
  const landfillSaved = (tonnes * current.landfill).toFixed(1);
  const treesEquivalent = Math.round(tonnes * current.co2 * 45).toLocaleString(); // 1 Tonne CO2 = ~45 trees matured for a year

  return (
    <section id="impact" className="py-24 bg-foreground/[0.02] border-y border-foreground/5 relative overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/5 dark:bg-accent/10 text-accent font-semibold text-xs tracking-wider uppercase">
            <Leaf className="h-3.5 w-3.5" />
            Our Environmental Impact Dashboard
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Calculate Your <span className="bg-gradient-to-r from-secondary via-accent to-highlight bg-clip-text text-transparent">Circular Impact</span>
          </h2>
          <p className="text-base text-foreground/60 max-w-2xl font-light mt-2">
            Select your plastic polymer requirements and adjust the volume slider to calculate your estimated environmental offsets in real-time.
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Left: Interactive Controls */}
          <div className="lg:col-span-5 flex flex-col gap-8 p-8 sm:p-10 rounded-3xl glass-panel border border-foreground/5 shadow-xl text-left bg-background/50">
            
            {/* Polymer Type selector */}
            <div className="flex flex-col gap-3">
              <label className="text-xs font-bold uppercase tracking-wider text-foreground/50">
                1. Select Polymer Material
              </label>
              <div className="grid grid-cols-2 gap-3">
                {(["hdpe", "ldpe", "pp", "pet"] as PolymerType[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => setPolymerType(type)}
                    className={`py-3.5 px-4 rounded-xl text-xs font-extrabold uppercase transition-all cursor-pointer border ${
                      polymerType === type
                        ? "bg-accent text-white border-accent shadow-md shadow-accent/25"
                        : "bg-background text-foreground/75 border-foreground/10 hover:border-accent/30"
                    }`}
                  >
                    {type} Granules
                  </button>
                ))}
              </div>
            </div>

            {/* Slider */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-wider text-foreground/50">
                  2. Annual Sourcing Volume
                </label>
                <span className="text-lg font-mono font-bold text-accent">
                  {tonnes} MT <span className="text-xs font-light text-foreground/50">/ Year</span>
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="500"
                step="5"
                value={tonnes}
                onChange={(e) => setTonnes(Number(e.target.value))}
                style={{
                  background: `linear-gradient(to right, #16A34A 0%, #16A34A ${((tonnes - 5) / 495) * 100}%, rgba(148, 163, 184, 0.2) ${((tonnes - 5) / 495) * 100}%, rgba(148, 163, 184, 0.2) 100%)`
                }}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-accent [&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-transparent"
              />
              <div className="flex justify-between text-[10px] font-mono font-bold text-foreground/40 px-1">
                <span>5 MT</span>
                <span>250 MT</span>
                <span>500 MT</span>
              </div>
            </div>

            <div className="border-t border-foreground/5 pt-5 flex items-start gap-2.5 text-xs text-foreground/55 font-light">
              <ShieldCheck className="h-4.5 w-4.5 text-accent shrink-0 mt-0.5" />
              <span>Calculations are modeled based on standard EPA WARM and ISO 14040 polymer lifecycle methodologies.</span>
            </div>

          </div>

          {/* Right: Calculated Metrics */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Metric 1: Carbon Offset */}
            <motion.div
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-foreground/5 text-left flex flex-col gap-4 glow-card"
              layout
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/15 border border-accent/25 flex items-center justify-center text-accent">
                <Leaf className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground/45 uppercase tracking-wider">CO₂ Emissions Diverted</p>
                <h3 className="text-3xl font-black text-foreground mt-1 tracking-tight">
                  {co2Saved} <span className="text-sm font-semibold text-foreground/60">Metric Tonnes</span>
                </h3>
              </div>
            </motion.div>

            {/* Metric 2: Trees Equivalent */}
            <motion.div
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-foreground/5 text-left flex flex-col gap-4 glow-card"
              layout
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <TreePine className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground/45 uppercase tracking-wider">Equivalent Trees Planted</p>
                <h3 className="text-3xl font-black text-foreground mt-1 tracking-tight">
                  {treesEquivalent} <span className="text-sm font-semibold text-foreground/60">Yearly Growth</span>
                </h3>
              </div>
            </motion.div>

            {/* Metric 3: Crude Oil Saved */}
            <motion.div
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-foreground/5 text-left flex flex-col gap-4 glow-card"
              layout
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary/15 border border-secondary/25 flex items-center justify-center text-secondary">
                <Droplets className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground/45 uppercase tracking-wider">Crude Oil Conserved</p>
                <h3 className="text-3xl font-black text-foreground mt-1 tracking-tight">
                  {oilSaved} <span className="text-sm font-semibold text-foreground/60">Liters</span>
                </h3>
              </div>
            </motion.div>

            {/* Metric 4: Landfill Space */}
            <motion.div
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-foreground/5 text-left flex flex-col gap-4 glow-card"
              layout
            >
              <div className="w-12 h-12 rounded-2xl bg-highlight/15 border border-highlight/25 flex items-center justify-center text-highlight">
                <Trash2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground/45 uppercase tracking-wider">Landfill Volume Saved</p>
                <h3 className="text-3xl font-black text-foreground mt-1 tracking-tight">
                  {landfillSaved} <span className="text-sm font-semibold text-foreground/60">Cubic Meters</span>
                </h3>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
