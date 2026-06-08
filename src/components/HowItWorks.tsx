"use client";

import React from "react";
import { motion } from "framer-motion";
import { Truck, Filter, Recycle, Settings, Package, Activity, ChevronRight, ChevronDown } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Plastic Collection",
      desc: "Sourcing post-consumer and industrial plastics through ethical collection loops, keeping them out of drainage channels.",
      icon: <Truck className="h-5 w-5" />,
      color: "text-accent border-accent/20 bg-accent/5"
    },
    {
      id: "02",
      title: "Sorting & Processing",
      desc: "Automated density sorting and optical cataloging catalog polymers to ensure zero compounding errors.",
      icon: <Filter className="h-5 w-5" />,
      color: "text-secondary border-secondary/20 bg-secondary/5"
    },
    {
      id: "03",
      title: "Advanced Recycling",
      desc: "Catalytic depolymerization and high-temp extrusion remove heavy toxins and yield clean polymer melt.",
      icon: <Recycle className="h-5 w-5" />,
      color: "text-highlight border-highlight/20 bg-highlight/5"
    },
    {
      id: "04",
      title: "Quality Manufacturing",
      desc: "Compounding with custom additives followed by pellet testing to secure structural load and flow specs.",
      icon: <Settings className="h-5 w-5" />,
      color: "text-accent border-accent/20 bg-accent/5"
    },
    {
      id: "05",
      title: "Eco-Friendly Products",
      desc: "Shipping raw HDPE/LDPE/PP pellets and durable pavers directly to manufacturing plants and sites.",
      icon: <Package className="h-5 w-5" />,
      color: "text-secondary border-secondary/20 bg-secondary/5"
    }
  ];

  return (
    <section id="approach" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-foreground/5" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/5 dark:bg-accent/10 text-accent font-semibold text-xs tracking-wider uppercase">
            <Activity className="h-3.5 w-3.5" />
            PROCESS WORKFLOW
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            The ReclaimNature <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Circular Loop</span>
          </h2>
          <p className="text-base text-foreground/60 max-w-2xl font-light">
            Our step-by-step industrial method for transforming plastic waste back into clean, value-added products.
          </p>
        </div>

        {/* Infographic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative max-w-7xl mx-auto z-10">
          
          {/* Horizontal connecting line for desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-accent/40 z-20 pointer-events-none" />

          {/* Vertical connecting line for mobile/tablet */}
          <div className="lg:hidden absolute left-1/2 -translate-x-1/2 top-12 bottom-12 w-[2px] bg-accent/40 z-20 pointer-events-none" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              className="group relative flex flex-col items-center text-center p-6 rounded-3xl glass-panel border border-foreground/5 hover:border-accent/15 transition-all glow-card z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            >
              {/* Step icon circle */}
              <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-5 shadow-md transition-transform hover:rotate-6 duration-300 bg-background ${step.color} z-30`}>
                {step.icon}
              </div>

              {/* Title & Desc */}
              <h3 className="text-base font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-xs text-foreground/65 leading-relaxed font-light">{step.desc}</p>
            </motion.div>
          ))}
          
        </div>

      </div>
    </section>
  );
}
