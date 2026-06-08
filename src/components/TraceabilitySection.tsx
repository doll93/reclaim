"use client";

import React from "react";
import { Lock, ShieldCheck } from "lucide-react";

export default function TraceabilitySection() {
  return (
    <section id="traceability" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-foreground/10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/5 dark:bg-accent/10 text-accent font-semibold text-xs tracking-wider uppercase">
            <Lock className="h-3.5 w-3.5" />
            Digital Traceability
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Coming <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Soon</span>
          </h2>
          <p className="text-base text-foreground/60 max-w-xl font-light">
            Bringing absolute transparency to the circular economy. We are engineering a ledger-based traceability system to track material loops from collection hubs to finished raw materials.
          </p>
        </div>

        {/* Coming soon glass card */}
        <div className="max-w-md mx-auto p-8 rounded-3xl glass-panel border border-foreground/10 shadow-2xl relative overflow-hidden flex flex-col items-center gap-6 py-12 glow-card">
          <div className="w-16 h-16 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent animate-pulse">
            <Lock className="h-6 w-6" />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-lg text-foreground">Interactive Ledger Under Development</h4>
            <p className="text-xs text-foreground/50 leading-relaxed max-w-xs font-light">
              Manufacturing clients will soon be able to scan QR codes on compound delivery bags to view verified molecular properties and origin logs.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
