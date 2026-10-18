"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, GraduationCap, Sparkles } from "lucide-react";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  achievements: string[];
  skills: string[];
  isCurrentLearning?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    period: "02/2023 — Present",
    role: "Software Engineering Undergraduate & Active Learner",
    company: "Sri Lanka Institute of Information Technology (SLIIT)",
    location: "Malabe, Sri Lanka",
    isCurrentLearning: true,
    summary:
      "Pursuing BSc (Hons) in Information Technology specializing in Software Engineering. Dedicated to continuous self-driven learning, modern full-stack web development, and cloud/database engineering.",
    achievements: [
      "Building full-stack web applications using React, Next.js, Node.js, Nest.js, and SQL/NoSQL databases.",
      "Developing production-ready applications including AgriConnect (Smart Agriculture Platform with Gemini API) and Revolt RV (E-Commerce Platform with Drizzle ORM).",
      "Strengthening core foundations in data structures, algorithms, RESTful API design, and system architecture.",
    ],
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Nest.js",
      "PostgreSQL",
      "MongoDB",
      "Drizzle ORM",
      "Gemini API",
    ],
  },
  {
    period: "03/2024 — Present",
    role: "Data Processing & Analyzing Associate",
    company: "Soundmouse Sri Lanka",
    location: "Colombo 2, Sri Lanka",
    summary:
      "Responsible for overseas commercial metadata processing, analytics operations, and internal system utilization for international media monitoring.",
    achievements: [
      "Performed data analysis and processing of overseas commercial metadata with high precision.",
      "Utilized internal enterprise systems to execute daily data analytics and verification pipelines.",
      "Consistently maintained high-level data accuracy and strict adherence to global productivity standards.",
    ],
    skills: ["Data Analysis", "Metadata Systems", "Quality Assurance", "Data Validation", "Productivity Standards"],
  },
  {
    period: "05/2023 — 09/2023",
    role: "Customer Experience Associate",
    company: "Dialog Axiata PLC",
    location: "Colombo 3, Sri Lanka",
    summary:
      "Contributed to customer operations and technical administration support at Sri Lanka's leading telecommunications provider.",
    achievements: [
      "Handled IT administration issues, diagnostic reporting, and system-level troubleshooting.",
      "Built and maintained strong customer relations, resolving complex technical inquiries and operational complaints.",
      "Collaborated with cross-functional teams to streamline dispute resolutions and enhance service delivery.",
    ],
    skills: ["IT Administration", "Technical Troubleshooting", "Client Relations", "Enterprise Operations"],
  },
];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 text-xs font-mono text-cyan-400">
            <Briefcase className="h-3 w-3" />
            <span>Career History & Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experience & Learning Journey
          </h2>
          <p className="text-zinc-400 max-w-xl text-sm sm:text-base leading-relaxed">
            Hands-on corporate experience in data operations and IT administration, combined
            with formal Software Engineering studies and dedicated full-stack development.
          </p>
        </div>

        {/* Timeline list */}
        <div className="relative border-l border-zinc-800/80 ml-3 sm:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative pl-6 sm:pl-10"
            >
              {/* Timeline node */}
              <div
                className={`absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-zinc-950 shadow-[0_0_10px_#22d3ee] ${
                  exp.isCurrentLearning ? "bg-cyan-400" : "bg-zinc-400"
                }`}
              />

              <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur-md hover:border-zinc-700/80 hover:bg-zinc-900/60 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      {exp.isCurrentLearning && (
                        <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-800/60">
                          <GraduationCap className="h-3 w-3" /> Active
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-400 mt-0.5">
                      <span className="font-semibold text-cyan-400">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-950 border border-zinc-800 px-3 py-1 font-mono text-xs text-zinc-300 w-fit">
                    <Calendar className="h-3 w-3 text-cyan-400" />
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-zinc-300 mb-4">{exp.summary}</p>

                {/* Key Achievements */}
                <div className="space-y-2 mb-5">
                  {exp.achievements.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs text-zinc-400">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech & Competency Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/60">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-zinc-950 border border-zinc-850 px-2 py-0.5 text-[11px] font-mono text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ExperienceTimeline;
