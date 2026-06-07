"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Construction, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: "raw" | "infra";
  score: number;
  imageUrl: string;
  applications: string[];
  benefits: string[];
  density: string;
  flowRate: string;
  tensile: string;
  bgGrad: string;
}

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState<"raw" | "infra">("raw");

  const products: Product[] = [
    // Category A - Raw Materials
    {
      id: "hdpe",
      name: "HDPE Granules",
      category: "raw",
      score: 98,
      imageUrl: "/images/hdpe_before_after.png",
      applications: ["Blow molded bottles", "Heavy-duty pipes", "Industrial crates"],
      benefits: ["High chemical resistance", "Exceptional impact strength", "Pure polymer sourcing"],
      density: "0.95 - 0.96 g/cm³",
      flowRate: "0.8 - 2.2 g/10min",
      tensile: "≥ 22 MPa",
      bgGrad: "from-emerald-500/10 to-teal-500/5"
    },
    {
      id: "ldpe",
      name: "LDPE Granules",
      category: "raw",
      score: 95,
      imageUrl: "/images/ldpe_before_after.png",
      applications: ["Agricultural sheets", "Flexible packaging", "Squeeze bottles"],
      benefits: ["Superior flexibility", "Excellent clarity & gloss", "High tear resistance"],
      density: "0.91 - 0.93 g/cm³",
      flowRate: "1.5 - 4.0 g/10min",
      tensile: "≥ 10 MPa",
      bgGrad: "from-green-500/10 to-emerald-500/5"
    },
    {
      id: "pp",
      name: "PP Granules",
      category: "raw",
      score: 97,
      imageUrl: "/images/pp_before_after.png",
      applications: ["Automotive components", "Houseware & furniture", "Woven sacks"],
      benefits: ["High thermal resistance", "Excellent fatigue life", "Low density / light weight"],
      density: "0.90 - 0.91 g/cm³",
      flowRate: "4.0 - 12.0 g/10min",
      tensile: "≥ 28 MPa",
      bgGrad: "from-lime-500/10 to-green-500/5"
    },
    {
      id: "pet",
      name: "PET Flakes",
      category: "raw",
      score: 99,
      imageUrl: "/images/pet_before_after.png",
      applications: ["Polyester fiber & yarn", "Strapping bands", "Thermoforming sheets"],
      benefits: ["Ultra-low moisture content", "High intrinsic viscosity", "Unmatched optical clarity"],
      density: "1.33 - 1.35 g/cm³",
      flowRate: "N/A (Flake Form)",
      tensile: "≥ 55 MPa",
      bgGrad: "from-cyan-500/10 to-emerald-500/5"
    },
    // Category B - Infrastructure Products
    {
      id: "pavers",
      name: "Recycled Eco-Pavers",
      category: "infra",
      score: 96,
      imageUrl: "/images/pavers_before_after.png",
      applications: ["Pedestrian walkways", "Residential driveways", "Urban parks"],
      benefits: ["Zero concrete cracking", "High anti-slip rating", "Interlocking design structure"],
      density: "1.10 - 1.20 g/cm³",
      flowRate: "Compression molded",
      tensile: "Compressive: ≥ 35 MPa",
      bgGrad: "from-emerald-500/10 to-lime-500/5"
    },
    {
      id: "tiles",
      name: "Terrace Insulation Tiles",
      category: "infra",
      score: 98,
      imageUrl: "/images/tiles_before_after.png",
      applications: ["Rooftop heat barriers", "Balcony flooring", "Terrace walkways"],
      benefits: ["Thermal insulation lining", "Weather & UV proofing", "Ultralight weight load"],
      density: "0.98 - 1.05 g/cm³",
      flowRate: "Thermal molded",
      tensile: "Load rating: ≥ 15 kN",
      bgGrad: "from-green-500/10 to-teal-500/5"
    },
    {
      id: "lumber",
      name: "Structural Plastic Lumber",
      category: "infra",
      score: 94,
      imageUrl: "/images/lumber_before_after.png",
      applications: ["Outdoor benches", "Fencing & railings", "Industrial pallets"],
      benefits: ["Zero moisture absorption", "No rot, splinters or pests", "Workable with wood tools"],
      density: "0.92 - 0.94 g/cm³",
      flowRate: "Continuous extrusion",
      tensile: "Flexural: ≥ 18 MPa",
      bgGrad: "from-lime-500/10 to-emerald-500/5"
    }
  ];

  const filteredProducts = products.filter((p) => p.category === activeTab);

  return (
    <section id="products" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_60%,#16A34A/3%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent">
            Industrial Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-3">
            Engineered Material Products
          </h2>
          <p className="text-base text-foreground/60 max-w-2xl font-light">
            ReclaimNature outputs raw material resins matching ISO standards and sturdy structural civil products designed for municipal and private developer deployment.
          </p>

          {/* Tab Switcher */}
          <div className="flex p-1 rounded-2xl bg-foreground/5 border border-foreground/5 mt-8 max-w-md w-full">
            <button
              onClick={() => setActiveTab("raw")}
              className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                activeTab === "raw"
                  ? "bg-background text-foreground shadow-md"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              <Layers className="h-4 w-4" />
              Category A: Raw Materials
            </button>
            <button
              onClick={() => setActiveTab("infra")}
              className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                activeTab === "infra"
                  ? "bg-background text-foreground shadow-md"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              <Construction className="h-4 w-4" />
              Category B: Civil Infrastructure
            </button>
          </div>
        </div>

        {/* Product Grid with AnimatePresence */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 min-h-[480px]"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-3xl glass-panel p-6 flex flex-col justify-between border border-foreground/5 hover:border-accent/15 transition-all glow-card overflow-hidden`}
              >
                <div>
                  {/* Before/After Product Image */}
                  <div className="relative w-full h-44 rounded-2xl overflow-hidden border border-foreground/5 mb-6 group">
                    <img
                      src={p.imageUrl}
                      alt={`${p.name} Before and After`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Visual Overlays for Before/After */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90" />
                    
                    {/* Indicators */}
                    <div className="absolute bottom-3 left-3 flex gap-2 z-10">
                      <span className="text-[9px] font-bold text-white bg-red-600/95 px-2 py-0.5 rounded tracking-wider shadow">BEFORE</span>
                      <span className="text-[9px] font-bold text-white bg-accent/95 px-2 py-0.5 rounded tracking-wider shadow">AFTER</span>
                    </div>

                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-background/90 px-2.5 py-1 rounded-full border border-foreground/5 shadow-md z-10">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                      <span className="text-[10px] font-mono text-accent font-bold">ECO: {p.score}%</span>
                    </div>
                  </div>

                  {/* Details */}
                  <h3 className="text-xl font-bold text-foreground mb-3">{p.name}</h3>
                  
                  {/* Technical values */}
                  <div className="grid grid-cols-2 gap-x-2 gap-y-1 bg-foreground/[0.02] border border-foreground/5 p-3 rounded-xl mb-4 text-[10px] font-mono text-foreground/70">
                    <div>Density: {p.density}</div>
                    <div>MFI: {p.flowRate}</div>
                    <div className="col-span-2">Strength: {p.tensile}</div>
                  </div>

                  {/* Applications */}
                  <div className="mb-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-foreground/40 mb-2">Key Applications</p>
                    <ul className="flex flex-col gap-1">
                      {p.applications.map((app, i) => (
                        <li key={i} className="text-xs text-foreground/75 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-accent" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-foreground/40 mb-2">Benefits</p>
                    <ul className="flex flex-col gap-1">
                      {p.benefits.map((ben, i) => (
                        <li key={i} className="text-xs text-foreground/75 flex items-center gap-1.5">
                          <CheckCircle2 className="h-3 w-3 text-accent shrink-0" />
                          {ben}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href="#signup"
                  className="w-full inline-flex items-center justify-between py-3 px-4 rounded-xl border border-foreground/10 hover:border-accent bg-foreground/5 hover:bg-accent text-foreground hover:text-white text-xs font-bold transition-all duration-300"
                >
                  Request Sample
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
