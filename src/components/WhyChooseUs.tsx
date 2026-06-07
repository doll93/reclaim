"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Award, Heart, RefreshCw, Lightbulb, Map } from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      title: "Environmental Responsibility",
      desc: "Preventing plastic incineration and drainage clogging in Bihar, translating every ton of processed waste into verified carbon offsets.",
      icon: <Leaf className="h-5 w-5 text-accent" />
    },
    {
      title: "Industrial Quality",
      desc: "Delivering recycled granules that match the technical, tensile, and melt-flow performance of virgin polymers for structural casting.",
      icon: <Award className="h-5 w-5 text-secondary" />
    },
    {
      title: "Ethical Sourcing",
      desc: "Creating transparent sourcing networks that guarantee fair pricing, health screenings, and dignity for local waste collection workers.",
      icon: <Heart className="h-5 w-5 text-accent" />
    },
    {
      title: "Circular Alliances",
      desc: "Partnering with municipal authorities, manufacturers, and packaging giants to execute full-scale closed loop material plans.",
      icon: <RefreshCw className="h-5 w-5 text-secondary" />
    },
    {
      title: "Innovation Driven",
      desc: "Investing in catalytic compounding research at our local facilities to push the boundaries of composite polymer strengths.",
      icon: <Lightbulb className="h-5 w-5 text-highlight" />
    },
    {
      title: "Local Impact, Global Vision",
      desc: "Addressing immediate waste hazards in Bihar while aligning with international Net Zero guidelines and global circular standards.",
      icon: <Map className="h-5 w-5 text-accent" />
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-foreground/5" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/5 dark:bg-accent/10 text-accent font-semibold text-xs tracking-wider uppercase">
            <Award className="h-3.5 w-3.5" />
            Core Competence
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Why Partner With <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">ReclaimNature</span>
          </h2>
          <p className="text-base text-foreground/60 max-w-2xl font-light">
            We operate at the intersection of industrial reliability, social responsibility, and scientific validation.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="glass-panel p-8 rounded-3xl border border-foreground/5 hover:border-accent/15 transition-all flex flex-col gap-5 text-left glow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              {/* Icon Container */}
              <div className="w-11 h-11 rounded-2xl bg-foreground/[0.02] border border-foreground/5 flex items-center justify-center">
                {card.icon}
              </div>

              {/* Title & Desc */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-foreground">{card.title}</h3>
                <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed font-light">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
