"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Calendar,
  UserCheck,
  Activity,
  Layers,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

interface Project {
  id: string;
  name: string;
  year: string;
  role: string;
  architectureSummary: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: "wildguard",
    name: "WildGuard",
    year: "2026, Oct",
    role: "Full Stack Developer",
    architectureSummary:
      "A real-time wildlife tracking and incident response system combining Leaflet geospatial mapping with WebSocket bi-directional streaming. Supported by an Express/Node.js backend, MongoDB telemetry indexing, and Cloudinary media processing.",
    metrics: [
      { label: "Realtime", value: "Socket.io" },
      { label: "Mapping", value: "Leaflet Geo" },
      { label: "Storage", value: "MongoDB" },
    ],
    tags: [
      "React",
      "Node.js",
      "Socket.io",
      "Leaflet",
      "MongoDB",
      "Cloudinary",
    ],
    liveUrl: "https://github.com/zour-yu/WildGuard-frontend",
    githubUrl: "https://github.com/zour-yu/WildGuard-frontend",
  },
  {
    id: "justicenow",
    name: "JusticeNow",
    year: "2026, Oct",
    role: "Full Stack Engineer",
    architectureSummary:
      "An enterprise-grade incident reporting and legal assistance platform powered by a modular Nest.js microservice architecture with JWT and Passport Google OAuth2. Features a reactive mobile frontend with Zustand state management and Firebase push notifications.",
    metrics: [
      { label: "Framework", value: "Nest.js Modular" },
      { label: "Security", value: "OAuth2 & JWT" },
      { label: "Database", value: "Mongoose ODM" },
    ],
    tags: [
      "TypeScript",
      "Nest.js",
      "React Native",
      "MongoDB",
      "Passport OAuth",
      "Firebase",
    ],
    liveUrl: "https://github.com/zour-yu/JusticeNow-backend",
    githubUrl: "https://github.com/zour-yu/JusticeNow-backend",
  },
  {
    id: "thriftsl",
    name: "ThriftSL AI Commerce",
    year: "2026, Apr",
    role: "Backend & AI Developer",
    architectureSummary:
      "A sustainable circular commerce marketplace backend integrating Google Gemini Generative AI for automated merchandise tagging and description extraction. Implements Cloudinary multipart asset storage, MongoDB session persistence, and Mailjet transactional notifications.",
    metrics: [
      { label: "Generative AI", value: "Gemini API" },
      { label: "Asset CDN", value: "Cloudinary" },
      { label: "Database", value: "MongoDB" },
    ],
    tags: [
      "Node.js",
      "Express",
      "MongoDB",
      "Gemini AI",
      "Cloudinary",
      "Mailjet",
    ],
    liveUrl: "https://github.com/zour-yu/ThriftSL-backend",
    githubUrl: "https://github.com/zour-yu/ThriftSL-backend",
  },
  {
    id: "agriconnect",
    name: "AgriConnect",
    year: "2026, May",
    role: "Full-Stack Developer",
    architectureSummary:
      "A digital agriculture platform leveraging Google Gemini AI to analyze soil health telemetry and provide automated crop recommendations. Backed by high-performance Node.js REST APIs and a PostgreSQL relational database for farmer data persistence.",
    metrics: [
      { label: "Intelligence", value: "Gemini API" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Frontend", value: "Next.js App" },
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Gemini API",
      "Tailwind CSS",
    ],
    liveUrl: "https://github.com/zour-yu",
    githubUrl: "https://github.com/zour-yu",
  },
];

export function ProjectGrid() {
  return (
    <section id="work" className="py-24 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 text-xs font-mono text-cyan-400">
              <Sparkles className="h-3 w-3" />
              <span>GitHub Repositories & Engineering Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Projects
            </h2>
            <p className="text-zinc-400 max-w-xl text-sm sm:text-base leading-relaxed">
              Curated from my personal GitHub (@zour-yu) — showcasing full-stack web
              platforms, real-time WebSockets, microservices, and AI integrations.
            </p>
          </div>

          <a
            href="https://github.com/zour-yu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs text-zinc-300 hover:text-white bg-zinc-900/60 border border-zinc-800/80 px-3.5 py-2 rounded-xl backdrop-blur-md hover:border-zinc-700 transition-all"
          >
            <GithubIcon className="h-4 w-4" />
            <span>View All GitHub Repositories</span>
          </a>
        </div>

        {/* 2x2 Grid with Clean Zinc Card Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative flex flex-col justify-between bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-7 hover:border-zinc-700 transition duration-300 backdrop-blur-md hover:bg-zinc-900/60 hover:shadow-[0_0_35px_rgba(6,182,212,0.12)]"
            >
              <div>
                {/* Header Row: Role, Year, External Links */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex items-center gap-1 font-mono text-[11px] text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-2 py-0.5 rounded-md">
                        <UserCheck className="h-3 w-3" />
                        {project.role}
                      </span>
                      <span className="inline-flex items-center gap-1 font-mono text-[11px] text-zinc-400 bg-zinc-950 border border-zinc-800 px-2 py-0.5 rounded-md">
                        <Calendar className="h-3 w-3 text-zinc-400" />
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors pt-2">
                      {project.name}
                    </h3>
                  </div>

                  {/* External Links: GitHub Repo */}
                  <div className="flex items-center gap-2 shrink-0 pt-1">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white rounded-lg bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 transition-all duration-200"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      <span>GitHub Repo ↗</span>
                    </a>
                  </div>
                </div>

                {/* 2-Sentence Architecture Summary */}
                <p className="text-sm text-zinc-300 leading-relaxed mt-2 mb-6">
                  {project.architectureSummary}
                </p>

                {/* Technical Depth & Metrics Highlight Card */}
                <div className="rounded-lg bg-zinc-950/70 border border-zinc-850 p-3.5 mb-6">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 mb-2">
                    <Activity className="h-3 w-3 text-cyan-400" />
                    <span>Technical Architecture Highlights</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="font-mono text-sm font-bold text-white">
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-zinc-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Core Tech Badges Row */}
              <div className="pt-4 border-t border-zinc-800/70">
                <div className="text-[10px] font-mono uppercase text-zinc-400 mb-2 tracking-wider">
                  Core Tech Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-zinc-950 border border-zinc-800 px-2.5 py-1 text-[11px] font-mono text-zinc-300 group-hover:border-zinc-700 transition-colors"
                    >
                      {tag}
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
export default ProjectGrid;
