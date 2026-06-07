"use client";

import React from "react";
import { Award, ShieldCheck, Zap, Layers } from "lucide-react";

export default function TrustSection() {
  const trusts = [
    { name: "IIT Patna Collaboration", icon: <Award className="h-5 w-5 text-accent" />, desc: "Research Partner" },
    { name: "CIPET Patna Support", icon: <Layers className="h-5 w-5 text-accent" />, desc: "Testing & Standards" },
    { name: "Startup Bihar Initiative", icon: <Zap className="h-5 w-5 text-accent" />, desc: "State Recognized" },
    { name: "BSPCB Registered", icon: <ShieldCheck className="h-5 w-5 text-accent" />, desc: "Recycling Authorization" },
  ];

  const partners = [
    "IIT Patna R&D",
    "CIPET Certified",
    "Startup Bihar",
    "BSPCB Registered",
    "ISO 9001:2015",
    "ISO 14001:2015",
    "Net Zero 2070 Goal",
    "Circular Economy Alliance",
    "Clean Bihar Mission"
  ];

  return (
    <section className="py-12 border-y border-foreground/5 bg-foreground/[0.01] relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {trusts.map((t, i) => (
            <div key={i} className="flex items-center gap-4 p-4.5 rounded-2xl glass-panel border border-foreground/5 hover:border-accent/10 transition-colors">
              <div className="p-3 rounded-xl bg-accent/5 dark:bg-accent/10 shrink-0">
                {t.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">{t.name}</h4>
                <p className="text-xs text-foreground/50 mt-0.5">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee ticker of logos/text */}
        <div className="relative overflow-hidden w-full py-4 [mask-image:linear-gradient(to_right,transparent_0%,#000_15%,#000_85%,transparent_100%)]">
          <div className="animate-marquee flex gap-16 items-center">
            {/* First Set */}
            {partners.map((p, idx) => (
              <span
                key={idx}
                className="text-xs font-bold text-foreground/35 dark:text-foreground/25 hover:text-accent dark:hover:text-accent transition-colors duration-300 uppercase tracking-widest cursor-default shrink-0"
              >
                &bull;&nbsp; {p}
              </span>
            ))}
            {/* Duplicate Set for Loop */}
            {partners.map((p, idx) => (
              <span
                key={`dup-${idx}`}
                className="text-xs font-bold text-foreground/35 dark:text-foreground/25 hover:text-accent dark:hover:text-accent transition-colors duration-300 uppercase tracking-widest cursor-default shrink-0"
              >
                &bull;&nbsp; {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
