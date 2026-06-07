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

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
        
        {/* Left: Headline & Description */}
        <motion.div 
          className="lg:col-span-7 flex flex-col gap-8 text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Launching Soon Alert */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-xl border border-amber-500/25 bg-amber-500/5 text-amber-600 dark:text-amber-400 font-bold text-[10px] uppercase tracking-widest shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            Launching Soon &bull; Early Access Portal
          </motion.div>

          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full border border-accent/20 bg-accent/5 dark:bg-accent/10 text-accent font-semibold text-xs tracking-wider uppercase">
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
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
            <a
              href="#signup"
              className="px-8 py-4 rounded-xl text-sm font-semibold bg-accent text-white hover:bg-secondary transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5"
            >
              Partner With Us
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold border border-foreground/15 hover:bg-foreground/5 text-foreground transition-all duration-300"
            >
              Join The Movement
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Live Floating Statistics */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 pt-6 border-t border-foreground/10 max-w-lg"
          >
            <div>
              <p className="text-2xl font-bold text-foreground">12.5k+</p>
              <p className="text-xs text-foreground/60 mt-1">Tons Plastic Diverted</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">8.4k+</p>
              <p className="text-xs text-foreground/60 mt-1">Tons CO₂ Prevented</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">100%</p>
              <p className="text-xs text-foreground/60 mt-1">Bihar Local Sourced</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Interactive 3D/SVG Circular Loop Dashboard */}
        <motion.div 
          className="lg:col-span-5 flex flex-col items-center justify-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          {/* Glass Card Wrapper */}
          <div className="w-full max-w-[440px] aspect-[1/1] rounded-3xl glass-panel shadow-2xl relative p-4 sm:p-6 flex flex-col justify-between overflow-hidden glow-card">
            
            {/* Corner Decorative Grids */}
            <div className="absolute top-0 right-0 p-3 opacity-20 dark:opacity-40">
              <Cpu className="h-5 w-5 text-accent" />
            </div>

            {/* Header info */}
            <div className="flex items-center justify-between border-b border-foreground/5 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
                <span className="text-xs font-semibold text-foreground/80 uppercase tracking-widest">Reclaim Engine v1.0</span>
              </div>
              <span className="text-[10px] font-mono text-foreground/40 bg-foreground/5 px-2 py-0.5 rounded">ONLINE</span>
            </div>

            {/* Center Animation: SVG Circular Loop Graphic */}
            <div className="flex-1 flex items-center justify-center py-6 relative">
              <svg className="w-56 h-56 sm:w-64 sm:h-64 transform rotate-0" viewBox="0 0 200 200">
                {/* Background Track Circle */}
                <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" className="text-foreground/5" strokeWidth="3" />
                
                {/* Glowing Flow Dash line */}
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="url(#accentGradient)"
                  strokeWidth="4"
                  strokeDasharray="40 180"
                  className="animate-spin"
                  style={{ animationDuration: "10s", transformOrigin: "100px 100px" }}
                />

                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="url(#highlightGradient)"
                  strokeWidth="4"
                  strokeDasharray="30 190"
                  className="animate-spin"
                  style={{ animationDuration: "6s", transformOrigin: "100px 100px", animationDirection: "reverse" }}
                />

                {/* Node Circles */}
                {/* 1. Collection (Top) */}
                <g className="cursor-pointer group">
                  <circle cx="100" cy="30" r="14" className="fill-background stroke-foreground/10 group-hover:stroke-accent/50 transition-colors" strokeWidth="2" />
                  <circle cx="100" cy="30" r="5" className="fill-accent" />
                  <text x="100" y="12" className="text-[8px] font-bold fill-foreground/60 text-center" textAnchor="middle">COLLECT</text>
                </g>

                {/* 2. Process (Right) */}
                <g className="cursor-pointer group">
                  <circle cx="170" cy="100" r="14" className="fill-background stroke-foreground/10 group-hover:stroke-accent/50 transition-colors" strokeWidth="2" />
                  <circle cx="170" cy="100" r="5" className="fill-accent" />
                  <text x="170" y="123" className="text-[8px] font-bold fill-foreground/60 text-center" textAnchor="middle">RECYCLE</text>
                </g>

                {/* 3. Materials (Bottom) */}
                <g className="cursor-pointer group">
                  <circle cx="100" cy="170" r="14" className="fill-background stroke-foreground/10 group-hover:stroke-accent/50 transition-colors" strokeWidth="2" />
                  <circle cx="100" cy="170" r="5" className="fill-highlight" />
                  <text x="100" y="192" className="text-[8px] font-bold fill-foreground/60 text-center" textAnchor="middle">MANUFACTURE</text>
                </g>

                {/* 4. Products (Left) */}
                <g className="cursor-pointer group">
                  <circle cx="30" cy="100" r="14" className="fill-background stroke-foreground/10 group-hover:stroke-accent/50 transition-colors" strokeWidth="2" />
                  <circle cx="30" cy="100" r="5" className="fill-secondary" />
                  <text x="30" y="123" className="text-[8px] font-bold fill-foreground/60 text-center" textAnchor="middle">INFRA</text>
                </g>

                {/* Gradients */}
                <defs>
                  <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#16A34A" />
                    <stop offset="100%" stopColor="#22C55E" />
                  </linearGradient>
                  <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22C55E" />
                    <stop offset="100%" stopColor="#84CC16" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Central Core Stats Card */}
              <div className="absolute flex flex-col items-center justify-center text-center">
                <span className="text-xs font-semibold text-foreground/40 uppercase tracking-widest">Efficiency</span>
                <span className="text-3xl font-extrabold text-foreground tracking-tight">99.4%</span>
                <span className="text-[10px] text-accent font-medium mt-0.5 flex items-center gap-1">
                  <Activity className="h-3 w-3" /> System Stable
                </span>
              </div>
            </div>

            {/* Bottom stats layout */}
            <div className="border-t border-foreground/5 pt-4 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-foreground/60">
                <Shield className="h-4.5 w-4.5 text-accent" />
                <span>Zero Leakage Goal</span>
              </div>
              <span className="font-mono text-accent">L: 3.4km &bull; H: 99.8%</span>
            </div>
            
          </div>

          {/* Static badges grid below the card */}
          <div className="w-full max-w-[440px] grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="glass-panel px-4 py-3 rounded-2xl flex items-center gap-3 border border-accent/20">
              <div className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
              <div className="text-left text-xs">
                <p className="font-bold text-foreground">Loop Active</p>
                <p className="text-[10px] text-foreground/60">Bihar Sourcing Web</p>
              </div>
            </div>

            <div className="glass-panel px-4 py-3 rounded-2xl flex items-center gap-3 border border-highlight/20">
              <div className="w-8 h-8 rounded-lg bg-highlight/10 flex items-center justify-center text-highlight shrink-0">
                <Cpu className="h-4 w-4" />
              </div>
              <div className="text-left text-xs">
                <p className="font-bold text-foreground">Advanced Tech</p>
                <p className="text-[10px] text-foreground/60">Catalytic Depoly</p>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
