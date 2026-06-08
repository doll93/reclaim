"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, GraduationCap, Building2, BookOpen, ShieldAlert } from "lucide-react";

export default function PartnersSection() {
  const knowledgePartners = [
    {
      name: "IIT",
      desc: "Proposed partnership to collaborate on advanced polymer compounding, depolymerization research, and characterization support.",
      icon: <GraduationCap className="h-5 w-5 text-accent" />
    },
    {
      name: "CIPT",
      desc: "Proposed scope for CIPET Patna to provide quality assurance testing, melt-flow index validation, and technical workforce training.",
      icon: <BookOpen className="h-5 w-5 text-secondary" />
    },
    {
      name: "CSE Delhi",
      desc: "Proposed framework collaboration on circular economy model design, municipal auditing frameworks, and plastic policy guidance.",
      icon: <Building2 className="h-5 w-5 text-accent" />
    }
  ];

  return (
    <section id="partners" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-foreground/5" />
      <div className="absolute bottom-1/4 left-1/10 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/5 dark:bg-accent/10 text-accent font-semibold text-xs tracking-wider uppercase">
            <Users className="h-3.5 w-3.5" />
            Our Network
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Our <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-base text-foreground/60 max-w-2xl font-light">
            Bringing together academia, research laboratories, and industry organizations to build a resilient circular ecosystem.
          </p>
        </div>

        {/* Grid: Knowledge & Research vs Industry Partnership */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left: Knowledge and Research */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <h3 className="text-xl font-extrabold text-foreground flex items-center gap-2 mb-2">
              <span className="w-1.5 h-6 bg-accent rounded-full" />
              Knowledge and Research
            </h3>
            
            <div className="flex flex-col gap-5">
              {knowledgePartners.map((partner, idx) => (
                <motion.div
                  key={idx}
                  className="glass-panel p-6 rounded-2xl border border-foreground/5 hover:border-accent/15 transition-all flex gap-4 items-start glow-card"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="p-3 rounded-xl bg-foreground/[0.02] border border-foreground/5 text-accent shrink-0">
                    {partner.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-foreground">{partner.name}</h4>
                    <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed font-light mt-1.5">
                      {partner.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Industry Partnership (Coming Soon) */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left h-full">
            <h3 className="text-xl font-extrabold text-foreground flex items-center gap-2 mb-2">
              <span className="w-1.5 h-6 bg-secondary rounded-full" />
              Industry Partnership
            </h3>
            
            <motion.div
              className="glass-panel p-8 rounded-3xl border border-foreground/5 flex flex-col items-center justify-center text-center gap-6 py-14 glow-card flex-1 min-h-[300px]"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/15 border border-secondary/25 flex items-center justify-center text-secondary animate-pulse">
                <Building22 className="h-6 w-6" />
              </div>
              
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-lg text-foreground">Alliances Under Development</h4>
                <p className="text-xs text-foreground/50 leading-relaxed max-w-xs font-light">
                  We are developing standard onboarding frameworks for FMCG brands, local processors, and commercial packaging partners.
                </p>
              </div>

              <div className="border-t border-foreground/5 pt-4 w-full flex items-center justify-center gap-1.5 text-xs text-secondary font-mono">
                <ShieldAlert className="h-4 w-4" /> PARTNERSHIP REGISTRATION COMING SOON
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

// Inline helper component for standard Building2 icon
function Building22(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18" />
      <path d="M18 22H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M12 18h.01" />
      <path d="M8 6h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
      <path d="M8 18h.01" />
    </svg>
  );
}
