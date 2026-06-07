"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, MessageSquare } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  location: string;
  rating: number;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote: "ReclaimNature&apos;s compounding capabilities are exceptional. The density consistency and chemical purity of their HDPE granules matched our packaging molding specifications, allowing us to hit our 35% circular sourcing goals ahead of schedule.",
      author: "Sanjay K. Choudhary",
      role: "Operations Director, Maurya Polymers",
      location: "Hajipur Industrial Area, Bihar",
      rating: 5
    },
    {
      quote: "We deployed ReclaimNature&apos;s interlocking pavers across a park project in Patna. Not only did we cut thermal concrete costs, but the weather resistance and anti-crack performance exceeded traditional concrete alternatives.",
      author: "Anjali Verma",
      role: "Infrastructure Lead, Bihar Urban Developers",
      location: "Patna, India",
      rating: 5
    },
    {
      quote: "Working with ReclaimNature on municipal waste sourcing has shown us their logistical integrity. Their collection network is reliable, ethical, and has substantially reduced plastic clogging in drainage ward channels.",
      author: "Manoj K. Mishra",
      role: "Environmental Officer, Municipal Corporation",
      location: "Bihar, India",
      rating: 5
    }
  ];

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-foreground/5" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/5 dark:bg-accent/10 text-accent font-semibold text-xs tracking-wider uppercase">
            <MessageSquare className="h-3.5 w-3.5" />
            Stakeholder Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Trusted by <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-base text-foreground/60 max-w-2xl font-light">
            Read opinions from municipal boards, raw compound buyers, and infrastructure directors using our products.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative flex items-center justify-center min-h-[340px]">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="w-full glass-panel p-8 sm:p-12 rounded-3xl border border-foreground/5 flex flex-col justify-between relative shadow-xl text-left"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-accent/15">
                <Quote className="h-16 w-16 rotate-180" />
              </div>

              <div>
                <p className="text-base sm:text-xl text-foreground/80 leading-relaxed font-light italic mb-8">
                  &ldquo;{testimonials[index].quote}&rdquo;
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-foreground/5">
                <div>
                  <h4 className="font-bold text-base text-foreground">{testimonials[index].author}</h4>
                  <p className="text-xs text-foreground/50 mt-1">{testimonials[index].role} &bull; {testimonials[index].location}</p>
                </div>
                
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonials[index].rating)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">&bull;</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute bottom-[-80px] flex gap-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-foreground/10 hover:border-accent hover:bg-accent/5 text-foreground hover:text-accent transition-all cursor-pointer"
              aria-label="Previous Review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-foreground/10 hover:border-accent hover:bg-accent/5 text-foreground hover:text-accent transition-all cursor-pointer"
              aria-label="Next Review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
        </div>

      </div>
    </section>
  );
}
