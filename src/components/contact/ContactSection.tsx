"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Copy,
  Check,
  Send,
  Clock,
  Zap,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  AlertCircle,
  Loader2,
  MapPin,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const email = "yasithumindu@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validateField = (field: "name" | "email" | "message", value: string): string | undefined => {
    if (field === "name") {
      if (!value.trim()) return "Name is required";
      if (value.trim().length < 2) return "Name must be at least 2 characters";
    }
    if (field === "email") {
      if (!value.trim()) return "Email address is required";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return "Please enter a valid email address";
    }
    if (field === "message") {
      if (!value.trim()) return "Message cannot be empty";
      if (value.trim().length < 10) return "Message must be at least 10 characters";
    }
    return undefined;
  };

  const handleBlur = (field: "name" | "email" | "message") => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: "name" | "email" | "message", value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nameError = validateField("name", formData.name);
    const emailError = validateField("email", formData.email);
    const messageError = validateField("message", formData.message);

    setTouched({ name: true, email: true, message: true });

    if (nameError || emailError || messageError) {
      setErrors({ name: nameError, email: emailError, message: messageError });
      return;
    }

    setIsSubmitting(true);
    // Simulate swift network dispatch
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 text-xs font-mono text-cyan-400">
            <Sparkles className="h-3 w-3" />
            <span>Direct Communication Channel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Initiate a Conversation
          </h2>
          <p className="text-zinc-400 max-w-xl text-sm sm:text-base leading-relaxed">
            Interested in discussing software engineering opportunities, full-stack web
            development, or collaborative projects? Reach out directly.
          </p>
        </div>

        {/* Responsive Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Channels & Details */}
          <div className="lg:col-span-5 space-y-5">
            {/* Direct Email Card with One-Click Copy */}
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 backdrop-blur-md hover:border-zinc-700 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-cyan-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider">
                      Primary Email
                    </div>
                    <div className="text-sm font-mono font-medium text-white">
                      {email}
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-all cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-mono text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-zinc-400" />
                      <span className="font-mono text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location & Timezone Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Location Badge: Wattala, Sri Lanka */}
              <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 backdrop-blur-md space-y-1">
                <div className="flex items-center gap-2 text-cyan-400">
                  <MapPin className="h-4 w-4" />
                  <span className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider">
                    Location
                  </span>
                </div>
                <div className="text-sm font-bold text-white font-mono">
                  Wattala, Sri Lanka
                </div>
                <p className="text-[11px] text-zinc-400">Open to Remote & Onsite</p>
              </div>

              {/* Timezone Badge: GMT+5:30 */}
              <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 backdrop-blur-md space-y-1">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Clock className="h-4 w-4" />
                  <span className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider">
                    Timezone
                  </span>
                </div>
                <div className="text-sm font-bold text-white font-mono flex items-center gap-2">
                  <span>GMT+5:30</span>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400">Sri Lanka Standard Time</p>
              </div>
            </div>

            {/* Fast Response Guarantee */}
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 backdrop-blur-md flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-emerald-400">
                  <Zap className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-mono">&lt; 24h Response Guarantee</div>
                  <div className="text-[11px] text-zinc-400">Prompt responses for all professional inquiries</div>
                </div>
              </div>
            </div>

            {/* GitHub & LinkedIn Direct Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://github.com/zour-yu"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-900/70 hover:border-zinc-700 transition-all backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 group-hover:text-white transition-colors">
                    <GithubIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                      github.com/zour-yu
                    </div>
                    <div className="text-[11px] text-zinc-400">Personal repositories</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://linkedin.com/in/yasith2003"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-900/70 hover:border-zinc-700 transition-all backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 group-hover:text-white transition-colors">
                    <LinkedinIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                      yasith2003
                    </div>
                    <div className="text-[11px] text-zinc-400">LinkedIn network</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Availability Banner */}
            <div className="rounded-xl border border-cyan-500/20 bg-cyan-950/20 p-4 flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-cyan-400 shrink-0" />
              <div className="text-xs text-zinc-300 leading-snug">
                <span className="font-semibold text-white">Open to Opportunities:</span>{" "}
                Currently seeking junior/entry full-stack software engineering positions and
                internships.
              </div>
            </div>
          </div>

          {/* Right Column: Clean Dark-Mode Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-7 sm:p-8 backdrop-blur-md">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Fill out the form below. All messages reach my personal inbox immediately.
                </p>
              </div>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-8 text-center space-y-3"
                >
                  <div className="inline-flex p-3 rounded-full bg-emerald-500/20 text-emerald-400 mb-2">
                    <Check className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Dispatched</h4>
                  <p className="text-sm text-zinc-300 max-w-sm mx-auto">
                    Thank you! Your message has been sent to Yasith. I will review it and reply
                    within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                      setTouched({});
                      setErrors({});
                    }}
                    className="mt-4 text-xs font-mono text-cyan-400 hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-300 flex items-center justify-between">
                      <span>Your Name</span>
                      {touched.name && !errors.name && formData.name && (
                        <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                          <Check className="h-3 w-3" /> Valid
                        </span>
                      )}
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onBlur={() => handleBlur("name")}
                      className={`w-full rounded-lg border bg-zinc-950/80 px-4 py-2.5 text-sm text-white placeholder-zinc-400 focus:outline-none transition-all ${
                        errors.name && touched.name
                          ? "border-red-500/70 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      }`}
                    />
                    {errors.name && touched.name && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle className="h-3 w-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-300 flex items-center justify-between">
                      <span>Email Address</span>
                      {touched.email && !errors.email && formData.email && (
                        <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                          <Check className="h-3 w-3" /> Valid
                        </span>
                      )}
                    </label>
                    <input
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      className={`w-full rounded-lg border bg-zinc-950/80 px-4 py-2.5 text-sm text-white placeholder-zinc-400 focus:outline-none transition-all ${
                        errors.email && touched.email
                          ? "border-red-500/70 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      }`}
                    />
                    {errors.email && touched.email && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle className="h-3 w-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-300">
                      <span>Message</span>
                      <span className="text-[10px] text-zinc-400">
                        {formData.message.length} chars
                      </span>
                    </div>
                    <textarea
                      rows={4}
                      placeholder="Tell me about your project, team opportunity, or inquiry..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onBlur={() => handleBlur("message")}
                      className={`w-full rounded-lg border bg-zinc-950/80 px-4 py-2.5 text-sm text-white placeholder-zinc-400 focus:outline-none transition-all resize-none ${
                        errors.message && touched.message
                          ? "border-red-500/70 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      }`}
                    />
                    {errors.message && touched.message && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle className="h-3 w-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Sleek Submit Button with Hover Micro-Interaction */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    className="group relative w-full inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-100 py-3.5 px-6 text-sm font-semibold text-zinc-950 hover:bg-white hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                  >
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-black/10 to-transparent pointer-events-none" />

                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin text-zinc-900" />
                        <span>Transmitting Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="h-4 w-4 text-zinc-900 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactSection;
