"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, ChevronDown, Briefcase, BrainCircuit } from "lucide-react";

interface Role {
  id: string;
  title: string;
  type: string;
  department: string;
  icon: React.ReactNode;
  summary: string;
  details: string[];
}

export default function CareersSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const roles: Role[] = [
    {
      id: "intern",
      title: "Sustainability Internship Programs",
      type: "3 - 6 Months Internship",
      department: "Research & Development / Operations",
      icon: <GraduationCap className="h-5 w-5 text-accent" />,
      summary: "Open to engineering, environmental sciences, and chemistry students looking for hands-on exposure to circular compounding processes and municipal waste audits.",
      details: [
        "Conduct density, MFI, and tensile tests in our material lab.",
        "Perform lifecycle assessments (LCA) on composite infrastructure products.",
        "Analyze regional waste aggregation logistics to improve recycling yields."
      ]
    },
    {
      id: "researcher",
      title: "Academic Research Opportunities",
      type: "Project-based Sponsorship",
      department: "Materials Science / Chemical Engineering",
      icon: <BrainCircuit className="h-5 w-5 text-secondary" />,
      summary: "Collaboration grants for postgraduate and PhD scholars in partnership with IIT Patna and CIPET, focusing on catalytic plastic depolymerization.",
      details: [
        "Formulate composite polymer blends to enhance load limits of recycled pavers.",
        "Synthesize high-efficiency catalytic agents for thermoplastic depolymerization.",
        "Publish co-authored papers in peer-reviewed environmental engineering journals."
      ]
    },
    {
      id: "plant",
      title: "Compounding Process Engineer",
      type: "Full-Time Position",
      department: "Factory Operations",
      icon: <Briefcase className="h-5 w-5 text-highlight" />,
      summary: "Full-time role managing extrusion compounding machinery, adjusting polymer MFI grades, and overseeing testing quality assurance benchmarks.",
      details: [
        "Optimize compounding machine speed, temperature, and feeding ratios.",
        "Troubleshoot mechanical extrusion variances to prevent granule defect rates.",
        "Oversee labor safety protocols and maintain zero-leakage machinery limits."
      ]
    }
  ];

  const toggleOpen = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="careers" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-foreground/5" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-center">
          <div className="lg:col-span-6 flex flex-col gap-4 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/5 dark:bg-accent/10 text-accent font-semibold text-xs tracking-wider uppercase self-start">
              <Briefcase className="h-3.5 w-3.5" />
              Talent Acquisition
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
              Build the Future of <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Sustainable Manufacturing
              </span>
            </h2>
          </div>
          <div className="lg:col-span-6 text-left">
            <p className="text-base text-foreground/60 font-light leading-relaxed">
              Join a group of engineers, researchers, and circular economy specialists working to build a cleaner Bihar. We sponsor academic projects, mentor students, and offer high-growth manufacturing roles.
            </p>
          </div>
        </div>

        {/* Accordions */}
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {roles.map((role) => {
            const isOpen = openId === role.id;
            return (
              <div
                key={role.id}
                className="glass-panel rounded-3xl border border-foreground/5 overflow-hidden transition-all duration-300"
              >
                {/* Header Click Target */}
                <button
                  onClick={() => toggleOpen(role.id)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left cursor-pointer transition-colors hover:bg-foreground/[0.01]"
                >
                  <div className="flex gap-4 sm:gap-6 items-center">
                    <div className="p-3 rounded-2xl bg-foreground/[0.02] border border-foreground/5 shrink-0">
                      {role.icon}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-foreground">{role.title}</h3>
                      <p className="text-xs text-foreground/50 mt-1">{role.type} &bull; {role.department}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-foreground/40 p-1 rounded-lg border border-foreground/5"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </button>

                {/* Content Expand */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-foreground/5 flex flex-col gap-5 text-left">
                        <p className="text-sm text-foreground/75 leading-relaxed font-light">
                          {role.summary}
                        </p>

                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-3">Technical Scope</p>
                          <ul className="flex flex-col gap-2.5">
                            {role.details.map((detail, idx) => (
                              <li key={idx} className="text-xs sm:text-sm text-foreground/75 flex items-start gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                                <span className="font-light">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-4">
                          <a
                            href="#signup"
                            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-accent hover:bg-secondary text-white font-bold text-xs transition-colors"
                          >
                            Apply Now
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
