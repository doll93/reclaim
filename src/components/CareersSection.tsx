"use client";

import React from "react";
import { Lock, ShieldCheck, Briefcase } from "lucide-react";

export default function CareersSection() {
  return (
    <section id="careers" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-foreground/5" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/5 dark:bg-accent/10 text-accent font-semibold text-xs tracking-wider uppercase">
            <Lock className="h-3.5 w-3.5" />
            Careers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Coming <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Soon</span>
          </h2>
          <p className="text-base text-foreground/60 max-w-xl font-light">
            Build the future of sustainable manufacturing. Join a group of engineers, researchers, and circular economy specialists working to build a cleaner Bihar.
          </p>
        </div>

        {/* Coming soon glass card */}
        <div className="max-w-md mx-auto p-8 rounded-3xl glass-panel border border-foreground/5 shadow-2xl relative overflow-hidden flex flex-col items-center gap-6 py-12 glow-card">
          <div className="w-16 h-16 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent animate-pulse">
            <Briefcase className="h-6 w-6" />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-lg text-foreground">Opportunities Under Development</h4>
            <p className="text-xs text-foreground/50 leading-relaxed max-w-xs font-light">
              We are defining structured internship programs for engineering students, academic research sponsorships in polymer compounding, and full-time plant operation roles.
            </p>
          </div>
          <div className="border-t border-foreground/5 pt-4 w-full flex items-center justify-center gap-1.5 text-xs text-accent font-mono">
            <ShieldCheck className="h-4.5 w-4.5" /> RECRUITMENT PORTAL LAUNCHING SOON
          </div>
        </div>

      </div>
    </section>
  );
}
