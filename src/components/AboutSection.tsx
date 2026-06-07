"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Trees, Trash2, Milestone, ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const timelineSteps = [
    {
      year: "Phase 1: Aggregation",
      title: "Establishing the Bihar Sourcing Net",
      desc: "Creating localized, ethical waste collection networks across Patna and other urban centers in Bihar, empowering waste collectors and cleaning drainage networks."
    },
    {
      year: "Phase 2: Advanced Processing",
      title: "Sorting & Automated Cleaning",
      desc: "Deploying high-precision optical and density-based sorting systems to catalog plastic by polymer type, ensuring 99%+ sorting purity before compounding."
    },
    {
      year: "Phase 3: Material Upcycling",
      title: "High-Performance Granulation",
      desc: "Compounding plastic flakes into clean, industrial-grade raw granules (HDPE, LDPE, PP, PET) that serve as drop-in replacements for virgin polymers."
    },
    {
      year: "Phase 4: Eco-Infrastructure",
      title: "Pavers & Lumber Manufacturing",
      desc: "Pressing composite polymers into high-durability terrace tiles, heavy-duty pavers, and plastic lumber to replace wood and concrete in construction."
    },
    {
      year: "Phase 5: Legacy of Integrity",
      title: "Net Zero & Global Circularity",
      desc: "Forging partnerships with municipal corporations and manufacturing giants to establish full circular loops, preventing landfills from expanding."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Light grid divider line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-foreground/5" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left: Headline & Core Narrative */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-accent/5 dark:bg-accent/10 text-accent font-semibold text-xs tracking-wider uppercase">
              <Trees className="h-3.5 w-3.5" />
              Our Purpose
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
              Bihar&apos;s Waste Challenge Meets <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Industrial Innovation
              </span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-base text-foreground/75 leading-relaxed font-light">
              Bihar generates over **300 metric tons** of plastic waste daily. Due to insufficient recycling channels, much of this plastic ends up clogging urban drainage lines, degrading agricultural soils, or burning in open landfills, releasing toxic chemical compounds.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-base text-foreground/75 leading-relaxed font-light">
              ReclaimNature is a purpose-driven recycling startup based in Bihar committed to accelerating the circular economy and contributing toward global Net Zero goals through innovative plastic recycling technologies.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <motion.div variants={itemVariants} className="p-5 rounded-2xl bg-accent/5 border border-accent/15">
                <h4 className="font-extrabold text-xs text-accent uppercase tracking-wider">Our Mission</h4>
                <p className="text-xs text-foreground/80 mt-1.5 leading-relaxed font-light">
                  To transform plastic waste by converting it into high-performance raw materials and sustainable infrastructure products.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="p-5 rounded-2xl bg-secondary/5 border border-secondary/15">
                <h4 className="font-extrabold text-xs text-secondary uppercase tracking-wider">Our Vision</h4>
                <p className="text-xs text-foreground/80 mt-1.5 leading-relaxed font-light">
                  To establish a legacy of industrial integrity, setting the benchmark for ethical recycling and resource recovery for generations to come.
                </p>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="p-5 rounded-2xl bg-foreground/[0.02] border border-foreground/5 mt-4">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-red-500/10 text-red-500">
                  <Trash2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground">Bihar Landfills Growing</h4>
                  <p className="text-xs text-foreground/50 mt-1">
                    Without structured intervention, local landfills will double in surface area by 2030. Our target is to divert 50,000 tons of plastic by 2028.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Timeline Animations */}
          <div className="lg:col-span-7 flex flex-col relative pl-6 sm:pl-10">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 left-[18px] sm:left-[26px] w-[2px] bg-gradient-to-b from-accent/80 via-secondary/40 to-transparent" />

            <div className="flex flex-col gap-12">
              {timelineSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-4 sm:gap-6 relative"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                >
                  {/* Timeline Bullet */}
                  <div className="absolute left-[-26px] sm:left-[-34px] top-1 z-10 w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] rounded-full bg-background border-4 border-accent shadow-md flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                  </div>

                  <div className="flex-1 flex flex-col gap-2 p-5.5 rounded-2xl glass-panel border border-foreground/5 hover:border-accent/15 transition-all glow-card">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-accent tracking-widest uppercase">
                        {step.year}
                      </span>
                      <Milestone className="h-4.5 w-4.5 text-foreground/20" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mt-0.5">
                      {step.title}
                    </h3>
                    <p className="text-sm text-foreground/60 leading-relaxed font-light mt-1">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
