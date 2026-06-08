"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Recycle, Cpu, Briefcase, Heart, GraduationCap, Target, Eye, Sparkles } from "lucide-react";

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

  const pillars = [
    {
      title: "Circular Economy",
      icon: <Recycle className="h-7 w-7 text-emerald-600 dark:text-emerald-400 group-hover:rotate-180 transition-transform duration-1000" />,
      desc: "Developing closed-loop resource lifecycles in Bihar by diverting plastic waste from drainage systems and transforming it into high-quality engineering polymers that substitute virgin plastic in manufacturing.",
      badge: "Eco System"
    },
    {
      title: "Advanced Sorting & Processing",
      icon: <Cpu className="h-7 w-7 text-blue-600 dark:text-blue-400" />,
      desc: "Employing computerized density separation and spectroscopic validation to identify and categorize plastics, ensuring zero compounding errors and maximum raw material purity.",
      badge: "Tech Driven"
    },
    {
      title: "Local Employability",
      icon: <Briefcase className="h-7 w-7 text-amber-600 dark:text-amber-400" />,
      desc: "Fostering stable, fair-wage green-collar jobs for informal waste collectors. We provide formal employment structures, safety gear, healthcare coverage, and upward professional mobility.",
      badge: "Social Impact"
    },
    {
      title: "Women Empowerment & SHGs",
      icon: <Heart className="h-9 w-9 text-rose-500 dark:text-rose-400 animate-pulse" />,
      desc: "Directly partnering with local women's self-help groups (SHGs) to lead our plastic aggregation and sorting networks. We provide structured training, financial independence, and formal employment to women, elevating them to leadership roles and creating a self-sustaining social empowerment ecosystem in green manufacturing.",
      badge: "Core Focus",
      isSpotlight: true
    },
    {
      title: "Advanced Skill Development",
      icon: <GraduationCap className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />,
      desc: "Providing professional training programs in polymer handling, extrusion line controls, and quality validation, equipping local youth with valuable engineering skills.",
      badge: "Education"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Light grid divider line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-foreground/5" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Intro Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
        >
          {/* Left Column: About Us */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left justify-center">
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

        {/* Pillars Grid Header */}
        <motion.div 
          className="text-center flex flex-col items-center gap-4 mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-accent" /> Core Pillars & Initiatives
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Building Sustainable Foundations
          </h3>
          <p className="text-sm sm:text-base text-foreground/60 max-w-2xl font-light">
            Our initiatives are designed to foster technical growth, economic resilience, and deep social impact across communities in Bihar.
          </p>
        </motion.div>

        {/* Grid of 5 Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
        >
          {pillars.map((pt, i) => {
            const isSpotlight = pt.isSpotlight;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`p-8 rounded-3xl glass-panel border transition-all duration-300 relative overflow-hidden flex flex-col justify-between text-left group glow-card ${
                  isSpotlight
                    ? "lg:col-span-2 border-rose-500/20 dark:border-rose-500/30 bg-gradient-to-br from-rose-500/[0.04] via-background to-background hover:border-rose-500/40 shadow-[0_0_20px_rgba(244,63,94,0.05)]"
                    : "border-foreground/5 hover:border-accent/15 hover:shadow-lg hover:shadow-accent/5"
                }`}
              >
                {/* Subtle background glow on hover */}
                <div className={`absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr ${
                  isSpotlight 
                    ? "from-rose-500/[0.03] to-pink-500/[0.01]" 
                    : "from-accent/[0.02] to-secondary/[0.01]"
                }`} />

                <div>
                  <div className="flex justify-between items-start gap-4 mb-6">
                    <div className={`p-4 rounded-2xl border transition-colors duration-300 shrink-0 ${
                      isSpotlight
                        ? "bg-rose-500/10 border-rose-500/20 text-rose-500 dark:text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.1)]"
                        : "bg-foreground/[0.02] border-foreground/5 group-hover:border-accent/20 group-hover:bg-accent/5"
                    }`}>
                      {pt.icon}
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                      isSpotlight
                        ? "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20"
                        : "bg-foreground/[0.03] text-foreground/50 border border-foreground/5"
                    }`}>
                      {pt.badge}
                    </span>
                  </div>

                  <h4 className="text-xl font-extrabold tracking-tight text-foreground">
                    {pt.title}
                  </h4>

                  <p className="text-sm text-foreground/70 leading-relaxed font-light mt-3">
                    {pt.desc}
                  </p>
                </div>

                {isSpotlight && (
                  <div className="mt-6 pt-6 border-t border-rose-500/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="text-[11px] font-semibold text-rose-600/80 dark:text-rose-400/80 italic">
                      "Empowering women to lead Bihar’s green-collar workforce."
                    </div>
                    <div className="text-xs font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1">
                      Direct Impact Initiative
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
