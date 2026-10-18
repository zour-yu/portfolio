"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  Bot,
  Sparkles,
  Cpu,
  Smartphone,
  CheckCircle2,
  Filter,
} from "lucide-react";

interface SkillItem {
  name: string;
  badge?: string;
  description: string;
  repoRef?: string;
}

interface TechCategory {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  icon: React.ReactNode;
  accentGlow: string;
  skills: SkillItem[];
}

const techCategories: TechCategory[] = [
  {
    id: "frontend",
    title: "Frontend & Mobile",
    badge: "React, Next.js, React Native, Tailwind",
    subtitle:
      "High-performance reactive interfaces, cross-platform mobile apps with Expo, and modular component systems.",
    icon: <Smartphone className="h-5 w-5 text-cyan-400" />,
    accentGlow: "from-cyan-500/20 via-blue-500/5 to-transparent",
    skills: [
      {
        name: "React & Next.js",
        badge: "v19 / v16 App Router",
        description: "Concurrent rendering, Server Components, SSR, static pre-rendering, Turbopack.",
        repoRef: "WildGuard, AgriConnect, Portfolio",
      },
      {
        name: "React Native & Expo",
        badge: "Mobile Native",
        description: "Cross-platform mobile apps, Expo Router, device hardware, push notifications.",
        repoRef: "JusticeNow-frontend",
      },
      {
        name: "TypeScript",
        badge: "Strict Mode",
        description: "End-to-end static typing, generics, strict null safety, compiler paths.",
        repoRef: "All Repositories",
      },
      {
        name: "Tailwind CSS & NativeWind",
        badge: "Design Systems",
        description: "Utility-first styling for web and mobile, dark-mode tokens, micro-interactions.",
        repoRef: "WildGuard, JusticeNow, Portfolio",
      },
      {
        name: "Leaflet Geospatial",
        badge: "Mapping SDK",
        description: "Interactive geospatial mapping, boundary polygons, real-time telemetry markers.",
        repoRef: "WildGuard-frontend",
      },
      {
        name: "Zustand & Context",
        badge: "State Management",
        description: "Lightweight reactive client stores, persistent middleware, zero boilerplate.",
        repoRef: "JusticeNow-frontend",
      },
      {
        name: "Framer Motion",
        badge: "Micro-UX",
        description: "Spring physics animations, layout transitions, dynamic spotlight masks.",
        repoRef: "Portfolio UI",
      },
      {
        name: "Vite & PostCSS",
        badge: "Build Tools",
        description: "Sub-second HMR development servers, automated asset bundling, tree shaking.",
        repoRef: "WildGuard, Web Apps",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend & Microservices",
    badge: "Nest.js, Node.js, Express, Microservices",
    subtitle:
      "Modular enterprise microservices, decentralized domain nodes, and real-time bi-directional streaming architectures.",
    icon: <Server className="h-5 w-5 text-blue-400" />,
    accentGlow: "from-blue-500/20 via-indigo-500/5 to-transparent",
    skills: [
      {
        name: "Nest.js Modular Architecture",
        badge: "Microservices",
        description: "Enterprise architecture, dependency injection, controllers, providers, guards.",
        repoRef: "JusticeNow-backend, Revolt RV",
      },
      {
        name: "Node.js & Express",
        badge: "REST Engines",
        description: "High-throughput asynchronous APIs, custom middleware pipelines, routing.",
        repoRef: "WildGuard, ThriftSL, ds-project",
      },
      {
        name: "Decentralized Microservices",
        badge: "Distributed Nodes",
        description: "Independent service nodes: Auth, Appointment, Doctor, Telemedicine, Payment.",
        repoRef: "ds-project microservices",
      },
      {
        name: "Socket.io & WebSockets",
        badge: "Real-Time Streaming",
        description: "Bi-directional event streaming, room broadcasting, low-latency telemetry.",
        repoRef: "WildGuard-backend",
      },
      {
        name: "Agora RTC & Jitsi",
        badge: "Video / Voice",
        description: "WebRTC video conferencing, audio channels, secure dynamic token generation.",
        repoRef: "telemedicine-service (ds-project)",
      },
      {
        name: "RxJS Reactive Streams",
        badge: "Event Observables",
        description: "Observable data pipelines, asynchronous event streaming in Nest.js.",
        repoRef: "JusticeNow-backend",
      },
      {
        name: "Multer & File Streaming",
        badge: "Asset Ingestion",
        description: "Multipart form data handling, disk storage, direct Cloudinary buffer streaming.",
        repoRef: "ThriftSL, WildGuard-backend",
      },
      {
        name: "RESTful API Architecture",
        badge: "API Contracts",
        description: "Standardized response envelopes, status codes, CORS policies, rate limiting.",
        repoRef: "All Backend Services",
      },
    ],
  },
  {
    id: "databases-cloud",
    title: "Databases & Cloud Infrastructure",
    badge: "MongoDB, PostgreSQL, Docker, Firebase",
    subtitle:
      "Document and relational data stores, multi-container Docker orchestration, and cloud media delivery networks.",
    icon: <Database className="h-5 w-5 text-emerald-400" />,
    accentGlow: "from-emerald-500/20 via-teal-500/5 to-transparent",
    skills: [
      {
        name: "MongoDB & Mongoose",
        badge: "NoSQL Document Store",
        description: "Schema validation, complex aggregation pipelines, indexing, @nestjs/mongoose.",
        repoRef: "WildGuard, JusticeNow, ThriftSL, ds-project",
      },
      {
        name: "PostgreSQL & Drizzle ORM",
        badge: "Relational ACID",
        description: "Relational schema design, type-safe queries, migration scripts, ACID transactions.",
        repoRef: "AgriConnect, Revolt RV",
      },
      {
        name: "Docker & Docker Compose",
        badge: "Containerization",
        description: "Multi-container service orchestration, isolated networks, volume mapping.",
        repoRef: "ds-project docker mesh",
      },
      {
        name: "Firebase & Cloud Messaging",
        badge: "Push & Admin SDK",
        description: "Push notification pipelines, device token registry, background event handlers.",
        repoRef: "JusticeNow, WildGuard, ds-project",
      },
      {
        name: "Cloudinary Media CDN",
        badge: "Cloud Storage",
        description: "Automated image transformation, multipart asset optimization, media storage.",
        repoRef: "WildGuard, ThriftSL, JusticeNow",
      },
      {
        name: "Session & State Persistence",
        badge: "State Store",
        description: "MongoDB session clustering (connect-mongo), cookie parsing, security headers.",
        repoRef: "ThriftSL-backend",
      },
      {
        name: "Vercel Cloud",
        badge: "Cloud Deployment",
        description: "Automated Git-integrated CI/CD deployments, edge network distribution.",
        repoRef: "Portfolio, Web Applications",
      },
      {
        name: "Git & GitHub",
        badge: "Version Control",
        description: "Semantic branching, multi-repo architecture, code review pull requests.",
        repoRef: "github.com/zour-yu",
      },
    ],
  },
  {
    id: "ai-tools",
    title: "AI, APIs & DevOps Testing",
    badge: "Gemini AI, Stripe, Twilio, Jest",
    subtitle:
      "Generative AI model orchestration, enterprise third-party APIs, authentication, and test automation.",
    icon: <Bot className="h-5 w-5 text-purple-400" />,
    accentGlow: "from-purple-500/20 via-pink-500/5 to-transparent",
    skills: [
      {
        name: "Google Gemini AI",
        badge: "Generative AI",
        description: "@google/generative-ai integration, multi-modal prompts, automated catalog tagging.",
        repoRef: "ThriftSL-backend, AgriConnect",
      },
      {
        name: "Stripe API",
        badge: "Payment Gateway",
        description: "Secure checkout sessions, webhook signature verification, payment event handling.",
        repoRef: "payment-service (ds-project)",
      },
      {
        name: "Twilio & Mailjet / Nodemailer",
        badge: "Alerting & Emails",
        description: "Automated SMS dispatch, transactional notification emails, dynamic templates.",
        repoRef: "notification-service, ThriftSL",
      },
      {
        name: "OAuth 2.0 & JWT Security",
        badge: "Identity & Auth",
        description: "Passport Google OAuth2, JWT access & refresh tokens, bcrypt cryptographic hashing.",
        repoRef: "JusticeNow-backend, ds-project",
      },
      {
        name: "Jest & ts-jest",
        badge: "Unit Testing",
        description: "Test runner, assertion suites, module mocking, TypeScript unit test coverage.",
        repoRef: "JusticeNow-backend, WildGuard-backend",
      },
      {
        name: "Supertest & Integration Tests",
        badge: "API E2E Testing",
        description: "Programmatic HTTP route assertion, endpoint status validation, payload testing.",
        repoRef: "JusticeNow-backend, WildGuard-backend",
      },
      {
        name: "Class Validator & Transformer",
        badge: "DTO Validation",
        description: "Decorator-based runtime payload validation, sanitization, strict type constraints.",
        repoRef: "JusticeNow-backend",
      },
      {
        name: "Playwright & Automation",
        badge: "Browser Testing",
        description: "End-to-end browser interaction suites, visual testing in Chromium, UI assertions.",
        repoRef: "Portfolio E2E Suite",
      },
    ],
  },
];

export function TechStack() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredCategories =
    activeFilter === "all"
      ? techCategories
      : techCategories.filter((c) => c.id === activeFilter);

  return (
    <section id="stack" className="py-24 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 text-xs font-mono text-cyan-400">
              <Cpu className="h-3 w-3" />
              <span>Technical Competencies & Verified Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Core Tech Stack & Tools
            </h2>
            <p className="text-zinc-400 max-w-2xl text-sm sm:text-base leading-relaxed">
              Researched and verified directly across my GitHub repositories (@zour-yu) — spanning mobile applications, decentralized microservices, real-time WebSockets, and AI integrations.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-900/60 border border-zinc-800 px-3.5 py-2 rounded-xl backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>4 Core Domains • 32 Technologies</span>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-zinc-800/60">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
              activeFilter === "all"
                ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                : "bg-zinc-900/40 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700"
            }`}
          >
            All Domains (32)
          </button>
          {techCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                activeFilter === cat.id
                  ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                  : "bg-zinc-900/40 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* 4 Categorized Columns with Subtle Hover Glow Animations */}
        <div className={`grid grid-cols-1 ${activeFilter === "all" ? "md:grid-cols-2" : "md:grid-cols-1"} gap-8`}>
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, idx) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group relative rounded-xl bg-zinc-900/40 border border-zinc-800/80 p-7 backdrop-blur-md transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/60 hover:shadow-[0_0_35px_rgba(6,182,212,0.12)] overflow-hidden"
              >
                {/* Subtle ambient hover gradient glow */}
                <div
                  className={`absolute -inset-px rounded-xl bg-gradient-to-br ${category.accentGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-cyan-400 group-hover:border-zinc-700 group-hover:scale-105 transition-all">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {category.title}
                        </h3>
                        <span className="font-mono text-[11px] text-zinc-400">
                          {category.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                    {category.subtitle}
                  </p>

                  {/* Skills Grid with Subtle Hover Glow on Each Chip */}
                  <div className={`grid grid-cols-1 ${activeFilter === "all" ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4"} gap-3`}>
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/item relative flex flex-col justify-between rounded-lg bg-zinc-950/70 border border-zinc-850 p-3 hover:border-zinc-700 hover:bg-zinc-900/90 hover:shadow-[0_0_18px_rgba(34,211,238,0.12)] transition-all duration-200"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-2 mb-1.5">
                            <span className="text-xs font-semibold text-zinc-100 group-hover/item:text-cyan-300 transition-colors">
                              {skill.name}
                            </span>
                            {skill.badge && (
                              <span className="shrink-0 font-mono text-[10px] text-zinc-400 bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">
                                {skill.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-zinc-400 leading-snug mb-2">
                            {skill.description}
                          </p>
                        </div>

                        {skill.repoRef && (
                          <div className="pt-2 border-t border-zinc-900 flex items-center gap-1.5 text-[10px] font-mono text-zinc-400">
                            <span className="text-cyan-500/80">↳</span>
                            <span className="truncate">{skill.repoRef}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
export default TechStack;
