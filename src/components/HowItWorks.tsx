"use client";

import React from "react";
import { motion } from "framer-motion";
import { Truck, Filter, Flame, Compass, Package, HelpCircle } from "lucide-react";

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
      icon: <Flame className="h-5 w-5" />,
      color: "text-highlight border-highlight/20 bg-highlight/5"
    },
    {
      id: "04",
      title: "Quality Manufacturing",
      desc: "Compounding with custom additives followed by pellet testing to secure structural load and flow specs.",
      icon: <Compass className="h-5 w-5" />,
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
    <section id="how-it-works" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-foreground/5" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/5 dark:bg-accent/10 text-accent font-semibold text-xs tracking-wider uppercase">
            <HelpCircle className="h-3.5 w-3.5" />
            Process Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            The ReclaimNature <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Circular Loop</span>
          </h2>
          <p className="text-base text-foreground/60 max-w-2xl font-light">
            Our step-by-step industrial method for transforming plastic waste back into clean, value-added products.
          </p>
        </div>

        {/* Infographic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-8 right-8 h-[2px] bg-gradient-to-r from-accent via-secondary to-accent/20 z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              className="flex flex-col items-center text-center lg:text-left lg:items-start relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            >
              {/* Step indicator circle */}
              <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 shadow-md transition-transform hover:scale-105 duration-300 ${step.color}`}>
                {step.icon}
              </div>

              {/* Number Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-accent bg-accent/10 px-2 py-0.5 rounded">
                  STEP {step.id}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-xs text-foreground/65 leading-relaxed font-light">{step.desc}</p>
            </motion.div>
          ))}
          
        </div>

      </div>
    </section>
  );
}
