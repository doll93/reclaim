"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Database, BarChart3, Binary, Lock } from "lucide-react";

export default function TraceabilitySection() {
  const features = [
    {
      title: "Chain of Custody Ledger",
      desc: "Registering raw plastic origins at the point of localized collection, establishing audit lines from source to compounded pellet.",
      icon: <Database className="h-4.5 w-4.5 text-accent" />
    },
    {
      title: "Compounding Metrics Scan",
      desc: "Scan QR codes on granule bags to view verified melt flow index (MFI), density distribution, and tensile strengths.",
      icon: <Binary className="h-4.5 w-4.5 text-secondary" />
    },
    {
      title: "Verified Carbon Credit Tracking",
      desc: "Accrue certified scope 3 emission offset credits in real-time, backed by lab-audited sustainability scoring.",
      icon: <BarChart3 className="h-4.5 w-4.5 text-highlight" />
    }
  ];

  return (
    <section id="traceability" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-foreground/5" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/5 dark:bg-accent/10 text-accent font-semibold text-xs tracking-wider uppercase">
            <Lock className="h-3.5 w-3.5" />
            Product Integrity
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Digital Traceability <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Coming Soon</span>
          </h2>
          <p className="text-base text-foreground/60 max-w-2xl font-light">
            Bringing absolute transparency to the circular economy. Tracking material loops from collection hubs to finished raw materials.
          </p>
          <div className="mt-2.5">
            <span className="text-[10px] font-mono font-bold tracking-widest text-accent bg-accent/10 border border-accent/25 px-3 py-1 rounded-full uppercase">
              Target Launch: Q3 2026
            </span>
          </div>
        </div>

        {/* Dynamic Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Interactive network flow visualization */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <div className="w-full max-w-[500px] aspect-[1.3/1] rounded-3xl glass-panel border border-foreground/5 p-6 flex flex-col justify-between relative overflow-hidden glow-card">
              
              <div className="flex items-center justify-between border-b border-foreground/5 pb-3">
                <span className="text-xs font-mono font-bold text-foreground/60">BATCH BLOCKCHAIN LEDGER</span>
                <span className="text-[10px] font-mono text-foreground/30">MODULE: ACTIVE</span>
              </div>

              {/* Animated node diagram */}
              <div className="flex-1 flex items-center justify-between py-8 relative px-6">
                
                {/* Horizontal flow line */}
                <div className="absolute left-16 right-16 h-[1px] bg-dashed bg-foreground/10 z-0" />
                
                {/* Flow particles */}
                <span className="absolute left-[30%] w-2 h-2 rounded-full bg-accent animate-ping" />
                <span className="absolute left-[65%] w-2 h-2 rounded-full bg-secondary animate-ping" style={{ animationDelay: "1.5s" }} />

                {/* Nodes */}
                {[
                  { label: "Sourcing", desc: "Patna Hub", color: "border-accent text-accent bg-accent/5" },
                  { label: "Compounding", desc: "Batch #780", color: "border-secondary text-secondary bg-secondary/5" },
                  { label: "Delivery", desc: "Client Portal", color: "border-highlight text-highlight bg-highlight/5" }
                ].map((node, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 relative z-10">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center font-bold text-sm ${node.color}`}>
                      0{i+1}
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-bold text-foreground">{node.label}</p>
                      <p className="text-[9px] text-foreground/40 font-mono mt-0.5">{node.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-foreground/5 pt-3 flex items-center justify-between text-[10px] font-mono text-foreground/50">
                <span>TXID: 0x7E3...A49</span>
                <span className="flex items-center gap-1 text-accent">
                  <ShieldCheck className="h-3.5 w-3.5" /> SECURE SHIELD
                </span>
              </div>
            </div>
          </div>

          {/* Right: Text descriptions */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-foreground leading-tight">
              Verifiable sourcing reports for every raw material delivery.
            </h3>
            
            <p className="text-sm text-foreground/70 leading-relaxed font-light">
              ReclaimNature is engineering a ledger-based traceability system. When complete, manufacturing clients can verify plastic density grades, chemical wash standards, and municipal supply origins, giving you perfect compliance data for environmental audits.
            </p>

            <div className="flex flex-col gap-6">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-xl bg-foreground/[0.02] border border-foreground/5 shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">{f.title}</h4>
                    <p className="text-xs text-foreground/60 leading-relaxed font-light mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
