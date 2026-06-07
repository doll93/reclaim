"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, HelpCircle, ChevronDown, CheckCircle2 } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

export default function ContactSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const faqs: FAQItem[] = [
    {
      q: "Where does ReclaimNature source its plastic waste?",
      a: "We source post-consumer and industrial plastics directly across Bihar through municipal contracts, localized aggregation points, and fair-trade waste collections, preventing them from entering drainage grids or open landfills."
    },
    {
      q: "Are your raw polymer granules certified for manufacturing?",
      a: "Yes. Every batch of HDPE, LDPE, PP, and PET is profiled in partnership with CIPET Patna. We supply test certificates documenting precise density, Melt Flow Index (MFI), ash content, and tensile tolerances."
    },
    {
      q: "Can you customize compound properties for custom molding?",
      a: "Absolutely. We work closely with client engineering teams to adjust compound formulations, density distributions, and color specs to meet specific injection/blow molding requirements."
    },
    {
      q: "How can academic researchers or students collaborate with you?",
      a: "We offer sponsored R&D collaborations (like our work with IIT Patna) and structured internships. Students and scientists can register directly through our Onboarding Sign-up Portal above."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert("Please fill out all required fields.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-foreground/5" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/5 dark:bg-accent/10 text-accent font-semibold text-xs tracking-wider uppercase">
            <Mail className="h-3.5 w-3.5" />
            Connect With Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Get In Touch With <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Our Logistics Team</span>
          </h2>
          <p className="text-base text-foreground/60 max-w-2xl font-light">
            Inquire about raw material quotes, building pavers availability, or schedule a tour at our compounding facility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Address Info & Custom Bihar SVG Map */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="flex flex-col gap-6 text-left">
              <h3 className="text-xl font-bold text-foreground">Headquarters Office</h3>
              <div className="flex flex-col gap-4 text-sm text-foreground/75 font-light">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>Patna Industrial Growth Center, Patna, Bihar, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent shrink-0" />
                  <a href="mailto:info@reclaimnature.co.in" className="hover:text-accent transition-colors font-semibold">
                    info@reclaimnature.co.in
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <span>+91 612 220 5432</span>
                    <span>+91 87578 75119</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom SVG Map of Bihar with pulsing beacon on Patna */}
            <div className="flex flex-col gap-4 text-left">
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/40">Geographic Operations Hub</h4>
              <div className="w-full h-56 rounded-3xl bg-foreground/[0.02] border border-foreground/5 relative flex items-center justify-center overflow-hidden">
                <svg className="w-full h-full p-4 text-foreground/10 dark:text-foreground/5" viewBox="0 0 400 250">
                  {/* Simplified outline representing Bihar State borders */}
                  <path
                    d="M 50,80 Q 80,40 120,50 T 220,40 T 320,60 T 370,120 T 340,200 T 250,210 T 150,190 T 50,160 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                  />
                  {/* Surrounding regions text */}
                  <text x="60" y="30" className="text-[9px] fill-foreground/30 font-bold uppercase tracking-widest">Uttar Pradesh</text>
                  <text x="310" y="230" className="text-[9px] fill-foreground/30 font-bold uppercase tracking-widest">Jharkhand</text>
                  <text x="320" y="100" className="text-[9px] fill-foreground/30 font-bold uppercase tracking-widest">West Bengal</text>
                  <text x="180" y="25" className="text-[9px] fill-foreground/30 font-bold uppercase tracking-widest">Nepal</text>

                  {/* Pulsing Beacon on Patna (represented at approximate coordinates) */}
                  <g className="cursor-pointer">
                    {/* Ring animation */}
                    <circle cx="160" cy="110" r="16" className="fill-accent/15 stroke-accent/40 stroke-1 animate-ping" style={{ transformOrigin: "160px 110px" }} />
                    <circle cx="160" cy="110" r="8" className="fill-accent/30 stroke-accent/60 stroke-1" />
                    <circle cx="160" cy="110" r="3.5" className="fill-accent" />
                    {/* Label */}
                    <text x="160" y="94" className="text-[10px] font-extrabold fill-foreground text-center" textAnchor="middle">Patna HQ</text>
                  </g>
                </svg>

                {/* Status Indicator */}
                <div className="absolute bottom-3 left-3 bg-background/80 px-2 py-0.5 rounded border border-foreground/5 text-[9px] font-mono text-accent flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                  LOGISTICS HUB ACTIVE
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form & FAQ Accordions */}
          <div className="lg:col-span-7 flex flex-col gap-12 text-left">
            
            {/* Inquiry Form */}
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-foreground/5">
              <h3 className="text-xl font-bold text-foreground mb-6">Send an Inquiry</h3>
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="inquiry-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit}
                    className="flex flex-col gap-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="c-name" className="text-[10px] font-bold text-foreground/50 uppercase tracking-wider">Your Name</label>
                        <input
                          type="text"
                          id="c-name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleInputChange}
                          placeholder="Name"
                          className="px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/[0.01] hover:border-foreground/20 focus:border-accent text-foreground text-sm outline-none transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="c-email" className="text-[10px] font-bold text-foreground/50 uppercase tracking-wider">Email Address</label>
                        <input
                          type="email"
                          id="c-email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleInputChange}
                          placeholder="Email"
                          className="px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/[0.01] hover:border-foreground/20 focus:border-accent text-foreground text-sm outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="c-subject" className="text-[10px] font-bold text-foreground/50 uppercase tracking-wider">Subject</label>
                      <input
                        type="text"
                        id="c-subject"
                        name="subject"
                        required
                        value={formState.subject}
                        onChange={handleInputChange}
                        placeholder="Subject"
                        className="px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/[0.01] hover:border-foreground/20 focus:border-accent text-foreground text-sm outline-none transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="c-message" className="text-[10px] font-bold text-foreground/50 uppercase tracking-wider">Message</label>
                      <textarea
                        id="c-message"
                        name="message"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={handleInputChange}
                        placeholder="Detail your inquiry..."
                        className="px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/[0.01] hover:border-foreground/20 focus:border-accent text-foreground text-sm outline-none transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="py-3.5 px-6 rounded-xl bg-foreground text-background hover:bg-accent hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {submitting ? (
                        <>
                          <span className="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-3.5 w-3.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="inquiry-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center gap-4 py-6"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold text-lg text-foreground">Message Dispatched</h4>
                    <p className="text-xs text-foreground/60 max-w-xs leading-relaxed font-light">
                      Thank you for reaching out. A logistics desk agent has been notified and will respond to your inquiry at **{formState.email}**.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 text-xs font-bold text-accent hover:underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* FAQ Accordions */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-accent" /> Frequently Asked Questions
              </h3>
              <div className="flex flex-col gap-3.5">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="border border-foreground/5 rounded-2xl overflow-hidden transition-all bg-foreground/[0.01]">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-foreground/[0.01]"
                      >
                        <span className="font-semibold text-sm text-foreground">{faq.q}</span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          className="text-foreground/40"
                        >
                          <ChevronDown className="h-4.5 w-4.5" />
                        </motion.div>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-foreground/65 leading-relaxed font-light border-t border-foreground/5">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
