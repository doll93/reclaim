"use client";

import React from "react";
import { Recycle, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#070A13] text-slate-300 border-t border-slate-900/60 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Tagline */}
          <div className="flex flex-col gap-6">
            <a href="#hero" className="flex items-center gap-2.5 group">
              <div className="bg-gradient-to-tr from-secondary to-accent p-2 rounded-xl text-white">
                <Recycle className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base tracking-tight leading-none text-white">
                  Reclaim<span className="text-accent">Nature</span>
                </span>
                <span className="text-[9px] font-semibold text-accent tracking-widest uppercase mt-0.5">
                  Bihar, India
                </span>
              </div>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              ReclaimNature is committed to accelerating the circular economy and contributing toward global Net Zero goals through innovative plastic recycling technologies in Bihar.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-slate-900 hover:bg-accent/25 hover:text-accent transition-colors" aria-label="Twitter">
                <svg className="h-4 w-4 fill-current text-slate-300" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-accent/25 hover:text-accent transition-colors" aria-label="LinkedIn">
                <svg className="h-4 w-4 fill-current text-slate-300" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-accent/25 hover:text-accent transition-colors" aria-label="Instagram">
                <svg className="h-4 w-4 fill-none stroke-current stroke-2 text-slate-300" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav Categories */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider">Navigation</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="#about" className="hover:text-accent transition-colors">About Us</a>
              <a href="#why-us" className="hover:text-accent transition-colors">Why ReclaimNature</a>
              <a href="#products" className="hover:text-accent transition-colors">Our Products</a>
              <a href="#approach" className="hover:text-accent transition-colors">Our Approach</a>
              <a href="#research" className="hover:text-accent transition-colors">Research & Dev</a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider">Contact Info</h4>
            <div className="flex flex-col gap-4 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>Patna Industrial Growth Center, Patna, Bihar, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:info@reclaimnature.co.in" className="hover:text-accent transition-colors">
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

          {/* Our Story (Coming Soon) */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <h4 className="text-white font-semibold text-xs uppercase tracking-wider">Our Story</h4>
              <span className="text-[9px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded tracking-wider">COMING SOON</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              <span className="block text-[10px] font-semibold text-accent mb-2">( We will Include this section once we launch our full website. )</span>
              We are a purpose-driven team fueled by a passion to deliver meaningful, lasting results for our community, our region, and our environment. By blending social impact with industrial innovation, we are building a sustainable ecosystem where people can live healthily, businesses can grow responsibly, and the local economy can prosper for generations to come.
            </p>
          </div>
        </div>

        <hr className="my-12 border-slate-900/60" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            <span>&copy; {currentYear} ReclaimNature. All rights reserved.</span>
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
