"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Recycle, Cpu, Briefcase, Heart, GraduationCap, Target, Eye } from "lucide-react";

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

  const visualPoints = [
    { title: "Circular Economy", icon: <Recycle className="h-5 w-5 text-accent" />, desc: "Closed loop resource lifecycle" },
    { title: "Advanced Technologies", icon: <Cpu className="h-5 w-5 text-secondary" />, desc: "Spectroscopic plastic sorting" },
    { title: "Local Employability", icon: <Briefcase className="h-5 w-5 text-accent" />, desc: "Fair-wage green-collar jobs" },
    { title: "Women Empowerment", icon: <Heart className="h-5 w-5 text-secondary" />, desc: "Self-help group integration" },
    { title: "Skill Development", icon: <GraduationCap className="h-5 w-5 text-accent" />, desc: "Advanced polymer training" }
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
          viewport={{ once: true, margin: "-20px" }}
        >
          {/* Left Column: About Us & Visual Icons */}
          <div className="lg:col-span-6 flex flex-col gap-8 text-left">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-accent">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
                About <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">ReclaimNature</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed font-light">
              Transforming Bihar’s industrial landscape by building a resilient circular economy that integrates informal waste collectors into formal supply chains, enhancing local employability and empowering women through advanced skill development in recycling and responsible manufacturing.
            </p>

            {/* Visual Icons List */}
            <div className="flex flex-col gap-4 mt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/40">Core Pillars & Initiatives</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {visualPoints.map((pt, i) => (
                  <div key={i} className="flex items-center gap-3.5 p-4 rounded-2xl glass-panel border border-foreground/5 hover:border-accent/15 transition-all glow-card">
                    <div className="p-2.5 rounded-xl bg-foreground/[0.02] border border-foreground/5 shrink-0">
                      {pt.icon}
                    </div>
                    <div className="text-left">
                      <h5 className="text-sm font-bold text-foreground">{pt.title}</h5>
                      <p className="text-[10px] text-foreground/50 mt-0.5">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Purpose & Vision Subsections */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            
            {/* Purpose Subsection */}
            <motion.div 
              variants={itemVariants}
              className="p-8 rounded-3xl glass-panel border border-foreground/5 hover:border-accent/10 transition-all text-left flex flex-col gap-4 relative overflow-hidden glow-card"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Target className="h-24 w-24 text-accent" />
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-accent/5 dark:bg-accent/10 border border-accent/10 text-accent">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-extrabold text-foreground">Our Purpose</h3>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed font-light mt-1">
                Our purpose is to revolutionize Bihar’s waste management landscape by bridging the gap between industry, government, academia, and community. Together, we are cultivating a collaborative ecosystem to pioneer a world-class circular economy that drives progress toward global Net-Zero goals.
              </p>
            </motion.div>

            {/* Vision Subsection */}
            <motion.div 
              variants={itemVariants}
              className="p-8 rounded-3xl glass-panel border border-foreground/5 hover:border-accent/10 transition-all text-left flex flex-col gap-4 relative overflow-hidden glow-card"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Eye className="h-24 w-24 text-secondary" />
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-secondary/5 dark:bg-secondary/10 border border-secondary/10 text-secondary">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-extrabold text-foreground">Our Vision</h3>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed font-light mt-1">
                To pioneer a zero-waste future across Patna and neighboring Urban Local Bodies (ULBs), enhancing environmental health, elevating community liveability, and fostering a modern, skilled green-collar workforce that drives sustainable urban development.
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
