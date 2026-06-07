"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserCheck, ShieldCheck, CheckCircle2, User, Building, GraduationCap, ArrowRight } from "lucide-react";

type UserType = "student" | "general" | "partner";

export default function SignupSection() {
  const [userType, setUserType] = useState<UserType>("partner");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Name and Email are required fields.");
      return;
    }
    setIsSubmitting(true);

    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        organization: "",
        interest: "",
        message: ""
      });
    }, 1200);
  };

  // Interest options based on selected user type
  const getInterestOptions = () => {
    switch (userType) {
      case "student":
        return [
          { value: "internship", label: "Apply for R&D/Ops Internship" },
          { value: "research", label: "Research Paper Collaboration" },
          { value: "volunteering", label: "General Environmental Volunteering" }
        ];
      case "partner":
        return [
          { value: "buy_granules", label: "Purchase Recycled Raw Granules (HDPE/LDPE/PP/PET)" },
          { value: "buy_infra", label: "Procure Infrastructure Products (Pavers/Lumber)" },
          { value: "waste_supply", label: "Supply Post-Consumer Plastic Waste" },
          { value: "investment", label: "Investment & Green Compounding Funding" }
        ];
      case "general":
      default:
        return [
          { value: "newsletter", label: "Circular Economy Updates & Newsletter" },
          { value: "tours", label: "Plant Visit & Recycling Demonstration" },
          { value: "support", label: "Partnering on Sourcing Events" }
        ];
    }
  };

  return (
    <section id="signup" className="py-24 bg-foreground/[0.02] border-y border-foreground/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/5 dark:bg-accent/10 text-accent font-semibold text-xs tracking-wider uppercase">
            <UserCheck className="h-3.5 w-3.5" />
            Registration Portal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Join the <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Circular Movement</span>
          </h2>
          <p className="text-base text-foreground/60 max-w-2xl font-light">
            Register your interest below. Our materials compounding and partnership teams will contact you within 24 hours.
          </p>
        </div>

        {/* Tab switchers */}
        {!isSubmitted && (
          <div className="flex p-1 rounded-2xl bg-foreground/5 border border-foreground/5 mb-8 max-w-lg mx-auto">
            <button
              onClick={() => {
                setUserType("partner");
                setFormData((prev) => ({ ...prev, interest: "" }));
              }}
              className={`flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                userType === "partner"
                  ? "bg-background text-foreground shadow-md"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              <Building className="h-4 w-4" />
              Industry Partner
            </button>
            <button
              onClick={() => {
                setUserType("student");
                setFormData((prev) => ({ ...prev, interest: "" }));
              }}
              className={`flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                userType === "student"
                  ? "bg-background text-foreground shadow-md"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              <GraduationCap className="h-4 w-4" />
              Student
            </button>
            <button
              onClick={() => {
                setUserType("general");
                setFormData((prev) => ({ ...prev, interest: "" }));
              }}
              className={`flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                userType === "general"
                  ? "bg-background text-foreground shadow-md"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              <User className="h-4 w-4" />
              General User
            </button>
          </div>
        )}

        {/* Form panel */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-foreground/5 shadow-2xl relative min-h-[420px] flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-6 text-left"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold text-foreground/50 uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="px-4 py-3.5 rounded-xl border border-foreground/10 bg-foreground/[0.01] hover:border-foreground/20 focus:border-accent text-foreground text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold text-foreground/50 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className="px-4 py-3.5 rounded-xl border border-foreground/10 bg-foreground/[0.01] hover:border-foreground/20 focus:border-accent text-foreground text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Organization (conditionally styled based on userType) */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="organization" className="text-xs font-bold text-foreground/50 uppercase tracking-wider">
                    {userType === "partner" ? "Organization / Company Name *" : "Organization / Institution (Optional)"}
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required={userType === "partner"}
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="Enter organization name"
                    className="px-4 py-3.5 rounded-xl border border-foreground/10 bg-foreground/[0.01] hover:border-foreground/20 focus:border-accent text-foreground text-sm outline-none transition-all"
                  />
                </div>

                {/* Interest Area */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="interest" className="text-xs font-bold text-foreground/50 uppercase tracking-wider">Interest Area</label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="px-4 py-3.5 rounded-xl border border-foreground/10 bg-background hover:border-foreground/20 focus:border-accent text-foreground text-sm outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select your area of interest</option>
                    {getInterestOptions().map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold text-foreground/50 uppercase tracking-wider">Additional details / message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your compounding demands, volume requirements, or project scopes..."
                    className="px-4 py-3.5 rounded-xl border border-foreground/10 bg-foreground/[0.01] hover:border-foreground/20 focus:border-accent text-foreground text-sm outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 py-4 px-6 rounded-xl bg-accent hover:bg-secondary text-white font-bold text-sm transition-all shadow-lg shadow-accent/10 hover:shadow-accent/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      Registering...
                    </>
                  ) : (
                    <>
                      Submit Intake Request
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center text-center gap-6 max-w-md"
              >
                <div className="w-16 h-16 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent animate-bounce">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-foreground">Intake Registration Confirmed</h3>
                <p className="text-sm text-foreground/60 leading-relaxed font-light">
                  Thank you for joining the movement! Our environmental partnership desk has logged your interest and will coordinate on compounding specs or internship applications within **24 hours**.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl border border-foreground/15 text-xs font-bold text-foreground hover:bg-foreground/5 transition-colors cursor-pointer"
                >
                  Register Another Contact
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          
        </div>

      </div>
    </section>
  );
}
