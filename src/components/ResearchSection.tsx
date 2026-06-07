"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Microscope, ShieldCheck, ArrowRight, BookOpen } from "lucide-react";

export default function ResearchSection() {
  const initiatives = [
    {
      title: "IIT Patna R&D",
      subtitle: "Polymer Compounding",
      desc: "Joint research on catalytic depolymerization. IIT Patna provides advanced polymer characterization facilities, while ReclaimNature offers live compounding pilot testing and student research sponsorships.",
      tag: "Research Agreement"
    },
    {
      title: "CIPET Patna Labs",
      subtitle: "Testing & Standards",
      desc: "CIPET Patna provides accredited testing laboratories for Melt Flow Index (MFI) and tensile verification. ReclaimNature offers industrial materials internships and hands-on compounding audits.",
      tag: "Testing Protocol"
    },
    {
      title: "Sustainability Internships",
      subtitle: "Student Programs",
      desc: "Open to engineering and science students. Offers active participation in raw polymer compounding, circular logistics modeling, and accredited material testing validation.",
      tag: "Enrollment Open"
    }
  ];

  return (
    <section id="research" className="py-24 bg-foreground/[0.02] border-t border-foreground/5 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Context & Branding */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/5 dark:bg-accent/10 text-accent font-semibold text-xs tracking-wider uppercase self-start">
              <Microscope className="h-3.5 w-3.5" />
              Scientific Foundation
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
              Pioneering <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Academic & Research</span> Partnerships
            </h2>

            <p className="text-base text-foreground/75 leading-relaxed font-light">
              We believe industrial scale recycling demands rigorous scientific validation. That is why ReclaimNature collaborates with Bihar&apos;s leading engineering and plastic institutes to advance polymer science and certify eco-infrastructure.
            </p>

            <div className="flex flex-col gap-3.5 mt-2">
              <div className="flex items-center gap-3 text-sm text-foreground/80 font-light">
                <BookOpen className="h-4.5 w-4.5 text-accent shrink-0" />
                <span>Co-authoring polymer lifecycle papers</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/80 font-light">
                <GraduationCap className="h-4.5 w-4.5 text-accent shrink-0" />
                <span>Mentoring 20+ engineering interns annually</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/80 font-light">
                <ShieldCheck className="h-4.5 w-4.5 text-accent shrink-0" />
                <span>ASTM & ISO certified test batches</span>
              </div>
            </div>

            <div className="mt-4">
              <a
                href="#signup"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold bg-accent text-white hover:bg-secondary transition-all duration-300 shadow-md shadow-accent/10 hover:shadow-accent/20"
              >
                Collaborate With Us
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Key Initiatives */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {initiatives.map((item, idx) => (
              <motion.div
                key={idx}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-foreground/5 hover:border-accent/15 transition-all flex flex-col sm:flex-row gap-6 items-start glow-card"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Visual Circle */}
                <div className="w-12 h-12 rounded-2xl bg-accent/5 dark:bg-accent/10 border border-accent/15 flex items-center justify-center text-accent shrink-0">
                  {idx === 0 ? <Microscope className="h-5 w-5" /> : idx === 1 ? <ShieldCheck className="h-5 w-5" /> : <GraduationCap className="h-5 w-5" />}
                </div>

                {/* Text Content */}
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[10px] font-mono font-bold text-accent bg-accent/5 dark:bg-accent/10 px-2 py-0.5 rounded uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mt-1">
                    {item.title} &bull; <span className="text-foreground/50 text-sm font-medium">{item.subtitle}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
