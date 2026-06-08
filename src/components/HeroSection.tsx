"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Globe, Shield, Activity, Cpu } from "lucide-react";

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden bg-background">
      {/* Background Grid Pattern & Ambient Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/10 w-[350px] h-[350px] rounded-full bg-accent/10 blur-[100px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[120px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "3s" }} />

      <div className="max-w-5xl mx-auto px-6 md:px-12 w-full flex flex-col items-center justify-center text-center z-10">
        
        {/* Centered Content: Headline & Description */}
        <motion.div 
          className="flex flex-col gap-8 items-center max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/20 bg-accent/5 dark:bg-accent/10 text-accent font-semibold text-xs tracking-wider uppercase">
            <Globe className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: "12s" }} />
            A Cleaner Bihar, A Brighter Future
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]"
          >
            Transforming Plastic Waste Into <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-secondary via-accent to-highlight bg-clip-text text-transparent">
              Tomorrow&apos;s Resources
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl font-light"
          >
            Building a cleaner Bihar and a more sustainable future through advanced engineering, circular economy integration, and industrial-grade resource recovery.
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center justify-center">
            <a
              href="#signup"
              className="px-8 py-4 rounded-xl text-sm font-semibold bg-accent text-white hover:bg-secondary transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5"
            >
              Partner With Us
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold border border-foreground/15 hover:bg-foreground/5 text-foreground transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
